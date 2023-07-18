"use client";
import React from "react";

const FormOptionButton = ({ text, selectOption, selectedOption }) => {
  let buttonClasses =
    "rounded-md p-2 px-3 border cursor-pointer hover:border-emerald-400 hover:text-emerald-500 duration-300";

  if (selectedOption === text) {
    buttonClasses += " bg-emerald-700 text-slate-200";
    console.log(buttonClasses)
  } else {
    buttonClasses += ' bg-slate-100 text-slate-400'
  }

  const handleSelectOption = () => {
    selectOption(text);
  };

  return (
    <div className={buttonClasses} onClick={handleSelectOption}>
      {text}
    </div>
  );
};

export default FormOptionButton;
