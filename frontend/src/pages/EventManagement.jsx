import React, { useEffect, useState } from "react";
import EventService from "../context/eventService";
import "../styles/EventManagement.css";
import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm"; // Make sure you have this

const EventManagement = ({ userId, triggerCreate, onFormShown }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newEvent, setNewEvent] = useState({ title: "", date: "", link: "" });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const userEvents = await EventService.getEvents();
        setEvents(userEvents);
      } catch (err) {
        setError("Failed to load events.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Handle external trigger from dashboard
  useEffect(() => {
    if (triggerCreate) {
      setShowForm(true);
      onFormShown?.(); // Reset trigger in parent
    }
  }, [triggerCreate]);

  const handleDelete = async (eventId) => {
    try {
      await EventService.deleteEvent(eventId);
      setEvents(events.filter((event) => event._id !== eventId));
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
          <div className="event-management-header">
            <h2>Event Types</h2>
            <button
              className="add-event-btn"
              onClick={() => setShowForm(!showForm)}>
              + Add New Event
            </button>
          </div>

          {showForm && (
            <EventForm
              onSubmit={async (formData) => {
                try {
                  const eventData = {
                    title: formData.eventTitle,
                    date: formData.eventDate,
                    startTime: formData.startTime,
                    endTime: formData.endTime,
                    meetingLink: formData.eventLink,
                    userId,
                  };
                  const created = await EventService.createEvent(eventData);
                  setEvents([...events, created]);
                  setShowForm(false);
                  setError("");
                } catch (error) {
                  setError("Failed to create event.");
                }
              }}
            />
          )}

          <div className="event-list">
            <h3>Your Events</h3>
            {events.length === 0 ? (
              <p>No events found.</p>
            ) : (
              <div className="event-grid">
                {events.map((event) => (
                  <EventCard key={event._id} event={event} />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default EventManagement;
