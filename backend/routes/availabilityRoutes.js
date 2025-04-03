// src/routes/availabilityRoutes.js
import express from "express";
import {
  setAvailability,
  getAvailability,
  deleteAvailability,
} from "../controllers/availabilityController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Route to set user availability
router.post("/", protect, setAvailability);

// Route to get user availability
router.get("/", protect, getAvailability);

// Route to delete a specific availability entry
router.delete("/:id", protect, deleteAvailability);

export default router;
