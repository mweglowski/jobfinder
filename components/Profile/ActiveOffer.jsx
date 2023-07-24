import React from "react";

const ActiveOffer = ({ data }) => {
  const { header, locations, salary } = data;

  return (
    <div className="rounded-xl border border-gray-300 bg-slate-100/20 p-4 backdrop-blur-lg backdrop-filter h-fit overflow-hidden min-w-[280px] sm:mx-auto duration-500 hover:scale-[1.02] cursor-pointer max-w-[700px] w-full">
      {/* HEADER */}
      <div className="text-lg">{header}</div>

      {/* LOCATIONS */}
      <div className="text-slate-400">
        {locations.length < 3
          ? locations.join(", ")
          : locations.slice(0, 3).join(", ") + " and more..."}
      </div>

      {/* SALARY */}
      <div className="absolute right-3 bottom-3 text-lg">
        <span className="font-semibold">{salary}</span>zł
      </div>
    </div>
  );
};

export default ActiveOffer;
