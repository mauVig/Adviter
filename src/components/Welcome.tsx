
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import st from '@/styles/Welcome.module.css'
import { useEffect, useState } from 'react';

const Welcome: React.FC = () => {
  const CSSEffect = 70

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
  <div className='overflow-hidden' id="welcome" >
      <ParallaxProvider >
        <Parallax translateY={[-CSSEffect , CSSEffect ]} className={`flex justify-center items-center ${st.back}`}>
          <main className="relative w-full h-full px-10 max-w-screen-xl mx-auto md:flex md:justify-between pt-20">
            <h1 
              className={`
                text-7xl mid:text-8xl lg:text-9xl w-40 -ml-[2px] mb-3 font-bold
                transform transition-all duration-1000 ease-out  ${st.opositeMove}
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
              `}
            >
              Beyond the Possible
            </h1>
            <div className="lg:pr-24">
              <p 
                className={`
                  text-xl mid:text-2xl md:text-[27px] lg:text-4xl  w-44 lg:w-60 mb-24 lg:my-4 leading-[1.6rem] font-medium
                  transform transition-all duration-1000 ease-out delay-300 ${st.opositeMove}
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
                `}
              >
                We are driving the digital transformation for tomorrow, today
              </p>
              <div className="relative z-30">
                <button 
                  className={`
                    text-xl lg:text-2xl py-1 lg:mt-4 px-4 rounded-md bg-AdBlue font-semibold hover:scale-105 hover:bg-AdDarkBlue  active:scale-95  
                    transform transition-all duration-1000 ease-out delay-500 ${st.opositeMove}
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
                  `}
                >
                  CONTACT US
                </button>
              </div>
            </div>
          </main>
        </Parallax>
      </ParallaxProvider>
  </div>
  );
};

export default Welcome;