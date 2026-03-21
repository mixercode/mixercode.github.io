import React, { useState } from "react";
import Card from "./Card";
import Modal from "./Modal"; // Importamos el nuevo Modal
import { CERTIFICATES_DATA } from "../data/certificates";

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => setSelectedCert(cert);
  const closeModal = () => setSelectedCert(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {CERTIFICATES_DATA.map((cert) => (
          <Card key={cert.id} isRounded={false}>
            <div
              className="w-full h-35 overflow-hidden relative group"
              onClick={() => openModal(cert)}
            >
              <img
                src={cert.previewUrl}
                alt={`Vista previa de ${cert.title}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-[#303a58b0] group-hover:bg-transparent transition-colors duration-300" />
            </div>

            <div className="p-3 grow flex flex-col items-center text-center ">
              <h3 className="text-lg  text-gray-100 mb-2 leading-tight">
                {cert.title}
              </h3>
            </div>
          </Card>
        ))}
      </div>

      <Modal
        isOpen={!!selectedCert}
        onClose={closeModal}
        pdfUrl={selectedCert?.pdfUrl}
        title={selectedCert?.title}
      />
    </>
  );
}
