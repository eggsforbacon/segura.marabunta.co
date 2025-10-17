'use client';

import React, { useState, useEffect, FC } from 'react';
import { administrativeExercises, operationalExercises } from '@/data/activePauseData';
import { Exercise } from '@/types/exercise';
import { ExerciseCard } from '@/components/features/active-pause/ExerciseCard';
import { Computer, HardHat, ArrowLeft, Calendar, CheckCircle, Activity } from 'lucide-react';

const getDailyRoutine = (allExercises: Exercise[], dayOfWeek: number): Exercise[] => {
    const shuffled = [...allExercises].sort(
        (a, b) => (a.title.charCodeAt(0) % (dayOfWeek + 1)) - (b.title.charCodeAt(0) % (dayOfWeek + 1))
    );
    return shuffled.slice(0, 5);
};

interface SelectionCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    onClick: () => void;
    gradient: string;
}

const SelectionCard: FC<SelectionCardProps> = ({ title, description, icon, onClick, gradient }) => (
    <button
        onClick={onClick}
        className="w-full md:w-2/5 lg:w-1/3 bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out text-center group relative overflow-hidden"
    >
        <div className={`absolute top-0 left-0 w-full h-1 ${gradient}`}></div>
        <div className="flex justify-center mb-6">{icon}</div>
        <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-400">{description}</p>
        <div className="mt-6">
            <span
                className={`inline-block ${gradient} text-white font-semibold py-2 px-6 rounded-lg transition-colors`}
            >
                Ver ejercicios
            </span>
        </div>
    </button>
);

export default function PausasActivasPage() {
    const [activeType, setActiveType] = useState<'administrative' | 'operational' | null>(null);
    const [dailyRoutine, setDailyRoutine] = useState<Exercise[]>([]);
    const [dayName, setDayName] = useState('');
    const [weeklyCount, setWeeklyCount] = useState<number>(0);
    const [hasClicked, setHasClicked] = useState<boolean>(false);

    useEffect(() => {
        const storedCount = localStorage.getItem('weeklyPauseCount');
        setWeeklyCount(storedCount ? parseInt(storedCount, 10) : 0);

        const lastClickStr = localStorage.getItem('lastPauseClickDate');
        if (lastClickStr) {
            const today = new Date();
            const lastClickDate = new Date(lastClickStr);
            if (today.toDateString() === lastClickDate.toDateString()) setHasClicked(true);
        }
    }, []);

    useEffect(() => {
        const date = new Date();
        const dayOfWeek = date.getDay();
        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        setDayName(days[dayOfWeek]);

        if (activeType) {
            const exercises =
                activeType === 'administrative' ? administrativeExercises : operationalExercises;
            setDailyRoutine(getDailyRoutine(exercises, dayOfWeek));
        }
    }, [activeType]);

    const handleCountClick = () => {
        if (!hasClicked) {
            const newCount = weeklyCount + 1;
            setWeeklyCount(newCount);
            localStorage.setItem('weeklyPauseCount', newCount.toString());
            localStorage.setItem('lastPauseClickDate', new Date().toISOString());
            setHasClicked(true);
        }
    };

    const allExercises = activeType === 'administrative' ? administrativeExercises : operationalExercises;

    return (
        <div className="min-h-screen bg-black font-sans text-gray-200">
            <div className="container mx-auto px-4">
                {!activeType ? (
                    <div className="flex flex-col items-center justify-center min-h-[80vh]">
                        <div className="inline-flex items-center justify-center bg-gray-800 p-4 rounded-full mb-4">
                            <Activity className="w-12 h-12 text-purple-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white">
                            Elige tu pausa activa
                        </h1>
                        <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl">
                            Dedica 5 minutos a tu bienestar. Selecciona tu rol para ver los ejercicios recomendados para ti.
                        </p>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full">
                            <SelectionCard
                                title="Personal administrativo"
                                description="Ejercicios enfocados en relajar músculos por posturas sedentarias y fatiga visual."
                                icon={<Computer className="h-20 w-20 text-purple-400 group-hover:text-pink-400 transition-colors" />}
                                onClick={() => setActiveType('administrative')}
                                gradient="bg-gradient-to-r from-purple-500 to-indigo-500"
                            />
                            <SelectionCard
                                title="Personal operativo"
                                description="Estiramientos para prevenir molestias músculo-esqueléticas por actividad física."
                                icon={<HardHat className="h-20 w-20 text-purple-400 group-hover:text-pink-400 transition-colors" />}
                                onClick={() => setActiveType('operational')}
                                gradient="bg-gradient-to-r from-pink-500 to-orange-500"
                            />
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="flex items-center mb-8">
                            <button
                                onClick={() => setActiveType(null)}
                                className="flex items-center mt-8 text-purple-400 hover:text-purple-300 font-semibold transition-colors mr-4 p-2 rounded-full hover:bg-gray-800"
                            >
                                <ArrowLeft className="h-6 w-6" />
                                <span className="ml-2 hidden md:inline">Volver</span>
                            </button>
                            <h1 className="text-3xl md:text-4xl font-bold mt-8 text-white">
                                Pausa activa para personal {activeType === 'administrative' ? 'administrativo' : 'operativo'}
                            </h1>
                        </div>

                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl shadow-lg mb-12">
                            <div className="flex items-center mb-4">
                                <Calendar className="h-8 w-8 text-purple-400" />
                                <div className="ml-3">
                                    <h2 className="text-2xl font-bold text-white">Tu rutina de 5 minutos para hoy</h2>
                                    <p className="text-gray-400 font-medium">Recomendaciones para el día de {dayName}</p>
                                </div>
                            </div>
                            <div className="flex overflow-x-auto space-x-6 pb-10">
                                {dailyRoutine.map((exercise, index) => (
                                    <ExerciseCard key={index} exercise={exercise} isCompact={true} />
                                ))}
                            </div>
                            <p className="text-gray-400 font-medium">
                                Recuerda que una pausa de 5 minutos no es una interrupción de tu trabajo, es una inversión en tu energía y concentración para hacerlo mejor.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-2xl shadow-lg mb-12 flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-4 md:mb-0">
                                <h2 className="text-2xl font-bold">Check point semanal</h2>
                                <p>Marca tu participación en la pausa activa de hoy.</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-center">
                                    <p className="text-4xl font-bold">{weeklyCount}</p>
                                    <p className="text-sm font-semibold">Participantes esta semana</p>
                                </div>
                                <button
                                    onClick={handleCountClick}
                                    disabled={hasClicked}
                                    className={`flex items-center font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md transform hover:scale-105 ${hasClicked
                                            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                            : 'bg-white text-purple-600 hover:bg-purple-50'
                                        }`}
                                >
                                    <CheckCircle className="h-6 w-6 mr-2" />
                                    {hasClicked ? '¡Ya participaste!' : '¡Me uno a la pausa!'}
                                </button>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-6">Explorar todos los ejercicios</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {allExercises.map((ex, i) => (
                                <ExerciseCard key={i} exercise={ex} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
