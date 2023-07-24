"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  // CHANGE TO ROOT ROUTE IF USER IS NOT SIGNED IN
  useEffect(() => {
    setTimeout(() => {
      if (!session) {
        router.push("/");
        return;
      }
    }, 500);
  }, []);

  let username =
    session?.user.name.split(" ").length > 1
      ? session?.user.name.split(" ")[0]
      : session?.user.name;
  console.log(session?.user.name.split(" "));

  return (
    <div>
      Welcome <span>{username}</span>
    </div>
  );
};

export default Profile;
