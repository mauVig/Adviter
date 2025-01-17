
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

import type { Swiper as SwiperType } from 'swiper';
import type { Project } from '@/data/ProjectsData';

import 'swiper/css';
import '@/styles/swiper.css';

interface SlideProjectProps {
  dataProject: Project[];
}

const SlideProject: React.FC<SlideProjectProps> = ({ dataProject }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const handleSlideChange = (swiper: SwiperType) => {
      setActiveIndex(swiper.realIndex);
    };
    const preView = () => {
      // return window.innerWidth < 576 ? 1.3 : 2
      switch (true) {
        case window.innerWidth < 576:
          return 1.09;
        case window.innerWidth < 768:
          return 1.5;
        default:
          return 1.3;
      }
    }

    return (
        <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={preView()}
        loop={true}
        onSlideChange={handleSlideChange}
        className="mySwiper "
      >
        {dataProject.map((projectOne, index) => (
          <SwiperSlide key={projectOne.id}  className='px-[.9rem]'>
            <div className="w-full relative">
              <img 
                src={typeof projectOne.urlCellImg === 'string' ? projectOne.urlCellImg : ''} 
                alt={`Picture of ${projectOne.title} client`} 
                className='min-h-[680px] max-h-[680px] background-cover w-full h-full object-cover rounded-md'
              />
            </div>
            {activeIndex === index && (
              <div className='flex justify-between items-start mt-2 gap-4 transition-opacity duration-300 ease-in-out'>
                <div className='flex flex-col items-start justify-start gap-2'>
                  <div>
                    <img src={projectOne.urlMarks} alt={projectOne.title} className=' max-h-20  rounded-2xl mb-2'/>
                  </div>
                  <a
                  key={projectOne.id}
                  href={projectOne.pdf} 
                  target='_blank' 
                  rel='noreferrer' 
                  download
                  className='bg-AdBlue text-textGray px-6 py-1 rounded-2xl'>Ver más</a>
                </div>
                <p className='font-bold text-AdBlue text-xs block pt-2 whitespace-pre-line leading-[0.8rem] h-16 '>
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