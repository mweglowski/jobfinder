"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";

const Dropdown = ({ options }) => {
  let dropdownClasses =
    "absolute right-2 top-[50px] z-20 p-2 rounded-md flex items-right flex-col shadow-lg gap-1 bg-slate-100 duration-300 animate-slide_down";

  let dropdownLinkClasses =
    "flex p-2 px-4 shadow-md shadow-slate-200 hover:bg-emerald-600 hover:text-white rounded-lg duration-300";

  return (
    <div className={dropdownClasses}>
      {options.map((option) =>
        option.text !== "Sign Out" ? (
          <Link
            href={option.dir}
            className={dropdownLinkClasses}
            key={option.dir}
          >
            {option.text}
          </Link>
        ) : (
          <div
            className={dropdownLinkClasses}
            key={option.dir}
            onClick={signOut}
          >
            {option.text}
          </div>
        )
      )}
    </div>
  );
};

export default Dropdown;
