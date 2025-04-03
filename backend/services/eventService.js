// src/services/eventService.js
import axios from 'axios';

const API_URL = '/api/events'; // Base URL for event-related endpoints

// Create an Event
export const createEvent = async (eventData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.post(`${API_URL}/create`, eventData, config);
    return response.data;
};

// Get All Events for a User
export const getUserEvents = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.get(`${API_URL}`, config);
    return response.data;
};

// Get a Single Event by ID
export const getEventById = async (eventId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.get(`${API_URL}/${eventId}`, config);
    return response.data;
};

// Update an Event
export const updateEvent = async (eventId, updatedData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.put(`${API_URL}/${eventId}`, updatedData, config);
    return response.data;
};

// Delete an Event
export const deleteEvent = async (eventId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.delete(`${API_URL}/${eventId}`, config);
    return response.data;
};

export default { createEvent, getUserEvents, getEventById, updateEvent, deleteEvent };
