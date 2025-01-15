import React from 'react';
import { marksOfClients2 } from '@/data/MarksOfClients'

const SlideMarks2:React.FC = () => {
    return (
        <div className='mx-auto py-16 px-10 xl:px-0'>
            <div className='max-w-screen-lg mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 '>
                
                <h2 className='text-AdBlue font-bold text-4xl text-center lg:text-left col-span-4 lg:col-span-1 transition-all duration-300 ease-out mb-10 align-bottom'>Our <br />Partners</h2>
               
                <div className='flex justify-center items-center col-span-1'>
                    <img src={marksOfClients2[0].img} alt="" className='h-[80px]'/>
                </div>
                <div className='flex justify-center items-center col-span-1'>
                    <img src={marksOfClients2[2].img} alt="" className='h-[80px]'/>
                </div>
                <div className='flex justify-center items-center col-span-4 sm:col-span-1 mt-10 sm:mt-0'>
                    <img src={marksOfClients2[3].img} alt="" className='h-[80px]'/>
                </div>
            </div>
        </div>
    );
}

export default SlideMarks2;