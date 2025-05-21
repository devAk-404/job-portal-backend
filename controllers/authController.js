import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

export const register = async (req, res) => {
  const { email, password, isRecruiter } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(409).json({ message: "User Already Exists!" });
    return;
  }
  const user = await User.create({ email, password, isRecruiter });
  res.status(201).json({
    token: signToken(user._id),
    user: { id: user._id, email, isRecruiter },
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password)))
    return res.status(401).json({ message: "Invalid credentials" });
  res.json({
    token: signToken(user._id),
    user: { id: user._id, username: email, isRecruiter: user.isRecruiter },
  });
};
