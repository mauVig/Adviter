import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { marksOfClients } from '../data/MarksOfClients'



const SlideMarksAll:React.FC = () => {
    
    return (
        <div className=' py-32'>
            <h2 className='text-AdBlue font-medium text-2xl text-center leading-5'>Some of the clients <br /> who trusted us</h2>
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
                modules={[Autoplay]}
            >
                {marksOfClients.map((mark) => (
                    <SwiperSlide key={mark.id} >
                        <img src={mark.img} alt="mark" className='mx-auto' />
                    </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default SlideMarksAll;