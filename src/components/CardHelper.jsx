import React from "react";

const CardHelper = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:border-[#]">
      <img
        src={imageSrc}
        alt=""
        className="w-30 h-20 object-cover object-center rounded-full mt-2"
      />
      <div className="p-3">
        <h3 className="text-2xl font-mont font-extrabold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default CardHelper;
