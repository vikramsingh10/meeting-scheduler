// src/controllers/eventController.js

import Event from '../models/Event.js';

// @desc    Create a new event
// @route   POST /api/events
// @access  Private (Host only)
export const createEvent = async (req, res) => {
    try {
        const { title, description, eventDate, eventTime, eventLink, banner, password } = req.body;
        const hostId = req.user.userId; // Extracting host ID from authenticated user

        const newEvent = new Event({
            hostId,
            title,
            description,
            eventDate,
            eventTime,
            eventLink,
            banner,
            password,
            status: 'Active',
        });

        await newEvent.save();

        res.status(201).json({ message: 'Event created successfully', event: newEvent });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Get all events for the logged-in user
// @route   GET /api/events
// @access  Private (Host only)
export const getEvents = async (req, res) => {
    try {
        const { userId } = req.user;

        const events = await Event.find({ hostId: userId });

        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Get event by ID
// @route   GET /api/events/:eventId
// @access  Public
export const getEventById = async (req, res) => {
    try {
        const { eventId } = req.params;

        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Update an event
// @route   PUT /api/events/:eventId
// @access  Private (Host only)
export const updateEvent = async (req, res) => {
    try {
        const { eventId } = req.params;
        const { userId } = req.user;
        const updateData = req.body;

        let event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        if (event.hostId.toString() !== userId.toString()) {
            return res.status(403).json({ message: 'Unauthorized to update this event' });
        }

        event = await Event.findByIdAndUpdate(eventId, updateData, { new: true });

        res.status(200).json({ message: 'Event updated successfully', event });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Delete an event
// @route   DELETE /api/events/:eventId
// @access  Private (Host only)
export const deleteEvent = async (req, res) => {
    try {
        const { eventId } = req.params;
        const { userId } = req.user;

        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        if (event.hostId.toString() !== userId.toString()) {
            return res.status(403).json({ message: 'Unauthorized to delete this event' });
        }

        await event.deleteOne();

        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
