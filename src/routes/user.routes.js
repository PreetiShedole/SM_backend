import express from "express";
import {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUserProfile,
  resetPassword,
  deleteUserById,
} from "../controller/user.controller.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/reset-password", resetPassword);

// Protected Routes
router.get("/", protect, getAllUsers);
router.get("/:id", protect, getUserById);
router.put("/profile", protect, updateUserProfile);
router.delete("/:id", protect, deleteUserById);

export default router;
