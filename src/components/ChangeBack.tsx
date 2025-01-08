import React, { useEffect, useState, useRef } from 'react';
import Projects from "./Projects/Projects";

const ChangeBack = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  
  const text = "We are shaping the future through technology. We are pushing and challenging boundaries into the unknown, requiring both technical skills and human abilities.";
  const words = text.split(' ');

  // Colores constantes
  const START_COLOR = 'rgb(237, 237, 237)';  // Gris medio
  const END_COLOR = '#000755';
  
  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Lógica para el cambio de fondo
      let backgroundProgress = 0;
      if (rect.top <= -windowHeight * 0.5) {
        backgroundProgress = Math.min(
          1,
          (-windowHeight * 0.5 - rect.top) / (windowHeight * 0.3)
        );
      }

      // Lógica para el texto
      const textRect = section.getBoundingClientRect();
      let textProgress = 0;
      if (textRect.top <= windowHeight * 0.4) {
        textProgress = Math.min(
          1,
          (windowHeight * 0.4 - textRect.top) / (windowHeight * 0.35)
        );
      }

      setScrollProgress(Math.pow(textProgress, 0.9));

      // Interpola el color de fondo
      const r = Math.round(0 + (204 - 0) * backgroundProgress);
      const g = Math.round(120 + (204 - 120) * backgroundProgress);
      const b = Math.round(255 + (204 - 255) * backgroundProgress);
      
      if (container) {
        container.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función de color ajustada para mantener el color inicial
  const getWordColor = (word, index) => {
    // Si es "we" (case insensitive), siempre retorna el color final
    if (word.toLowerCase() === 'we') {
      return END_COLOR;
    }

    // Para el resto de las palabras, comienza con el color inicial
    const wordProgress = Math.max(0, Math.min(1, (scrollProgress * (words.length + 5) - index) / 4));
    
    if (wordProgress <= 0) {
      return START_COLOR;
    }
    
    if (wordProgress >= 1) {
      return END_COLOR;
    }
    
    // Interpolación de color
    const startRGB = { r: 128, g: 128, b: 128 }; // Gris medio
    const endRGB = { r: 0, g: 7, b: 85 }; // #000755
    
    const r = Math.round(startRGB.r + (endRGB.r - startRGB.r) * wordProgress);
    const g = Math.round(startRGB.g + (endRGB.g - startRGB.g) * wordProgress);
    const b = Math.round(startRGB.b + (endRGB.b - startRGB.b) * wordProgress);
    
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div 
      ref={containerRef}
      className="relative z-[1] bg-[#0078ff] min-h-[250vh]"
    >
      <section 
        ref={sectionRef}
        className="text-textGray text-center text-5xl min-h-screen flex items-center px-10 font-bold max-w-screen-lg mx-auto"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl">
          {words.map((word, index) => (
            <React.Fragment key={index}>
              <span
                className="transition-all duration-500 ease-out"
                style={{ 
                  color: getWordColor(word, index)
                }}
              >
                {word}
              </span>
              {' '}
            </React.Fragment>
          ))}
        </h2>
      </section>
      <Projects />
    </div>
  );
};

export default ChangeBack;