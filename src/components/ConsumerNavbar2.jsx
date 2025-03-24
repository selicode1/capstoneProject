import React from "react";
import { Link } from "react-router-dom";
import "./ConsumerNavbar2.css"; // Import the CSS file

export default function ConsumerNavbar2() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="consumer-navbar-2">
      <div className="consumer-container-2">
        <div className="consumer-nav-content-2">
          <div className="consumer-left-section">
            <div className="consumer-category-group">
              <div className="consumer-category-button">
                <span className="consumer-category-text">Browse Category</span>
                <svg className="consumer-dropdown-icon" viewBox="0 0 20 20">
                  <path d="M5.23 7.387a.75.75 0 011.06-.027L10 10.04l3.71-2.68a.75.75 0 01.88 1.21l-4.25 3.07a.75.75 0 01-.88 0l-4.25-3.07a.75.75 0 01-.027-1.06z" />
                </svg>
              </div>
              <div className="consumer-dropdown-menu">
                <ul>
                  <li><span>🍎</span> Fresh Fruits</li>
                  <li><span>🥩</span> Fresh Meat</li>
                  <li><span>🥦</span> Fresh Vegetable</li>
                  <li><span>🐟</span> Green Seafood</li>
                  <li><span>🌰</span> Organic Dryfruit</li>
                  <li><span>🌶️</span> Organic Masala</li>
                  <li><span>🧃</span> Organic Juice</li>
                  <li><span>🦀</span> Sea & Fish</li>
                  <li><span>🍉</span> Summer Fruit</li>
                  <li><span>🍞</span> Baker's Rack</li>
                  <li><span>🧀</span> Dairy & Cheese</li>
                  <li><span>🍷</span> Organic Wine</li>
                </ul>
              </div>
            </div>

            <ul className="consumer-desktop-nav">
              <li><a href="/landing">Home</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/cart">Cart</a></li>
              <li><a href="/checkout">Checkout</a></li>
            </ul>
          </div>

          <div className="consumer-right-section">
            <div className="consumer-user-info">
              <span className="consumer-status">online</span>
              <div className="consumer-username">
                <svg className="consumer-user-icon" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.492 2 12.03c0 5.523 4.477 10 10 10 5.539 0 10.03-4.477 10.03-10C22.03 6.492 17.522 2 12 2zm0 3.5a3.001 3.001 0 110 6 3.001 3.001 0 010-6zm0 15.438c-2.488 0-4.67-1.258-6-3.165.03-1.993 4-3.088 6-3.088 1.989 0 5.97 1.095 6 3.088-1.33 1.907-3.512 3.165-6 3.165z" />
                </svg>
                <span>Guest</span>
              </div>
            </div>

            <button className="consumer-hamburger" onClick={() => setIsOpen(!isOpen)}>
              <svg className="consumer-hamburger-icon" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* {isOpen && (
          <div className="consumer-mobile-menu">
            <ul>
              <li><Link to="/landing" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="/products" onClick={() => setIsOpen(false)}>Shop</Link></li>
              <li>Cart</li>
            </ul>
            <div className="consumer-mobile-user-info">
              <span className="consumer-status">online</span>
              <div className="consumer-username">
                <svg className="consumer-user-icon" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.492 2 12.03c0 5.523 4.477 10 10 10 5.539 0 10.03-4.477 10.03-10C22.03 6.492 17.522 2 12 2zm0 3.5a3.001 3.001 0 110 6 3.001 3.001 0 010-6zm0 15.438c-2.488 0-4.67-1.258-6-3.165.03-1.993 4-3.088 6-3.088 1.989 0 5.97 1.095 6 3.088-1.33 1.907-3.512 3.165-6 3.165z" />
                </svg>
                <span>Guest</span>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </nav>
  );
}
