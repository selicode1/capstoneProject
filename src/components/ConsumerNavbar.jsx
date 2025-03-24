import React from 'react'
import './ConsumerNavbar.css'
import { useNavigate } from 'react-router-dom'

export default function ConsumerNavbar() {

    const navigate = useNavigate();
  return (
    <header className="consumer-navbar">
    {/* Logo */}
    <div className="consumer-logo" onClick={() => navigate('/')}>Agri-Link</div>

    {/* Search Bar */}
    <div className="consumer-search-container">
      <input
        type="text"
        placeholder="Search products, features or something"
        className="consumer-search-input"
      />
      <button className="consumer-search-button">Q</button>
    </div>

    {/* Icons on the Right */}
    <div className="consumer-icons-container">
      {/* Favorite Icon */}
      <button className="consumer-icon-button">
        <img
          src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
          alt="Favorites"
          className="consumer-icon"
        />
      </button>
      {/* Cart Icon */}
      <button className="consumer-icon-button" onClick={() => navigate('/cart')}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
          alt="Cart"
          className="consumer-icon"
        />
      </button>
    </div>
  </header>
  )
}
