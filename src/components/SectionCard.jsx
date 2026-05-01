import React from "react";
import Card from "./Card";

export default function SectionCard({
  data,
  openModal,
  gridClass = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  hasBlur = false,
}) {
  return (
    <div className={`grid gap-6 md:gap-8 w-full ${gridClass}`}>
      {data.map((item) => {
        const glassEffect = hasBlur
          ? "backdrop-blur-md bg-white/5 border border-white/10 shadow-xl"
          : "bg-[#0d111a]";

        return (
          <Card
            key={item.id}
            isRounded={false}
            className="group cursor-pointer overflow-hidden transition-all duration-500 border-transparent hover:border-white/20"
          >
            <div
              className={`relative w-full aspect-4/3 sm:aspect-square md:aspect-4/3 flex flex-col justify-end overflow-hidden ${glassEffect}`}
              onClick={() => openModal(item)}
            >
              <img
                src={item.previewUrl}
                alt={`Vista previa de ${item.title}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  hasBlur ? "blur-[2px] opacity-60" : "opacity-100"
                }`}
                loading="lazy"
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#0d111a] via-[#0d111a]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 px-5 pt-5 pb-4 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-xl font-bold text-white tracking-wide line-clamp-2 drop-shadow-md">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 mt-2 text-sm font-semibold text-indigo-300 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  <span className="uppercase tracking-wider">Explorar</span>
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
