import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const protect = async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token || !token.startsWith("Bearer "))
    return res.status(401).json({ message: "Not authorized" });

  token = token.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    res.status(401).json({ message: "Token invalid" });
  }
};

export const recruiterOnly = (req, res, next) => {
  if (!req.user || !req.user.isRecruiter)
    return res.status(403).json({ message: "Admin only" });
  next();
};
