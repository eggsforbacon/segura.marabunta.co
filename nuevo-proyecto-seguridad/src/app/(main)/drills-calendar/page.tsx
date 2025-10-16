'use client';

import React, {useState, useMemo, useEffect} from 'react';
import {Simulacro} from '@/types/simulacro';
import {
    FileSliders,
    FireExtinguisher,
    ChevronsDown,
    DoorOpen,
    Shield,
    Siren,
    Ambulance,
    ChevronLeft,
    ChevronRight,
    Calendar
} from 'lucide-react';


const eventTypeStyles = {

    'Simulacro de Evacuación General': {
        Icon: Siren,
        color: 'text-red-400',
        borderColor: 'border-red-500',
        dotClass: 'bg-red-400'
    },
    'Reunión del Comité de Seguridad y Salud en el Trabajo': {
        Icon: Shield,
        color: 'text-orange-400',
        borderColor: 'border-orange-500',
        dotClass: 'bg-orange-400'
    },
    'Capacitación en Plan de Evacuación y Rutas de Escape': {
        Icon: DoorOpen,
        color: 'text-blue-400',
        borderColor: 'border-blue-500',
        dotClass: 'bg-blue-400'
    },
    'Entrenamiento en Uso de Extintores y Equipos Contra Incendio': {
        Icon: FireExtinguisher,
        color: 'text-yellow-400',
        borderColor: 'border-yellow-500',
        dotClass: 'bg-yellow-400'
    },
    'Capacitación en Primeros Auxilios': {
        Icon: Ambulance,
        color: 'text-lime-400',
        borderColor: 'border-lime-500',
        dotClass: 'bg-lime-400'
    },
    'Revisión y Actualización del Plan de Emergencias': {
        Icon: FileSliders,
        color: 'text-fuchsia-400',
        borderColor: 'border-fuchsia-500',
        dotClass: 'bg-fuchsia-400'
    },
};

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export default function DrillsCalendarPage() {
    const [eventos, setEventos] = useState<Simulacro[]>([]);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    useEffect(() => {
        async function getSimulacros() {
            try {
                const res = await fetch(`${baseUrl}/calendarios`, { cache: 'no-store' });
                if (!res.ok) throw new Error('No se pudieron obtener los simulacros');
                const data = await res.json();
                setEventos(data.data || []);
            } catch (error) {
                console.error("Error al obtener datos de Strapi:", error);
                setEventos([]);
            }
        }
        getSimulacros();
    }, []);

    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const daysInMonth = useMemo(() => {
        const days = [];
        for (let i = firstDayOfMonth.getDay(); i > 0; i--) {
            const prevDate = new Date(firstDayOfMonth);
            prevDate.setDate(prevDate.getDate() - i);
            days.push({date: prevDate, isCurrentMonth: false});
        }
        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            days.push({date: new Date(currentDate.getFullYear(), currentDate.getMonth(), i), isCurrentMonth: true});
        }
        const remainingDays = 42 - days.length;
        for (let i = 1; i <= remainingDays; i++) {
            const nextDate = new Date(lastDayOfMonth);
            nextDate.setDate(nextDate.getDate() + i);
            days.push({date: nextDate, isCurrentMonth: false});
        }
        return days;
    }, [currentDate]);

    const eventsByDate = useMemo(() => {
        return eventos.reduce((acc, event) => {
            const date = new Date(event.fecha_inicio).toISOString().split('T')[0];
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(event);
            return acc;
        }, {} as { [key: string]: Simulacro[] });
    }, [eventos]);

    const selectedDayEvents = selectedDate ? eventsByDate[selectedDate.toISOString().split('T')[0]] || [] : [];

    const changeMonth = (amount: number) => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + amount, 1));
    };

    const today = new Date();

    return (
        <div className="bg-black text-white min-h-screen">
            <div className="container mx-auto p-4 sm:p-6 lg:p-8">
                <header className="mb-8 text-center">


                    <div className="container  mx-auto px-6 py-10 text-center relative z-10">
                        <div className="inline-flex items-center justify-center bg-gray-800 p-4 rounded-full mb-4">
                            <Calendar className="w-12 h-12 text-[#6e23ac]"/>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            Mapa de seguridad
                        </h1>
                        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                            La preparación es clave. Mantente informado sobre las fechas y horarios de los próximos
                            eventos, simulacros y capacitaciones de seguridad.
                        </p>
                    </div>
                    <div className="container relative  mx-auto max-w-4xl mb-32 z-10">
                        <h2 className="text-3xl font-bold text-center text-white mb-8">
                            ¿Por qué es importante?
                        </h2>
                        <div className="bg-transparent border-2 border-[#6e23ac] p-6 rounded-lg">
                            <p className="text-lg text-center text-white">
                                Conocer el calendario te permite organizar tu tiempo, participar activamente en las
                                capacitaciones y estar siempre preparado. La práctica constante a través de simulacros
                                salva vidas y reduce riesgos.
                            </p>
                        </div>
                        <div className="absolute -translate-y-1/6 mt-18 left-1/2 -translate-x-1/2 z-10">
                            <ChevronsDown className="w-10 h-10 text-white/50 animate-bounce"/>
                        </div>
                    </div>

                </header>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div
                        className="w-full lg:w-2/3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <button onClick={() => changeMonth(-1)}
                                    className="p-2 rounded-full hover:bg-gray-700 transition-colors"><ChevronLeft
                                className="h-6 w-6 text-purple-400"/></button>
                            <h2 className="text-2xl font-bold text-white capitalize">{currentDate.toLocaleString('es-ES', {
                                month: 'long',
                                year: 'numeric'
                            })}</h2>
                            <button onClick={() => changeMonth(1)}
                                    className="p-2 rounded-full hover:bg-gray-700 transition-colors"><ChevronRight
                                className="h-6 w-6 text-purple-400"/></button>
                        </div>
                        <div className="grid grid-cols-7 gap-1">
                            {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
                                <div key={day}
                                     className="text-center font-semibold text-purple-300 text-sm py-2">{day}</div>
                            ))}
                            {daysInMonth.map(({date, isCurrentMonth}, index) => {
                                const dateString = date.toISOString().split('T')[0];
                                const isToday = date.toDateString() === today.toDateString();
                                const isSelected = selectedDate?.toDateString() === date.toDateString();
                                const eventsOnDay = eventsByDate[dateString] || [];
                                return (
                                    <div
                                        key={index}
                                        className={`h-24 rounded-lg flex flex-col p-2 cursor-pointer transition-colors duration-200 ${
                                            isCurrentMonth ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-800/30 text-gray-500'
                                        } ${isToday ? 'border-2 border-purple-500' : ''} ${isSelected ? 'bg-purple-600/50' : ''}`}
                                        onClick={() => {
                                            if (isCurrentMonth) setSelectedDate(date)
                                        }}
                                    >
                                        <span
                                            className={`font-semibold ${isCurrentMonth ? 'text-white' : 'text-gray-600'}`}>{date.getDate()}</span>
                                        <div className="flex-grow mt-1 flex flex-wrap gap-1">
                                            {eventsOnDay.map((event, i) => (
                                                <div key={i}
                                                     className={`w-2 h-2 rounded-full ${eventTypeStyles[event.tipo as keyof typeof eventTypeStyles]?.dotClass}`}></div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3">
                        <div
                            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl shadow-lg sticky top-8">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {selectedDate ? selectedDate.toLocaleDateString('es-ES', {
                                    weekday: 'long',
                                    day: 'numeric',
                                    month: 'long'
                                }) : 'Selecciona un día'}
                            </h3>
                            <div className="space-y-4 h-96 overflow-y-auto pr-2">
                                {selectedDayEvents.length > 0 ? (
                                    selectedDayEvents.map((event) => {
                                        const style = eventTypeStyles[event.tipo as keyof typeof eventTypeStyles];
                                        const Icon = style?.Icon || 'div';
                                        return (
                                            <div key={event.id}
                                                 className={`p-4 rounded-lg bg-gray-800 border-l-4 ${style?.borderColor}`}>
                                                <div className="flex items-center justify-between">
                                                    <h4 className="font-bold text-lg text-white">{event.titulo}</h4>
                                                    {Icon && <Icon className={`h-6 w-6 ${style?.color}`}/>}
                                                </div>
                                                <p className="text-sm font-semibold text-purple-300">{new Date(event.fecha_inicio).toLocaleTimeString('es-ES', {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })} - {event.tipo}</p>
                                                <p className="mt-2 text-gray-400 text-sm">{event.descripcion}</p>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <p className="text-gray-500">No hay eventos programados para este día.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}