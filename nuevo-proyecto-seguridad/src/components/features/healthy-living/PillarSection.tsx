
import Image from 'next/image';
import { Check } from 'lucide-react';


interface PillarProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  recommendations: string[];
  imageOnLeft?: boolean;
  color: 'green' | 'blue' | 'amber'; 
}
const renderRecommendationText = (text: string) => {
  const parts = text.split('**');
  return (
    <span>
      {parts.map((part, index) =>
        index % 2 === 1 ? <strong key={index}>{part}</strong> : part
      )}
    </span>
  );
};
export const PillarSection = ({ imageUrl, imageAlt, title, description, recommendations, imageOnLeft = true, color }: PillarProps) => {
  const colorVariants = {
    green: 'text-green-500',
    blue: 'text-blue-500',
    amber: 'text-amber-500',
  };

  return (
    
    
    <div className={`bg-black border-slate-700 rounded-2xl p-6 md:p-8 flex flex-col ${imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 border `}>
      <div className="w-full  md:w-1/3">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={500}
          height={500}
          className="rounded-xl object-cover w-full h-full"
        />
      </div>
      <div className="w-full md:w-2/3">
        <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <ul className="space-y-3 text-gray-300">
          {recommendations.map((rec, index) => (
            <li key={index} className="flex items-start">
              <Check className={`w-5 h-5 ${colorVariants[color]} flex-shrink-0 mr-3 mt-1`} />
              {renderRecommendationText(rec)}
            </li>
          ))}
        </ul>
      </div>
    </div>
   
  );
};