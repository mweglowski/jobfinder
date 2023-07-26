'use client'
import React from "react";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "@components/ui/Button";
import Image from "next/image";

const SignInButton = ({ providerId }) => {
	const router = useRouter();

  const signInHandler = () => {
		console.log(providerId)
    signIn(providerId);
  };

  return (
    <Button
      classNames="w-[80%] bg-green-50 border animate-slide_down text-slate-700 hover:bg-slate-100 hover:text-slate-700 hover:shadow-none flex justify-center gap-3 py-3"
      onClick={signInHandler}
    >
      <Image
        src={`/assets/icons/${providerId}.svg`}
        width={20}
        height={20}
        alt={`${providerId} icon`}
      />
      Sign in with {providerId}
    </Button>
  );
};

export default SignInButton;
