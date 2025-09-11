
import { MapViewer } from "@/components/features/map/MapViewer";
import { Map } from 'lucide-react';
export default function MapPage() {
  return (
    <div className="bg-black text-white  min-h-[110vh]">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 flex flex-col items-center">
        <header className="mb-8 text-center w-full">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            <Map className="w-10 h-10 text-blue-500 pr-2 inline-block" />
            Mapa Interactivo de Instalaciones
          </h1>
          <p className="mt-2 text-lg text-gray-300">
            Selecciona un piso y una categoría para explorar el mapa.
          </p>
        </header>

        <MapViewer />
      </div>
    </div>
  );
}