import React from "react";
import OfferCard from "./OfferCard";


const JobContainer= ({ jobOffers }) => {
  return (
    <div className="flex flex-wrap mt-4 gap-4 justify-center">
      {jobOffers.map((offer) => (
        <OfferCard data={offer} key={Math.random()} />
      ))}
    </div>
  );
};

export default JobContainer;
