// src/controllers/bookingController.js

import Booking from '../models/Booking.js';
import Availability from '../models/Availability.js';

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Public
export const createBooking = async (req, res) => {
    try {
        const { hostId, userName, userEmail, eventTitle, eventDate, eventTime } = req.body;

        // Check if host is available at the selected time
        const hostAvailability = await Availability.findOne({ user: hostId });

        if (!hostAvailability) {
            return res.status(404).json({ message: 'Host availability not found' });
        }

        const isAvailable = hostAvailability.availableDays.includes(new Date(eventDate).getDay()) &&
            hostAvailability.availableTimes.includes(eventTime);

        if (!isAvailable) {
            return res.status(400).json({ message: 'Selected time is not available' });
        }

        // Create booking
        const newBooking = await Booking.create({
            hostId,
            userName,
            userEmail,
            eventTitle,
            eventDate,
            eventTime,
            status: 'Pending',
        });

        res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Get all bookings for a user (host)
// @route   GET /api/bookings
// @access  Private (Host only)
export const getBookings = async (req, res) => {
    try {
        const { userId } = req.user;

        const bookings = await Booking.find({ hostId: userId });

        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Cancel a booking
// @route   DELETE /api/bookings/:bookingId
// @access  Private (Host or User)
export const cancelBooking = async (req, res) => {
    try {
        const { bookingId } = req.params;
        const { userId } = req.user;

        const booking = await Booking.findById(bookingId);

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        // Only the host or the user who booked can cancel
        if (booking.hostId.toString() !== userId.toString() && booking.userEmail !== req.user.email) {
            return res.status(403).json({ message: 'Unauthorized to cancel this booking' });
        }

        await booking.deleteOne();

        res.status(200).json({ message: 'Booking canceled successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
