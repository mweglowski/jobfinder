import Offer from "@models/offer";
import { connectToDatabase } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDatabase();

    const offers = await Offer.find({ creator: params.id }).populate("creator");

    return new Response(JSON.stringify(offers), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch offers created by user", {
      status: 500,
    });
  }
};
