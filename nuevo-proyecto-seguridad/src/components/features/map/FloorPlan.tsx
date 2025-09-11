
'use client';

import React, { useEffect, useState, useRef } from 'react';
import { MapElement } from '@/data/mapData';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';


interface FloorPlanProps {
  svgUrl: string;
  elements: Record<string, MapElement>;
  onElementClick: (element: MapElement | null) => void;
  highlightType: string | null;
  selectedElement: MapElement | null;
  wrapperStyle?: React.CSSProperties; // Optional property
}

export const FloorPlan = ({ svgUrl, elements, onElementClick, highlightType, wrapperStyle }: FloorPlanProps) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(svgUrl).then(res => res.text()).then(setSvgContent);
  }, [svgUrl]);

  useEffect(() => {
    
    const container = svgContainerRef.current;
    if (!svgContent || !container) return;

    const allElementIds = Object.keys(elements);

    allElementIds.forEach(id => {
      const elementNode = container.querySelector(`#${id}`) as HTMLElement;
      if (!elementNode) return;

     
      const isHighlighted = elements[id].type === highlightType;
      
       elementNode.style.transition = 'filter 0.3s ease-in-out, opacity 0.3s ease-in-out';
      elementNode.style.filter = isHighlighted ? 'drop-shadow(0 0 8px #0ea5e9)' : 'none';
      elementNode.style.opacity = (highlightType && !isHighlighted) ? '0.3' : '1';

      elementNode.style.cursor = 'pointer';

      const handleClick = (e: MouseEvent) => {
        e.stopPropagation();
        onElementClick(elements[id]);
      };

      elementNode.addEventListener('click', handleClick);
      return () => elementNode.removeEventListener('click', handleClick);
    });

  }, [svgContent, elements, onElementClick, highlightType, ]);

  if (!svgContent) {
    return <div className="flex items-center justify-center h-full text-gray-400">Cargando plano...</div>;
  }

  return (
  
    <TransformWrapper>
      <TransformComponent
        wrapperStyle={wrapperStyle || { width: "100%", height: "100%" }}
        contentStyle={{ width: "100%", height: "100%" }}
      >
        <div
          ref={svgContainerRef}
          className="w-full h-full bg-black rounded-lg [&_svg]:w-full [&_svg]:h-auto"
          dangerouslySetInnerHTML={{ __html: svgContent }}
          onClick={() => onElementClick(null)}
        />
      </TransformComponent>
    </TransformWrapper>
  );
};