import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "../styles/Login.css";
import { AuthContext } from "../context/authContext";
import { Notification } from "../utilities/notification.utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // try {
    //   await login(email, password);
    //   navigate("/dashboard");
    // } catch (err) {
    //   setError("Invalid email or password.");
    // }
    try {
      const response = await login(email, password);
      
      if (response?.token) {
        navigate("/dashboard");
      } else {
        // setError("Invalid email or password.");
        Notification("error", "Invalid email or password.")
      }
    } catch (err) {
      // setError("Invalid email or password.");
      Notification("error", "Invalid email or password.")
    }    
  };

  return (
    <div className="main-container">
      {/* Left Section */}
      <div className="left-section">
        <img src="./assets/CNNCLogo.png" alt="logo" className="logo" />
        <div className="signin-container">
          <h2>Sign in</h2>
          <form onSubmit={handleSubmit} className="login-form">
            {error && <p className="error-message">{error}</p>}
            <div className="input-group">
              <input
                type="email"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group" style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "-10px",
                  top: "65%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#676b5f",
                }}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button type="submit" className="login-button" >
              Log in
            </button>
          </form>
          <p className="signup-link" style={{
            marginTop:"80px",
            
          }}>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
        <p
          className="bottom-text"
          style={{
            color: "#676B5F",
            textAlign: "center",
            marginTop: "400px",
            fontSize: "12px",
          }}>
          This site is protected by reCAPTCHA and the{" "}
          <span style={{textDecoration:"underline"}}>Google Privacy Policy</span> and <span style={{textDecoration:"underline"}}>Terms of Service</span>{" "}
          apply.
        </p>
      </div>

      {/* Right Section */}
      <div className="right-section"></div>
    </div>
  );
};

export default Login;
