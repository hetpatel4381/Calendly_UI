import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row p-2">
        {/* <!-- Left Div --> */}
        <div className="w-full md:w-2/5 bg-gray-200 p-4">
          <div className="text-5xl h-[] font-bold flex justify-start">
            <p className="flex flex-col items-start my-4 font-roboto font-extrabold text-3xl">
              <span>Easy</span>
              <br className="md:hidden" />
              <span className="text-blue-500">ahead</span>
            </p>
          </div>
          <p className="flex items-start text-left mb-4">
            We take the work out of connecting with others so you can accomplish
            more.
          </p>
          <div className="flex justify-start mb-4">
            <select className="border border-gray-300 rounded-full p-2">
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              {/* <!-- Add more options as needed --> */}
            </select>
          </div>
          <div className="flex justify-start mb-4">
            {/* <img src="image1.jpg" alt="Image 1" className="w-1/2 mr-2"> */}
            {/* <img src="image2.jpg" alt="Image 2" className="w-1/2 ml-2"> */}
          </div>
          <div className="flex justify-start gap-4">
            <a href="#" className="text-black hover:text-blue-500">
              <i className="fab fa-twitter"></i> <FaTwitter />
            </a>
            <a href="#" className="text-black hover:text-blue-500">
              <i className="fab fa-facebook"></i> <FaFacebook />
            </a>
            <a href="#" className="text-black hover:text-blue-500">
              <i className="fab fa-instagram"></i> <FaInstagram />
            </a>
            <a href="#" className="text-black hover:text-blue-500">
              <i className="fab fa-linkedin"></i> <FaLinkedin />
            </a>
            <a href="#" className="text-black hover:text-blue-500">
              <i className="fab fa-youtube"></i> <FaYoutube />
            </a>
          </div>
        </div>

        {/* <!-- Right Div --> */}
        <div className="w-full md:w-3/5 bg-gray-300 p-4">
          <h2 className="text-lg font-semibold mb-4">Right Column</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4">
              <h3 className="text-md font-semibold mb-2">Column 1 Heading</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-4">
              <h3 className="text-md font-semibold mb-2">Column 2 Heading</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-4">
              <h3 className="text-md font-semibold mb-2">Column 3 Heading</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <p className="text-gray-600">Copyright Calendly 2024</p>
        <p className="text-gray-600">
          <span className="text-sm font-extralight">🟢</span> Calendly Status
        </p>
        <p className="text-gray-600">Privacy / Terms and Conditions</p>
      </div>
    </>
  );
};

export default Footer;
