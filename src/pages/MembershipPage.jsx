import React from "react";
import { IoCheckmark, IoCheckmarkCircle } from "react-icons/io5";

const MembershipPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-20 px-8">
      <div className="bg-green rounded-md lg:w-[1000px] w-full py-14 flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-7">
          <h2 className="bg-whiteGreen px-4 py-1 rounded-sm text-green uppercase">
            Pricing
          </h2>
          <h1 className="text-3xl lg:text-5xl text-white font-dm max-sm:text-center ">
            Freelancer Membership
          </h1>
          <p className="text-whiteGreen max-md:text-center">
            Choose between monthly and yearly membership
          </p>
        </div>
        <div className="bg-white lg:w-[80%] w-[90%] lg:p-10 p-5 rounded-md">
          <div className="flex flex-col items-start gap-10">
            <p className="text-xl">What's included ?</p>
            <div className="flex flex-col items-start gap-6">
              <p className="text-md flex  items-center gap-2">
                {" "}
                <IoCheckmarkCircle className="text-lg lg:text-3xl text-green" />
                Daily Newsletter with latest writing jobs
                <span className="text-green cursor-pointer max-md:hidden">
                  See example
                </span>
              </p>
              <p className="text-md flex  items-center gap-2">
                {" "}
                <IoCheckmarkCircle className="text-lg lg:text-3xl text-green" />
                A beautiful public freelancer profile
                <span className="text-green cursor-pointer max-md:hidden">
                  See example
                </span>
              </p>
              <p className="text-md flex  items-center gap-2">
                {" "}
                <IoCheckmarkCircle className="text-lg lg:text-3xl text-green" />
                You support independent founders of Best Writing
                <span className="text-green cursor-pointer max-md:hidden">
                  See example
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-20 border-t-4 border-green lg:py-6 max-md:flex-col">
            <div className=" w-full max-md:border-b-4 lg:border-r-2 border-green lg:p-5 p-3 flex flex-col items-start gap-6 justify-between">
              <p className="text-md">
                <span className="text-4xl text-green">$9</span> USD / month
              </p>
              <button className="bg-green p-3 text-lightGreen rounded-md text-center w-full hover:opacity-80 transition-all">
                Start Monthly Membership
              </button>
            </div>
            <div className=" w-full lg:p-5 p-3 flex flex-col items-start gap-6 justify-between ">
              <p className="text-md">
                <span className="text-4xl text-green">$90</span> USD / year
              </p>
              <button className="bg-whiteYellow p-3 text-green rounded-md text-center w-full hover:opacity-80 transition-all">
                Start yearly Membership
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-5 text-white max-sm:flex-col max-sm:items-center">
          {" "}
          <p className="flex items-center gap-1 text-sm">
            {" "}
            <IoCheckmark /> Money-back guarantee
          </p>
          <p className="flex items-center gap-1 text-sm">
            {" "}
            <IoCheckmark /> Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
