import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      max: 200,
    },
    description: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
      max: 100,
    },
    jobType: {
      type: String,
      required: true,
      enum: ["permanent", "temporary", "internship"],
      default: "permanent",
    },
    education: {
      type: String,
      required: true,
      enum: ["undergraduate", "graduate", "post graduate", "phd"],
      default: "graduate",
    },
    industry: {
      type: String,
      required: true,
      enum: [
        "business",
        "information technology",
        "banking",
        "education and training",
        "telecommunication",
        "others",
      ],
      default: "business",
    },
    experience: {
      type: String,
      required: true,
      enum: ["1 year", "2 years", "3+ years"],
      default: "1 year",
    },
    salary: {
      type: Number,
      required: true,
      min: 500000,
    },
    positions: {
      type: Number,
      required: true,
      default: 1,
    },
    company: {
      type: String,
      required: true,
      max: 100,
    },
    location: {
      type: String,
      required: true,
      default: "remote",
    },
  },
  { timestamps: true }
);
const Job = mongoose.model("Job", jobSchema);
export default Job;
