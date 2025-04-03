import React, { useState } from "react";
import "../styles/availabilityForm.css"; // Import the CSS file

const AvailabilityForm = ({ onSubmit }) => {
  const [availability, setAvailability] = useState({
    day: "",
    startTime: "",
    endTime: "",
  });

  const handleChange = (e) => {
    setAvailability({ ...availability, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!availability.day || !availability.startTime || !availability.endTime) {
      alert("All fields are required!");
      return;
    }
    onSubmit(availability);
    setAvailability({ day: "", startTime: "", endTime: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="availability-form">
      <label className="availability-label">
        Select Day:
        <select
          name="day"
          value={availability.day}
          onChange={handleChange}
          className="availability-select"
        >
          <option value="">-- Select a Day --</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </label>

      <label className="availability-label">
        Start Time:
        <input
          type="time"
          name="startTime"
          value={availability.startTime}
          onChange={handleChange}
          className="availability-input"
        />
      </label>

      <label className="availability-label">
        End Time:
        <input
          type="time"
          name="endTime"
          value={availability.endTime}
          onChange={handleChange}
          className="availability-input"
        />
      </label>

      <button type="submit" className="availability-submit-btn">
        Save Availability
      </button>
    </form>
  );
};

export default AvailabilityForm;
