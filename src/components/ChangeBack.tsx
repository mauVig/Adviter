import { useEffect } from 'react';
import Projects from "./Projects/Projects";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const ChangeBack = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const initAnimation = () => {
      const myChange = document.getElementById('myChange');
      
      if (myChange) {
        ScrollTrigger.create({
          trigger: '#myChange',
          start: '15% top',
          end: '26% top',
          onUpdate: (self) => {
            const progress = self.progress;
            const color = gsap.utils.interpolate(
              '#0078ff',
              '#cccccc',
              progress
            );
            gsap.set('#myChange', { backgroundColor: color });
          },
          scrub: 0.5,
          markers: false 
        });
      }
    };

    setTimeout(initAnimation, 100);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="myChange" className="relative z-[1] bg-[#0078ff] min-h-[250vh]">
      <section className="text-textGray text-center text-5xl min-h-screen flex items-center px-10 font-bold max-w-screen-lg mx-auto">
        <h2 className='text-4xl md:text-5xl lg:text-6xl'>
          <span className="text-AdDarkBlue">We</span> are shaping the future through technology.
          We are pushing and challenging boundaries into the unknown, requiring both technical
          skills and human <br className='hidden lg:block' /> abilities.
        </h2>
      </section>
      <Projects />
    </div>
  );
};

export default ChangeBack;