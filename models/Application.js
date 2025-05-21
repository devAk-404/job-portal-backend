import mongoose from "mongoose";

//Job Title and Job Description 

const ApplicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job'},
  appliedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: {type: String, enum : ['Pending', 'Applied', 'Shortlisted', 'Rejected'], default: 'Pending'},
  appliedDate: { type : Date, default: Date.now() }
});


export const App = mongoose.model('Application', ApplicationSchema);
