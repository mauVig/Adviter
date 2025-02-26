import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useCallback } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import type { Project } from '@/data/ProjectsData';
import 'swiper/css';
import '@/styles/swiper.css';
import { Autoplay } from 'swiper/modules';

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
          return 1.1;
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
          modules={[Autoplay]}  
          className="mySwiper"
          autoplay={{  
            delay: 8000,  
            disableOnInteraction: false,  
          }}  
        >
          {dataProject.map((projectOne, index) => (
            <SwiperSlide key={projectOne.id} className="px-4 pb-[50px]">
              <div className="w-full relative">
                <img
                  src={typeof projectOne.urlCellImg === 'string' ? projectOne.urlCellImg : ''}
                  alt={`Picture of ${projectOne.title} client`}
                  className="min-h-[500px] max-h-[680px] w-full h-full object-cover rounded-md"
                  loading="lazy"
                  decoding="async"
                  fetchPriority={index === activeIndex ? "high" : "low"}
                />
              </div>
              <div 
                className={`
                  transform transition-all duration-500 ease-out
                  ${activeIndex === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4 pointer-events-none'
                  }
                `}
              >
                <div className="flex justify-between items-start mt-2 gap-4">
                  <div className="flex flex-col items-start justify-start gap-2">
                    <div>
                      <img
                        src={projectOne.urlMarks}
                        alt={projectOne.title}
                        className="mb-2 max-w-[190px] w-full h-auto"
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
                      Learn more
                    </a>
                  </div>
                  <p className="font-bold text-AdBlue text-xs block pt-2 whitespace-pre-line leading-[0.8rem] h-16">
                    {projectOne.maker}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    );
};

export default SlideProject;