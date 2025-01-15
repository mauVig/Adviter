import { useState } from 'react';
import type { Arrow } from '@/data/icons'; // Asumiendo que tienes el tipo Icon exportado
import st from '@/styles/navBar.module.css';

interface NavbarProps {
  currentIcon: Arrow ;
}

const Navbar: React.FC<NavbarProps> = ({ currentIcon }) => {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <div className='w-full fixed top-0 flex justify-center z-[150]'>
      <nav className='mx-auto w-full flex justify-between py-2 px-8'>
        <div className='flex items-center h-10 text-textGray text-xl'>
          <img 
            src={typeof currentIcon.src === 'string' ? currentIcon.src : ''} 
            alt='Logo de Adviter' 
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
              <a href="" className='px-6 py-2 hover:text-AdBlue transition-all duration-300'>
                <li>About</li>
              </a>
              <a href="#careers" className='px-6 py-2 hover:text-AdBlue transition-all duration-300'>
                <li>Careers</li>
              </a>
            </ul>
          </div>

          <div className='flex items-center'>
            <button className='py-2 px-4 bottom-4 max-w-fit rounded-md text-textGray bg-AdBlue'>
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
              <div className="w-[50%] h-[1px] bg-textGray rounded-sm transition-all duration-300 origin-left translate-y-[0.35rem] peer-checked:rotate-[-45deg] peer-checked:translate-x-[2.5px] peer-checked:w-[45%]"></div>
              <div className="w-[50%] h-[1px] bg-textGray rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
              <div className="w-[50%] h-[1px] bg-textGray rounded-md transition-all duration-300 origin-left -translate-y-[0.35rem] peer-checked:rotate-[45deg] peer-checked:translate-x-[2.5px] peer-checked:w-[45%]"></div>
            </div>
          </label>
        </div>

        <div className={`absolute top-0 left-0 w-full h-screen bg-textBlack z-[500] ${check ? 'block' : 'hidden'}`}>
          Holis
        </div>
      </nav>
    </div>
  );
};

export default Navbar;