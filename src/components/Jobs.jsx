import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import postings from "./Postings";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { FiExternalLink } from "react-icons/fi";
import { FaPenNib } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";
import { BsClockHistory } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineSchedule } from "react-icons/ai";

const Jobs = () => {
  return (
    <div className="py-20 flex flex-col  items-center  bg-gray-50">
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
                  <h1 className="text-md font-semibold max-md:text-md">
                    {title}
                  </h1>
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
              <div className="gap-4 hidden btns max-sm:mt-10">
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
      <div className="lg:w-9/12 w-full flex flex-col items-center gap-20">
        <div className="grid md:grid-cols-3 px-8 gap-20  mt-20">
          <div className="flex flex-col items-center md:items-start gap-3 justify-between">
            <h1 className="font-semibold text-md flex items-center gap-2">
              <FaPenNib /> Copywriting Jobs
            </h1>
            <p className="font-light text-gray-500 text-sm max-md:text-center">
              Explore copywriting opportunities from crafting compelling ad copy
              to persuasive sales letters.
            </p>
            <button className="hover:bg-whiteGreen py-2 px-1 flex items-center gap-2 duration-300 rounded-e-lg text-sm mt-5 text-green">
              Copywriting Jobs <BsArrowRight />
            </button>
          </div>

          <div className="flex flex-col items-center md:items-start  gap-3 justify-between ">
            <h1 className="font-semibold text-md flex items-center gap-3">
              <BiBriefcase /> Marketing Jobs
            </h1>
            <p className="font-light text-gray-500 text-sm max-md:text-center">
              Browse marketing related jobs from top companies, leading agencies
              to fast-growing startups.
            </p>
            <button className="hover:bg-whiteGreen py-2 px-1 flex items-center gap-2 duration-300 rounded-e-lg text-sm mt-5 text-green">
              Marketing Writing Jobs
              <BsArrowRight />
            </button>
          </div>

          <div className="flex flex-col items-center md:items-start  gap-3 justify-between">
            <h1 className="font-semibold text-md flex items-center gap-3">
              <BsClockHistory /> Technical Writing Jobs
            </h1>
            <p className="font-light text-gray-500 text-sm max-md:text-center">
              Discover technical writing opportunities from technical report
              writing to user manuals.
            </p>
            <button className="hover:bg-whiteGreen py-2 px-1 flex items-center gap-2 duration-300 rounded-e-lg text-sm mt-5 text-green">
              Marketing Writing Jobs <BsArrowRight />
            </button>
          </div>

          <div className="flex flex-col items-center md:items-start  gap-3 justify-between">
            <h1 className="font-semibold text-md flex items-center gap-3">
              {" "}
              <GiEarthAfricaEurope /> Remote Jobs
            </h1>
            <p className="font-light text-gray-500 text-sm max-md:text-center">
              Remote jobs for freelancers and full-time positions available to
              writers from anywhere.
            </p>
            <button className="hover:bg-whiteGreen py-2 px-1 flex items-center gap-2 duration-300 rounded-e-lg text-sm mt-5 text-green">
              Remote Jobs <BsArrowRight />
            </button>
          </div>

          <div className="flex flex-col items-center md:items-start  gap-3 justify-between">
            <h1 className="font-semibold text-md flex items-center gap-3">
              <IoMdCheckmarkCircleOutline /> Copywriting Jobs
            </h1>
            <p className="font-light text-gray-500 text-sm max-md:text-center">
              Explore copywriting opportunities from crafting compelling ad copy
              to persuasive sales letters.
            </p>
            <button className="hover:bg-whiteGreen py-2 px-1 flex items-center gap-2 duration-300 rounded-e-lg text-sm mt-5 text-green">
              Copywriting Jobs <BsArrowRight />
            </button>
          </div>

          <div className="flex flex-col items-center md:items-start  gap-3 justify-between">
            <h1 className="font-semibold text-md flex items-center gap-3">
              {" "}
              <AiOutlineSchedule /> Full-Time Writing Jobs
            </h1>
            <p className="font-light text-gray-500 text-sm max-md:text-center">
              Advance your career with full-time writing jobs at leading
              companies, media outlets, and publishers.
            </p>
            <button className="hover:bg-whiteGreen py-2 px-1 flex items-center gap-2 duration-300 rounded-e-lg text-sm mt-5 text-green">
              Copywriting Jobs <BsArrowRight />
            </button>
          </div>
        </div>
        {/*=====*/}
        <button className="bg-green border border-green hover:bg-white hover:text-green  p-2 text-white rounded-md flex items-center gap-3 transition-all">
          Browse Jobs <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Jobs;
