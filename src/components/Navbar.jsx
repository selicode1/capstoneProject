import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container p-4">
        {/* Navbar toggle with Font Awesome icon */}
        <i
          className="fas fa-bars navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></i>

        {/* Navbar links */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          {/* Left-Side Links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
          </ul>

          {/* Right-Side Buttons */}
          <div className="d-flex align-items-center">
            <a className="nav-link me-3 text-white" href="/login-selection">Sign In</a>
            <a className="btn glass-button" href="/selection">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
