import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="flex items-center justify-around p-5 max-md:justify-between sticky z-50 top-0 bg-white border-b">
        <div className="flex items-center gap-10">
          <Link to={"/"} className="flex items-center gap-1">
            <BiSolidBriefcaseAlt2 className="text-3xl text-green" />
            <h1 className="text-3xl font-indie text-green font-bold">
              connectME
            </h1>
          </Link>
          <ul className="flex gap-6  nav-links max-md:hidden">
            <Link to={"/jobs"} className="li">
              Jobs
            </Link>
            <Link className="li">Membership</Link>
            <Link className="li">Newsletter</Link>
            <Link className="li">Freelancers</Link>
            <Link className="li">Blog</Link>
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <button className="border px-4 py-1 border-gray-200 rounded-md font-light text-md hover:bg-green hover:text-white duration-300 max-[400px]:hidden">
            Sign up
          </button>

          {!open ? (
            <GiHamburgerMenu
              onClick={() => {
                setOpen(!open);
              }}
              className="text-3xl hover:text-green md:hidden"
            />
          ) : (
            <MdClose
              onClick={() => {
                setOpen(!open);
              }}
              className="text-3xl hover:text-green md:hidden"
            />
          )}
        </div>
      </header>
      <ul
        className={`${
          open ? "open" : "close"
        } flex flex-col items-center justify-center sticky top-0 bg-white py-6 gap-6  nav-links md:hidden`}
      >
        <Link className="li">Jobs</Link>
        <Link className="li">Membership</Link>
        <Link className="li">Newsletter</Link>
        <Link className="li">Freelancers</Link>
        <Link className="li">Blog</Link>
      </ul>
    </>
  );
};

export default Header;
