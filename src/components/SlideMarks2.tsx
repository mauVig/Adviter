import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { marksOfClients2 } from '@/data/MarksOfClients'

const SlideMarks2:React.FC = () => {
    return (
        <div className='mx-auto py-32 '>
            <div className=' max-w-screen-lg mx-auto '>
                <h2 className=' text-AdBlue font-bold leading-6 text-xl block'>Our <br />Partners</h2>
            </div>
            <div className=''>
                <Swiper
                    // grabCursor={true}
                    slidesPerView={5}
                    centeredSlides={true}
                    // slidesPerView={window.innerWidth < 576 ? 1.3 : 2}
                    loop={true}
                    speed={2200}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    spaceBetween={60}
                    modules={[Autoplay]}
                >
                    {marksOfClients2.map((mark) => (
                        <SwiperSlide key={mark.id} >
                            <img src={mark.img} alt="mark" className='h-[80px]  object-contain' />
                        </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default SlideMarks2;