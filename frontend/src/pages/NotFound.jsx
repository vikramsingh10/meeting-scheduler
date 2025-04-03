// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/notFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oops! The page you're looking for does not exist.</p>
      <Link to="/" className="not-found-home-link">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
