import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
const Header = () => {
  return (
    <>
      <header className="flex items-center justify-around p-5 max-md:justify-between sticky z-50 top-0 bg-white border-b">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-1">
            <BiSolidBriefcaseAlt2 className="text-3xl text-green" />
            <h1 className="text-3xl font-indie text-green font-bold">
              connectME
            </h1>
          </div>
          <ul className="flex gap-6  nav-links max-md:hidden">
            <li>Jobs</li>
            <li>Membership</li>
            <li>Newsletter</li>
            <li>Freelancers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <button className="border px-4 py-1 border-gray-200 rounded-md font-light text-md hover:bg-green hover:text-white duration-300 max-[400px]:hidden">
            Sign up
          </button>
          <GiHamburgerMenu className="text-3xl hover:text-green md:hidden" />
        </div>
      </header>
    </>
  );
};

export default Header;
