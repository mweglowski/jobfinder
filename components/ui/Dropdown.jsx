"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dropdown = ({ options }) => {
  const router = useRouter();

  let dropdownClasses =
    "absolute right-2 top-[50px] z-20 p-2 rounded-md flex items-right flex-col shadow-lg gap-1 bg-green-50 duration-300 animate-slide_down w-[200px]";

  let dropdownLinkClasses =
    "flex p-2 px-4 shadow-lg shadow-slate-200 hover:bg-emerald-600 hover:text-white rounded-lg duration-300 hover:shadow-emerald-700";

  const signOutHandler = () => {
    signOut();
  }

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
            onClick={signOutHandler}
          >
            {option.text}
          </div>
        )
      )}
    </div>
  );
};

export default Dropdown;
