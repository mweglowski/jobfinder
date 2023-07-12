"use client";
import Button from "@components/ui/Button";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const Nav = () => {
  const { data: session } = useSession({
    required: true,
  });
  console.log(session);

  return (
    <nav className="flex items-center p-1 justify-between w-full">
      <div className="logo_text ml-2 sm:ml-0">Jobfinder</div>

      <div className="flex items-center">
        <Link href="/create-offer">
          <Button>Create Offer</Button>
        </Link>

        {/* THIS HAS TO BE STYLED !!! RESPONSIVELY */}

        {session?.user && (
          <div className="flex items-center gap-2">
            <div>{session.user.name}</div>
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
