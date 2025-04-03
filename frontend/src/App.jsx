import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import EventManagement from "./pages/EventManagement";
import Availability from "./pages/Availability";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import { AuthContext } from "./context/authContext";
import "./styles/global.css";

const AppLayout = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation(); // Get the current route

  return (
    <div className="app-container">
      {location.pathname === "/" && <Navbar />} {/* Show Navbar only on Home */}
      <div className="main-content">
        {user && <Sidebar />} {/* Show Sidebar only if the user is logged in */}
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/events" element={<EventManagement />} />
            <Route path="/availability" element={<Availability />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
