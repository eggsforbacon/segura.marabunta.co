"use client";

import { useState } from "react";
import { FloorPlan } from "./FloorPlan";
import { mapElements, legendItems, MapElement } from "@/data/mapData";
import { X, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const pisos = [
  {
    nombre: "Planta alta",
    svgUrl: "/images/maps/ultimo-2.svg",

    wrapperStyle: { width: "100%", height: "118%" },
  },
  {
    nombre: "Planta baja",
    svgUrl: "/images/maps/ejemplo-3.svg",
    wrapperStyle: { width: "100%", height: "128%" },
  },
];

export const MapViewer = () => {
  const [pisoActivo, setPisoActivo] = useState(0);
  const [selectedElement, setSelectedElement] = useState<MapElement | null>(
    null
  );
  const [highlightType, setHighlightType] = useState<string | null>(null);
  const [expandedLegend, setExpandedLegend] = useState<string | null>(null);

  const handleElementClick = (element: MapElement | null) => {
    setSelectedElement(element);
    if (element) {
      setHighlightType(element.type);
      setExpandedLegend(element.type);
    } else {
    }
  };

  const handleLegendClick = (type: string) => {
    if (highlightType === type) {
      setHighlightType(null);
      setExpandedLegend(null);
    } else {
      setHighlightType(type);
      setSelectedElement(null);
      setExpandedLegend(type);
    }
  };

  const legendInfo = selectedElement
    ? legendItems[selectedElement.type as keyof typeof legendItems]
    : null;
  const IconoSeleccionado = legendInfo ? legendInfo.Icon : null;

  return (
    <div className="w-full  ">
      <div className="flex justify-center items-center gap-4 mb-4">
        <h3 className="text-lg font-semibold  text-gray-400 flex items-center gap-2"></h3>
        <div className="flex gap-2 p-1 border border-blue-500 rounded-lg">
          {pisos.map((piso, indice) => (
            <button
              key={piso.nombre}
              onClick={() => setPisoActivo(indice)}
              className={`px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${pisoActivo === indice ? "bg-blue-600 text-white shadow" : "bg-transparent text-gray-400 hover:bg-white/50"}`}
            >
              {piso.nombre}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4  justify-center  items-stretch">
        <div className=" md:w-[98vh] md:h-[60vh]  w-full h-[30vh] aspect-video relative">
          <FloorPlan
            svgUrl={pisos[pisoActivo].svgUrl}
            wrapperStyle={pisos[pisoActivo].wrapperStyle}
            elements={mapElements}
            onElementClick={handleElementClick}
            highlightType={highlightType}
            selectedElement={selectedElement}
          />
          {selectedElement && legendInfo && IconoSeleccionado && (
            <div className="absolute top-4  right-4 bg-white p-4 rounded-lg shadow-lg max-w-sm border z-10 animate-fade-in">
              <div className="flex items-start  gap-3">
                <IconoSeleccionado className="w-8 h-8 mt-1 flex-shrink-0 text-blue-600" />

                <div>
                  <h4 className="font-bold  text-lg text-gray-800">
                    {selectedElement.title}
                  </h4>

                  {selectedElement.fireType && (
                    <p className="font-bold text-sm text-gray-700">
                      TIPO DE FUEGO: {selectedElement.fireType}
                    </p>
                  )}

                  <p className="text-sm text-gray-600 mt-1">
                    {selectedElement.description}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedElement(null)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        <div className="md:w-1/4  w-full  mt-12 md:mt-0">
          <div className="flex flex-col gap-3">
            {Object.entries(legendItems).map(
              ([type, { label, Icon, colorClass, description }]) => (
                <div key={type} className="flex flex-col">
                  <button
                    onClick={() => handleLegendClick(type)}
                    className={`flex items-center gap-3  w-full px-4 py-3 rounded-lg border-2 font-semibold transition-all duration-200
                    ${
                      highlightType === type
                        ? `${colorClass} border-transparent  text-white shadow-lg`
                        : `bg-gray-700/50 border-gray-600 text-gray-200 hover:bg-gray-700`
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="flex-grow text-left">{label}</span>
                  </button>

                  <AnimatePresence>
                    {expandedLegend === type && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`overflow-hidden pl-4 pr-2 pt-2 mt-1 rounded-lg ${colorClass} bg-opacity-20`}
                      >
                        <div className="flex items-start gap-2 p-3 text-white">
                          <Info className="w-5 h-5 mt-1 flex-shrink-0 opacity-80" />
                          <p className="text-sm">{description}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
