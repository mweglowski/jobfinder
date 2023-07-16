'use client'
import Link from "next/link";
import React from "react";

const Dropdown = ({ options }) => {
	let dropdownClasses = 'absolute right-2 top-[50px] z-20 p-2 rounded-md flex items-right flex-col shadow-lg gap-1 bg-emerald-100 duration-300'

	// CREATE ANIMATION IN globals.css AND APPLY IT FOR DROPDOWN CLASSES

  return (
    <div className={dropdownClasses}>
      {options.map((option) => (
        <Link href={option.dir} className="flex p-2 hover:bg-emerald-200 rounded-md duration-300" key={option.dir}>{option.text}</Link>
      ))}
    </div>
  );
};

export default Dropdown;
