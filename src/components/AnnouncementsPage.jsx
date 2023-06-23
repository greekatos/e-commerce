import React, { useState } from "react";
import { announcements } from "../productsData";

export const AnnouncementsPage = () => {
  const [expanded, setExpanded] = useState({});

  const handleToggleExpand = (index) => {
    setExpanded((prev) => {
      return { ...prev, [index]: !prev[index] };
    });
  };
  return (
    <div>
      <h2 className='text-2xl text-center font-bold pt-10 text-[#0071BD]'>
        Announcements
      </h2>
      <div className='grid grid-cols-3 gap-4 m-auto justify-center w-[70%]'>
        {announcements.map((ann, index) => {
          return (
            <div className='flex flex-col p-5'>
              <div className='relative'>
                <img
                  className='object-cover w-full h-[18rem]'
                  src={ann.image}
                  alt=''
                />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30' />
              </div>
              <div className='bg-[#E9E9E9] p-5 flex-grow'>
                <h3 className='mt-2 text-xl font-bold  text-[#000000]'>
                  {ann.title}
                </h3>
                <p className='mt-4'>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};
