import React from "react";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-green py-14  gap-10">
      <div className="grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 w-9/12 max-lg:w-full px-8">
        <div className="flex flex-col items-start gap-4 col-span-2">
          <div className="flex items-center gap-1">
            <BiSolidBriefcaseAlt2 className="text-3xl text-white" />
            <h1 className="text-3xl font-indie text-white font-bold">
              connectME
            </h1>
          </div>
          <p className="text-white font-light text-sm text-justify">
            Best freelancing is an all-in-one platform connecting freelancers
            with businesses. Find the best freelance jobs in one place and hire
            freelancers.
          </p>
        </div>
        <div className="text-white flex flex-col items-start gap-2">
          <h1 className="mb-3 text-md text-gray-400">For freelancer</h1>
          <p className="hover:text-whiteGreen cursor-pointer ">Find a Job</p>
          <p className="hover:text-whiteGreen cursor-pointer ">
            Weekly Membership
          </p>
          <p className="hover:text-whiteGreen cursor-pointer ">
            Freelancer Membership
          </p>
          <p className="hover:text-whiteGreen cursor-pointer ">
            Freelance Application
          </p>
          <p className="hover:text-whiteGreen cursor-pointer ">Reviews</p>
        </div>
        <div className="text-white flex flex-col items-start gap-2">
          <h1 className="mb-3 text-md text-gray-400">For business</h1>
          <p className="hover:text-whiteGreen cursor-pointer ">Post a Job</p>
          <p className="hover:text-whiteGreen cursor-pointer ">
            Find a freelancer
          </p>
          <p className="hover:text-whiteGreen cursor-pointer ">
            Sponser newsletter
          </p>
        </div>
        <div className="text-white flex flex-col items-start gap-2">
          <h1 className="mb-3 text-md text-gray-400">Resources</h1>
          <p className="hover:text-whiteGreen cursor-pointer ">Writing Blog</p>
          <p className="hover:text-whiteGreen cursor-pointer ">Writing Wiki</p>
          <p className="hover:text-whiteGreen cursor-pointer ">Best Books</p>
          <p className="hover:text-whiteGreen cursor-pointer ">Book Notes</p>
          <p className="hover:text-whiteGreen cursor-pointer ">
            Famous Authors
          </p>
          <p className="hover:text-whiteGreen cursor-pointer ">Quotes</p>
        </div>
        <div className="text-white flex flex-col items-start gap-2">
          <h1 className="mb-3 text-md text-gray-400">Best Freelancing</h1>
          <p className="hover:text-whiteGreen cursor-pointer ">About</p>
          <p className="hover:text-whiteGreen cursor-pointer ">Changelog</p>
          <p className="hover:text-whiteGreen cursor-pointer ">
            Terms & conditions
          </p>
          <p className="hover:text-whiteGreen cursor-pointer ">Privacy</p>
        </div>
      </div>
      <div className="w-9/12 max-lg:w-full border-gray-400 border-t  flex items-center justify-center max-md:px-8 gap-4 md:justify-between pt-4 max-md:flex-col ">
        <p className="text-white text-sm max-md:text-center">
          © 2020-2023 Connect Me. Developed by Shaja Azimi based in Turkey 🇹🇷.
          Design taken from{" "}
          <a
            className="text-lightGreen font-bold"
            href="https://bestwriting.com/"
          >
            Best Writing
          </a>{" "}
        </p>

        <div className="flex items-center gap-3">
          <FaFacebook className="text-2xl cursor-pointer hover:scale-105 transition-all text-white" />
          <BsInstagram className="text-2xl cursor-pointer hover:scale-105 transition-all text-white" />
          <BsWhatsapp className="text-2xl cursor-pointer hover:scale-105 transition-all text-white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
