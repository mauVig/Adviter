import { useEffect, useRef, useState } from 'react'; 
import { Autoplay } from 'swiper/modules';  
import { Swiper, SwiperSlide } from 'swiper/react';  
import { marksOfClients } from '@/data/MarksOfClients'  

const FAST_SPEED = 500;
const SLOW_SPEED = 950;

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
    const [imagesOpacity, setImagesOpacity] = useState(0);

    useEffect(() => {
        const title = titleRef.current;
        if (title) {
            setActualTitleHeight(title.scrollHeight);
        }
    }, []);

    const calcSlidesPerView = () => {
        switch (true) {
            case window.innerWidth < 400:
                return 1;
            case window.innerWidth < 768:
                return 2.5;
            case window.innerWidth < 1024:
                return 3;
            default:
                return 5;
        }
    }

    useEffect(() => { 
        const section = sectionRef.current; 
        if (!section) return; 

        const handleScroll = () => { 
            const rect = section.getBoundingClientRect(); 
            const windowHeight = window.innerHeight; 
             
            if (rect.top <= windowHeight * 0.90) { 
                const progress = Math.min( 
                    1, 
                    (windowHeight * 0.95 - rect.top) / (windowHeight * 0.3) 
                ); 
                
                const easedProgress = Math.pow(progress, 0.7); 
                
                // Las imágenes completan su aparición en la primera mitad del progreso
                const imagesProgress = Math.min(1, easedProgress * 2);
                setImagesOpacity(imagesProgress);

                // El título comienza después que las imágenes alcancen opacidad 1
                const titleProgress = Math.max(0, (easedProgress - 0.5) * 2);
                
                // Solo aplicamos los efectos del título cuando las imágenes están completamente visibles
                if (imagesProgress >= 1) {
                    const maxTopPadding = 32;
                    const maxBottomPadding = 64;
                    
                    const currentTopPadding = titleProgress * maxTopPadding;
                    const currentBottomPadding = titleProgress < 1 ? titleProgress * maxBottomPadding : 0;
                    
                    setSectionTopPadding(currentTopPadding); 
                    setSectionBottomPadding(currentBottomPadding);
                    setTitleOpacity(titleProgress); 
                    setTitleScale(0.8 + (titleProgress * 0.2));
                    setTitleHeight(actualTitleHeight * titleProgress);

                    if (swiperRef.current?.swiper) {
                        const newSpeed = FAST_SPEED + (SLOW_SPEED - FAST_SPEED) * titleProgress;
                        setSwiperSpeed(newSpeed);
                        swiperRef.current.swiper.params.autoplay.delay = newSpeed;
                        swiperRef.current.swiper.autoplay.running && swiperRef.current.swiper.autoplay.start();
                    }
                } else {
                    // Mantenemos todo en cero hasta que las imágenes estén completamente visibles
                    setSectionTopPadding(0); 
                    setSectionBottomPadding(0);
                    setTitleOpacity(0); 
                    setTitleScale(0.8);
                    setTitleHeight(0);
                }
            } else { 
                // Reset de todos los valores
                setSectionTopPadding(0); 
                setSectionBottomPadding(0);
                setTitleOpacity(0); 
                setTitleScale(0.8);
                setTitleHeight(0);
                setSwiperSpeed(FAST_SPEED);
                setImagesOpacity(0);

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
                    className='text-AdBlue font-bold text-4xl text-center transition-all duration-300 ease-out' 
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
                slidesPerView={calcSlidesPerView()}  
                centeredSlides={true}  
                loop={true}  
                speed={swiperSpeed}
                autoplay={{  
                    delay: swiperSpeed,  
                    disableOnInteraction: false,  
                }}  
                spaceBetween={ window.innerWidth < 1024 ? 0 : 60 }  
                modules={[Autoplay]}  
                style={{
                    paddingBottom:'32px'
                }}
            >  
                {marksOfClients.map((mark) => (  
                    <SwiperSlide key={mark.id} className='flex items-center h-full'>  
                        <div 
                            className="transition-opacity duration-700 ease-out"
                            style={{
                                opacity: imagesOpacity,
                                willChange: 'opacity'
                            }}
                        >  
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