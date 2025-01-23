import react from 'react';
import { adIcons } from '@/data/icons';

const Footer: react.FC = () => {
  return (
    <footer className='bg-AdBlue text-textBlack p-10'>
        <div className='mid:flex justify-between'>

          <div className='flex mid:justify-center gap-16 mb-16'>

           <div>
             <h3 className='mb-2'>Explorer</h3>
             <ul>
               <a href='#service' target='_blank' className='font-bold'>
                 <li>Services</li>
               </a>
               <a href='#projects' target='_blank' className='font-bold truncate'>
                 <li>Out Work</li>
               </a>
                <a href='https://adviters.com/pulse/' target='_blank' className='font-bold'>
                 <li>News</li>
               </a>
               <a href='https://adviters.com/about/' target='_blank' className='font-bold'>
                 <li>About</li>
               </a>
               <a href='https://adviters.com/careers-jobs/' target='_blank' className='font-bold'>
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
          </div>

          <div className='text-left sm:text-right col-span-4 sm:col-span-1'>
            <ul>
              <a href='https://www.linkedin.com/company/adviters/?viewAsMember=true' target='_blank'>
                <li>Linkedin</li>
              </a>
              <a href='https://www.linkedin.com/company/adviters/?viewAsMember=true' target='_blank'>
                <li>Instagram</li>
              </a>
              <a href='https://www.youtube.com/channel/UC1WYkcUf7ZwLTwUi7QNR6og' target='_blank'>
                <li>Youtube</li>
              </a>
              <a href='mailto:info@adviters.com' className='block pt-6' target='_blank'>
                info@adviters.com
              </a>
            </ul>
          </div>

        </div>
        
        <div className='sm:flex items-end justify-between mt-12 sm:-mt-12'>
          <div className='flex items-center'>
            <img src={adIcons[3].src} alt='Adviter black logo' className='h-12' />
          </div>
          <div className='flex mt-16 sm:justify-center items-end sm:items-center'>
            <img src='/footer/compliant.png' alt='Picture about HIPAA' className='h-12 scale-110' />
            <img src='/footer/gptw.png' alt='Picture about gptw' className='w-12 mx-4' />
            <img src='/footer/iram.png' alt='Picture about iram' className='w-12' />
          </div>
        </div>
    </footer>
  );
};

export default Footer;