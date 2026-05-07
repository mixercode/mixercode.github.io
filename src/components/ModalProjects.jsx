import React, { useEffect, useState, useCallback } from "react";
import { IoIosClose, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { getPublicUrl } from "../utils/getPublicUrl";

export default function ModalProjectDetails({ isOpen, onClose, project }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const minSwipeDistance = 50;

  const handleStart = (clientX) => {
    setTouchEnd(null);
    setTouchStart(clientX);
    setIsDragging(true);
  };

  const handleMove = (clientX) => {
    if (isDragging) {
      setTouchEnd(clientX);
    }
  };

  const handleEnd = () => {
    if (!isDragging || !touchStart || !touchEnd) {
      setIsDragging(false);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveImageIndex((prev) => (prev + 1) % project.images.length);
    } else if (isRightSwipe) {
      setActiveImageIndex((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1,
      );
    }

    setTouchStart(null);
    setTouchEnd(null);
    setIsDragging(false);
  };

  const handleCloseModal = useCallback(() => {
    setActiveImageIndex(0);
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleCloseModal();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleCloseModal]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 transition-all duration-300"
      onClick={handleCloseModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-6xl h-[90vh] sm:h-[85vh] bg-[#151926] border border-[#2A2F3E] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#2A2F3E] bg-[#1a1f2e] shrink-0">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-100 truncate pr-4 tracking-tight">
            {project.title}
          </h3>
          <button
            onClick={handleCloseModal}
            className="text-gray-400 hover:text-white transition-all p-1 rounded-lg hover:bg-[#2A2F3E] active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          >
            <IoIosClose size={28} />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row grow overflow-y-auto lg:overflow-hidden bg-[#0d111a]">
          <div className="w-full lg:w-3/5 p-6 flex flex-col gap-4 border-b lg:border-b-0 lg:border-r border-[#2A2F3E] overflow-y-auto">
            <div
              className="relative w-full h-75 sm:h-100 lg:h-112.5 bg-[#090b10] rounded-xl overflow-hidden border border-[#2A2F3E] flex items-center justify-center group touch-pan-y cursor-grab active:cursor-grabbing select-none"
              onTouchStart={(e) => handleStart(e.targetTouches[0].clientX)}
              onTouchMove={(e) => handleMove(e.targetTouches[0].clientX)}
              onTouchEnd={handleEnd}
              onMouseDown={(e) => handleStart(e.clientX)}
              onMouseMove={(e) => handleMove(e.clientX)}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 blur-2xl scale-110 transition-all duration-500"
                style={{
                  backgroundImage: `url(${getPublicUrl(
                    project.images[activeImageIndex],
                  )})`,
                }}
              />

              <div className="absolute inset-0 bg-black/20" />

              <img
                src={getPublicUrl(project.images[activeImageIndex])}
                alt={`Captura principal de ${project.title}`}
                className="relative z-10 w-full h-full object-contain transition-opacity duration-300 drop-shadow-2xl pointer-events-none"
                loading="lazy"
              />

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex((prev) =>
                        prev === 0 ? project.images.length - 1 : prev - 1,
                      );
                    }}
                    className="absolute left-4 z-20 p-2 rounded-full bg-black/40 text-white/70 hover:bg-black/60 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden sm:flex items-center justify-center border border-white/10 active:scale-90"
                    aria-label="Imagen anterior"
                  >
                    <IoIosArrowBack size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex(
                        (prev) => (prev + 1) % project.images.length,
                      );
                    }}
                    className="absolute right-4 z-20 p-2 rounded-full bg-black/40 text-white/70 hover:bg-black/60 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden sm:flex items-center justify-center border border-white/10 active:scale-90"
                    aria-label="Siguiente imagen"
                  >
                    <IoIosArrowForward size={24} />
                  </button>
                </>
              )}
            </div>

            {project.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none md:scrollbar-thin scrollbar-thumb-[#2A2F3E] scrollbar-track-transparent">
                {project.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative shrink-0 w-24 sm:w-32 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIndex === index
                        ? "border-indigo-500 opacity-100"
                        : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={getPublicUrl(img)}
                      alt={`Miniatura ${index + 1}`}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="w-full lg:w-2/5 p-6 flex flex-col gap-6 overflow-y-auto scrollbar-thin scrollbar-thumb-[#2A2F3E] scrollbar-track-transparent">
            <div>
              <h4 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2">
                Acerca del proyecto
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-3">
                Stack Tecnológico
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium text-gray-200 bg-[#1a1f2e] border border-[#2A2F3E] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
