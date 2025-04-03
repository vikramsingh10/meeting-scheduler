import React, { useState } from "react";
import "../styles/availability.css";

const Availability = ({ onSave }) => {
  const [availability, setAvailability] = useState({
    startTime: "",
    endTime: "",
    days: [],
  });

  const [error, setError] = useState("");

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const handleCheckboxChange = (day) => {
    setAvailability((prev) => ({
      ...prev,
      days: prev.days.includes(day)
        ? prev.days.filter((d) => d !== day)
        : [...prev.days, day],
    }));
  };

  const handleChange = (e) => {
    setAvailability({ ...availability, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!availability.startTime || !availability.endTime) {
      setError("Please select both start and end time.");
      return false;
    }
    if (availability.days.length === 0) {
      setError("Please select at least one day.");
      return false;
    }
    if (availability.startTime >= availability.endTime) {
      setError("Start time must be before end time.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(availability);
      alert("Availability saved successfully!");
    }
  };

  return (
    <div className="availability-container">
      <h2 className="availability-title">Set Your Availability</h2>
      <form className="availability-form" onSubmit={handleSubmit}>
        <label className="availability-label">Start Time:</label>
        <input
          type="time"
          name="startTime"
          className="availability-input"
          value={availability.startTime}
          onChange={handleChange}
        />

        <label className="availability-label">End Time:</label>
        <input
          type="time"
          name="endTime"
          className="availability-input"
          value={availability.endTime}
          onChange={handleChange}
        />

        <label className="availability-label">Select Days:</label>
        <div className="availability-days">
          {daysOfWeek.map((day) => (
            <label key={day} className="day-checkbox">
              <input
                type="checkbox"
                value={day}
                checked={availability.days.includes(day)}
                onChange={() => handleCheckboxChange(day)}
              />
              {day}
            </label>
          ))}
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="save-btn">Save Availability</button>
      </form>
    </div>
  );
};

export default Availability;
