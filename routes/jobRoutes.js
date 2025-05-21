import express from 'express';
const router = express.Router();
import { protect, recruiterOnly } from '../middlewares/Auth.js';
import {
    createJob,
  getJobs, getJob, updateJob, deleteJob
} from '../controllers/jobController.js';

router.route('/')
  .get(getJobs)
  .post(protect, recruiterOnly, createJob);

router.route('/:id')
  .get(getJob)
  .put(protect, recruiterOnly, updateJob)
  .delete(protect, recruiterOnly, deleteJob);

export default router;
