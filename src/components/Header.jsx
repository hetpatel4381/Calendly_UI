import { useState } from "react";
import { FaBars, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full flex flex-col md:flex-row justify-between items-center">
      <div className="flex gap-2 items-center md:mt-0 mt-3">
        <img
          src="https://marketing-assets.calendly.com/media/logo.svg"
          alt=""
          className="h-8 mt-2"
        />
        <span className="text-gray-500 text-3xl"> | </span>
        <h1 className="font-sans font-semibold mt-5">Help Center</h1>
      </div>
      <div className="md:hidden mt-3">
        {isOpen ? (
          <FaTimes
            className="text-gray-500 text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <FaBars
            className="text-gray-500 text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>
      <div
        className={`md:flex gap-2 justify-end items-center ${
          isOpen ? "flex-col mt-4" : "hidden"
        } mt-3`}
      >
        <div className="flex flex-col gap-4 md:flex-row">
          <span className="flex gap-1 font-extralight">
            Developers
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
        <span className="text-gray-300 text-2xl md:mx-4"> | </span>
        <div className="flex gap-4">
          <span>Log In</span>
          <span>Sign Up</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
