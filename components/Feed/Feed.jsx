"use client";
import { useEffect, useState } from "react";
import DetailsContainer from "@components/Feed/DetailsContainer";
import JobContainer from "@components/Feed/JobContainer";
import LoadingOfferCard from "@components/Feed/LoadingOfferCard";
import ExperienceBar from "@components/Feed/ExperienceBar";

const Feed = () => {
  const [isLoadingOffers, setIsLoadingOffers] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [details, setDetails] = useState([]);
  const [jobOffers, setJobOffers] = useState([]);
  const [searchedOffers, setSearchedOffers] = useState(jobOffers);

  const performSearch = () => {
    if (details.length === 0) {
      setSearchedOffers(jobOffers);
      return;
    }

    const filteredOffers = jobOffers.filter((job) => {
      let offerDetailsString =
        job.locations.join(" ").toLowerCase() +
        job.employmentMethod.toLowerCase() +
        job.header.toLowerCase();

      switch (job.experience) {
        case 0:
          offerDetailsString += "intern";
          break;
        case 1:
          offerDetailsString += "junior";
          break;
        case 2:
          offerDetailsString += "mid";
          break;
        case 3:
          offerDetailsString += "senior";
          break;
        case 4:
          offerDetailsString += "principal lead";
          break;
        default:
          break;
      }

      for (let skill of job.skills) {
        skill = skill.toLowerCase();
        offerDetailsString += skill;
      }

      let offerMeetsConditions = true;
      for (let detail of details) {
        detail = detail.toLowerCase();

        if (offerDetailsString.indexOf(detail) === -1) {
          return false;
        }
      }

      return offerMeetsConditions;
    });

    setSearchedOffers(filteredOffers);
  };

  useEffect(() => {
    setIsLoadingOffers(true);
    const fetchOffers = async () => {
      const response = await fetch("/api/offer");
      let data = await response.json();

      // SHUFFLE OFFERS
      data = data.sort((a, b) => 0.5 - Math.random());

      setJobOffers(data);
      setSearchedOffers(data);
      setIsLoadingOffers(false);
    };

    fetchOffers();
  }, []);

  useEffect(() => {
    performSearch();
  }, [details]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchText) {
      setSearchText("");

      setDetails([...details, searchText]);

      // After adding new detail start filtering for specific offers
      performSearch();
    }
  };

  const removeDetail = (detail) => {
    const newDetails = details.filter((text) => {
      return text !== detail;
    });
    setDetails(newDetails);

    // After change inside details (since we are removing one element) perform another search
    performSearch();
  };

  return (
    <section className="feed">
      {/* Details */}
      <DetailsContainer data={details} removeDetail={removeDetail} />

      {/* Search Input */}
      <input
        type="text"
        placeholder="Enter some details"
        className="search_input"
        value={searchText}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />

      {/* Experience Bar */}
      <ExperienceBar />

      {/* Filtered Jobs */}
      {isLoadingOffers ? (
        <>
          <p className="text-lg font-semibold animate-pulse">Loading...</p>
          <div className="flex flex-wrap mt-4 gap-4 justify-center">
            <LoadingOfferCard />
            <LoadingOfferCard />
            <LoadingOfferCard />
            <LoadingOfferCard />
            <LoadingOfferCard />
          </div>
        </>
      ) : (
        <JobContainer jobOffers={searchedOffers} />
      )}
    </section>
  );
};

export default Feed;
