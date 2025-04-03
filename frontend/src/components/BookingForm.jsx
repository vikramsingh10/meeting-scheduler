import React, { useState } from "react";
import "../styles/bookingForm.css"; // Import the CSS file

const BookingForm = ({ onSubmit }) => {
  const [booking, setBooking] = useState({
    eventTitle: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    eventLink: "",
  });

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !booking.eventTitle ||
      !booking.eventDate ||
      !booking.startTime ||
      !booking.endTime
    ) {
      alert("Please fill all required fields!");
      return;
    }
    onSubmit(booking);
    setBooking({
      eventTitle: "",
      eventDate: "",
      startTime: "",
      endTime: "",
      eventLink: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2 className="booking-title">Schedule a Meeting</h2>

      <label className="booking-label">
        Event Title:
        <input
          type="text"
          name="eventTitle"
          value={booking.eventTitle}
          onChange={handleChange}
          className="booking-input"
          placeholder="Enter event title"
          required
        />
      </label>

      <label className="booking-label">
        Event Date:
        <input
          type="date"
          name="eventDate"
          value={booking.eventDate}
          onChange={handleChange}
          className="booking-input"
          required
        />
      </label>

      <label className="booking-label">
        Start Time:
        <input
          type="time"
          name="startTime"
          value={booking.startTime}
          onChange={handleChange}
          className="booking-input"
          required
        />
      </label>

      <label className="booking-label">
        End Time:
        <input
          type="time"
          name="endTime"
          value={booking.endTime}
          onChange={handleChange}
          className="booking-input"
          required
        />
      </label>

      <label className="booking-label">
        Event Link (Optional):
        <input
          type="text"
          name="eventLink"
          value={booking.eventLink}
          onChange={handleChange}
          className="booking-input"
          placeholder="Google Meet/Zoom link"
        />
      </label>

      <button type="submit" className="booking-submit-btn">
        Book Meeting
      </button>
    </form>
  );
};

export default BookingForm;
