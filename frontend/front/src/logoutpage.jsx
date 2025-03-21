import React from "react";
import "./LogoutPage.css"; // Import the CSS file

const LogoutPage = () => {
  const handleLogout = () => {
    console.log("User logged out!");
  };

  return (
    <div className="logout-container">
      <div className="logout-card">
        <h2 className="title">Goodbye!</h2>
        <p className="subtitle">You have successfully logged out.</p>
        <button onClick={handleLogout} className="logout-btn">
          Log In Again
        </button>
      </div>
    </div>
  );
};

export default LogoutPage;
