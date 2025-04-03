import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css"; // Import the CSS file

const Header = ({ isAuthenticated, handleLogout }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        📅 ScheduleIt
      </div>

      <nav className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/events" className="nav-item">Events</Link>
        <Link to="/settings" className="nav-item">Settings</Link>
      </nav>

      <div className="auth-actions">
        {isAuthenticated ? (
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login" className="login-btn">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
