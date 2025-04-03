import axios from "axios";

const API_URL = "http://localhost:5001/api/auth"; // Replace with actual backend URL

const AuthService = {
  // User Login
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },

  // User Signup
  signup: async ({firstName, lastName, email, password}) => {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        firstName,
        lastName,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  },

  // Get Current User Data
  getCurrentUser: async () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
      const response = await axios.get(`${API_URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.user;
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem("token");
  },

  // Check if User is Authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem("token");
  },
};

export default AuthService;
