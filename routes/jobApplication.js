// const router = require('express').Router();
import express from "express";
const router = express.Router({ mergeParams: true });
import { protect, recruiterOnly } from '../middlewares/Auth.js';
import {
  postJobApplication, getJobApplication
} from '../controllers/applicationController.js';

router.route('/:id')
  .get(getJobApplication)
  .post(protect, postJobApplication);


export default router;
