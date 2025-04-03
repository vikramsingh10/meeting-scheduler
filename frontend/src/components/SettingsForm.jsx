import React, { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import "../styles/SettingsForm.css";

const SettingsForm = () => {
  const { user, updateUser, logout } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email) {
      setError("Name and email are required.");
      return;
    }

    if (password && password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await updateUser({ name, email, password });
      setMessage("Profile updated successfully! Logging out...");
      
      setTimeout(() => {
        logout();
      }, 2000);
    } catch (err) {
      setError("Failed to update settings. Please try again.");
    }
  };

  return (
    <div className="settings-container">
      <h2>Account Settings</h2>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit} className="settings-form">
        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>New Password (optional):</label>
          <input
            type="password"
            name="password"
            placeholder="Enter new password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm new password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="save-button">Save Changes</button>
      </form>
    </div>
  );
};

export default SettingsForm;
