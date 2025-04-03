import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css"; // Import the CSS file

const Navbar = ({ isAuthenticated, handleLogout }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => navigate("/")}>
        <img src="./assets/CNNCLogo.png" alt="logo"/>
      </div>

      <div className="nav-actions">
        {isAuthenticated ? (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/signup" className="signup-btn">
            Sign up free
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
