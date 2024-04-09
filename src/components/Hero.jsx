import React from "react";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="flex flex-col gap-2 w-[90%] m-auto mb-5">
      {/* heading */}
      <h1 className="font-extrabold text-6xl">What can we help you with?</h1>
      {/* searchBar */}
      <div className="grid grid-cols-[10%,90%] rounded-full items-center p-2 overflow-hidden w-[45%] m-auto shadow-lg">
        <div>
          <CiSearch className="text-gray-500 p-4 cursor-pointer text-lg mt-1 ml-3" />
        </div>
        <div className="ml-0">
          <input
            type="text"
            placeholder="Search our articles"
            className="w-full border-none rounded-full p-4 text-gray-500"
          />
        </div>
      </div>

      {/* List */}
      <div className="w-[50%] m-auto">
        <div className="flex flex-row justify-start gap-10">
          <div className="flex gap-1">
            <img
              src="src\assets\Image1.png"
              alt="Troubleshooting"
              className="h-6 mt-3"
            />
            <p className="text-[#365F97]">Setting up your first event</p>
          </div>
          <div className="flex gap-1">
            <img
              src="src\assets\Image2.png"
              alt="Troubleshooting"
              className="h-6 mt-3"
            />
            <p className="text-[#365F97]">Trobleshooting availability</p>
          </div>
        </div>
        <div className="flex flex-row justify-start gap-5">
          <div className="flex gap-1">
            <img
              src="src\assets\Image3.png"
              alt="Troubleshooting"
              className="h-6 mt-3"
            />
            <p className="text-[#365F97]">Schedule with video conferencing</p>
          </div>
          <div className="flex gap-1">
            <img
              src="src\assets\Image4.png"
              alt="Troubleshooting"
              className="h-6 mt-3"
            />
            <p className="text-[#365F97]">Embed options overview</p>
          </div>
        </div>
        <div className="flex flex-row justify-start gap-9">
          <div className="flex gap-1">
            <img
              src="src\assets\Image5.png"
              alt="Troubleshooting"
              className="h-6 mt-3"
            />
            <p className="text-[#365F97]">Automate tasks with Workflows</p>
          </div>
          <div className="flex gap-1">
            <img
              src="src\assets\Image6.png"
              alt="Troubleshooting"
              className="h-6 mt-3"
            />
            <p className="text-[#365F97]">Using Calendly for Chrome</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
