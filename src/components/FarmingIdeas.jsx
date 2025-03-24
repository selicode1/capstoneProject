import React from "react";
import "./FarmingIdeas.css";

const FarmingIdeas = () => {
  return (
    <section className="farming-ideas-section container">
      {/* LEFT TEXT CONTENT */}
      <div className="text-container slide-right">
        <h2 className="fw-normal">
          Improve Farming
          with New Ideas For
          The Future.
        </h2>
        <p className="farming-description">
          We're about shaking up modern agriculture with cool, sustainable 
          practices to make the industry way greener and awesome for the future.
        </p>
      </div>

      {/* RIGHT IMAGE CONTENT */}
      <div className="hand-image-container1 slide-left">
        <img 
          src="/src/assets/fam8.jpeg" 
          alt="Hands holding soil" 
          className="farming-image" 
        />
      </div>
    </section>
  );
};

export default FarmingIdeas;
