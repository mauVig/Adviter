import React, { useState, useEffect } from 'react';
import { marksOfClients2 } from '@/data/MarksOfClients'

const SlideMarks2: React.FC = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const imageSequence = [0, 2, 3]; 
    
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (width <= 1024) {
            const interval = setInterval(() => {
                setIsTransitioning(true);
                setTimeout(() => {
                    setCurrentImageIndex((prev) => {
                        const nextIndex = imageSequence.indexOf(prev) + 1;
                        return imageSequence[nextIndex % imageSequence.length];
                    });
                    setIsTransitioning(false);
                }, 300);
            }, 1900);
            return () => clearInterval(interval);
        }
    }, [width]);

    return (
        <div className="mx-auto py-4 lg:py-16 px-10 xl:px-0">
            <div className="max-w-screen-2xl mx-auto flex flex-col mid:flex-row text-center mid:text-left items-center justify-around lg:justify-between px-10 3xl:px-0">
                <div >
                    <h2 className="block pt-4 text-AdBlue font-bold text-2xl sm:text-4xl  transition-all duration-300 ease-out mb-10  ">
                        Our <br />Partners
                    </h2>
                </div>
                {width > 1024 && (
                    <>
                        <div className="flex justify-center items-center">
                            <img src={marksOfClients2[0].img} alt="Amazon Web Services" className="h-20" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={marksOfClients2[2].img} alt="google Cloud" className="h-20" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={marksOfClients2[3].img} alt="microsoft" className="h-20" />
                        </div>
                    </>
                )}
                {width <= 1024 && (
                    <div className="flex justify-center -mt-4 w-52">
                        <img 
                            src={marksOfClients2[currentImageIndex].img} 
                            alt={marksOfClients2[currentImageIndex].img.split('/').pop().split('.')[0]}
                            className={`h-20 transition-all duration-300 ease-in-out ${
                                isTransitioning 
                                ? 'opacity-0 translate-y-4 scale-95' 
                                : 'opacity-100 translate-y-0 scale-100'
                            }`}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default SlideMarks2;