import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
const Header = () => {
  return (
    <>
      <header className="flex items-center justify-evenly p-5 max-md:justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-4">
            <BiSolidBriefcaseAlt2 className="text-3xl text-green-900" />
            <h1 className="text-3xl font-indie text-green-900">connectME</h1>
          </div>
          <ul className="flex gap-6  nav-links max-md:hidden">
            <li>Jobs</li>
            <li>Membership</li>
            <li>Newsletter</li>
            <li>Writers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <button className="border px-2 py-1 border-green-900 rounded-md font-light text-md hover:bg-blue-50 duration-300">
            Sign up
          </button>
          <GiHamburgerMenu className="text-3xl hover:text-blue-500 md:hidden" />
        </div>
      </header>
    </>
  );
};

export default Header;
