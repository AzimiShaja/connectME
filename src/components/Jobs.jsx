import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import postings from "./Postings";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { FiExternalLink } from "react-icons/fi";

const Jobs = () => {
  return (
    <div className="py-20 flex flex-col items-center  bg-gray-50">
      <div className="flex flex-col items-center gap-4 max-w-[600px] px-8">
        <h1 className="bg-whiteGreen p-2 rounded-sm font-light  text-green ">
          Best Freelance Jobs
        </h1>
        <h1 className="text-4xl font-dm text-center text-green">
          Explore Thousands of Freelance Job Opportunities
        </h1>
        <p className="font-light text-center text-sm">
          We source freelance jobs from job portals, newsletters, social media,
          communities and selected partners. With personalized filters you can
          easily find the jobs you care about.
        </p>
        <div className="flex justify-evenly w-full mt-5 max-md:flex-col max-md:gap-4">
          <button className="flex items-center gap-2 border py-3 border-green bg-green text-white px-3  rounded-md hover:bg-white hover:text-green duration-300">
            {" "}
            <BsFillBriefcaseFill /> Browse Freelance Jobs
          </button>
          <button className="flex items-center gap-1 text-green rounded-md hover:bg-whiteGreen px-3 py-2 duration-300">
            Hiring? Post a Job <BsArrowRightShort />
          </button>
        </div>
      </div>
      <div className="lg:w-9/12  w-full px-8 mt-20 py-1 grid grid-cols-1 gap-3 ">
        {postings.map(({ id, title, img, type, company }) => {
          return (
            <div
              key={id}
              className="flex items-center max-sm:flex-col  justify-between border-t  py-4 px-2  posting"
            >
              <div className="flex items-center gap-10 max-sm:flex-col ">
                <img
                  src={img}
                  className="rounded-full w-[100px] h-[100px] object-cover border-2 border-green"
                />
                <div className="flex flex-col gap-2 max-sm:items-center">
                  <h1 className="text-lg font-bold max-md:text-md">{title}</h1>
                  <div className="flex md:items-center md:gap-10 max-md:flex-col max-sm:items-center">
                    <p className="text-gray-500 font-light">{type}</p>
                    <p className="flex items-center gap-2 font-light">
                      {" "}
                      <GiEarthAfricaEurope /> {company}
                    </p>
                  </div>
                </div>
              </div>
              <div className="date max-md:hidden">
                <h1 className="bg-whiteGreen px-2 py-1 text-green rounded-md">
                  {new Date().getFullYear()}
                </h1>
              </div>
              <div className="gap-4 hidden btns ">
                <button className="flex p-2 border rounded-lg items-center gap-2 bg-white text-sm hover:bg-gray-100">
                  Apply <FiExternalLink />
                </button>
                <button className="bg-green border border-green p-2 rounded-lg text-white text-sm hover:bg-white hover:text-green duration-300">
                  View Job
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
