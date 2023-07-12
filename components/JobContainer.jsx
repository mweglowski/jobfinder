import React from "react";
import OfferCard from "./OfferCard";


const JobContainer= ({ jobOffers }) => {
  return (
    <div className="flex flex-wrap mt-4 gap-4">
      {jobOffers.map((offer) => (
        <OfferCard data={offer} key={offer.id} />
      ))}
    </div>
  );
};

export default JobContainer;
