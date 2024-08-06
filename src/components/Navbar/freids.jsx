import React from 'react';
import image1 from '../../assets/friends (1).png';
import image2 from '../../assets/family.png';
import image3 from '../../assets/charity.png';
import Topproducts from './topproducts';

function Friends() {
  return (
    <div className='sm:mt-[200px]'>
      <h1 className='text-center text-sm sm:text-[40px] font-bold text-gray-500 sm:mb-10 mb-5'>
        Why choose Radfield?
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 sm:w-full sm:px-20 px-5'>
        <div className='flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500'>
          <img src={image2} className='w-40 h-40 mb-4'/>
          We are Family
          <p className='text-sm font-normal p-4'>
            We are treated as our carers' best family and
            we empower them to treat our clients with the same warmth and respect.
          </p>
        </div>
        <div className='flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500'>
          <img src={image1} className='w-40 h-40 mb-4'/>
          We are on your side
          <p className='text-sm font-normal p-4'>
            We are treated as our carers' best family and
            we empower them to treat our clients with the same warmth and respect.
          </p>
        </div>
        <div className='flex flex-col items-center text-center sm:text-[25px] text-[15px] font-bold text-gray-500'>
          <img src={image3} className='w-40 h-40 mb-4'/>
          We are proud to care
          <p className='text-sm font-normal p-4'>
            We are treated as our carers' best family and
            we empower them to treat our clients with the same warmth and respect.
          </p>
        </div>
      </div>
      <div className='mt-10'>
        <Topproducts />
      </div>
    </div>
  );
}

export default Friends;
