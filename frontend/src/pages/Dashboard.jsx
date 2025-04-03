import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../styles/Dashboard.css";
// import logo from "../assets/CNNCLogo.png";
import EventsPage from "./EventManagement";
import BookingPage from "./Booking";
import AvailabilityPage from "./Availability";
import SettingsPage from "./Settings";

const Dashboard = ({ user }) => {
  const [activeTab, setActiveTab] = useState("events");

  // Function to render the selected component
  const renderContent = () => {
    switch (activeTab) {
      case "events":
        return <EventsPage />;
      case "booking":
        return <BookingPage />;
      case "availability":
        return <AvailabilityPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <EventsPage />;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        {/* Logo */}
        <div className="sidebar-logo">
          <img src="/assets/CNNCLogo.png" alt="CNNCT Logo" />
        </div>

        {/* Navigation Links */}
        <nav className="sidebar-nav">
          <button className={`nav-link ${activeTab === "events" ? "active" : ""}`} onClick={() => setActiveTab("events")}>
            📅 Events
          </button>
          <button className={`nav-link ${activeTab === "booking" ? "active" : ""}`} onClick={() => setActiveTab("booking")}>
            📖 Booking
          </button>
          <button className={`nav-link ${activeTab === "availability" ? "active" : ""}`} onClick={() => setActiveTab("availability")}>
            ✅ Availability
          </button>
          <button className={`nav-link ${activeTab === "settings" ? "active" : ""}`} onClick={() => setActiveTab("settings")}>
            ⚙️ Settings
          </button>
        </nav>

        {/* Create Button */}
        <button className="create-btn">+ Create</button>

        {/* Logged-in User */}
        {user && (
          <div className="user-info">
            <span className="user-avatar">{user.name[0]}</span>
            <span className="user-name">{user.name}</span>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="dashboard-main-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
