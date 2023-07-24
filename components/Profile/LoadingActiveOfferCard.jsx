import React from "react";

const LoadingActiveOfferCard = () => {
  return (
    <div className="flex-1 rounded-xl border border-gray-300 bg-slate-100/20 p-4 backdrop-blur-lg backdrop-filter h-fit overflow-hidden min-w-[280px] sm:mx-auto  duration-500 hover:shadow-2xl hover:opacity-80 hover:scale-[1.02] cursor-pointer max-w-[700px] animate-pulse w-full">
      <div>
        <div className="flex">
          <div className="w-[50%] h-4 bg-slate-400/60 rounded-lg"></div>
          <div className="w-[30%] h-4 bg-slate-400/20 mt-1 rounded-lg"></div>
        </div>

        <div className="flex justify-between">
          <div className="w-[20%] h-4 bg-slate-400/20 relative rounded-lg"></div>
          <div className="w-[30%] h-4 bg-slate-400/30 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingActiveOfferCard;
