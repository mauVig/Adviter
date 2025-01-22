import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useCallback } from 'react';

import type { Swiper as SwiperType } from 'swiper';
import type { Project } from '@/data/ProjectsData';

import 'swiper/css';
import '@/styles/swiper.css';

interface SlideProjectProps {
  dataProject: Project[];
}

const SlideProject: React.FC<SlideProjectProps> = ({ dataProject }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const handleSlideChange = useCallback((swiper: SwiperType) => {
      setActiveIndex(swiper.realIndex);
    }, []);

    const preView = useCallback(() => {
      switch (true) {
        case window.innerWidth < 576:
          return 1.09;
        case window.innerWidth < 768:
          return 1.5;
        default:
          return 1.3;
      }
    }, []);

    return (
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={preView()}
          loop={true}
          onSlideChange={handleSlideChange}
          className="mySwiper"
          preloadImages={false} // Ayuda a la carga lazy
          updateOnImagesReady={true} // Actualiza el slider cuando las imágenes están listas
        >
          {dataProject.map((projectOne, index) => (
            <SwiperSlide key={projectOne.id} className="px-4">
              <div className="w-full relative">
                <img
                  src={typeof projectOne.urlCellImg === 'string' ? projectOne.urlCellImg : ''}
                  alt={`Picture of ${projectOne.title} client`}
                  className="min-h-[680px] max-h-[680px] w-full h-full object-cover rounded-md"
                  loading="lazy"
                  decoding="async" // Mejora el rendimiento de decodificación
                  fetchPriority={index === activeIndex ? "high" : "low"} // Prioriza la imagen activa
                />
              </div>
              {activeIndex === index && (
                <div className="flex justify-between items-start mt-2 gap-4 transition-all duration-300 ease-in-out">
                  <div className="flex flex-col items-start justify-start gap-2">
                    <div>
                      <img
                        src={projectOne.urlMarks}
                        alt={projectOne.title}
                        className="max-h-20 rounded-2xl mb-2"
                        decoding="async"
                      />
                    </div>
                    <a
                      key={projectOne.id}
                      href={projectOne.pdf}
                      target="_blank"
                      rel="noreferrer"
                      download
                      className="bg-AdBlue text-textGray px-6 py-1 rounded-2xl"
                    >
                      Ver más
                    </a>
                  </div>
                  <p className="font-bold text-AdBlue text-xs block pt-2 whitespace-pre-line leading-[0.8rem] h-16">
                    {projectOne.maker}
                  </p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
    );
};

export default SlideProject;