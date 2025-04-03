// src/services/settingsService.js
import axios from 'axios';

const API_URL = '/api/users/settings'; // Base URL for user settings

// Update User Profile
export const updateUserProfile = async (updatedData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.put(`${API_URL}/update`, updatedData, config);
    return response.data;
};

// Update Password
export const updatePassword = async (passwordData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.put(`${API_URL}/update-password`, passwordData, config);
    return response.data;
};

// Get User Profile Details
export const getUserProfile = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.get(`${API_URL}`, config);
    return response.data;
};

export default { updateUserProfile, updatePassword, getUserProfile };
