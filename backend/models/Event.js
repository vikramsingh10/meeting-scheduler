// src/models/event.js
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Event title is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    date: {
      type: Date,
      required: [true, "Event date is required"],
    },
    startTime: {
      type: String,
      required: [true, "Start time is required"],
    },
    endTime: {
      type: String,
      required: [true, "End time is required"],
    },
    location: {
      type: String,
      trim: true,
    },
    meetingLink: {
      type: String,
      trim: true,
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    status: {
      type: String,
      enum: ["active", "cancelled", "completed"],
      default: "active",
    },
    bannerImage: {
      type: String,
      trim: true,
    },
    backgroundColor: {
      type: String,
      default: "#ffffff",
    },
    passwordProtected: {
      type: Boolean,
      default: false,
    },
    eventPassword: {
      type: String,
      select: false, // Do not return this field in queries
    },
  },
  { timestamps: true } // Adds createdAt & updatedAt fields
);

const Event = mongoose.model("Event", eventSchema);
export default Event;
