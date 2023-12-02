import React from "react";
import img from "../assets/hero.webp";

const Newsletter = () => {
  return (
    <div className="py-20 flex flex-col bg-white items-center px-8">
      <div className="flex max-md:flex-col gap-10 justify-between lg:w-9/12 w-full items-center">
        <div className="flex flex-col items-start gap-5 max-md:items-center">
          <h1 className="bg-whiteGreen p-2 rounded-sm font-light  text-green max-md:text-center">
            Newsletter
          </h1>
          <h1 className="text-4xl font-dm text-center ">
            Weekly Jobs Newsletter For Freelancers
          </h1>
          <p className="text-gray-500 ">
            Every Wednesday, you'll receive a free email with all the latest job
            postings.
          </p>
          <form className="w-full flex gap-2 max-md:flex-col">
            <input
              className="border p-3 w-full outline-none rounded-sm"
              type="email"
              required
              placeholder="Your Email"
            />
            <button className="bg-green border min-w-[200px] rounded-sm border-green hover:bg-white hover:text-green  p-2 text-white  flex items-center justify-center gap-3 transition-all">
              Send me Newsletter
            </button>
          </form>
          <p className="text-gray-500 text-md">
            Join 23,033 newsletter readers!.{" "}
            <span className="text-green cursor-pointer">
              Let me see it first
            </span>{" "}
          </p>
        </div>
        <div>
          <img
            className="w-[500px] h-[400px] object-cover rounded-sm"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
