"use client";
import Image from "next/image";
import React from "react";

const OfferCard = ({ data }) => {
  let {
    experience: exp,
    company,
    locations,
    header,
    skills,
    salary,
    employmentMethod,
  } = data;

  if (locations) {
    locations = locations.join(", ");
  }

  let cardClasses =
    "flex-1 rounded-xl border border-gray-300 p-4 backdrop-blur-lg backdrop-filter h-fit overflow-hidden min-w-[280px] mx-4 sm:mx-auto  duration-500 hover:shadow-2xl hover:opacity-80 hover:-rotate-3 hover:scale-x-[1.02] hover:scale-y-[.9] hover:z-30 hover:scale-110 cursor-pointer max-w-[568px]";

  exp === 0
    ? (cardClasses += " bg-blue-400/10")
    : exp === 1
    ? (cardClasses += " bg-green-400/10")
    : exp === 2
    ? (cardClasses += " bg-orange-400/10")
    : exp === 3
    ? (cardClasses += " bg-red-400/10")
    : (cardClasses += " bg-purple-400/10");

  return (
    <div className={cardClasses}>
      <div className="font-semibold text-xl text-slate-600 sm:min-w-[320px]">
        {header}
      </div>
      {/* <div className="flex justify-between"> */}
      <div className="text-slate-400 font-semibold">{company}</div>
      <div className="text-slate-400 flex justify-center items-center">
        <Image
          src="/assets/icons/location-sign.svg"
          width={15}
          height={15}
          className="-mt-1"
          alt="Location Image"
        />
        <p>
          {locations.split(" ").length > 3
            ? locations.split(", ").slice(0, 3).join(", ") + " and..."
            : locations}
        </p>
      </div>
      {/* </div> */}
      <div className="flex flex-wrap text-slate-100 font-semibold gap-1 mt-2 justify-evenly">
        {skills.map((skill) => (
          <div
            className="bg-slate-400/60 backdrop-blur-lg backdrop-filter rounded-md p-1 px-2 shadow-lg tracking-wider border-2 border-slate-200"
            key={skill}
          >
            {skill}
          </div>
        ))}
      </div>
      <div className="font-semibold relative top-2">{employmentMethod}</div>
      <div className="absolute right-3 bottom-2">
        <span className="text-xl font-semibold">{salary}</span>zł
      </div>
      {/* <div className="absolute top-0 right-0">{company}</div> */}
    </div>
  );
};

export default OfferCard;
