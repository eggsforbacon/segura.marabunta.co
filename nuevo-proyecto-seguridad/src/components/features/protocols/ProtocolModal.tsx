import React from "react";
import { Protocol } from "@/types/protocol";
import { X, AlertTriangle } from "lucide-react";

const StepSection = ({
  title,
  steps,
  color,
}: {
  title: string;
  steps: string[];
  color: string;
}) => (
  <div>
    <h3
      className={`text-xl font-bold mb-2 border-b-2 border-current pb-1 ${color}`}
    >
      {title}
    </h3>
    <ul className="list-decimal list-inside space-y-2 text-gray-700">
      {steps.map((step) => (
        <li key={step}>{step}</li>
      ))}
    </ul>
  </div>
);

interface ProtocolModalProps {
  protocol: Protocol | null;
  onClose: () => void;
}

export const ProtocolModal = ({ protocol, onClose }: ProtocolModalProps) => {
  if (!protocol) return null;

  const Icon = protocol.icon;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-2xl max-h-[70vh] top-24 bg-white rounded-2xl shadow-2xl  overflow-y-scroll ${protocol.bgColor}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`sticky top-0 p-6 bg-gradient-to-r ${protocol.color} text-white z-10`}
        >
          <div className="flex items-center gap-4">
            <Icon className="w-10 h-10" />

            <h2 className="text-3xl font-bold">{protocol.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white"
          >
            <X className="w-8 h-8" />
          </button>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <h4
              className={`text-sm font-bold uppercase ${protocol.textColor} mb-2 flex items-center gap-2`}
            >
              <AlertTriangle className="w-5 h-5" /> Peligros Potenciales
            </h4>
            <div className="flex flex-wrap gap-2">
              {protocol.hazards.map((hazard) => (
                <span
                  key={hazard}
                  className="py-1 px-3  text-black text-sm font-medium rounded-full"
                >
                  {hazard}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <StepSection
              title="Antes"
              steps={protocol.steps.antes}
              color={protocol.textColor}
            />
            <StepSection
              title="Durante"
              steps={protocol.steps.durante}
              color={protocol.textColor}
            />
            <StepSection
              title="Después"
              steps={protocol.steps.despues}
              color={protocol.textColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
