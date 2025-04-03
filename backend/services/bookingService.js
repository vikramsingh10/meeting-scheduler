// src/services/bookingService.js
import axios from 'axios';

const API_URL = '/api/bookings'; // Base URL for booking-related endpoints

// Create a Booking
export const createBooking = async (bookingData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.post(`${API_URL}/create`, bookingData, config);
    return response.data;
};

// Get All Bookings for a User
export const getUserBookings = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.get(`${API_URL}`, config);
    return response.data;
};

// Get a Single Booking by ID
export const getBookingById = async (bookingId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.get(`${API_URL}/${bookingId}`, config);
    return response.data;
};

// Update a Booking
export const updateBooking = async (bookingId, updatedData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.put(`${API_URL}/${bookingId}`, updatedData, config);
    return response.data;
};

// Cancel a Booking
export const cancelBooking = async (bookingId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.delete(`${API_URL}/${bookingId}`, config);
    return response.data;
};

export default { createBooking, getUserBookings, getBookingById, updateBooking, cancelBooking };
