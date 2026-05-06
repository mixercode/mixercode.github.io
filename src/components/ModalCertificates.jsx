import React, { useEffect, useState, useRef } from "react";
import { IoIosClose } from "react-icons/io";
import { getPublicUrl } from "../utils/getPublicUrl";
import { Document, Page, pdfjs } from "react-pdf";

// Configuramos el worker de pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

export default function ModalCertificates({ isOpen, onClose, pdfUrl, title }) {
  const [numPages, setNumPages] = useState(null);
  const [containerWidth, setContainerWidth] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Manejar el redimensionamiento para que el PDF sea responsivo
  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [isOpen]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6 transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-[#151926] border border-[#2A2F3E] rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-6 py-2 border-b border-[#2A2F3E] bg-[#1a1f2e] shrink-0">
          <h3
            id="modal-title"
            className="text-xl font-semibold text-gray-100 truncate pr-4 tracking-tight"
          >
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-all p-0 rounded-lg hover:bg-[#2A2F3E] active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            aria-label="Cerrar modal"
          >
            <IoIosClose size={25} />
          </button>
        </div>

        <div
          ref={containerRef}
          className="w-full bg-[#0d111a] relative flex flex-col items-center overflow-y-auto overflow-x-hidden p-1 sm:p-4"
        >
          <Document
            file={getPublicUrl(pdfUrl)}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex flex-col items-center justify-center min-h-[40vh] text-gray-400">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500 mb-2"></div>
                <p>Cargando certificado...</p>
              </div>
            }
            error={
              <div className="flex flex-col items-center justify-center min-h-[40vh] text-center p-4">
                <p className="text-red-400 mb-4">No se pudo cargar el PDF.</p>
                <a
                  href={getPublicUrl(pdfUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Abrir en pestaña nueva
                </a>
              </div>
            }
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={containerWidth ? containerWidth - (window.innerWidth < 640 ? 8 : 32) : 300}
                className="shadow-lg"
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}
