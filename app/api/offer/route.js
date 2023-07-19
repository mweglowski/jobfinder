import { connectToDatabase } from "@utils/database";
import Offer from "@models/offer";

export const GET = async (request) => {
  try {
    await connectToDatabase();

    const offers = await Offer.find({}).populate("creator");

    return new Response(JSON.stringify(offers), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch offers", { status: 500 });
  }
};
