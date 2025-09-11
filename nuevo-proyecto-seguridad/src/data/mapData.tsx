import {
  Flame,
  Stethoscope,
  StretchHorizontal,
  Zap,
  DoorOpen,
  Footprints,
  MapPin,
} from "lucide-react";

export interface MapElement {
  id: string;
  type:
    | "extintor"
    | "camilla"
    | "botiquin"
    | "riesgo-electrico"
    | "Salida_de_emergencia"
    | "ruta-evacuacion"
    | "punto-de-encuentro-1"
    | "brigadistas";
  title: string;
  description: string;
  fireType?: "A" | "B" | "C";
}

export const mapElements: Record<string, MapElement> = {
  "extintor-1": {
    id: "extintor-1",
    type: "extintor",
    title: "Extintor #1",
    description: "Extintor de Polvo Químico Seco.",
    fireType: "A",
  },
  "extintor-2": {
    id: "extintor-2",
    type: "extintor",
    title: "Extintor #2",
    description: "Extintor de CO2, ideal para equipos eléctricos.",
    fireType: "B",
  },
  "extintor-3": {
    id: "extintor-3",
    type: "extintor",
    title: "Extintor #3",
    description: "Extintor de Agua a Presión.",
    fireType: "C",
  },
  "extintor-4": {
    id: "extintor-3",
    type: "extintor",
    title: "Extintor #3",
    description: "Extintor de Agua a Presión.",
    fireType: "C",
  },
  botiquin: {
    id: "botiquin",
    type: "botiquin",
    title: "Botiquín de Primeros Auxilios",
    description: "Contiene material de curación básico.",
  },
  "camilla-1": {
    id: "camilla",
    type: "camilla",
    title: "Camilla de Emergencia",
    description: "Para el transporte de heridos.",
  },
  "riesgo-electrico": {
    id: "riesgo-electrico",
    type: "riesgo-electrico",
    title: "Riesgo Eléctrico",
    description: "Panel de control eléctrico. No manipular.",
  },
  "riesgo-electrico-2": {
    id: "riesgo-electrico-2",
    type: "riesgo-electrico",
    title: "Riesgo Eléctrico",
    description: "Caja de distribución principal.",
  },
  "ruta-evacuacion": {
    id: "ruta-evacuacion",
    type: "ruta-evacuacion",
    title: "Ruta de Evacuación",
    description: "Siga las flechas en esta dirección.",
  },
  "ruta-evacuacion-1": {
    id: "ruta-evacuacion-2",
    type: "ruta-evacuacion",
    title: "Ruta secundaria hacia la salida de emergencia.",
    description: "Siga las flechas en esta dirección.",
  },
  "Salida_de_emergencia": {
    id: "Salida_de_emergencia",
    type: "Salida_de_emergencia",
    title: "Salida de Emergencia",
    description: "Salida directa al exterior del edificio.",
  },
  "punto-de-encuentro-1": {
    id: "punto-de-encuentro-1",
    type: "punto-de-encuentro-1",
    title: "Punto de Encuentro",
    description: "Zona segura externa para reunirse tras una evacuación.",
  },
};

export const legendItems = {
  extintor: {
    label: "Extintores",
    Icon: Flame,
    colorClass: "bg-gradient-to-r from-orange-500 to-red-500",
    description:
      "Equipos para el control de fuegos incipientes. Verifique el tipo (A, B, C) antes de usar.",
  },
  botiquin: {
    label: "Botiquín",
    Icon: Stethoscope,
    colorClass: "bg-gradient-to-r from-cyan-500 to-blue-600",
    description:
      "Contiene insumos de primeros auxilios para atender lesiones menores.",
  },
  camilla: {
    label: "Camilla",
    Icon: StretchHorizontal,
    colorClass: "bg-gradient-to-r from-amber-400 to-orange-500",
    description:
      "Ubicación de la camilla rígida para el transporte seguro de personas heridas.",
  },
  "ruta-evacuacion": {
    label: "Rutas de evacuación",
    Icon: Footprints,
    colorClass: "bg-gradient-to-r from-green-500 to-emerald-600",
    description:
      "Siga estas flechas para desalojar las instalaciones de forma segura.",
  },
  "riesgo-electrico": {
    label: "Riesgo eléctrico",
    Icon: Zap,
    colorClass: "bg-gradient-to-r from-yellow-400 to-orange-600",
    description: "Zonas con equipos eléctricos de alta tensión. No manipular.",
  },
  Salida_de_emergencia: {
    label: "Salida de emergencia",
    Icon: DoorOpen,
    colorClass: "bg-gradient-to-r from-sky-500 to-indigo-500",
    description:
      "Puertas de salida directa al exterior para ser usadas en caso de evacuación.",
  },

  "punto-de-encuentro-1": {
    label: "Punto de encuentro",
    Icon: MapPin,
    colorClass: "bg-gradient-to-r from-lime-500 to-green-600",
    description:
      "Zona segura designada para reunirse después de una evacuación.",
  },
};
