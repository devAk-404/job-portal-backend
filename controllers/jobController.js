import { Jobs } from "../models/Jobs.js";

export const createJob = async (req, res) => {
  const job = await Jobs.create({ ...req.body, postedBy: req.user._id });
  res.status(201).json(job);
};

export const getJobs = async (req, res) => {
  const jobs = await Jobs.find().populate("postedBy", "email");
  res.json(jobs);
};

export const getJob = async (req, res) => {
  const job = await Jobs.findById(req.params.id).populate("postedBy", "email");
  res.json(job);
};

export const updateJob = async (req, res) => {
  const job = await Jobs.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(job);
};

export const deleteJob = async (req, res) => {
  await Jobs.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
