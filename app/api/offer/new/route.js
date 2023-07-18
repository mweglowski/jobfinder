import Offer from "@models/offer";
import { connectToDatabase } from "@utils/database";

export const POST = async (request) => {
  const {
    userId,
    header,
    company,
    locations,
    employmentMethod,
    experience,
    salary,
    skills,
  } = await request.json();

  try {
    await connectToDatabase();

    const newOffer = new Offer({
      creator: userId,
      header,
      company,
      locations,
      employmentMethod,
      experience,
      salary,
      skills,
    });
    console.log(newOffer)
    await newOffer.save();

    return new Response(JSON.stringify(newOffer), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new offer", { status: 500 });
  }
};