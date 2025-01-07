import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { marksOfClients } from '../data/MarksOfClients'

const SlideMarks2 = () => {
    return (
        <div>
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

export default SlideMarks2;