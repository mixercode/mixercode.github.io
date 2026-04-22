import React from "react";
import Card from "./Card";

export default function SectionCard({ data, openModal }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
      {data.map((item) => (
        <Card key={item.id} isRounded={false}>
          <div
            className="w-full h-35 overflow-hidden relative group"
            onClick={() => openModal(item)}
          >
            <img
              src={item.previewUrl}
              alt={`Vista previa de ${item.title}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-[#303a58b0] group-hover:bg-transparent transition-colors duration-300" />
          </div>

          <div className="p-3 grow flex flex-col items-center text-center ">
            <h3 className="text-lg  text-gray-100 mb-2 leading-tight">
              {item.title}
            </h3>
          </div>
        </Card>
      ))}
    </div>
  );
}
