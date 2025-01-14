import { useEffect, useState, useRef, Fragment } from 'react';
import Projects from "./Projects/Projects";
import ArrowContainer from './ArrowContainer.tsx';
import { generateRandomArrowConfigs } from './utiliti/resource.ts';

const ChangeBack = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [arrowConfigs, setArrowConfigs] = useState([]);

  const text = "We are shaping the future through technology. We are pushing and challenging boundaries into the unknown, requiring both technical skills and human abilities.";
  const words = text.split(' ');


  // Colores constantes
  const START_COLOR = 'rgb(237, 237, 237)'; 
  const END_COLOR = '#000755';

  useEffect(() => {
    setArrowConfigs(generateRandomArrowConfigs());
  }, []);

    
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
          (windowHeight * 0.4 - textRect.top) / (windowHeight * 0.60)
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
  const getWordColor = (index) => {

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
      className="relative min-h-[50vh] overflow-hidden"
    >
      <div className="absolute top-0 -left-40  h-full">
        {arrowConfigs.map((config, index) => (
          <ArrowContainer 
            key={index}
            version={config.version}
            top={config.top}
          />
        ))}
      </div>

      <section 
        ref={sectionRef}
        className="text-textGray text-center min-h-screen flex items-center font-bold max-w-screen-xl mx-auto relative px-10 mb-64"
      >
        <h2 className="text-2xl  xs:text-3xl mid:text-4xl  md:text-5xl xl:text-6xl ">
          {words.map((word, index) => (
            <Fragment key={index}>
              <span
                className="transition-all duration-500 ease-out"
                style={{ 
                  color: getWordColor(index)
                }}
              >
                {word}
              </span>
              {' '} 
            </Fragment>
          ))}
        </h2>
      </section>
      <Projects />
    </div>
  );
};

export default ChangeBack;