
import Link from 'next/link';
import { PillarSection } from '@/components/features/healthy-living/PillarSection';
import { ManualHandlingGuide } from '@/components/features/active-pause/ManualHandlingGuide';
const pillarsData = [
  {
    imageUrl: "/images/comida-saludable.png",
    imageAlt: "Comida saludable",
    title: "Alimentación Consciente",
    description: "La comida es tu combustible. Lo que eliges comer impacta directamente en tu energía, estado de ánimo y salud a largo plazo.",
    recommendations: [
      "**Hidrátate:** Bebe suficiente agua durante el día. A menudo, la sed se confunde con el hambre.",
      "**Más colores en tu plato:** Incluye una variedad de frutas y verduras para asegurar un aporte completo de vitaminas y minerales.",
      "**Modera los ultraprocesados:** Prioriza alimentos frescos y naturales sobre productos con largas listas de ingredientes."
    ],
    color: 'green' as const,
    imageOnLeft: true
  },
  {
    imageUrl: "/images/mente-calma.png",
    imageAlt: "Persona meditando",
    title: "Mente en Calma",
    description: "Tu bienestar mental es tan importante como tu salud física. Dedicar tiempo a calmar la mente reduce el estrés y mejora tu enfoque.",
    recommendations: [
      "**Respira conscientemente:** Tómate 1-2 minutos para enfocarte solo en tu respiración. Inhala profundo, exhala lento.",
      "**Desconecta para conectar:** Establece momentos del día sin pantallas. Lee un libro, escucha música o simplemente observa tu entorno.",
      "**Prioriza tu descanso:** Un sueño reparador es fundamental. Intenta dormir entre 7 y 8 horas diarias."
    ],
    color: 'blue' as const,
    imageOnLeft: false
  },
  {
    imageUrl: "/images/cuerpo-activo.png",
    imageAlt: "Persona corriendo",
    title: "Cuerpo en Movimiento",
    description: "El cuerpo humano está diseñado para moverse. La actividad física regular libera endorfinas, fortalece tus músculos y mejora tu salud cardiovascular.",
    recommendations: [
      "**Encuentra algo que disfrutes:** No tiene que ser el gimnasio. Bailar, caminar, nadar o montar en bicicleta son excelentes opciones.",
      "**La consistencia es clave:** Es mejor hacer 20-30 minutos de actividad la mayoría de los días que una sesión larga una vez a la semana.",
      "**Incluye pausas activas:** Si pasas mucho tiempo sentado, levántate cada hora para estirar y moverte un poco."
    ],
    color: 'amber' as const,
    imageOnLeft: true
  }
];

export default function VidaSaludablePage() {
  return (
    <div className="bg-black text-gray-300">
      <div className="container max-w-6xl  mx-auto p-4 md:p-8">
        <header className="text-center  mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Pilares de una Vida Saludable
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Pequeños hábitos, grandes cambios. Explora estas recomendaciones para nutrir tu cuerpo, calmar tu mente y mantenerte en movimiento.
          </p>
        </header>

        <section className="space-y-12 ">
          {pillarsData.map((pillar) => (
            <PillarSection key={pillar.title} {...pillar} />
          ))}
        </section>
        <section className="mt-16 mx-auto text-center bg-black rounded-2xl shadow-lg p-8 md:p-12 border border-slate-700">
          
          <ManualHandlingGuide />
        </section>
        <section className="mt-16 text-center bg-black border-slate-700 rounded-2xl shadow-lg p-8 md:p-12 border ">
          <h2 className="text-3xl font-bold text-white mb-4">Recarga tu Energía con Pausas Activas</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Hacer pausas breves para moverte durante el día mejora la concentración, previene la fatiga y cuida tu salud postural. ¡Es un pequeño gesto con un gran impacto!
          </p>
          <Link href="/pausa-activa" className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105">
            Ver Guía de Ejercicios
          </Link>
        </section>

      
        
      </div>
    </div>
  );
}