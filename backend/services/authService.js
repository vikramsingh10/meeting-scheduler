// src/services/authService.js
import axios from 'axios';

const API_URL = '/api/auth'; // Base URL for authentication endpoints

// Register User
// export const registerUser = async (userData) => {
//     const response = await axios.post(`${API_URL}/register`, userData);
//     console.log(response);
//     if (response.data) {
//         localStorage.setItem('userInfo', JSON.stringify(response.data));
//     }
//     return response.data;
// };

// Login User
export const loginUser = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    if (response.data) {
        localStorage.setItem('userInfo', JSON.stringify(response.data));
    }
    return response.data;
};

// Logout User
export const logoutUser = () => {
    localStorage.removeItem('userInfo');
};

export default { registerUser, loginUser, logoutUser };
