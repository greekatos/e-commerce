import React from "react";

const HeroGrid = () => {
  return (
    <div className='xl:w-[60%] md:w-[80%] grid grid-cols-4 gap-4'>
      <div className='grid grid-rows-1 col-span-2 gap-4'>
        <div className='aspect-w-2 aspect-h-2 relative'>
          {/* Square Image 1 */}
          <img
            src='images/photo-4.jpg'
            alt=''
            className='object-cover w-full h-full'
          />
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30 transition-opacity duration-500 hover:opacity-50' />
          <div className='absolute bottom-4 left-4 text-2xl text-white font-bold'>
            Serums
          </div>
        </div>
      </div>
      <div className='aspect-w-1 aspect-h-1 relative'>
        <img
          src='images/photo-7.jpg'
          alt=''
          className='object-cover w-full h-full'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30 transition-opacity duration-500 hover:opacity-50' />
        <div className='absolute bottom-2 left-2 text-2xl text-white font-bold'>
          Moisturizers
        </div>
      </div>
      <div className='grid grid-rows-2 gap-4'>
        <div className='aspect-w-2 aspect-h-2 relative'>
          <img
            src='images/photo-6.jpg'
            alt=''
            className='object-cover w-full h-full'
          />
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30 transition-opacity duration-500 hover:opacity-50' />
          <div className='absolute bottom-2 left-2 text-2xl text-white font-bold'>
            Sets
          </div>
        </div>
        <div className='aspect-w-1 aspect-h-1 relative'>
          <img
            src='images/photo-5.jpg'
            alt=''
            className='object-cover w-full h-full'
          />
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30 transition-opacity duration-500 hover:opacity-50' />
          <div className='absolute bottom-2 left-2 text-2xl text-white font-bold'>
            Soaps
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGrid;
