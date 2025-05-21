import mongoose from "mongoose";

//Job Title and Job Description 

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  jobDescription: { type: String, required: true, unique: true },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  postedDate: { type : Date, default: Date.now() }
});


export const Jobs = mongoose.model("Job", JobSchema);
