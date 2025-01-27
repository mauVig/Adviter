import { useEffect, useState, useRef } from 'react';
import ArrowsWeAre from './ArrowsWeAre.tsx';
import { backArrows } from '@/data/icons.ts';

const ArrowContainer = ({ version, top, left }) => {
  const [direction, setDirection] = useState('right');
  const elementRef = useRef(null);

  useEffect(() => {
    const initialDirection = left < 0 ? 'right' : 'left';
    setDirection(initialDirection);
  }, [left]);

  // Animation class based on direction
  const animationClass = direction === 'right' 
    ? 'animate-slide-right' 
    : 'animate-slide-left';

  // Dynamic styles combining the passed left position with other styles
  const styles = {
    top: `${top}%`,
    left: `${left}px`, // Using pixels since we're getting absolute values
    animationDuration: `8s`,
  };

  return (
    <div
      ref={elementRef}
      className={`absolute transition-all ${animationClass}`}
      style={styles}
    >
      <ArrowsWeAre version={version} backArrows={backArrows} />
    </div>
  );
};

export default ArrowContainer;