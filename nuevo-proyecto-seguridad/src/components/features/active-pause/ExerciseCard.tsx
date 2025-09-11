
'use client';
import { useState } from 'react';
import { Exercise } from '@/types/exercise';
import Image from 'next/image';

interface ExerciseCardProps {
  exercise: Exercise;
  isCompact?: boolean;
}

export const ExerciseCard = ({ exercise, isCompact = false }: ExerciseCardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`bg-gray-800 rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col shadow-lg hover:shadow-purple-500/30 ${isCompact ? 'w-64 flex-shrink-0' : ''}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Image
          src={isHovering ? exercise.imageUrl : exercise.staticImageUrl}
          alt={`Demostración de ${exercise.title}`}
          width={600}
          height={400}
          className={`w-full object-cover ${isCompact ? 'h-32' : 'h-48'}`}
          unoptimized
      />
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs font-semibold text-purple-400 uppercase tracking-wide">{exercise.area}</p>
            <h3 className={`font-bold text-gray-100 ${isCompact ? 'text-base' : 'text-xl mt-1'}`}>{exercise.title}</h3>
          </div>
          <div className="bg-purple-500/20 text-purple-300 text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 ml-2">
            {exercise.duration}
          </div>
        </div>
        {!isCompact && <p className="mt-2 text-sm text-gray-400 flex-grow">{exercise.description}</p>}
      </div>
    </div>
  );
};