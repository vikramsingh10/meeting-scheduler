import React, { useEffect, useState } from "react";
import BookingService from "../context/bookingService";
import "../styles/Booking.css"; // Import the CSS for styling

const Booking = ({ userId }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await BookingService.getBookings(userId);
        setBookings(data);
      } catch (err) {
        setError("Failed to load bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [userId]);

  const handleCancelBooking = async (bookingId) => {
    try {
      await BookingService.cancelBooking(bookingId);
      setBookings((prev) => prev.filter((booking) => booking._id !== bookingId));
    } catch (error) {
      setError("Failed to cancel booking");
    }
  };

  return (
    <div className="booking-container">
      <h2>Your Bookings</h2>
      {loading ? (
        <p>Loading bookings...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul className="booking-list">
          {bookings.map((booking) => (
            <li key={booking._id} className="booking-item">
              <span>{booking.eventTitle} - {new Date(booking.date).toLocaleString()}</span>
              <button onClick={() => handleCancelBooking(booking._id)} className="cancel-button">
                Cancel
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Booking;
