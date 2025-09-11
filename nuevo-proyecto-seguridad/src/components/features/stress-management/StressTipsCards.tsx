"use client";

import { motion, Variants } from "framer-motion";
import {
  CalendarCheck,
  Clock,
  Coffee,
  Ban,
  Users,
  Apple,
  Wine,
  Bed,
  Smile,
  MessageSquare,
} from "lucide-react";

const tips = [
  {
    id: "1",
    title: "1. Maneja una agenda realista",
    content:
      "Aprende a manejar tu horario de manera asertiva y real, y evita comprometerte con labores imposibles de cumplir.",
    icon: CalendarCheck,
  },
  {
    id: "2",
    title: "2. Organiza tu tiempo",
    content:
      "Analiza cómo programas tus tareas y cuánto tiempo necesitas para ejecutarlas eficazmente. Anota tus pendientes.",
    icon: Clock,
  },
  {
    id: "3",
    title: "3. Toma pequeños descansos",
    content:
      "Las pausas activas te ayudarán a reducir el estrés. Cada dos o tres horas, realiza ejercicios que distensionen tu cuerpo y mente.",
    icon: Coffee,
  },
  {
    id: "4",
    title: "4. Aprende a decir 'No'",
    content:
      "Es muy importante aprender a decir 'no' cuando tus ocupaciones son mayores a las que puedes afrontar. Entiende tus límites.",
    icon: Ban,
  },
  {
    id: "5",
    title: "5. Trabaja en equipo",
    content:
      "Delegar funciones y tareas puede ayudarte enormemente a alivianar la carga de estrés. Trabajar en equipo te ayuda a ver problemas desde otra perspectiva.",
    icon: Users,
  },
  {
    id: "6",
    title: "6. Vigila lo que comes",
    content:
      "Una dieta balanceada ayuda a reducir los niveles de estrés. Come frutas, verduras y alimentos bajos en grasa.",
    icon: Apple,
  },
  {
    id: "7",
    title: "7. Evita excesos",
    content:
      "El exceso de cafeína, cigarrillo y licor no solo te traerá más estrés, sino que reducirá tu salud y tu bienestar.",
    icon: Wine,
  },
  {
    id: "8",
    title: "8. Descansa",
    content:
      "El mal descanso es una consecuencia directa del estrés. Procura dormir al menos 8 horas diarias para recuperarte.",
    icon: Bed,
  },
  {
    id: "9",
    title: "9. Adopta un lenguaje positivo",
    content:
      "Decir 'no puedo' o 'soy un fracaso' origina más frustración. Prográmate para ser positivo y mejorarás tu rendimiento.",
    icon: Smile,
  },
  {
    id: "10",
    title: "10. Expresa lo que sientes",
    content:
      "Habla con tus superiores o compañeros acerca del estrés por el que atraviesas. Podrán darte soluciones y apoyo.",
    icon: MessageSquare,
  },
];

const gradients = [
  "from-blue-500 to-cyan-400",
  "from-green-500 to-emerald-400",
  "from-purple-500 to-indigo-500",
  "from-yellow-500 to-orange-400",
  "from-pink-500 to-rose-400",
];

const cardVariants: Variants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

const Card = ({ tip, index }: { tip: (typeof tips)[0]; index: number }) => {
  const gradientClass = gradients[index % gradients.length];
  const Icon = tip.icon;

  return (
    <motion.div
      variants={cardVariants}
      className="relative"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.3 }}
    >
      <div
        className={` absolute top-0 bottom-0 left-0 right-0 w-full h-full rounded-2xl bg-gradient-to-br ${gradientClass} transform -rotate-6 scale-105`}
      />

      <div className="relative w-full h-full flex flex-col p-8 justify-center rounded-2xl bg-white shadow-xl">
        <div className="absolute top-4 right-4">
          <Icon
            className={`w-10 h-10 ${gradientClass.replace("from-", "text-").split(" ")[0]}`}
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{tip.title}</h3>
        <p className="text-gray-600 text-lg">{tip.content}</p>
      </div>
    </motion.div>
  );
};

export const StressTipsCards = () => {
  return (
    <div className="bg-black  py-24 px-6">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-white mb-20">
          ¿Cómo reducir el estrés laboral?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12">
          {tips.map((tip, i) => (
            <Card tip={tip} index={i} key={tip.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
