"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";

import Button from "@components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "@components/ui/Dropdown";
import { useRouter } from "next/navigation";

const Nav = () => {
  const { data: session } = useSession();
  const rounter = useRouter();
  const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownDisplayed((prevDisplay) => !prevDisplay);
  };

  const signOutHandler = () => {
    rounter.push("/");
    signOut();
  };

  const signInHandler = () => {
    signIn();
  };

  return (
    <nav className="flex items-center p-1 justify-between w-full">
      <Link href="/">
        <div className="logo_text ml-2 sm:ml-0">Jobfinder</div>
      </Link>

      <div className="flex items-center">
        {session?.user ? (
          <div className="flex gap-2 mr-2">
            <Link href="/profile" className="hidden sm:block">
              <Button classNames="py-1 hover:bg-emerald-600 hover:shadow-emerald-700 text-sm">
                Profile
              </Button>
            </Link>
            <Link href="/create-offer" className="hidden sm:block">
              <Button classNames="py-1 hover:bg-emerald-600 hover:shadow-emerald-700 text-sm">
                Create Offer
              </Button>
            </Link>
            <Button
              onClick={signOutHandler}
              classNames="py-1 hidden sm:block text-sm"
            >
              Sign Out
            </Button>
          </div>
        ) : (
          <Button onClick={signInHandler} classNames="text-sm">
            Sign In
          </Button>
        )}

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
                  { text: "Sign Out", dir: null },
                ]}
              />
            )}
          </div>
        )}

        {/* LARGER DEVICES */}
        {session?.user && (
          <div className="hidden sm:flex sm:items-center sm:gap-2">
            <Link href="/profile">
              <Image
                className="rounded-full"
                src={session?.user.image}
                width={35}
                height={35}
                alt="User Image"
              />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
