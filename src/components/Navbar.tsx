import { useState } from 'react';
import logo from '../assets/icons/logo.png';

const Navbar: React.FC  = () => {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <div className='w-full fixed top-0 flex justify-center z-[600]'>
      <nav className='max-w-screen-lg mx-auto w-full flex justify-between py-2 px-2 lg:px-0'>
        <div className='flex items-center h-8 text-textGray text-xl'>
          <img src={logo.src} alt='Logo de Adviter' className='h-8' />
          <p className='text-3xl ml-[2px] font-bold text-[#ffff]'>Adviters</p>
        </div>
        <div className='flex items-center h-8 gap-[3px]'>
          <div className='flex items-center'>
            <button className='h-[1.6rem] px-4 bottom-4 max-w-fit rounded-[.2rem] text-textGray bg-AdBlue'>
              <span className='text-xs'>CONTACT US</span>
            </button>
          </div>
          <label className='bg-AdBlue rounded-[.2rem] relative z-40'>
            <div className="w-8 h-[1.6rem] cursor-pointer flex flex-col items-center justify-center">
              <input className="hidden peer" type="checkbox" onChange={()=> setCheck(pre => !pre)}/>
              <div className="w-[50%] h-[1px] bg-textGray rounded-sm transition-all duration-300 origin-left translate-y-[0.35rem] peer-checked:rotate-[-45deg] peer-checked:translate-x-[2.5px] peer-checked:w-[45%]"></div>
              <div className="w-[50%] h-[1px] bg-textGray rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
              <div className="w-[50%] h-[1px] bg-textGray rounded-md transition-all duration-300 origin-left -translate-y-[0.35rem] peer-checked:rotate-[45deg] peer-checked:translate-x-[2.5px] peer-checked:w-[45%]"></div>
            </div>
          </label>
        </div>
      </nav>
      <div className={`absolute top-0 left-0  w-full h-screen bg-textBlack z-[500] ${check ? 'block' : 'hidden'}`}>
      Holis
      </div>
    </div>
  );
};

export default Navbar;
