
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useState } from 'react';

import type { Swiper as SwiperType } from 'swiper';
import type { Project } from '../../data/ProjectsData';

import 'swiper/css';
import '../../styles/swiper.css';
import '../../styles/AppearTextInProject.css'

interface SlideProjectProps {
  dataProject: Project[];
}

const SlideProject: React.FC<SlideProjectProps> = ({ dataProject }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const handleSlideChange = (swiper: SwiperType) => {
      setActiveIndex(swiper.realIndex);
    };
    return (
        <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 576 ? 1.3 : 2}
        loop={true}
        // speed={1200}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // modules={[Autoplay]}
        onSlideChange={handleSlideChange}
        className="mySwiper min-h-[680px]"
      >
        {dataProject.map((projectOne, index) => (
          <SwiperSlide key={projectOne.id}  className='px-[.9rem]'>
            <div className="w-full relative">
              {activeIndex === index && (
                <div className="absolute top-4 left-0 bg-textGray appeaar">
                  <img src={projectOne.urlMarks} alt={projectOne.title} className='h-10 px-4 py-1 rounded-2xl '/>
                </div>
              )}
              <img 
                src={typeof projectOne.urlImg === 'string' ? projectOne.urlImg : ''} 
                alt={`Picture of ${projectOne.title} client`} 
                className='min-h-[520px] background-cover w-full h-full object-cover rounded-md'
              />
            </div>
            {activeIndex === index && (
              <div className='flex justify-between items-start mt-2 gap-4 transition-opacity duration-300 ease-in-out'>
                <h2 className='text-AdBlue text-xl whitespace-pre-line leading-[1.2rem] appeaar'>
                  {projectOne.title}
                </h2>
                <p className='font-bold text-AdBlue text-xs block pt-2 whitespace-pre-line leading-[0.8rem] h-16 appeaar'>
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