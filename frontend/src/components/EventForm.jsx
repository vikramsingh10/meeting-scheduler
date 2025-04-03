import React, { useState } from "react";
import "../styles/eventForm.css"; // Import the CSS file

const EventForm = ({ onSubmit, initialData }) => {
  const [eventData, setEventData] = useState(
    initialData || {
      eventTitle: "",
      eventDate: "",
      startTime: "",
      endTime: "",
      eventLink: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(eventData);
    setEventData({
      eventTitle: "",
      eventDate: "",
      startTime: "",
      endTime: "",
      eventLink: "",
    });
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2 className="form-title">{initialData ? "Edit Event" : "Create Event"}</h2>
      
      <label>Event Title:</label>
      <input
        type="text"
        name="eventTitle"
        value={eventData.eventTitle}
        onChange={handleChange}
        required
      />

      <label>Event Date:</label>
      <input
        type="date"
        name="eventDate"
        value={eventData.eventDate}
        onChange={handleChange}
        required
      />

      <label>Start Time:</label>
      <input
        type="time"
        name="startTime"
        value={eventData.startTime}
        onChange={handleChange}
        required
      />

      <label>End Time:</label>
      <input
        type="time"
        name="endTime"
        value={eventData.endTime}
        onChange={handleChange}
        required
      />

      <label>Meeting Link (Optional):</label>
      <input
        type="url"
        name="eventLink"
        value={eventData.eventLink}
        onChange={handleChange}
      />

      <button type="submit" className="submit-btn">
        {initialData ? "Update Event" : "Create Event"}
      </button>
    </form>
  );
};

export default EventForm;
