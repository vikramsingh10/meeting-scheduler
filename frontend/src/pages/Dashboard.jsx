import React, { useState } from "react";
import "../styles/Dashboard.css";
import EventsPage from "./EventManagement";
import BookingPage from "./Booking";
import AvailabilityPage from "./Availability";
import SettingsPage from "./Settings";

const Dashboard = ({ user }) => {
  const [activeTab, setActiveTab] = useState("events");
  const [triggerCreateEvent, setTriggerCreateEvent] = useState(false);

  const handleCreateClick = () => {
    if (activeTab === "events") {
      setTriggerCreateEvent(true);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "events":
        return (
          <EventsPage
            userId={user?._id}
            triggerCreate={triggerCreateEvent}
            onFormShown={() => setTriggerCreateEvent(false)} // Reset trigger
          />
        );
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
          <button
            className={`nav-link ${activeTab === "events" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("events");
              setTriggerCreateEvent(false);
            }}>
            📅 Events
          </button>
          <button
            className={`nav-link ${activeTab === "booking" ? "active" : ""}`}
            onClick={() => setActiveTab("booking")}>
            📖 Booking
          </button>
          <button
            className={`nav-link ${
              activeTab === "availability" ? "active" : ""
            }`}
            onClick={() => setActiveTab("availability")}>
            ✅ Availability
          </button>
          <button
            className={`nav-link ${activeTab === "settings" ? "active" : ""}`}
            onClick={() => setActiveTab("settings")}>
            ⚙️ Settings
          </button>
        </nav>

        {/* Create Button — Visible only in Events tab */}
        {activeTab === "events" && (
          <button className="create-btn" onClick={handleCreateClick}>
            + Create
          </button>
        )}

        {/* User Info */}
        {user && (
          <div className="user-info">
            <span className="user-avatar">{user.name[0]}</span>
            <span className="user-name">{user.name}</span>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="dashboard-main-content">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
