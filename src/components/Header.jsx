import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="w-full flex justify-evenly">
      <div className="flex gap-2">
        <img
          src="https://marketing-assets.calendly.com/media/logo.svg"
          alt=""
          className="h-8 mt-1"
        />
        {/* <h1 className="font-mont font-medium text-[#0869D4] mt-1"> */}
        {/* </h1> */}
        <span className="text-gray-500 text-3xl"> | </span>
        <h1 className="font-sans font-semibold mt-1">Help Center</h1>
      </div>
      <div className="flex gap-2 justify-center items-center m-0">
        <div className="flex gap-4">
          <span className="flex gap-1 font-extralight">
            Devleopers
            <span className="">
              <FaExternalLinkAlt />
            </span>
          </span>
          <span className="flex gap-1">
            Report Abuse
            <span className="">
              <FaExternalLinkAlt />
            </span>
          </span>
          <span>Contact Us</span>
        </div>
        <span className="text-gray-300 text-2xl mx-4"> | </span>
        <div className="flex gap-4">
          <span className="font-mont">Log In</span>
          <span className="font-mont">Sign Up</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
