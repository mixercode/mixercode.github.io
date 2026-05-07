import React, { useState } from "react";
import SectionCard from "./SectionCard";
import Modal from "./ModalProjects";
import { RESTAURANT_DATA } from "../data/restaurant";
import { ADMIN_ARCHIVOS_DATA } from "../data/adminArchivos";
import { GASOLINERIA_DATA } from "../data/gasolineria";
import { OTHERS_PROJECTS_DATA } from "../data/othersProjects";

const SectionHeader = ({ title }) => (
  <div className="flex flex-row items-center gap-4 mt-10 mb-6">
    <div
      aria-hidden="true"
      className="w-5 h-5 rounded-full border-10 border-[#164ae8] shadow-[0_0_8px_rgba(22,74,232,0.5)]"
    />
    <h2 className="text-3xl font-bold text-gray-100">{title}</h2>
  </div>
);

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section className="w-full max-w-7xl mx-auto px-4">
      {RESTAURANT_DATA && (
        <div className="mb-3">
          <SectionHeader title="Restaurante" />
          <SectionCard
            data={RESTAURANT_DATA}
            openModal={handleOpenModal}
            hasBlur
          />
        </div>
      )}

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div> */}
      {ADMIN_ARCHIVOS_DATA && (
        <div className="mb-3">
          <SectionHeader title="Admin de Archivos" />
          <SectionCard
            data={ADMIN_ARCHIVOS_DATA}
            openModal={handleOpenModal}
            hasBlur
          />
        </div>
      )}

      {GASOLINERIA_DATA && (
        <div className="flex flex-col h-full">
          <SectionHeader title="Gasolineria" />
          <SectionCard
            data={GASOLINERIA_DATA}
            openModal={handleOpenModal}
            hasBlur
          />
        </div>
      )}
      <div className="mb-12">
        <SectionHeader title="Otros Proyectos" />
        <SectionCard
          data={OTHERS_PROJECTS_DATA}
          openModal={handleOpenModal}
          hasBlur
        />
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
        hasBlur={true}
      />
    </section>
  );
}
