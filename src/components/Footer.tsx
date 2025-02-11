import react from 'react';
import { adIcons } from '@/data/icons';
import { constantsLinks } from '@/data/contanstLinks';

const Footer: react.FC = () => {
  return (
    <footer className='bg-AdBlue text-textBlack p-10'>
        <div className='mid:flex justify-between'>

          <div className='flex mid:justify-center gap-16 mb-16'>
           <div>
             <h3 className='mb-2'>Explorer</h3>
             <ul>
               <a href='#service' className='font-bold'>
                 <li>Services</li>
               </a>
               <a href='#projects' className='font-bold truncate'>
                 <li>Our Work</li>
               </a>
                <a href={`${constantsLinks}/news`} className='font-bold'>
                 <li>News</li>
               </a>
               <a href={`${constantsLinks}/about`} className='font-bold'>
                 <li>About</li>
               </a>
               <a href={`${constantsLinks}/careers-jobs`} className='font-bold'>
                 <li>Careers</li>
               </a>
             </ul>
           </div>

           <div className='col-span-3 sm:col-span-2'>
              <h3 className='mb-2'>Office</h3>
              <ul>
                  <li className='font-bold truncate'>North America</li>
                  <li  className='font-bold'>Europe</li>
                  <li  className='font-bold'>Latam</li>
              </ul>
            </div>
          </div>

          <div className='text-left mid:text-right col-span-4 sm:col-span-1'>
            <ul>
              <a href='https://www.linkedin.com/company/adviters/?viewAsMember=true'>
                <li>Linkedin</li>
              </a>
              <a href='https://www.instagram.com/adviters_/'>
                <li>Instagram</li>
              </a>
              <a href='https://www.youtube.com/channel/UC1WYkcUf7ZwLTwUi7QNR6og'>
                <li>Youtube</li>
              </a>
              <a href='mailto:info@adviters.com' className='block pt-6'>
                info@adviters.com
              </a>
            </ul>
          </div>

        </div>
        
        <div className='sm:flex items-end justify-between mt-12 sm:-mt-12'>
          <div className='flex items-center'>
            <img src={adIcons[3].src} alt='Adviter black logo' className='h-12 md:h-16 ' />
          </div>
          <div className='flex mt-16 sm:justify-center items-end sm:items-center'>
            <img src='/footer/compliant.png' alt='Picture about HIPAA' className='h-12 md:h-16' />
            <img src='/footer/gptw.png' alt='Picture about gptw' className='h-12 md:h-16  mx-4' />
            <img src='/footer/iram.png' alt='Picture about iram' className='h-12 md:h-16 ' />
          </div>
        </div>
    </footer>
  );
};

export default Footer;