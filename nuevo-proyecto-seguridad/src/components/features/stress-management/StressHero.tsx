"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, ChevronsDown } from "lucide-react";
import { useFollowPointer } from "@/hooks/useFollowPointer";

export const StressHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer();

  return (
    <div ref={ref} className="bg-black  text-white relative overflow-hidden">
      <motion.div
        className="absolute hidden md:flex top-0 left-0 w-72 h-72 bg-cyan-500/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-5/6 z-0"
        style={{ x, y }} 
      />

      <div className="container  mx-auto px-6 py-10 text-center relative z-10">
        <div className="inline-flex items-center justify-center  bg-gray-800 p-4 rounded-full mb-4">
          <BrainCircuit className="w-12 h-12 text-cyan-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          ¡Despídete del Estrés Laboral!
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Todos somos propensos a padecer altos niveles de estrés por nuestras
          responsabilidades diarias. Aprende cómo manejarlo para evitar
          enfermedades y mejorar tu bienestar.
        </p>
      </div>
      <div className="container relative  mx-auto max-w-4xl mb-32 z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          ¿Qué es el Estrés Laboral?{" "}
        </h2>
        <div className="bg-transparent border-2 border-blue-500 p-6 rounded-lg">
          <p className="text-lg text-center text-white">
            Es una reacción del organismo en la que entran en juego diversos
            mecanismos de defensa para hacer frente a una situación que se
            percibe como una amenaza. Frente a esta, el cuerpo libera hormonas
            como adrenalina y cortisol que nos permiten luchar o huir. En sí
            mismo, el estrés no es una enfermedad, sino una respuesta adaptativa
            de nuestro cuerpo.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
        <ChevronsDown className="w-10 h-10 text-white/50 animate-bounce" />
      </div>
    </div>
  );
};
