import React from "react";
import port from "../assets/port.jpg";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { BiUser } from "react-icons/bi";

const Portfolio = () => {
  return (
    <div className="py-20 flex flex-col items-center sm:px-8">
      <div className="lg:w-9/12  w-full flex max-md:flex-col max-lg:px-8 max-lg:py-8 gap-20  sm:rounded-lg bg-green justify-between">
        <div className="flex flex-col justify-around text-white lg:py-10 lg:px-20 gap-5 max-w-[700px]">
          <div className="flex flex-col items-start max-md:items-center gap-5 border-b border-gray-500 pb-10">
            <p className="bg-whiteGreen p-2 lg:w-fit text-green rounded-md text-sm max-md:text-center">
              Best Freelance Portfolio
            </p>
            <h1 className="lg:text-4xl text-3xl max-md:text-center  font-dm lg:leading-[50px]">
              Showcase Your Best works With a Beautiful Portfolio
            </h1>
            <p className="text-sm font-light max-md:text-center">
              No more sending doc files to showcase your writing examples.
              Attract more clients with a beautiful free writer profile and
              portfolio.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-sm font-light flex items-center gap-4">
              <AiOutlineCloudUpload className="text-4xl" />
              Work Your Way. List your work experience, preferred locations, job
              types and rates.
            </p>
            <p className="text-sm font-light flex items-center gap-4">
              <FaLock className="text-4xl" />
              Show Yourself. Introduce yourself, choose skills and topics you
              write about, and list your best writing examples.
            </p>
            <p className="text-sm font-light flex items-center gap-4">
              <BiUser className="text-4xl" />
              Get Hired. Your portfolio has a direct hire button that links to
              your email or contact form.
            </p>
            <button className="bg-whiteYellow p-4 rounded-md hover:opacity-80 duration-300 text-green w-fit max-md:w-full">
              Create your free portfolio
            </button>
          </div>
        </div>
        <div>
          <img
            src={port}
            className="lg:h-full max-xl:hidden object-cover rounded-r-lg lg:max-w-[660px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
