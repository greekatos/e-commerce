import React, { useState } from "react";
import { Link } from "react-router-dom";
import { announcements } from "../productsData";
import { scrollToTop } from "./Navbar";

export const Announcements = () => {
  const [expanded, setExpanded] = useState({});

  const handleToggleExpand = (index) => {
    setExpanded((prev) => {
      return { ...prev, [index]: !prev[index] };
    });
  };
  return (
    <div className='flex flex-col items-center self-stretch xl:w-[60%] md:w-[80%] bg-[#E9E9E9] mt-20'>
      <div className='flex p-6 w-full'>
        {announcements.slice(1, 4).map((ann, index) => {
          return (
            <div className='flex flex-col p-6 w-[34%]'>
              <div className='relative'>
                <img
                  className='object-cover w-[21rem] h-60 '
                  src={ann.image}
                  alt=''
                />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30' />
              </div>
              <h3 className='mt-8 text-xl font-bold text-[#000000]'>
                {ann.title}
              </h3>
              <p className='mt-4 w-80'>
                {expanded[index]
                  ? ann.description
                  : `${ann.description.slice(0, 100)}...`}
                {!expanded[index] && (
                  <span
                    onClick={() => handleToggleExpand(index)}
                    className='text-[#3390ce] cursor-pointer'
                  >
                    More
                  </span>
                )}
                {expanded[index] && (
                  <div
                    onClick={() => handleToggleExpand(index)}
                    className='text-[#3390ce] cursor-pointer'
                  >
                    Less
                  </div>
                )}
              </p>
            </div>
          );
        })}
      </div>
      <Link to='/announcements' onClick={() => scrollToTop()}>
        <button className='px-4 py-2  w-48 border-2 border-white text-[#3390ce] font-bold text-lg hover:bg-[#228B22] hover:text-white'>
          Learn More
        </button>
      </Link>
    </div>
  );
};
