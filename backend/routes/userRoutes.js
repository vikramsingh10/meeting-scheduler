// src/routes/userRoutes.js
import express from "express";
import {
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Route to get the logged-in user's profile
router.get("/profile", protect, getUserProfile);

// Route to update the user's profile
router.put("/profile", protect, updateUserProfile);

export default router;
