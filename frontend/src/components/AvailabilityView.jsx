import React from "react";
import "../styles/availabilityView.css"; // Import the CSS file

const AvailabilityView = ({ availabilityList, onRemove }) => {
  return (
    <div className="availability-view">
      <h2 className="availability-title">Your Availability</h2>
      {availabilityList.length === 0 ? (
        <p className="availability-empty">No availability added yet.</p>
      ) : (
        <ul className="availability-list">
          {availabilityList.map((slot, index) => (
            <li key={index} className="availability-item">
              <span className="availability-text">
                {slot.day}: {slot.startTime} - {slot.endTime}
              </span>
              <button
                className="availability-remove-btn"
                onClick={() => onRemove(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AvailabilityView;
