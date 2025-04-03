// src/routes/eventRoutes.js
import express from "express";
import {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Route to create a new event
router.post("/", protect, createEvent);

// Route to get all events for a user
router.get("/", protect, getEvents);

// Route to get a specific event by ID
router.get("/:id", protect, getEventById);

// Route to update an existing event
router.put("/:id", protect, updateEvent);

// Route to delete an event
router.delete("/:id", protect, deleteEvent);

export default router;
