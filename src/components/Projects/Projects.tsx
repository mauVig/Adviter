import { useEffect, useState, useRef } from 'react';  
import GridProject from '@/components/Projects/GridProject';  
import SlideProject from '@/components/Projects/SlideProject';  
import { dataProject } from '@/data/ProjectsData';  

const Projects: React.FC = () => {  
    const [isMobile, setIsMobile] = useState(false);  
    const [scrollProgress, setScrollProgress] = useState(0);
    const titleRef = useRef<HTMLHeadingElement>(null);  
    const paragraphRef = useRef<HTMLParagraphElement>(null); // Nuevo ref para el párrafo
    const lg = 1024;  
    
    const START_COLOR = 'rgb(237, 237, 237)';  
    const END_COLOR = '#0078ff';
      
    useEffect(() => {  
        setIsMobile(window.innerWidth <= lg);  
        const handleResize = () => {  
            setIsMobile(window.innerWidth <= lg);  
        };  
  
        window.addEventListener('resize', handleResize);  
        return () => window.removeEventListener('resize', handleResize);  
    }, []);  

    useEffect(() => {
        const title = titleRef.current;
        const paragraph = paragraphRef.current;
        if (!title || !paragraph) return;

        const handleScroll = () => {
            const titleRect = title.getBoundingClientRect();
            const paragraphRect = paragraph.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Ajustamos el trigger para que sea más arriba (0.5 a 0.6)
            let titleProgress = 0;
            if (titleRect.top <= windowHeight * 0.6) { // Cambiado de 0.4 a 0.6
                titleProgress = Math.min(
                    1,
                    (windowHeight * 0.6 - titleRect.top) / (windowHeight * 0.30)
                );
            }

            // Progress para el párrafo, ligeramente retrasado respecto al título
            let paragraphProgress = 0;
            if (paragraphRect.top <= windowHeight * 0.6) {
                paragraphProgress = Math.min(
                    1,
                    (windowHeight * 0.6 - paragraphRect.top) / (windowHeight * 0.30)
                );
            }

            titleProgress = Math.pow(titleProgress, 0.5);
            paragraphProgress = Math.pow(paragraphProgress, 0.5);

            // Interpolación de color para el título
            const startRGB = { r: 237, g: 237, b: 237 };
            const endRGB = { r: 0, g: 120, b: 255 };

            const r = Math.round(startRGB.r + (endRGB.r - startRGB.r) * titleProgress);
            const g = Math.round(startRGB.g + (endRGB.g - startRGB.g) * titleProgress);
            const b = Math.round(startRGB.b + (endRGB.b - startRGB.b) * titleProgress);

            // Aplicamos transformaciones
            title.style.transform = `scale(${1.5 - (titleProgress * 0.5)})`;
            title.style.color = `rgb(${r}, ${g}, ${b})`;

            // Animación del párrafo: de escala pequeña a normal
            const paragraphScale = 0.8 + (paragraphProgress * 0.2); // Comienza en 0.8 y termina en 1
            paragraph.style.transform = `scale(${paragraphScale})`;
            paragraph.style.opacity = `${paragraphProgress}`;
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (  
        <section>  
            <h2  
                ref={titleRef} 
                className="
                    font-semibold text-2xl text-center pt-4 leading-5 
                    transition-all duration-300 ease-out
                "
                style={{
                    willChange: 'transform, color'
                }}
            > 
                Some of <br />our projects 
            </h2>  
            <p 
                ref={paragraphRef}
                className="
                    text-center text-6xl font-medium leading-10 mt-8
                    transition-all duration-300 ease-out
                "
                style={{
                    willChange: 'transform, opacity'
                }}
            >
                Effective solutions
            </p>  
            <div className="projects-list pb-32 px-0 lg:px-10 2xl:px-0 ">  
                {isMobile ? <SlideProject dataProject={dataProject} /> : <GridProject dataProject={dataProject}  />}  
            </div>  
        </section>  
    );  
};  
  
export default Projects;