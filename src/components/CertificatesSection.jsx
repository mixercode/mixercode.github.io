import React, { useState } from "react";
import Modal from "./ModalCertificates";
import { CERTIFICATES_DATA } from "../data/certificates";
import SectionCard from "./SectionCard";

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => setSelectedCert(cert);
  const closeModal = () => setSelectedCert(null);

  return (
    <>
      <div className="flex flex-row items-center gap-4 mt-10 mb-6">
        <div
          aria-hidden="true"
          className="w-5 h-5 rounded-full border-10 border-[#164ae8] shadow-[0_0_8px_rgba(22,74,232,0.5)]"
        />
        <h2 className="text-3xl font-bold text-gray-100 ">Certificados</h2>
      </div>
      <SectionCard data={CERTIFICATES_DATA} openModal={openModal} hasBlur />

      <Modal
        isOpen={!!selectedCert}
        onClose={closeModal}
        pdfUrl={selectedCert?.url}
        title={selectedCert?.title}
      />
    </>
  );
}
