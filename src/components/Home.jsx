import React from "react";
import { Announcements } from "./Announcements";
import HeroGrid from "./HeroGrid";
import MostPopular from "./MostPopular";

export const Home = () => {
  return (
    <>
      <div className={`flex justify-center mt-4 `}>
        <HeroGrid />
      </div>
      <div className='flex mt-16 justify-center'>
        <MostPopular />
      </div>
      <div className='flex mt-16 h-[75vh] justify-center'>
        <Announcements />
      </div>
    </>
  );
};
