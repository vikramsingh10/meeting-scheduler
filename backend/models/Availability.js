// src/models/availability.js
import mongoose from 'mongoose';

const availabilitySchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'User reference is required'],
        },
        day: {
            type: String,
            enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            required: [true, 'Day of availability is required'],
        },
        startTime: {
            type: String,
            required: [true, 'Start time is required'],
        },
        endTime: {
            type: String,
            required: [true, 'End time is required'],
        },
        isAvailable: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true } // Adds createdAt & updatedAt fields
);

const Availability = mongoose.model('Availability', availabilitySchema);
export default Availability;
