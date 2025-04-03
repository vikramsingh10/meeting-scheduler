// src/routes/authRoutes.js
import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// User Registration
router.post("/register", registerUser);

// User Login
router.post("/login", loginUser);

// User Logout
router.post("/logout", logoutUser);

// Get User Profile (Protected)
router.get("/profile", protect, getUserProfile);

// Update User Profile (Protected)
router.put("/profile", protect, updateUserProfile);

export default router;
