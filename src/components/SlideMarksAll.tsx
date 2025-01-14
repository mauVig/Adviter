import { useEffect, useRef, useState } from 'react'; 
import { Autoplay } from 'swiper/modules';  
import { Swiper, SwiperSlide } from 'swiper/react';  
import { marksOfClients } from '@/data/MarksOfClients'  

// Definimos las constantes para las velocidades
const FAST_SPEED = 600; // Velocidad rápida inicial (menor número = más rápido)
const SLOW_SPEED = 2200; // Velocidad lenta cuando aparece el título

const SlideMarksAll:React.FC = () => {  
    const sectionRef = useRef<HTMLDivElement>(null); 
    const titleRef = useRef<HTMLHeadingElement>(null);
    const swiperRef = useRef<any>(null);
    const [sectionTopPadding, setSectionTopPadding] = useState(0); 
    const [sectionBottomPadding, setSectionBottomPadding] = useState(0); 
    const [titleOpacity, setTitleOpacity] = useState(0); 
    const [titleScale, setTitleScale] = useState(0.8); 
    const [titleHeight, setTitleHeight] = useState(0);
    const [actualTitleHeight, setActualTitleHeight] = useState(0);
    const [swiperSpeed, setSwiperSpeed] = useState(FAST_SPEED);

    useEffect(() => {
        const title = titleRef.current;
        if (title) {
            setActualTitleHeight(title.scrollHeight);
        }
    }, []);

    useEffect(() => { 
        const section = sectionRef.current; 
        if (!section) return; 

        const handleScroll = () => { 
            const rect = section.getBoundingClientRect(); 
            const windowHeight = window.innerHeight; 
             
            if (rect.top <= windowHeight * 0.60) { 
                const progress = Math.min( 
                    1, 
                    (windowHeight * 0.95 - rect.top) / (windowHeight * 0.3) 
                ); 
                 
                const easedProgress = Math.pow(progress, 0.7); 
                
                const maxTopPadding = 32;
                const maxBottomPadding = 64;
                
                const currentTopPadding = easedProgress * maxTopPadding;
                const currentBottomPadding = easedProgress < 1 ? easedProgress * maxBottomPadding : 0;
                
                setSectionTopPadding(currentTopPadding); 
                setSectionBottomPadding(currentBottomPadding);
                setTitleOpacity(easedProgress); 
                setTitleScale(0.8 + (easedProgress * 0.2));
                setTitleHeight(actualTitleHeight * easedProgress);

                // Ajustamos la velocidad del Swiper
                if (swiperRef.current?.swiper) {
                    const newSpeed = FAST_SPEED + (SLOW_SPEED - FAST_SPEED) * easedProgress;
                    setSwiperSpeed(newSpeed);
                    
                    // Actualizamos la velocidad del autoplay
                    swiperRef.current.swiper.params.autoplay.delay = newSpeed;
                    swiperRef.current.swiper.autoplay.running && swiperRef.current.swiper.autoplay.start();
                }
            } else { 
                setSectionTopPadding(0); 
                setSectionBottomPadding(0);
                setTitleOpacity(0); 
                setTitleScale(0.8);
                setTitleHeight(0);
                setSwiperSpeed(FAST_SPEED);

                // Reseteamos a velocidad rápida
                if (swiperRef.current?.swiper) {
                    swiperRef.current.swiper.params.autoplay.delay = FAST_SPEED;
                    swiperRef.current.swiper.autoplay.running && swiperRef.current.swiper.autoplay.start();
                }
            } 
        }; 

        window.addEventListener('scroll', handleScroll); 
        handleScroll(); 
         
        return () => window.removeEventListener('scroll', handleScroll); 
    }, [actualTitleHeight]); 
    
    return (  
        <div  
            ref={sectionRef} 
            className='overflow-hidden transition-all duration-300 ease-out' 
            style={{ 
                paddingTop: `${sectionTopPadding}px`, 
                paddingBottom: `${sectionBottomPadding}px`, 
            }} 
        >  
            <div 
                className="overflow-hidden transition-all duration-300 ease-out"
                style={{
                    height: `${titleHeight}px`,
                }}
            >
                <h2  
                    ref={titleRef}
                    className='text-AdBlue font-medium text-5xl text-center transition-all duration-300 ease-out' 
                    style={{ 
                        opacity: titleOpacity, 
                        transform: `scale(${titleScale})`, 
                        willChange: 'transform, opacity'
                    }} 
                > 
                    Some of the clients <br /> who trusted us 
                </h2>  
            </div>
            <Swiper  
                ref={swiperRef}
                slidesPerView={5}  
                centeredSlides={true}  
                loop={true}  
                speed={swiperSpeed}
                autoplay={{  
                    delay: swiperSpeed,  
                    disableOnInteraction: false,  
                }}  
                spaceBetween={60}  
                modules={[Autoplay]}  
            >  
                {marksOfClients.map((mark) => (  
                    <SwiperSlide key={mark.id} className='flex items-center h-full'>  
                        <div>  
                            <img  
                                src={mark.img}  
                                alt="marks"  
                                className='h-[80px] object-contain'  
                            />  
                        </div>  
                    </SwiperSlide>  
                ))}  
            </Swiper>  
        </div>  
    );  
}  

export default SlideMarksAll;