import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // Access the user and logout function from context

  const handleLogout = () => {
    logout(); // Call the logout function from context
    navigate("/login-selection"); // Redirect to the login page
  };

  return (
    <aside className="side-bar">
      <div className="profile">
        <div className="user-profile">
          <img
            src="/src/assets/user.png"
            alt="user-image"
            className="avatar1"
          />
          <div className="user-profile-info">
            <span className="user-name">{user || "Guest"}</span>
            <small className="role">Farmer</small>
          </div>
        </div>
      </div>
      <div className="menugroup">
        <div className="menu-2">
          <NavLink
            to="/dashboard"
            className={`menu-item ${
              location.pathname === "/dashboard" ? "active" : ""
            }`}
          >
            <i className="fi fi-rr-apps-add"></i> Dashboard
          </NavLink>
          <NavLink
            to="/product"
            className={`menu-item ${
              location.pathname === "/product" ? "active" : ""
            }`}
          >
            <i className="fi fi-rr-box-open"></i> Orders
          </NavLink>
          <NavLink
            to="/statistics"
            className={`menu-item ${
              location.pathname === "/statistics" ? "active" : ""
            }`}
          >
            <i className="fi fi-rr-chart-simple-horizontal"></i> Statistics
          </NavLink>
          <NavLink
            to="/audience"
            className={`menu-item ${
              location.pathname === "/audience" ? "active" : ""
            }`}
          >
            <i className="fi fi-rr-target-audience"></i> Rating
          </NavLink>
        </div>
        <div className="menu-3">
          <a href="" className="menu-item-log" onClick={handleLogout}>
            <i className="fi fi-rr-exit"></i>
            Logout
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
