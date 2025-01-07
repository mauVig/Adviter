import { useEffect } from 'react';
import Projects from "./Projects/Projects";
import WeAre from "./WeAre.astro";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const ChangeBack: React.FC = () => {
 useEffect(() => {
   gsap.registerPlugin(ScrollTrigger);

   ScrollTrigger.create({
     trigger: '.change',
     start: '15%', 
     end: '26%',
     onUpdate: (self) => {
       const progress = self.progress;
       const color = gsap.utils.interpolate(
         '#0078ff',
         '#cccccc', 
         progress
       );
       gsap.set('.change', { backgroundColor: color });
     },
     scrub: 0.5
   });
 }, []);

 return (
   <div className="change z-[1] bg-[#0078ff] min-h-[250vh]">
     <WeAre />
     <Projects />
   </div>
 );
};

export default ChangeBack;