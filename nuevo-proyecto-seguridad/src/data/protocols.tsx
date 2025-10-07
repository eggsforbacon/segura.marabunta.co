import { Protocol } from '@/types/protocol';
import { Activity, Flame, HeartPulse, CloudRain, Bomb, Users, AlertOctagon } from 'lucide-react';

export const protocols: Protocol[] = [
  {
    id: 'sismo',
    title: 'Protocolo de sismo',
    description: 'Sigue estas acciones antes, durante y después de un movimiento telúrico.',
    icon: Activity,
    color: 'from-yellow-500 to-orange-500',
    textColor: 'text-orange-900',
    bgColor: 'bg-yellow-50',
    darkBgColor: 'dark:bg-yellow-900/30',
    hazards: ['Caída de objetos', 'Rotura de cristales', 'Cortes de energía', 'Fugas de gas'],
    steps: {
      antes: ['Identifica las zonas seguras y rutas de evacuación.', 'Asegura muebles altos y objetos pesados a la pared.', 'Ten a mano un kit de emergencia.'],
      durante: ['¡Conserva la calma! No corras.', 'Aléjate de ventanas, espejos y objetos que puedan caer.', 'Cúbrete la cabeza y cuello. Ubícate en una zona de seguridad (triángulo de la vida).', 'No uses elevadores.', 'Siga las rutas de evacuación hacia la salida más cercana.'],
      despues: ['Verifica si estás herido.', 'Revisa las condiciones del inmueble antes de moverte.', 'Sigue las instrucciones de los brigadistas.', 'Utiliza el teléfono solo para emergencias.'],
    },
  },
  {
    id: 'incendio',
    title: 'Protocolo de incendio',
    description: 'Cómo actuar para controlar y evacuar en caso de fuego.',
    icon: Flame,
    color: 'from-red-500 to-orange-500',
    textColor: 'text-red-900',
    bgColor: 'bg-red-50',
    darkBgColor: 'dark:bg-red-900/30',
    hazards: ['Humo tóxico', 'Quemaduras', 'Derrumbes estructurales', 'Explosiones'],
    steps: {
      antes: ['Conoce la ubicación de extintores, alarmas y salidas de emergencia.', 'No sobrecargues los enchufes eléctricos.', 'Mantén las áreas de trabajo ordenadas y libres de basura.'],
      durante: ['Da la voz de alarma inmediatamente.', 'Si el fuego es pequeño, intenta apagarlo con el extintor adecuado.', 'Si el fuego es incontrolable, evacúa. Cierra puertas a tu paso sin seguro.', 'Desplázate agachado para evitar el humo.'],
      despues: ['No regreses al edificio por ningún motivo.', 'Reúnete en el punto de encuentro designado.', 'Informa a los servicios de emergencia sobre posibles personas atrapadas.'],
    },
  },
 {
    id: 'emergencia-medica',
    title: 'Emergencia médica',
    description: 'Pasos para asistir a una persona herida o con un mal súbito.',
    icon: HeartPulse,
    color: 'from-green-600 to-green-400',
    textColor: 'text-blue-900',
    bgColor: 'bg-cyan-50',
    darkBgColor: 'dark:bg-cyan-900/30',
    hazards: ['Exposición a fluidos corporales', 'Lesiones al mover al paciente', 'Agravamiento de la lesión', 'Crisis nerviosa'],
    steps: {
      antes: ['Conoce quiénes son los brigadistas de primeros auxilios.', 'Ubica los botiquines de emergencia y el Desfibrilador (DEA) si existe.', 'Mantén la calma para actuar con claridad.'],
      durante: ['Evalúa la seguridad de la escena. No te pongas en riesgo.', 'Llama al brigadista o al número de emergencia interno de inmediato.', 'No muevas a la persona a menos que su vida corra peligro inminente.', 'Proporciona información clara y precisa a los servicios de emergencia.'],
      despues: ['Colabora para despejar el área y permitir el acceso a los paramédicos.', 'Limpia y desinfecta el área si hubo exposición a fluidos corporales.', 'Ofrece apoyo emocional a los involucrados.'],
    },
  },
  {
    id: 'inundacion',
    title: 'Protocolo de inundación',
    description: 'Qué hacer antes, durante y después de una inundación en las instalaciones.',
    icon: CloudRain,
    color: 'from-blue-500 to-teal-500',
    textColor: 'text-teal-900',
    bgColor: 'bg-blue-50',
    darkBgColor: 'dark:bg-blue-900/30',
    hazards: ['Riesgo de electrocución', 'Agua contaminada', 'Daños estructurales', 'Pérdida de documentos'],
    steps: {
      antes: ['Identifica las zonas altas y seguras del edificio.', 'Conoce la ubicación de los interruptores de electricidad, agua y gas.', 'Resguarda equipos electrónicos y documentos importantes en lugares elevados.'],
      durante: ['Desconecta la corriente eléctrica si es seguro hacerlo.', 'Evacúa hacia los pisos superiores o zonas altas designadas.', 'No intentes caminar o conducir a través de corrientes de agua.', 'Aléjate de postes eléctricos y cables caídos.'],
      despues: ['No regreses hasta que las autoridades lo declaren seguro.', 'Inspecciona por daños estructurales antes de entrar.', 'Ten cuidado con animales que hayan podido refugiarse en el edificio.', 'Documenta los daños con fotografías para el seguro.'],
    },
  },
  {
    id: 'atentado',
    title: 'Protocolo de atentado',
    description: 'Cómo actuar ante amenaza o acto de terrorismo.',
    icon: Bomb,
    color: 'from-slate-600 to-gray-700',
    textColor: 'text-slate-800',
    bgColor: 'bg-slate-100',
    darkBgColor: 'dark:bg-slate-900/30',
    hazards: ['Explosiones', 'Derrumbes', 'Personas sospechosas', 'Objetos extraños'],
    steps: {
      antes: ['Observe su alrededor para detectar elementos que no le sean conocidos.', 'Si descubre objetos o personas sospechosas, notifíquelo inmediatamente.'],
      durante: [
        'No mueva ningún objeto y no permita el acceso a la zona sospechosa.',
        'Evacúe de inmediato siguiendo las instrucciones y la ruta establecida.',
        'No se devuelva por ningún motivo.',
        'Aléjese de ventanas y fachadas de vidrio.'
      ],
      despues: ['Busque sin demora su punto de encuentro y repórtese al Coordinador de Área.', 'No regrese hasta que no se le indique.', 'En caso de explosión, la evacuación será total y temporal mientras se revisa el área.'],
    },
  },
  {
    id: 'aglomeracion',
    title: 'Protocolo de aglomeraciones',
    description: 'Acciones a seguir en caso de concentraciones masivas.',
    icon: Users,
    color: 'from-sky-500 to-blue-600',
    textColor: 'text-sky-900',
    bgColor: 'bg-sky-50',
    darkBgColor: 'dark:bg-sky-900/30',
    hazards: ['Pánico', 'Aplstamiento', 'Violencia y desorden', 'Caídas'],
    steps: {
        antes: ['Evite confrontaciones.', 'Identifique posibles salidas y rutas de escape.'],
        durante: [
          'Tranquilice a las personas que están a su alrededor.',
          'Salga calmada y ordenadamente del lugar.',
          'Evite gritar y fomentar la violencia y el desorden.',
          'Si es posible y seguro, ayude a controlar los brotes de violencia.'
        ],
        despues: ['Aléjese del lugar del evento.', 'Reporte cualquier incidente a las autoridades o al personal de seguridad.']
    },
  },
   {
    id: 'disturbios',
    title: 'Protocolo de disturbios',
    description: 'Cómo protegerse en caso de disturbios o manifestaciones violentas.',
    icon: AlertOctagon,
    color: 'from-amber-500 to-orange-600',
    textColor: 'text-amber-900',
    bgColor: 'bg-amber-50',
    darkBgColor: 'dark:bg-amber-900/30',
    hazards: ['Agresiones', 'Vandalismo', 'Objetos lanzados', 'Gases lacrimógenos'],
    steps: {
        antes: ['Mantente informado de la situación en el exterior.', 'Asegura las entradas y puntos de acceso.'],
        durante: [
          'Aléjese de la multitud y evite acercarse a las manifestaciones.',
          'Aléjese de puertas y ventanas que den a la calle.',
          'Siga las instrucciones del personal de seguridad, quienes controlarán los accesos.',
          'Refuerce la vigilancia en puntos críticos.'
        ],
        despues: ['Permanezca en un lugar seguro hasta que la situación se normalice.', 'En caso de evacuación, actúe según el procedimiento establecido.']
    },
  },
];