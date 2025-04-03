// src/services/availabilityService.js
import axios from 'axios';

const API_URL = '/api/availability'; // Base URL for availability endpoints

// Set User Availability
export const setAvailability = async (availabilityData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.post(`${API_URL}/set`, availabilityData, config);
    return response.data;
};

// Get User Availability
export const getAvailability = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.get(`${API_URL}`, config);
    return response.data;
};

// Update Availability
export const updateAvailability = async (availabilityId, updatedData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.put(`${API_URL}/${availabilityId}`, updatedData, config);
    return response.data;
};

// Delete Availability
export const deleteAvailability = async (availabilityId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.delete(`${API_URL}/${availabilityId}`, config);
    return response.data;
};

export default { setAvailability, getAvailability, updateAvailability, deleteAvailability };
