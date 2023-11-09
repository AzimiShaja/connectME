import React from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiBriefcase, BiPen } from "react-icons/bi";
import {
  BsArrowRight,
  BsArrowRightShort,
  BsFillBuildingFill,
  BsAlarmFill,
} from "react-icons/bs";

const Company = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-20">
      <div className="flex flex-col items-center gap-4 max-w-[600px] px-8">
        <h1 className="bg-whiteGreen p-2 rounded-sm font-light  text-green ">
          Browse Company Profiles and Open Positions
        </h1>
        <h1 className="text-4xl font-dm text-center text-green">
          Discover Top Hiring Companies
        </h1>
        <p className="font-light text-center text-sm">
          Discover leading companies hiring talented developers. Our
          comprehensive database empowers you to discover the ideal opportunity
          for your career.
        </p>
        <div className="flex justify-evenly w-full mt-5 max-md:flex-col max-md:gap-4">
          <button className="flex items-center gap-2 border py-3 border-green bg-green text-white px-3  rounded-md hover:bg-white hover:text-green duration-300">
            <BsFillBuildingFill /> Show Companies{" "}
            <BsArrowRightShort className="text-2xl" />
          </button>
          <button className="flex items-center gap-1 text-green rounded-md hover:bg-whiteGreen px-3 py-2 duration-300">
            Business? Create Profile <BsArrowRightShort />
          </button>
        </div>
      </div>

      <div className="lg:w-9/12 w-full">
        <div className="grid grid-cols-4"></div>
      </div>

      <div className="lg:w-9/12 w-full px-8 flex flex-col items-center gap-14">
        <div className="grid md:grid-cols-3 px-8 gap-20  mt-20">
          <div className="flex flex-col items-center md:items-start gap-3">
            <h1 className="font-semibold text-md flex items-center gap-2">
              <BsAlarmFill /> Instant Jobs Alerts
            </h1>
            <p className="font-light text-gray-500 text-sm max-md:text-center">
              Stay ahead with tailored alerts for the latest writing jobs from
              top businesses, delivered straight to your inbox.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start  gap-3">
            <h1 className="font-semibold text-md flex items-center gap-3">
              <AiOutlineSchedule /> Comprehensive Hiring Insights
            </h1>
            <p className="font-light text-gray-500 text-sm max-md:text-center">
              Proactively engage with potential employers by accessing their
              hiring history and fostering meaningful connections.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start  gap-3">
            <h1 className="font-semibold text-md flex items-center gap-3">
              {" "}
              <BiPen /> Streamlined Job Discovery
            </h1>
            <p className="font-light text-gray-500 text-sm max-md:text-center">
              Effortlessly explore open positions and submit applications
              directly through our user-friendly platform.
            </p>
          </div>
        </div>
        <button className="bg-green border border-green hover:bg-white hover:text-green  p-2 text-white rounded-md flex items-center gap-3 transition-all">
          Browse Hiring Companies <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Company;
