import React, { useState } from "react";
import SectionCard from "./SectionCard";
import { RESTAURANT_DATA } from "../data/restaurant";

export default function ProyectsSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => setSelectedCert(cert);
  const closeModal = () => setSelectedCert(null);

  return (
    <>
      <SectionCard data={RESTAURANT_DATA} openModal={openModal} />
    </>
  );
}
