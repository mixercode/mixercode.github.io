import React from "react";
import Card from "./Card";
import { getPublicUrl } from "../utils/getPublicUrl";

export default function SectionCard({
  data,
  openModal,
  gridClass = "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3",
  hasBlur = false,
}) {
  return (
    <div className={`grid gap-6 md:gap-8 w-full ${gridClass}`}>
      {data.map((item) => {
        const glassEffect = hasBlur
          ? "backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl"
          : "bg-[#0d111a]";

        return (
          <Card
            key={item.id}
            isRounded={false}
            className="group cursor-pointer overflow-hidden transition-all duration-500 border-white/5 hover:border-indigo-500/40 ring-1 ring-white/5 hover:ring-indigo-500/20"
          >
            <div
              className={`relative w-full aspect-16/10 sm:aspect-square lg:aspect-16/10 flex flex-col justify-end overflow-hidden ${glassEffect}`}
              onClick={() => openModal(item)}
            >
              <img
                src={getPublicUrl(item.previewUrl)}
                alt={`Vista previa de ${item.title}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  hasBlur
                    ? "blur-[2px] opacity-60"
                    : "opacity-90 group-hover:opacity-100"
                }`}
                loading="lazy"
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#0d111a] via-[#0d111a]/60 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 px-6 py-5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight line-clamp-2 drop-shadow-lg group-hover:text-indigo-300 transition-colors duration-300">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 mt-3 text-xs md:text-sm font-bold text-indigo-400 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <span className="uppercase tracking-[0.2em]">
                    Ver detalles
                  </span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                    &rarr;
                  </span>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
