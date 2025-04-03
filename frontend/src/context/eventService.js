import axios from "axios";

const API_URL = "http://localhost:5001/api/events"; // Replace with actual backend URL

const EventService = {
  // Fetch all events for a user
  getEvents: async (userId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  },

  // Fetch event by ID
  getEventById: async (eventId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/${eventId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching event:", error);
      throw error;
    }
  },

  // Create a new event
  createEvent: async (eventData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${API_URL}/`, eventData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating event:", error);
      throw error;
    }
  },

  // Update an existing event
  updateEvent: async (eventId, updatedData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(`${API_URL}/${eventId}`, updatedData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error updating event:", error);
      throw error;
    }
  },

  // Delete an event
  deleteEvent: async (eventId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_URL}/${eventId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return { success: true };
    } catch (error) {
      console.error("Error deleting event:", error);
      throw error;
    }
  },
};

export default EventService;
