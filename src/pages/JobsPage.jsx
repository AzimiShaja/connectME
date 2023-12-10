import React from "react";
import { FaPenNib } from "react-icons/fa";
import { FiExternalLink, FiSearch } from "react-icons/fi";
import { GiEarthAfricaEurope } from "react-icons/gi";
import postings from "../components/Postings";
const JobsPage = () => {
  return (
    <div className="bg-gray-50 py-20 flex flex-col items-center justify-center gap-10">
      <div className="lg:w-9/12 px-8 w-full flex flex-col items-center gap-7">
        <div className="flex justify-between items-center w-full max-md:flex-col gap-4">
          <h1 className="text-4xl max-md:text-3xl font-dm max-md:text-center">
            Latest Freelancing Jobs
          </h1>
          <button className="flex items-center gap-1 bg-green text-whiteGreen p-3 rounded-sm max-md:w-full justify-center">
            <FaPenNib /> Post a Job
          </button>
        </div>
        <div className="flex items-center gap-1 border w-full p-3 bg-white shadow-md rounded-sm">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent outline-none"
          />
          <FiSearch className="text-2xl text-green cursor-pointer" />
        </div>
      </div>
      <div className="lg:w-9/12  w-full px-8 py-1 grid grid-cols-1 gap-3 ">
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
      <button className="bg-green text-whiteGreen p-3 border border-green rounded-md hover:bg-white hover:text-green duration-300">
        Show More Jobs
      </button>
    </div>
  );
};

export default JobsPage;
