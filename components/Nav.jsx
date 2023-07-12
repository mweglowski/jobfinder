"use client";
import Button from "@components/ui/Button";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
  return (
    <nav className="flex items-center p-1 justify-between w-full">
      <div className="logo_text ml-2 sm:ml-0">Jobfinder</div>

      <Link href="/create-offer">Create Offer</Link>
    </nav>
  );
};

export default Nav;
