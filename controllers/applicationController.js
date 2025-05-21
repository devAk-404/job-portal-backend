import { App } from "../models/Application.js";

export const postJobApplication = async (req, res) => {
  const job = await App.create({ ...req.body, appliedBy: req.user._id });
  res.status(201).json(job);
};

export const getJobApplication = async (req, res) => {
  const job = await App.findById(req.params.id).populate("appliedBy", "email");
  res.json(job);
};

