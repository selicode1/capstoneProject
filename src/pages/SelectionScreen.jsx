import React from "react";
import { useNavigate } from 'react-router-dom';
import "./SelectionScreen.css";

const SelectionScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid selection-screen">
      {/* Back Button */}
      <div className="back-button" onClick={() => navigate('/')}>
      <i className="fi fi-rs-angle-left"></i>
      </div>

      {/* Options Section */}
      <div className="selection-container">
        <a href="/consumer" className="selection-card slide-in3">
          <img src="src/assets/Consumer2.jpg" alt="Consumer" />
          <div className="label">As Consumer</div>
        </a>

        <a href="/producer" className="selection-card slide-in1">
          <img src="/src/assets/Producer1.jpg" alt="Producer" />
          <div className="label">As Producer</div>
        </a>
      </div>
    </div>
  );
};

export default SelectionScreen;
