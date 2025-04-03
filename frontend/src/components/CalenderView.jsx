import React from "react";
import "../styles/calendarView.css"; // Import the CSS file

const CalendarView = ({ events }) => {
  return (
    <div className="calendar-view">
      <h2 className="calendar-title">Meeting Schedule</h2>
      {events.length === 0 ? (
        <p className="calendar-empty">No scheduled meetings.</p>
      ) : (
        <div className="calendar-grid">
          {events.map((event, index) => (
            <div key={index} className="calendar-event">
              <h3 className="event-title">{event.eventTitle}</h3>
              <p className="event-date">📅 {event.eventDate}</p>
              <p className="event-time">⏰ {event.startTime} - {event.endTime}</p>
              {event.eventLink && (
                <a href={event.eventLink} target="_blank" rel="noopener noreferrer" className="event-link">
                  🔗 Join Meeting
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CalendarView;
