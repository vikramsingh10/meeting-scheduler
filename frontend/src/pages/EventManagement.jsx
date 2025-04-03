import React, { useEffect, useState } from "react";
import EventService from "../context/eventService";
import "../styles/EventManagement.css";

const EventManagement = ({ userId }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newEvent, setNewEvent] = useState({ title: "", date: "", link: "" });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const userEvents = await EventService.getUserEvents(userId);
        setEvents(userEvents);
      } catch (err) {
        setError("Failed to load events.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [userId]);

  const handleDelete = async (eventId) => {
    try {
      await EventService.deleteEvent(eventId);
      setEvents(events.filter(event => event._id !== eventId));
    } catch (error) {
      setError("Failed to delete event.");
    }
  };

  const handleCreateEvent = async () => {
    if (!newEvent.title || !newEvent.date || !newEvent.link) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      const createdEvent = await EventService.createEvent(userId, newEvent);
      setEvents([...events, createdEvent]);
      setNewEvent({ title: "", date: "", link: "" });
      setError("");
    } catch (error) {
      setError("Failed to create event.");
    }
  };

  return (
    <div className="event-management-container">
      <h2>Manage Your Events</h2>

      {loading ? (
        <p>Loading events...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <>
          <div className="create-event">
            <h3>Create New Event</h3>
            <input
              type="text"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            />
            <input
              type="datetime-local"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            />
            <input
              type="text"
              placeholder="Meeting Link"
              value={newEvent.link}
              onChange={(e) => setNewEvent({ ...newEvent, link: e.target.value })}
            />
            <button onClick={handleCreateEvent} className="create-button">Create Event</button>
          </div>

          <div className="event-list">
            <h3>Your Events</h3>
            {events.length === 0 ? (
              <p>No events found.</p>
            ) : (
              <ul>
                {events.map((event) => (
                  <li key={event._id} className="event-item">
                    <span>{event.title} - {new Date(event.date).toLocaleString()}</span>
                    <a href={event.link} target="_blank" rel="noopener noreferrer" className="event-link">Join</a>
                    <button onClick={() => handleDelete(event._id)} className="delete-button">Delete</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default EventManagement;
