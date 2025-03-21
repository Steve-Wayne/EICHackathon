import React from "react";
import { Link } from "react-router-dom";
import "./getstarted.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="content">
        <h1 className="title">Welcome to Bridge AI</h1>
        <p className="subtitle">Your AI-powered assistant for seamless interactions.</p>
        <Link to="/chatbotpage">
          <button className="start-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
