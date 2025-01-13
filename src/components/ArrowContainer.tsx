import { useEffect, useState, useRef, Fragment } from 'react';
import ArrowsWeAre from './ArrowsWeAre.tsx';
import { backArrows } from '@/data/icons.ts';

const ArrowContainer = ({ version, top }) => {
  const [position, setPosition] = useState({ left: 0, direction: 'right' });
  const [isVisible, setIsVisible] = useState(true);
  const speed = Math.random() * 10 + 5; 

  useEffect(() => {
    // Posición inicial aleatoria
    const randomLeft = Math.random() * 100;
    // Dirección aleatoria
    const randomDirection = Math.random() > 0.5 ? 'right' : 'left';
    setPosition({ left: randomLeft, direction: randomDirection });
  }, []);

  // Clases de animación basadas en la dirección
  const animationClass = position.direction === 'right' 
    ? 'animate-slide-right' 
    : 'animate-slide-left';

  return (
    <div 
      className={`absolute transition-all duration-1000 ${animationClass}`}
      style={{ 
        top: `${top}%`,
        left: `${position.left}%`,
      }}
    >
      <ArrowsWeAre version={version} backArrows={backArrows} />
    </div>
  );
};

export default ArrowContainer;