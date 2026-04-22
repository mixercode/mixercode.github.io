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
      <SectionCard data={CERTIFICATES_DATA} openModal={openModal} />

      <Modal
        isOpen={!!selectedCert}
        onClose={closeModal}
        pdfUrl={selectedCert?.url}
        title={selectedCert?.title}
      />
    </>
  );
}
