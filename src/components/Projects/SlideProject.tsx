
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/effect-coverflow';

import '../../styles/swiper.css';

import { EffectCoverflow } from 'swiper/modules';
import type { Project } from '../../data/ProjectsData';


interface SlideProjectProps {
  dataProject: Project[];
}

const SlideProject = ({ dataProject }: SlideProjectProps) => {
  
    return (
        <Swiper
        // effect={'coverflow'}
        grabCursor={true}
        spaceBetween={50}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 576 ? 1.3 : 2}
        loop={true}
        // pagination={true}
        // modules={[EffectCoverflow]}
        className="mySwiper min-h-screen"
      >
        {dataProject.map((projectOne) => (
          <SwiperSlide key={projectOne.id}>
            <div className="w-full relative h-[500px] ">
              <div className="absolute top-4 left-0 bg-textGray">
                <img src={projectOne.urlMarks} alt={projectOne.title} className='h-10 px-4 py-1 rounded-2xl'/>
              </div>
              <img 
                src={typeof projectOne.urlImg === 'string' ? projectOne.urlImg : ''} 
                alt={`Picture of ${projectOne.title} client`} 
                className='background-cover w-full h-full object-cover rounded-md'
              />
            </div>
            <div className='flex justify-between items-start mt-2 gap-4'>
              <h2 className='text-AdBlue text-xl whitespace-pre-line leading-[1.2rem]'>{projectOne.title}</h2>
              <p className=' font-bold text-xs block pt-2 whitespace-pre-line leading-[0.8rem]'>{projectOne.maker}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
};

export default SlideProject;