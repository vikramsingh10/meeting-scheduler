// src/controllers/availabilityController.js

import Availability from '../models/Availability.js';

// @desc    Set User Availability
// @route   POST /api/availability
// @access  Private (User must be authenticated)
export const setAvailability = async (req, res) => {
    try {
        const { userId } = req.user;
        const { availableDays, availableTimes } = req.body;

        // Check if availability already exists
        let availability = await Availability.findOne({ user: userId });

        if (availability) {
            // Update existing availability
            availability.availableDays = availableDays;
            availability.availableTimes = availableTimes;
        } else {
            // Create new availability
            availability = new Availability({
                user: userId,
                availableDays,
                availableTimes,
            });
        }

        await availability.save();
        res.status(200).json({ message: 'Availability updated successfully', availability });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Get User Availability
// @route   GET /api/availability
// @access  Private
export const getAvailability = async (req, res) => {
    try {
        const { userId } = req.user;

        const availability = await Availability.findOne({ user: userId });

        if (!availability) {
            return res.status(404).json({ message: 'Availability not set' });
        }

        res.status(200).json(availability);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Delete User Availability
// @route   DELETE /api/availability
// @access  Private
export const deleteAvailability = async (req, res) => {
    try {
        const { userId } = req.user;

        const availability = await Availability.findOneAndDelete({ user: userId });

        if (!availability) {
            return res.status(404).json({ message: 'Availability not found' });
        }

        res.status(200).json({ message: 'Availability deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
