import { useState, useEffect } from 'react';
import type { Arrow } from '@/data/icons';
import st from '@/styles/navBar.module.css';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [prevScroll, setPrevScroll] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsAtTop(currentScroll === 0);
      
      if (currentScroll <= 0) {
        setScrollDirection('up');
        return;
      }
      
      if (currentScroll > prevScroll) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      setPrevScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScroll]);

  return { scrollDirection, isAtTop };
};

interface NavbarProps {
  currentIcon: Arrow;
}

const Navbar: React.FC<NavbarProps> = ({ currentIcon }) => {
  const [check, setCheck] = useState<boolean>(false);
  const { scrollDirection, isAtTop } = useScrollDirection();

  return (
    <div className={`w-full fixed transition-transform duration-300 ${
      scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
    } top-0 flex justify-center z-[150]`}>
      <nav className={`mx-auto w-full flex justify-between py-2 px-8 transition-all duration-300 ${
        !isAtTop ? 'bg-textBlack/25 backdrop-blur-3xl' : ''
      }`}>
        <a href='#' className='flex items-center h-10 text-textGray text-xl'>
          <img
            src={typeof currentIcon.src === 'string' ? currentIcon.src : ''}
            alt='Adviter logo'
            className={st.icon}
          />
        </a>

        <div className='flex items-center xl:items-baseline'>
          <div className='hidden xl:flex items-center'>
            <ul className='flex text-textGray text-xl'>
              <a href="#service" className='px-6 py-2 hover:text-AdBlue transition-all duration-300'>
                <li>Service</li>
              </a>
              <a href="#projects" className='px-6 py-2 hover:text-AdBlue transition-all duration-300'>
                <li>Our work</li>
              </a>
              <a href="https://adviters.com/pulse/" target='_blank' className='px-6 py-2 hover:text-AdBlue transition-all duration-300'>
                <li>News</li>
              </a>
              <a href="https://adviters.com/about/" target='_blank' className='px-6 py-2 hover:text-AdBlue transition-all duration-300'>
                <li>About</li>
              </a>
              <a href="https://adviters.com/careers-jobs/" target='_blank' className='pl-6 py-2 hover:text-AdBlue transition-all duration-300'>
                <li>Careers</li>
              </a>
            </ul>
          </div>

        

          <label className='bg-AdBlue rounded-md relative z-40 block xl:hidden '>
            <div className="w-[43px] h-[43px] cursor-pointer flex flex-col items-center justify-center">
              <input
                className="hidden peer"
                type="checkbox"
                onChange={() => setCheck(prev => !prev)}
              />
              <div className="w-[50%] h-[1px] bg-textGray rounded-sm transition-all duration-300 origin-left translate-y-[0.35rem]"></div>
              <div className="w-[50%] h-[1px] bg-textGray rounded-md transition-all duration-300 origin-center"></div>
              <div className="w-[50%] h-[1px] bg-textGray rounded-md transition-all duration-300 origin-left -translate-y-[0.35rem]"></div>
            </div>
          </label>
        </div>

        <div 
          className={`absolute top-0 left-0 w-full h-screen bg-textBlack text-textGray flex justify-center flex-col items-center text-4xl mid:text-6xl text-center z-[500] transition-all duration-500 ease-in-out
            ${check ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}
          >
          <button 
            className="absolute right-8 top-6" 
            onClick={() => setCheck(false)}
            >
            <div className="border-[1px] w-[40px] h-1 bg-textGray rotate-45 translate-y-[0.35rem]"></div>
            <div className="border-[1px] w-[40px] h-1 bg-textGray -rotate-45 translate-y-[0.15rem]"></div>
          </button>
          
          <ul className="space-y-8">
            <a 
              href="#service" 
              className={`block  hover:text-AdBlue hover:scale-110 delay-[300ms] transition-all ease-in-out  
                ${check ? 'opacity-100 transladuration-500 te-x-0' : 'opacity-0 translate-x-10'}`}
              onClick={() => setCheck(false)}
            >
              <li>Service</li>
            </a>
            <a 
              href="#projects" 
              className={`block hover:text-AdBlue hover:scale-110 delay-[400ms] transition-all ease-in-out ${check ? 'opacity-100 translate-x-0' : 'duration-500 opacity-0 translate-x-10'}`}
              onClick={() => setCheck(false)}
            >
              <li>Our work</li>
            </a>
            <a 
              href="https://adviters.com/pulse/" target='_blank' 
              className={`block hover:text-AdBlue hover:scale-110 delay-[500ms] transition-all ease-in-out ${check ? 'opacity-100 translate-x-0' : 'duration-500 opacity-0 translate-x-10'}`}
              onClick={() => setCheck(false)}
            >
              <li>News</li>
            </a>
            <a 
              href="https://adviters.com/about/"  target='_blank'
              className={`block hover:text-AdBlue hover:scale-110 delay-[600ms] transition-all ease-in-out ${check ? 'opacity-100 translate-x-0' : 'duration-500 opacity-0 translate-x-10'}`}
              onClick={() => setCheck(false)}
            >
              <li>About</li>
            </a>
            <a 
              href="https://adviters.com/careers-jobs/" target='_blank'
              className={`block hover:text-AdBlue hover:scale-110 delay-[700ms] transition-all ease-in-out ${check ? 'opacity-100 translate-x-0' : 'duration-500 opacity-0 translate-x-10'}`}
              onClick={() => setCheck(false)}
            >
              <li>Careers</li>
            </a>
          </ul>
          <a 
            href='https://adviters.com/contact/' target='_blank'
            className={`py-2 px-4 mt-[32px] text-xl mid:text-3xl rounded-md text-textGray bg-AdBlue font-semibold truncate delay-[1000ms] transition-all ease-in-out ${check ? 'opacity-100 translate-y-0' : 'duration-1000 opacity-0 translate-y-10'}`}
            onClick={() => setCheck(false)}
            >
            CONTACT US
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;