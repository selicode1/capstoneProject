import React from "react";
import "./Banner.css"; // Import CSS file

export default function Banner() {
  return (
    <div className="consumer-banner-container">
      {/* Left Image */}
      <div className="consumer-banner-left-image">
        <img
          src="https://plus.unsplash.com/premium_photo-1675798983878-604c09f6d154?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Left Plate"
          className="consumer-banner-image"
        />
      </div>

      {/* Right Image */}
      <div className="consumer-banner-right-image">
        <img
          src="https://plus.unsplash.com/premium_photo-1675798983878-604c09f6d154?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Right Plate"
          className="consumer-banner-image"
        />
      </div>

      {/* Text Content */}
      <div className="consumer-banner-content">
        <p className="consumer-banner-offer-text">New Customer Offers</p>
        <h2 className="consumer-banner-title">
          Cooked Vegetable With Sauce And Space
        </h2>
        <p className="consumer-banner-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aenean commodo ligula eget dolor.
        </p>
        <button className="consumer-banner-button">Shop Now</button>
      </div>
    </div>
  );
}
