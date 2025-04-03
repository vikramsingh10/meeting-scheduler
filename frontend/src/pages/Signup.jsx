import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import "../styles/Login.css";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const { firstName, lastName, email, password, confirmPassword, agreeToTerms } = formData;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agreeToTerms) {
      setError("You must agree to the Terms of Use and Privacy Policy.");
      return;
    }

    try {
      const response = await signup(firstName, lastName, email, password);
    
      if (response?.success) { // Ensure the API returns a success flag
        setMessage("Account created successfully! Redirecting...");
        setTimeout(() => navigate("/dashboard"), 2000);
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (err) {
      setError("Signup failed. Please try again.");
    }
    
  };

  return (
    <div className="main-container">
      <div className="left-section">
        <img src="./assets/CNNCLogo.png" alt="logo" className="logo" />
        <div className="signin-container">
        <div className="heading">
          <h2 
          style={{
            color: "#333333",
            fontSize: "18px",
          }}>Create an account</h2>
          <p className="signup-link">
             <a href="/login">Sign in instead</a>
          </p></div>
          <form onSubmit={handleSubmit} className="login-form">
            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}

            <div className="input-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group password-group">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              
            </div>

            <div className="input-group password-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              
            </div>

            <div className="checkbox-group">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
              />
              <label style={{color:"#3D3D3D", fontSize:"12px", marginLeft:"-300px"}}>
                By creating an account, I agree to our <span>Terms of Use</span> and <span>Privacy Policy</span>.
              </label>
            </div>

            <button type="submit" className="login-button">
              Create an account
            </button>
          </form>
          <p
          className="bottom-text"
          style={{
            color: "#676B5F",
            textAlign: "center",
            marginTop: "200px",
            marginBottom:"-90px",
            fontSize: "12px",
          }}>
          This site is protected by reCAPTCHA and the{" "}
          <span style={{textDecoration:"underline"}}>Google Privacy Policy</span> and <span style={{textDecoration:"underline"}}>Terms of Service</span>{" "}
          apply.
        </p>
        </div>
      </div>

      <div className="right-section"></div>
    </div>
  );
};

export default Signup;
