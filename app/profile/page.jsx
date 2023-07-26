"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingActiveOfferCard from "@components/Profile/LoadingActiveOfferCard";
import ActiveOffer from "@components/Profile/ActiveOffer";
import Line from "@components/ui/Line";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [isLoadingOffers, setIsLoadingOffers] = useState(false);
  const [activeOffers, setActiveOffers] = useState([]);

  // CHANGE TO ROOT ROUTE IF USER IS NOT SIGNED IN
  // useEffect(() => {
  //   setInterval(() => {
  //     if (!session) {

  //       console.log(session)
  //       router.push("/");
  //       return;
  //     }
  //   }, 1500);
  // }, []);

  // FETCHING OFFERS
  useEffect(() => {
    if (!session) {
      router.push('/')
    }

    setIsLoadingOffers(true);
    const fetchOffers = async () => {
      const response = await fetch(`/api/users/${session.user.id}/offers`);
      const data = await response.json();

      setActiveOffers(data);
      setIsLoadingOffers(false);
    };

    if (session) fetchOffers();
  }, [session]);

  let username =
    session?.user.name.split(" ").length > 1
      ? session?.user.name.split(" ")[0]
      : session?.user.name;

  if (session) {
    return (
      <div className="w-full p-3">
        {/* WELCOME TEXT */}
        <div className="text-4xl font-sans font-bold text-left sm:text-5xl duration-500">
          Welcome <span className="green_gradient">{username}</span>
        </div>
        <div className="text-slate-600">Here is your profile</div>

        {/* POSTED OFFERS */}
        <div className="mt-8 text-lg flex gap-2">
          Your active offers{" "}
          <span className="text-white bg-emerald-600 rounded-md text-sm font-semibold px-[6px] h-fit">
            {isLoadingOffers ? (
              <div className="animate-pulse">Calculating...</div>
            ) : (
              activeOffers.length
            )}
          </span>
        </div>
        <Line />

        {isLoadingOffers ? (
          <>
            <div className="animate-pulse text-center text-lg text-slate-400">
              Loading Your Offers...
            </div>
            {/* LOADING OFFERS */}
            <div className="flex flex-col gap-3">
              <LoadingActiveOfferCard />
              <LoadingActiveOfferCard />
              <LoadingActiveOfferCard />
              <LoadingActiveOfferCard />
              <LoadingActiveOfferCard />
            </div>
          </>
        ) : (
          // OFFERS LIST
          <div className="flex flex-col gap-3">
            {activeOffers.map((offer) => (
              <ActiveOffer data={offer} key={offer._id} />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <p className="animate-pulse text-slate-500 text-lg mt-4">
        Redirecting...
      </p>
    );
  }
};

export default Profile;
