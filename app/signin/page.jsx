"use client";
import React, { useState, useEffect } from "react";
import { useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

import Line from "@components/ui/Line";
import SignInButton from "@components/SignIn/SignInButton";

const SignInPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    session && router.push("/");
  });

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
      console.log(response);
    };

    setUpProviders();
  }, []);

  if (session === null) {
    return (
      <section className="w-full p-3">
        <div className="font-sans text-4xl font-bold">
          Sign <span className="green_gradient">In</span>
        </div>
        <Line />

        <div className="rounded-md shadow-lg mx-auto max-w-[400px] mt-8 border flex flex-col items-center gap-2 p-5 animate-slide_down">
          {providers &&
            Object.values(providers).map((provider) => (
              <SignInButton providerId={provider.id} key={provider.id} />
            ))}
        </div>
      </section>
    );
  } else {
		return <p className="animate-pulse text-slate-500 text-lg mt-4">Redirecting...</p>
  }
};

export default SignInPage;
