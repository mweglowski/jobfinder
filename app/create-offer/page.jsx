"use client";
import React, { createRef, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import FormInput from "@components/Form/FormInput";
import FormDetailsContainer from "@components/Form/FormDetailsContainer";
import FormOptionButton from "@components/Form/FormOptionButton";
import Button from "@components/ui/Button";
import Link from "next/link";

const CreateOffer = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [skills, setSkills] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedExpLevel, setSelectedExpLevel] = useState(null);
  const [selectedContractType, setSelectedContractType] = useState(null);

  const experienceLevels = ["Intern", "Junior", "Mid", "Senior", "Principal"];
  const contractTypes = ["UoP", "UZ", "UoD"];

  const headerInputRef = createRef();
  const companyInputRef = createRef();
  const skillInputRef = createRef();
  const locationInputRef = createRef();
  const salaryInputRef = createRef();

  const handleKeyDownSkillInput = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      const newSkill = e.target.value;
      e.target.value = "";
      setSkills((prevSkills) => [newSkill, ...prevSkills]);
    }
  };

  const handleKeyDownLocationInput = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      const newLocation = e.target.value;
      e.target.value = "";
      setLocations((prevLocations) => [newLocation, ...prevLocations]);
    }
  };

  const removeSkillHandler = (skillToRemove) => {
    const updatedSkills = skills.filter((skill) => skill !== skillToRemove);

    setSkills(updatedSkills);
  };

  const removeLocationHandler = (locationToRemove) => {
    const updatedLocations = locations.filter(
      (location) => location !== locationToRemove
    );

    setLocations(updatedLocations);
  };

  const selectExperienceLevelHandler = (expLevelText) => {
    setSelectedExpLevel(expLevelText);
  };

  const selectContractTypeHandler = (contractText) => {
    setSelectedContractType(contractText);
  };

  const createOffer = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/offer/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.name,
          header: headerInputRef.current.value,
          company: companyInputRef.current.value,
          locations,
          employmentMethod: selectedContractType,
          experience: experienceLevels.indexOf(selectedExpLevel),
          salary: salaryInputRef.current.value,
          skills,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formSubmitHandler = () => {
    createOffer();
  };

  return (
    <div className="mt-16 flex text-left w-full flex-col">
      {/* <h1 className="text-5xl font-bold font-sans ml-3 text-slate-700">Create New Offer</h1> */}

      <div className="flex flex-col p-3 max-w-3xl mx-auto w-full gap-4">
        {/* HEADER */}
        <label className="flex-col flex">
          <span>Profession Title</span>
          <FormInput ref={headerInputRef} />
        </label>

        {/* COMPANY */}
        <label className="flex-col flex">
          <span>Company</span>
          <FormInput ref={companyInputRef} />
        </label>

        {/* LOCATION */}
        <label className="flex-col flex">
          <span>Location</span>
          <FormInput
            onKeyDown={handleKeyDownLocationInput}
            ref={locationInputRef}
            placeholder='Type location and hit "Enter" to add'
          />
        </label>
        <FormDetailsContainer
          details={locations}
          removeHandler={removeLocationHandler}
        />

        {/* SKILLS */}
        <label className="flex-col flex">
          <span>Required Skills</span>
          <FormInput
            placeholder='Type skill and hit "Enter" to add'
            onKeyDown={handleKeyDownSkillInput}
            ref={skillInputRef}
          />
        </label>
        <FormDetailsContainer
          details={skills}
          removeHandler={removeSkillHandler}
        />

        {/* SALARY */}
        <label className="flex-col flex">
          <span>Salary</span>
          <FormInput type="number" ref={salaryInputRef} />
        </label>

        {/* FORM OF CONTRACT */}
        <label className="flex-col flex">
          <span>Contract Type</span>
          <div className="flex gap-1 flex-wrap">
            {contractTypes.map((item) => (
              <FormOptionButton
                key={item}
                text={item}
                selectOption={selectContractTypeHandler}
                selectedOption={selectedContractType}
              />
            ))}
          </div>
        </label>

        {/* EXPERIENCE */}
        <label className="flex-col flex">
          <span>Experience</span>
          <div className="flex gap-1 flex-wrap">
            {experienceLevels.map((item) => (
              <FormOptionButton
                key={item}
                text={item}
                selectOption={selectExperienceLevelHandler}
                selectedOption={selectedExpLevel}
              />
            ))}
          </div>
        </label>

        {/* CONTROL BUTTONS */}
        <div className="flex justify-between mt-4">
          <Link href="/">
            <Button classNames="border-2 border-black">Back</Button>
          </Link>
          <Button
            classNames="shadow-black border-2 border-black bg-black text-white hover:bg-white hover:text-gray-900 hover:shadow-none"
            onClick={formSubmitHandler}
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateOffer;
