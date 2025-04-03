import axios from "axios";

const API_URL = "http://localhost:5001/api/availability"; // Replace with actual backend URL

const AvailabilityService = {
  // Get User Availability
  getAvailability: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching availability:", error);
      throw error;
    }
  },

  // Set Availability
  setAvailability: async (userId, availabilityData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${API_URL}/profile`, availabilityData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error setting availability:", error);
      throw error;
    }
  },

  // Update Availability
  updateAvailability: async (userId, availabilityId, availabilityData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(`${API_URL}/${userId}/${availabilityId}`, availabilityData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error updating availability:", error);
      throw error;
    }
  },

  // Delete Availability
  deleteAvailability: async (userId, availabilityId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_URL}/${userId}/${availabilityId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return { success: true };
    } catch (error) {
      console.error("Error deleting availability:", error);
      throw error;
    }
  },
};

export default AvailabilityService;
