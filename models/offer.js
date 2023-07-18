import { Schema, model, models } from "mongoose";

const OfferSchema = new Schema({
	creator: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
  header: {
		type: String,
		required: [true, 'Header is required.'],
	},
	company: {
		type: String,
		required: [true, 'Company is required.'],
	},
	locations: {
		type: Array,
		required: [true, 'Location is required.'],
	},
	employmentMethod: {
		type: String,
		required: [true, 'Employment method is required.'],
	},
	experience: {
		type: Number,
		required: [true, 'Experience level is required.'],
	},
	salary: {
		type: Number,
		required: [true, 'Salary is required.'],
	},
	skills: {
		type: Array,
		required: [true, 'Skills are required.'],
	}
});

const Offer = models.Offer || model("Offer", OfferSchema);

export default Offer;
