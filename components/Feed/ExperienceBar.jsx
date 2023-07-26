import React from "react";

const ExperienceBar = () => {
  return (
    <div className="px-4 mt-5 w-full h-[10px] flex relative max-w-[550px] text-sm text-slate-400">
      <div className="w-[50%] h-[10px] bg-gradient-to-r from-blue-300 via-green-300 to-orange-300 rounded-l-full">
        <span className="absolute text-white bottom-[-4px] left-[17px]">experience</span>
      </div>
      <div className="w-[50%] h-[10px] bg-gradient-to-r from-orange-300 via-red-300 to-purple-300 rounded-r-full"></div>

      {/* TEXTS */}
      <div className="absolute bottom-2">Intern</div>
      <div className="absolute bottom-2 left-[22%]">Junior</div>
      <div className="absolute bottom-2 left-[47%]">Mid</div>
      <div className="absolute bottom-2 left-[66%]">Senior</div>
      <div className="absolute bottom-2 right-4">Principal</div>
    </div>
  );
};

export default ExperienceBar;
