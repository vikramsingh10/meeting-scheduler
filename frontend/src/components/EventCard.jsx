import React from "react";
import "../styles/eventCard.css"; // Import the CSS file

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3 className="event-title">{event.eventTitle}</h3>
      <p className="event-date">📅 {event.eventDate}</p>
      <p className="event-time">⏰ {event.startTime} - {event.endTime}</p>
      {event.eventLink && (
        <a href={event.eventLink} target="_blank" rel="noopener noreferrer" className="event-link">
          🔗 Join Meeting
        </a>
      )}
    </div>
  );
};

export default EventCard;
