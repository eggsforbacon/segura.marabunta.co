
import { ShieldAlert, Map, Users, Calendar, Activity, BrainCircuit, Heart } from 'lucide-react';

export const featureCards = [
  {
    title: 'Protocolos de actuación',
    description: 'Instrucciones claras y directas sobre qué hacer en caso de sismos, incendios y otras emergencias.',
    href: '/protocols',
    icon: <ShieldAlert className="w-10 h-10" />,
  },
  {
    title: 'Mapa interactivo',
    description: 'Ubica rutas de evacuación, zonas seguras, extintores y botiquines en un plano detallado de las instalaciones.',
    href: '/map',
    icon: <Map className="w-10 h-10" />,
  },
  {
    
    title: 'Comité de emergencia',
    description: 'Conoce la estructura y las personas responsables de garantizar nuestra seguridad, desde la planificación hasta la acción.',
    href: '/brigade',
    icon: <Users className="w-10 h-10" />,
  },
  {
    title: 'Calendario de simulacros',
    description: 'Mantente informado sobre las fechas y horarios de los próximos simulacros y capacitaciones de seguridad.',
    href: '/drills-calendar',
    icon: <Calendar className="w-10 h-10" />,
  },
  {
    title: 'Pausas activas',
    description: 'Ejercicios y videos para cuidar tu salud postural y mental durante la jornada laboral. ¡Participa y comparte!',
    href: '/pausa-activa',
    icon: <Activity className="w-10 h-10" />,
  },
  {
    title: 'Manejo del estrés',
    description: 'Aprende técnicas y consejos prácticos para gestionar el estrés laboral y mejorar tu bienestar general.',
    href: '/manejo-estres',
    icon: <BrainCircuit className="w-10 h-10" />,
  },
  {

    title: 'Vida saludable',
    description: 'Explora los pilares de una vida sana: alimentación, bienestar mental y actividad física para mejorar tu calidad de vida.',
    href: '/vida-saludable',
    icon: <Heart className="w-10 h-10" />,
  },
];