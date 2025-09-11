"use client";

import React, { useState } from "react";
import { protocols } from "@/data/protocols";
import { ProtocolCard } from "@/components/features/protocols/ProtocolCard";
import { ProtocolModal } from "@/components/features/protocols/ProtocolModal";
import { Protocol } from "@/types/protocol";
import { ShieldAlert, ChevronsDown } from "lucide-react";
export default function ProtocolsPage() {
  const [selectedProtocol, setSelectedProtocol] = useState<Protocol | null>(
    null
  );

  return (
    <div className="bg-black  text-white relative overflow-hidden">
      <div className="container  mx-auto px-6 py-10 text-center relative z-10">
        <div className="inline-flex items-center justify-center bg-gray-800 p-4 rounded-full mb-4">
          <ShieldAlert className="w-12 h-12 text-yellow-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          ¿Qué Hacer en Caso de Emergencia?
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Guías claras y directas para actuar de manera segura y coordinada ante
          cualquier eventualidad. Tu preparación hace la diferencia.
        </p>
      </div>
      <div className="container relative  mx-auto max-w-4xl mb-32 z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          La Importancia de un Protocolo
        </h2>
        <div className="bg-transparent border-2 border-yellow-500 p-6 rounded-lg">
          <p className="text-lg text-center text-white">
            En momentos de crisis, la confusión y el pánico son el mayor riesgo.
            Un protocolo establece un plan de acción claro y probado que nos
            permite actuar con calma, tomar decisiones correctas y minimizar los
            peligros para todos.
          </p>
        </div>
        <div className="absolute -translate-y-1/6 mt-18 left-1/2 -translate-x-1/2 z-10">
          <ChevronsDown className="w-10 h-10 text-white/50 animate-bounce" />
        </div>
      </div>

      <div className="font-sans p-4 bg-black sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-10 text-center">
            <div className="inline-flex items-center md:gap-2 gab-1 mb-2">
              <ShieldAlert className="w-10 h-10 text-blue-500" />
              <h1 className="text-4xl font-extrabold tracking-tight text-white">
                Protocolos de Actuación
              </h1>
            </div>
            <p className="text-lg text-gray-500">
              Instrucciones claras para actuar ante cualquier emergencia.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 ">
            {protocols.map((p) => (
              <ProtocolCard
                key={p.id}
                protocol={p}
                onSelect={setSelectedProtocol}
              />
            ))}
          </div>
        </div>

        <ProtocolModal
          protocol={selectedProtocol}
          onClose={() => setSelectedProtocol(null)}
        />
      </div>
    </div>
  );
}
