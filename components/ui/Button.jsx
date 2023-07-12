'use client'
import React from "react";


const Button = ({ children, onClick, classNames}) => {
  let buttonClasses = "p-2 px-6 rounded-lg tracking-wide border-2 border-black font-semibold hover:text-white shadow-md shadow-white hover:bg-black duration-300 hover:shadow-black";
  buttonClasses += ` ${classNames}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
