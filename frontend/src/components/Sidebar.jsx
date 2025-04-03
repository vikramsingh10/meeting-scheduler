import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css"; // Import the CSS file

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "←" : "→"}
      </button>

      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-item">🏠 Home</Link>
        <Link to="/events" className="sidebar-item">📅 Events</Link>
        <Link to="/availability" className="sidebar-item">⏳ Availability</Link>
        <Link to="/booking" className="sidebar-item">⏳ Booking</Link>
        <Link to="/settings" className="sidebar-item">⚙️ Settings</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
