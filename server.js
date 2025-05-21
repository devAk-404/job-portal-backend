import dotenv from "dotenv";
import express from "express";
import connectDb from "./config/db.js";
import userRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import AppRoutes from "./routes/jobApplication.js";
import morgan from "morgan";

dotenv.config();


const app = express();

const PORT = process.env.PORT || 5000;
app.use(morgan('dev'));
app.use(express.json());

await connectDb();
//user Routes
app.use('/api/user', userRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/jobs', AppRoutes);


app.listen(PORT, () => {
  console.log("server is listening at 5000");
});
