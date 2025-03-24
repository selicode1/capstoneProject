import React from "react";
import "./Subscription.css";

const Subscription = () => {
  return (
    <section className="subscription-section">
      <h2 className="subscription-title">
        Get The Latest <span className="dots">.............</span> Update By Subscribing
      </h2>
      
      <div className="subscription-form">
        <div className="input-container">
          <input type="email" placeholder="Enter email Address" className="email-input" />
          <button className="subscribe-button">Join Now</button>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
