import React, { useEffect } from "react";
import { IoIosClose } from "react-icons/io";

export default function ModalCertificates({ isOpen, onClose, pdfUrl, title }) {
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
        className="relative w-full max-w-5xl h-[45vh] sm:h-[85vh] bg-[#151926] border border-[#2A2F3E] rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-6 py-2 border-b border-[#2A2F3E] bg-[#1a1f2e]">
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

        {/* Body - Contenedor del PDF */}
        <div className="grow w-full bg-[#0d111a] relative flex items-center justify-center overflow-hidden p-2 sm:p-0">
          <iframe
            src={`${pdfUrl}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
            title={`Certificado de ${title}`}
            className="w-full h-full border-none rounded-lg sm:h-[95%] sm:w-[95%]"
          />
        </div>
      </div>
    </div>
  );
}
