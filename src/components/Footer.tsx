import react from 'react';
import { adIcons } from '@/data/icons';

const Footer: react.FC = () => {
  return (
    <footer className='bg-AdBlue text-textBlack p-10'>
      <div className="max-w-screen-lg mx-auto">
        <div className='grid grid-cols-4 gap-10'>
          <div>
            <h3 className='mb-2'>Explorer</h3>
            <ul>
              <a href='#service' className='font-bold'>
                <li>Services</li>
              </a>
              <a href='#projects' className='font-bold truncate'>
                <li>Out Work</li>
              </a>
              <a href='#blog' className='font-bold'>
                <li>News</li>
              </a>
              <a href='#careers' className='font-bold'>
                <li>About</li>
              </a>
              <a href='#careers' className='font-bold'>
                <li>Careers</li>
              </a>
            </ul>
          </div>

          <div className='col-span-3 sm:col-span-2'>
            <h3 className='mb-2'>Office</h3>
            <ul>
              <a href='' className='font-bold truncate'>
                <li>North America</li>
              </a>
              <a href='' className='font-bold'>
                <li>Europe</li>
              </a>
              <a href='' className='font-bold'>
                <li>Latam</li>
              </a>
            </ul>
          </div>

          <div className='text-left sm:text-right col-span-4 sm:col-span-1'>
            <ul>
              <a href=''>
                <li>Linkedin</li>
              </a>
              <a href=''>
                <li>Instagram</li>
              </a>
              <a href=''>
                <li>Youtube</li>
              </a>
              <a href='' className='block pt-6'>
                <li>info@adviters.com</li>
              </a>
            </ul>
          </div>
        </div>
        
        <div className='sm:flex items-end justify-between mt-12 sm:-mt-12'>
          <div className='flex items-center'>
            <img src={adIcons[3].src} alt='' className='h-12' />
          </div>
          <div className='flex mt-16 sm:justify-center items-end sm:items-center'>
            <img src='/footer/compliant.png' alt='Picture about HIPAA' className='h-12 scale-110' />
            <img src='/footer/gptw.png' alt='Picture about gptw' className='w-12 mx-4' />
            <img src='/footer/iram.png' alt='Picture about iram' className='w-12' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;