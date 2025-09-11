import React from "react";
import { Protocol } from "@/types/protocol";

interface ProtocolCardProps {
  protocol: Protocol;
  onSelect: (protocol: Protocol) => void;
}

export const ProtocolCard = ({ protocol, onSelect }: ProtocolCardProps) => {
  const Icon = protocol.icon;

  return (
    <button
      onClick={() => onSelect(protocol)}
      className={`relative group w-full p-6  rounded-2xl shadow-lg text-white overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br ${protocol.color}`}
    >
      <div className="relative z-10 flex flex-col items-start h-full text-left">
        <div className="mb-4">
          <Icon className="w-16 h-16" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight">{protocol.title}</h3>
        <p className="flex-grow mt-2 opacity-90">{protocol.description}</p>
        <span className="mt-6 font-semibold inline-block">Ver Protocolo →</span>
      </div>

      <div className="absolute top-0 right-0 text-white/10 transform transition-transform duration-500 group-hover:scale-150 group-hover:rotate-12">
        <Icon className="w-40 h-40" />
      </div>
    </button>
  );
};
