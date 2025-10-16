"use client";

import {useState} from "react";
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";
import {roleStyles} from "@/data/brigadeData";
import {ChevronDown, ChevronUp, Star} from "lucide-react";
import {Brigadista} from "@/types/brigade";

interface BrigadeProfileCardProps {
    brigadista: Brigadista;
}
const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? '';

const roleKeyMapping: {
    [key: string]: 'Lider_de_Emergencia' | 'comite_de_crisis' | 'lider_de_brigada' | 'brigadista' | 'lider_evacuacion' | 'coordinador_de_evacuacion'
} = {
    'LIDER DE LA EMERGENCIA': 'Lider_de_Emergencia',
    'COMITÉ DE CRISIS': 'comite_de_crisis',
    'LIDER DE LA BRIGADA': 'lider_de_brigada',
    'LÍDERE DE EVACUACIÓN': 'lider_evacuacion',
    'BRIGADISTA': 'brigadista',
    'COORDINADOR DE EVACUACIÓN': 'coordinador_de_evacuacion'

};

export const BrigadeProfileCard = ({brigadista}: BrigadeProfileCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const { nombre, departamento, rol, foto, habilidades, estado } = brigadista;
    const cleanBase = baseUrl.endsWith('/api') ? baseUrl.slice(0, -4) : baseUrl;
    const imageUrl = `${cleanBase}${foto?.url || ''}`;

    const roleKey = roleKeyMapping[rol];
    const styles = roleStyles[roleKey];

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className={`relative p-6 text-white bg-gradient-to-br ${styles.gradient}`}>
                <div className="flex items-center gap-5">
                    <Image src={imageUrl} alt={`Foto de ${nombre}`} width={96} height={96}
                           className="w-24 h-24 rounded-full border-4 border-white/50 shadow-lg object-cover"/>
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight">{nombre}</h3>
                        <p className="font-light">{departamento}</p>
                    </div>
                </div>
                <div className="absolute top-4 right-4 text-white/50 w-8 h-8">{styles.icon}</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                    <h4 className={`text-lg font-bold ${styles.textColor}`}>{rol}</h4>

                    {estado && (
                        <span
                            className={`px-2 py-1 text-xs font-bold rounded-full ${
                                estado === 'Activo'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                            }`}
                        >
              {estado}
            </span>
                    )}
                </div>
                <div className="flex-grow">
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div key={brigadista.id} initial={{opacity: 0, height: 0}}
                                        animate={{opacity: 1, height: "auto"}} exit={{opacity: 0, height: 0}}
                                        className="mt-4 space-y-4 overflow-hidden">
                                {habilidades && (
                                    <div>
                                        <h5 className="flex items-center gap-2 text-sm font-bold text-gray-500 mb-2">
                                            <Star className="w-4 h-4"/> FUNCIONES
                                        </h5>
                                        <p className="text-gray-600">
                                            {habilidades}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <button onClick={() => setIsExpanded(!isExpanded)}
                        className={`w-full mt-4 flex items-center justify-center gap-2 text-sm font-semibold p-2 rounded-lg ${styles.textColor} bg-gray-100 hover:bg-gray-200`}>
                    {isExpanded ? "Mostrar Menos" : "Ver Detalles"}
                    {isExpanded ? <ChevronUp className="w-5 h-5"/> : <ChevronDown className="w-5 h-5"/>}
                </button>
            </div>
        </div>
    );
};