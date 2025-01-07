import React from 'react';

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import st from '../styles/Welcome.module.css';

const Welcome: React.FC = () => {
  const CSSEffect = 70

  return (
    <ParallaxProvider>
      <Parallax translateY={[-CSSEffect , CSSEffect ]} className={`pl-6 flex justify-center items-center ${st.back}`}>
        <main className="relative w-full h-full px-10 max-w-screen-xl mx-auto">
          <h1 className="text-6xl w-40 -ml-[2px] mb-3 font-bold">Beyond the Possible</h1>
          <p className="text-2xl w-44 row-start-3 mb-24 leading-[1.6rem] font-medium">
            We are driving the digital transformation for tomorrow, today
          </p>
          <div>
            <button className="text-xl py-1 px-4 rounded-md bg-AdBlue font-semibold">
              CONTACT US
            </button>
          </div>
        </main>
      </Parallax>
    </ParallaxProvider>
  );
};

export default Welcome;