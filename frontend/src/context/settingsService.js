import axios from "axios";

const API_URL = "http://localhost:5001/api/settings"; // Replace with actual backend URL

const SettingsService = {
  // Fetch user settings
  getUserSettings: async (userId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching user settings:", error);
      throw error;
    }
  },

  // Update user settings (e.g., name, email)
  updateUserSettings: async (userId, updatedData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(`${API_URL}/profile`, updatedData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error updating user settings:", error);
      throw error;
    }
  },

  // Change user password
  changePassword: async (userId, passwordData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(`${API_URL}/${userId}/change-password`, passwordData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error changing password:", error);
      throw error;
    }
  },

  // Delete user account
  deleteUserAccount: async (userId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_URL}/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return { success: true };
    } catch (error) {
      console.error("Error deleting user account:", error);
      throw error;
    }
  },
};

export default SettingsService;
