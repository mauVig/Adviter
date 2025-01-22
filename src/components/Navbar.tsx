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
      <nav className={`mx-auto w-full flex justify-between py-2 px-8 transition-all duration-300  ${
        !isAtTop ? 'bg-textBlack/25 backdrop-blur-3xl' : ''
      }`}>
        <div className='flex items-center h-10 text-textGray text-xl'>
          <img
            src={typeof currentIcon.src === 'string' ? currentIcon.src : ''}
            alt='Adviter logo'
            className={st.icon}
          />
        </div>

        <div className='flex items-center xl:items-baseline'>
          <div className='hidden xl:flex items-center'>
            <ul className='flex text-textGray text-xl'>
              <a href="#service" className='px-6 py-2 hover:text-AdBlue transition-all duration-300'>
                <li>Service</li>
              </a>
              <a href="#projects" className='px-6 py-2 hover:text-AdBlue transition-all duration-300'>
                <li>Our work</li>
              </a>
              <a href="#blog" className='px-6 py-2 hover:text-AdBlue transition-all duration-300'>
                <li>News</li>
              </a>
              <a href="#careers" className='px-6 py-2 hover:text-AdBlue transition-all duration-300'>
                <li>About</li>
              </a>
              <a href="#careers" className='px-6 py-2 hover:text-AdBlue transition-all duration-300'>
                <li>Careers</li>
              </a>
            </ul>
          </div>

          <div className='flex items-center'>
            <button className='py-2 px-4 bottom-4 max-w-fit rounded-md text-textGray bg-AdBlue hover:scale-105 hover:bg-AdDarkBlue transition-all duration-200 active:scale-95'>
              <span className='text-lg font-semibold truncate'>CONTACT US</span>
            </button>
          </div>

          <label className='bg-AdBlue rounded-md relative ml-1 z-40 xl:hidden block'>
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

        <div className={`absolute top-0 left-0 w-full h-screen bg-textBlack text-textGray flex justify-center items-center text-8xl text-center z-[500] ${check ? 'block' : 'hidden'}`}>
            <button className="absolute  right-10 top-10" onClick={() => setCheck(false)}>
              <div className="border-[1px] w-[40px] h-1 bg-textGray rotate-45"></div>
              <div className="border-[1px] w-[40px] h-1 bg-textGray -rotate-45"></div>
            </button>
            <ul>
              <a href="#service" className='hover:text-AdBlue' onClick={() => setCheck(false)}>
                <li>Service</li>
              </a>
              <a href="#projects" className='hover:text-AdBlue' onClick={() => setCheck(false)}>
                <li>Our work</li>
              </a>
              <a href="#blog" className='hover:text-AdBlue' onClick={() => setCheck(false)}>
                <li>News</li>
              </a>
              <a href="#careers" className='hover:text-AdBlue' onClick={() => setCheck(false)}>
                <li>About</li>
              </a>
              <a href="#careers" className='hover:text-AdBlue' onClick={() => setCheck(false)}>
                <li>Careers</li>
              </a>
            </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;