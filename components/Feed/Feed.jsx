"use client";
import { useEffect, useState } from "react";
import DetailsContainer from "@components/Feed/DetailsContainer";
import JobContainer from "@components/Feed/JobContainer";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [details, setDetails] = useState([]);
  const [jobOffers, setJobOffers] = useState([
    // {
    //   id: Math.random() * Math.random(),
    //   header: "React Developer",
    //   skills: [
    //     "React.js",
    //     "Next.js",
    //     "Tailwind",
    //     "HTML",
    //     "Critical Thinking",
    //     "Analytics",
    //   ],
    //   location: "Remote",
    //   employmentMethod: "UoP",
    //   experience: 2,
    //   salary: 11000,
    // },
    // {
    //   id: Math.random() * Math.random(),
    //   header: "React Developer",
    //   skills: [
    //     "React.js",
    //     "Next.js",
    //     "Tailwind",
    //     "HTML",
    //     "Critical Thinking",
    //     "Analytics",
    //   ],
    //   location: "Remote",
    //   employmentMethod: "UoP",
    //   experience: 0,
    //   salary: 11000,
    // },
    {
      id: Math.random() * Math.random(),
      header: "React Developer",
      skills: [
        "React.js",
        "Next.js",
        "Tailwind",
        "HTML",
        "Critical Thinking",
        "Analytics",
      ],
      location: "Remote",
      employmentMethod: "UoP",
      experience: 1,
      salary: 11000,
    },
    {
      id: Math.random() * Math.random(),
      header: "AI Engineer",
      skills: [
        "AI",
        "Machine Learning",
        "Deep Learning",
        "Python",
        "Pandas",
        "Numpy",
      ],
      location: "Remote, Warszawa, Wrocław",
      employmentMethod: "B2B",
      experience: 3,
      salary: 27000,
    },
    {
      id: Math.random() * Math.random(),
      header: "Machine Learning Engineer",
      skills: [
        "Machine Learning",
        "Tensorflow",
        "PyTorch",
        "Python",
        "Sklearn",
        "Analytic Thinking",
      ],
      location: "Gdańsk",
      employmentMethod: "UoP",
      experience: 4,
      salary: 37500,
    },
    {
      id: Math.random() * Math.random(),
      header: "Frontend Intern",
      skills: [
        "React.js",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind",
        "Communication Skills",
      ],
      location: "Remote, Gdańsk, Katowice",
      employmentMethod: "UoP",
      experience: 0,
      salary: 4200,
    },
    {
      id: Math.random() * Math.random(),
      header: "Senior Software Engineer",
      skills: [
        "Java",
        "SQL",
        "C++",
        "Critical Thinking",
        "Communication Skills",
        "Distributed Systems",
      ],
      location: "Kraków, Warszawa",
      employmentMethod: "UoP",
      experience: 2,
      salary: 17000,
    },
  ]);
  const [searchedOffers, setSearchedOffers] = useState(jobOffers);

  useEffect(() => {
    const fetchOffers = async () => {
      const response = await fetch('/api/offer')
      const data = await response.json()

      console.log('fetched', data)
      setJobOffers(data)
      // console.log('hello')
    }

    fetchOffers();
  }, [])
  
  const performSearch = () => {
    if (details.length === 0) {
      setSearchedOffers(jobOffers);
      return;
    }

    const filteredOffers = jobOffers.filter((job) => {
      let offerDetailsString =
        job.location.toLowerCase() +
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
    performSearch();
  }, [details, setDetails, performSearch]);

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

      {/* Filtered Jobs */}
      <JobContainer jobOffers={searchedOffers} />
    </section>
  );
};

export default Feed;
