import axios from "axios";

const API_URL = "http://localhost:5001/api/bookings"; // Replace with actual backend URL

const BookingService = {
  // Fetch all bookings for a user
  getBookings: async (userId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching bookings:", error);
      throw error;
    }
  },

  // Create a new booking
  createBooking: async (bookingData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${API_URL}/`, bookingData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating booking:", error);
      throw error;
    }
  },

  // Update an existing booking
  updateBooking: async (bookingId, updatedData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(`${API_URL}/${bookingId}`, updatedData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error updating booking:", error);
      throw error;
    }
  },

  // Cancel a booking
  cancelBooking: async (bookingId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_URL}/${bookingId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return { success: true };
    } catch (error) {
      console.error("Error canceling booking:", error);
      throw error;
    }
  },
};

export default BookingService;
