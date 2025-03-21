import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css" 
const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signing up with:", { username, fullName, email, password });
  };
  return (
    <div className="signup-container">
      <div className="signup-card ">
        <h2 className="title">Create Account</h2>
        <p className="subtitle">Sign up to get started</p>
        <form onSubmit={handleSignup} className="form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="input-field"
              required
            />
          </div>
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
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="login-text">
          Already have an account?
          <Link to="/">
          <a className="belli" href="#">Login</a>
          </Link> 
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
