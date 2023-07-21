import React from "react";

const LoadingOfferCard = () => {
  return (
    <div className="flex-1 rounded-xl border border-gray-300 bg-slate-100/20 p-4 backdrop-blur-lg backdrop-filter h-fit overflow-hidden min-w-[280px] mx-4 sm:mx-auto  duration-500 hover:shadow-2xl hover:opacity-80 hover:-rotate-3 hover:scale-x-[1.02] hover:scale-y-[.9] hover:z-30 hover:scale-110 cursor-pointer max-w-[568px] animate-pulse">
      <div className="w-[50%] h-4 bg-slate-400/60 rounded-lg"></div>
      <div className="w-[30%] h-4 bg-slate-400/20 mt-1 rounded-lg"></div>
      <div className="w-full h-6 bg-slate-400/20 mt-2 rounded-lg flex justify-center items-center"></div>
      <div className="w-full h-8 bg-slate-400/40 flex flex-wrap text-slate-100 font-semibold gap-1 my-3 rounded-lg justify-evenly"></div>
      <div className="flex justify-between">
        <div className="w-[20%] h-4 bg-slate-400/20 relative rounded-lg"></div>
        <div className="w-[30%] h-4 bg-slate-400/30 rounded-lg"></div>
      </div>
    </div>
  );
};

export default LoadingOfferCard;
