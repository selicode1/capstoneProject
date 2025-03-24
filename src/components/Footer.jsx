import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo / Branding */}
        <div className="footer-brand">
          <h2 className="footer-logo">FarmConnect</h2>
          <p>Connecting Farmers & Innovators</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Community</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="footer-socials">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2025 AgriConnect. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
