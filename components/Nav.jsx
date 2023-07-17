"use client";
import Button from "@components/ui/Button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Dropdown from "@components/ui/Dropdown";

const Nav = () => {
  const { data: session } = useSession({
    required: true,
  });
  const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownDisplayed((prevDisplay) => !prevDisplay);
  };

  return (
    <nav className="flex items-center p-1 justify-between w-full">
      <Link href="/">
        <div className="logo_text ml-2 sm:ml-0">Jobfinder</div>
      </Link>

      <div className="flex items-center">
        <Link href="/create-offer" className="hidden sm:block sm:mr-2">
          <Button>Create Offer</Button>
        </Link>

        {/* MOBILE (IMAGE & DROPDOWN)*/}
        {session?.user && (
          <div
            className="sm:hidden flex items-center gap-2 hover:cursor-pointer"
            onClick={handleToggleDropdown}
          >
            <Image
              className="rounded-full"
              src={session?.user.image}
              width={35}
              height={35}
              alt="User Image"
            />

            {isDropdownDisplayed && (
              <Dropdown
                options={[
                  { text: "Profile", dir: "/profile" },
                  { text: "Create Offer", dir: "/create-offer" },
                ]}
              />
            )}
          </div>
        )}

        {/* LARGER DEVICES */}
        {session?.user && (
          <div className="hidden sm:flex sm:items-center sm:gap-2">
            <Image
              className="rounded-full"
              src={session?.user.image}
              width={35}
              height={35}
              alt="User Image"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
