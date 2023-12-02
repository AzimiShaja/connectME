import bg from "../assets/hero.jpg";

import React from "react";

const Hero = () => {
  return (
    <div className="bg-green pattern grid grid-cols-2 max-md:grid-cols-1 items-center h-screen md:h-[700px] justify-center">
      <div className=" h-full flex items-center  justify-center flex-col  max-lg:py-10 px-8">
        <div className="max-w-lg flex flex-col gap-10 items-start max-md:items-center">
          <h1 className="lg:text-6xl md:text-5xl  text-4xl font-light  text-white font-dm lg:leading-[70px] max-md:text-center">
            Find The Best Freelancing Job
          </h1>
          <p className="font-light text-lg text-white max-md:text-center max-md:text-sm">
            We hand-pick paid development opportunities, including remote,
            freelance, contract, part-time, and full-time.
          </p>
          <div className="flex flex-col gap-4">
            <button className="bg-whiteYellow p-4 rounded-md hover:opacity-80 duration-300 text-green">
              Get Premium
            </button>
            <p className="text-white max-md:text-center">
              Get the best freelance jobs weekly. Free.
            </p>
          </div>
        </div>
      </div>
      <img src={bg} className="h-full object-cover " />
    </div>
  );
};

export default Hero;
