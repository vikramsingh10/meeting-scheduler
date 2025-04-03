// src/routes/bookingRoutes.js
import express from "express";
import {
  createBooking,
  getBookings,
  cancelBooking,
} from "../controllers/bookingController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Route to create a new booking
router.post("/", protect, createBooking);

// Route to get all bookings for a user
router.get("/", protect, getBookings);

// Route to cancel a booking
router.delete("/:id", protect, cancelBooking);

export default router;
