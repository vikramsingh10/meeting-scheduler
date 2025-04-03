import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../context/authService";

// Create Authentication Context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check if user is already logged in (persist session)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const loggedInUser = await AuthService.getCurrentUser();
        if (loggedInUser) {
          setUser(loggedInUser);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  // Signup function
  const signup = async (firstName, lastName, email, password) => {
    try {
      const response = await AuthService.signup({ firstName, lastName, email, password });
      setUser(response.user);
      localStorage.setItem("token", response.token);
      return { success: true };
    } catch (error) {
      console.error("Signup error:", error);
      return { success: false, message: error.response?.data?.message || "Signup failed" };
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      const response = await AuthService.login(email, password);
      setUser(response.user);
      localStorage.setItem("token", response.token);
      return { success: true };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, message: error.response?.data?.message || "Login failed" };
    }
  };

  // Logout function
  const logout = () => {
    AuthService.logout();
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
