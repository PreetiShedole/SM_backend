// routes/userRoutes.js
import express from "express";
import User from "../models/user.model.js"; // include .js
const router = express.Router();

// Utility function to validate phone number
const validatePhoneNumber = (phone) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(phone);
};

// User Registration
router.post("/register", async (req, res) => {
  const { name, email, password, role, phone, societyName } = req.body;

  // Validate phone number
  if (!validatePhoneNumber(phone)) {
    return res
      .status(400)
      .json({ message: "Invalid phone number. Must be 10 digits." });
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res
      .status(400)
      .json({ message: "User already exists with this email." });
  }

  // Generate society code (simple example)
  const societyCode = Buffer.from(societyName).toString("base64");

  // Create new user
  const user = new User({
    name,
    email,
    password,
    role,
    phone,
    societyName,
    societyCode,
  });

  try {
    await user.save();
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
