
import { Users, ChevronsDown } from "lucide-react";

export const BrigadeHero = () => {
  return (
    <div className="bg-black text-white relative overflow-hidden md:h-[80vh] h-screen flex flex-col justify-start pt-14">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div>
          <div className="inline-flex items-center justify-center bg-gray-800 p-4 rounded-full mb-4">
            <Users className="w-12 h-12 text-green-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            ESTRUCTURA COMITÉ DE EMERGENCIAS
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Conoce la estructura y las personas responsables de garantizar nuestra seguridad, desde la planificación estratégica hasta la acción en terreno.
          </p>
        </div>
      </div>

      {/* Sección secundaria */}
      <div className="container relative mx-auto max-w-4xl mt-12 z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          ¿Cómo está Organizado el Comité?
        </h2>
        <div className="bg-transparent border-2 border-green-500 p-6 rounded-lg">
          <p className="text-lg text-center text-white">
            El comité se organiza en niveles para una respuesta eficiente. Incluye un Comité de Crisis para decisiones estratégicas, Líderes de emergencia para la planificación estratégica, Coordinadores de Evacuación, Lideres de evacuación y Brigadistas en el terreno para ejecutar las acciones de control y evacuación. 
          </p>
        </div>
      </div>

      {/* Flecha de scroll down */}
      <div className="absolute -translate-y-1/6 mt-18 bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronsDown className="w-10 h-10 text-white/50 animate-bounce" />
      </div>
    </div>
  );
};