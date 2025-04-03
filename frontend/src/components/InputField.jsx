import React from "react";
import "../styles/inputField.css"; // Import the CSS file

const InputField = ({ label, type, name, value, onChange, placeholder, error }) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-field ${error ? "input-error" : ""}`}
        required
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default InputField;
