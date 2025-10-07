"use client";

import {useState} from 'react';
import {Weight, ShieldCheck, ArrowRight, Layers} from 'lucide-react';

const proceduresData = {
    general: {
        title: 'Procedimientos generales',
        icon: <Weight className="w-10 h-10 text-amber-400"/>,
        items: [
            "Sitúese frente al objeto con los pies separados para una base estable.",
            "Adopte una posición cómoda para un levantamiento vertical.",
            "Agáchese doblando las rodillas, manteniendo el torso erguido.",
            "Levante gradualmente usando la fuerza de piernas y hombros.",
            "Use ayudas mecánicas o pida ayuda para cargas pesadas.",
            "Asegure que el camino esté libre de obstáculos al usar equipos de movilización.",
            "Manipule los equipos con ambas manos y reporte cualquier anomalía."
        ],
    },
    shoulderTransport: {
        title: 'Transporte al Hombro',
        icon: <Weight className="w-10 h-10 text-amber-400"/>,
        items: [
            "Coloque sus pies lo más cerca posible de la carga.",
            "Doble caderas y rodillas, manteniendo la espalda siempre recta.",
            "Sujete la carga firmemente con ambas manos.",
            "Apoye el hombro en la carga, inclínela y reajuste el agarre.",
            "Levántese con un movimiento suave y estabilice el peso.",
            "Camine con pasos firmes, sin inclinarse hacia los lados."
        ],
    },
    sheetHandling: {
        title: 'Manipulación de Láminas',
        icon: <Layers className="w-10 h-10 text-sky-400"/>,
        items: [
            "Párese cerca del arrume de láminas.",
            "Sujete firmemente la lámina por la mitad con la mano más cercana.",
            "Levante la lámina hacia arriba y hacia su cuerpo.",
            "Cambie el agarre a su otra mano, colocando los dedos en la parte superior.",
            "Hale la lámina a una posición vertical hasta que la mitad esté fuera del arrume.",
            "Sujete el lado bajo con la mano libre, apoyándola sobre su rodilla.",
            "Levántese sin inclinarse ni girar el cuerpo.",
            "Considere usar un gancho o sujetador para facilitar la tarea."
        ],
    },
    largeSheetHandling: {
        title: 'Láminas de Gran Tamaño (2 personas)',
        icon: <Layers className="w-10 h-10 text-teal-400"/>,
        items: [
            "Esta tarea debe ser realizada por dos personas.",
            "Utilice siempre los elementos de protección personal requeridos.",
            "Cada colaborador debe ubicarse a un lado de la lámina.",
            "Si está a nivel del suelo, flexionen las rodillas simultáneamente manteniendo la espalda recta.",
            "Tomen la lámina por la parte media.",
            "Levántense al mismo tiempo, ejerciendo la fuerza con las piernas.",
            "Ubiquen la lámina en sentido horizontal para el transporte.",
            "Caminen de forma coordinada y con pasos cortos.",
            "Descárguenla suavemente sobre la máquina de corte."
        ],
    },
};

type ProcedureKey = keyof typeof proceduresData;

// Componente para renderizar la lista de procedimientos
const ProcedureList = ({items}: { items: string[] }) => (
    <ul className="space-y-4">
        {items.map((item, index) => (
            <li key={index} className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0 mr-4 mt-1"/>
                <span className="text-gray-200 text-base">{item}</span>
            </li>
        ))}
    </ul>
);

export const ManualHandlingGuide = () => {
    const [activeTab, setActiveTab] = useState<ProcedureKey>('general');

    const activeProcedure = proceduresData[activeTab];

    const TabButton = ({id, children}: { id: ProcedureKey; children: React.ReactNode }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`
        px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 flex-shrink-0
        ${activeTab === id
                ? 'bg-sky-600 text-gray-50 shadow-md'
                : 'bg-gray-700/60 text-gray-300 hover:bg-gray-600/80'
            }
      `}
        >
            {children}
        </button>
    );

    return (
        <div
            className="bg-gray-800/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 rounded-2xl shadow-lg my-12 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-8">
                <div className={`bg-gray-700/50 p-3 rounded-full border border-gray-600 mb-4 sm:mb-0`}>
                    {activeProcedure.icon}
                </div>
                <div className="sm:ml-5 text-left">
                    <h2 className="text-2xl font-bold text-white tracking-tight">Manejo adecuado de cargas e higiene
                        postural</h2>
                    <p className="text-gray-400">Todos los colaboradores que manejen cargas pesadas por si solo deberá
                        realizar su operación de acuerdo a los siguientes procedimientos:
                    </p>
                </div>
            </div>

            <div className="border-b border-gray-700 mb-6 pb-3">
                <div className="flex space-x-2 overflow-x-auto pb-2">
                    <TabButton id="general">Generales</TabButton>
                    <TabButton id="shoulderTransport">Al Hombro</TabButton>
                    <TabButton id="sheetHandling">Láminas</TabButton>
                    <TabButton id="largeSheetHandling">Láminas Grandes</TabButton>
                </div>
            </div>


            <div className="transition-all duration-300">
                <h3 className="font-bold text-xl text-white mb-5 flex items-center">
                    <ArrowRight className="w-5 h-5 text-amber-400 mr-3"/>
                    {activeProcedure.title}
                </h3>
                <ProcedureList items={activeProcedure.items}/>
            </div>
        </div>
    );
};