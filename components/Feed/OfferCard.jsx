"use client";
import React from "react";


const OfferCard = ({ data }) => {
  const exp = data.experience;

  let cardClasses =
    "flex-1 rounded-xl border border-gray-300 p-4 backdrop-blur-lg backdrop-filter h-fit overflow-hidden min-w-[280px] mx-4 sm:mx-auto  duration-500 hover:shadow-2xl hover:opacity-80 hover:-rotate-3 hover:scale-x-[1.02] hover:scale-y-[.9] hover:z-30 hover:scale-110 cursor-pointer max-w-[450px]";

  exp === 0
  ? cardClasses += ' bg-blue-400/10'
  : exp === 1
  ? cardClasses += ' bg-green-400/10'
  : exp === 2
  ? cardClasses += ' bg-orange-400/10'
  : exp === 3
  ? cardClasses += ' bg-red-400/10'
  : cardClasses += ' bg-purple-400/10'

  return (
    <div className={cardClasses}>
      <div className="font-semibold text-xl text-slate-600 sm:min-w-[320px]">
        {data.header}
      </div>
      <div className="text-slate-400">{data.location}</div>
      <div className="flex flex-wrap text-slate-100 font-semibold gap-1 mt-2 justify-evenly">
        {data.skills.map((skill) => (
          <div
            className="bg-slate-400/60 backdrop-blur-lg backdrop-filter rounded-md p-1 px-2 shadow-lg tracking-wider border-2 border-slate-200"
            key={skill}
          >
            {skill}
          </div>
        ))}
      </div>
      <div className="font-semibold relative top-2">
        {data.employmentMethod}
      </div>
      <div className="absolute right-3 bottom-2">
        <span className="text-xl font-semibold">{data.salary}</span>zł
      </div>
      {/* <div className="absolute bottom-0 left-2 mx-auto bg-red-500 w-16 h-3"></div> */}
    </div>
  );
};

export default OfferCard;
