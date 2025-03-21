import React, { useState } from "react";
import "./LoginPage.css"; // Import the improved CSS file
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="title">Welcome Back</h2>
        <p className="subtitle">Please login to your account</p>
        <form onSubmit={handleLogin} className="form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <Link to="/dashboard"><button type="submit" className="login-btn">Login</button></Link>
        </form>
        <p className="signup-text">
          Don't have an account? 
          <Link to="/signuppage"><a href="#">Sign up</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
