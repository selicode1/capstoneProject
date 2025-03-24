import React from "react";
import "./ConsumerFooter.css"; // Import the CSS file

export default function ConsumerFooter() {
  return (
    <footer className="consumer-foot-footer">
      <div className="consumer-foot-container">
        <div className="consumer-foot-grid">
          {/* 1) Brand / Logo */}
          <div className="consumer-foot-brand">
            <h4 className="consumer-foot-logo">Agri-Link</h4>
            {/* Optionally add a brand description here */}
          </div>

          {/* 2) Services */}
          <div className="consumer-foot-services">
            <h2 className="consumer-foot-heading">Services</h2>
            <ul className="consumer-foot-list consumer-foot-text-sm">
              <li>
                <a href="#" className="consumer-foot-link consumer-foot-link--green">
                  About Farmconnect
                </a>
              </li>
              <li>
                <a href="#" className="consumer-foot-link">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="#" className="consumer-foot-link">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="consumer-foot-link">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="consumer-foot-link">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* 3) Privacy & Terms */}
          <div className="consumer-foot-privacy">
            <h2 className="consumer-foot-heading">Privacy &amp; Terms</h2>
            <ul className="consumer-foot-list consumer-foot-text-sm">
              <li>
                <a href="#" className="consumer-foot-link">
                  Payment Policy
                </a>
              </li>
              <li>
                <a href="#" className="consumer-foot-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="consumer-foot-link">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="consumer-foot-link">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="consumer-foot-link">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* 4) My Account */}
          <div className="consumer-foot-account">
            <h2 className="consumer-foot-heading">My Account</h2>
            <ul className="consumer-foot-list consumer-foot-text-sm">
              <li>
                <a href="#" className="consumer-foot-link">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="consumer-foot-link">
                  My Cart
                </a>
              </li>
              <li>
                <a href="#" className="consumer-foot-link">
                  Order History
                </a>
              </li>
              <li>
                <a href="#" className="consumer-foot-link">
                  Wishlist
                </a>
              </li>
            </ul>
          </div>

          {/* 5) Menu Title */}
          <div className="consumer-foot-menu">
            <h2 className="consumer-foot-heading">Menu Title</h2>
            <ul className="consumer-foot-list consumer-foot-text-sm">
              <li>
                <a href="#" className="consumer-foot-link">
                  Fruits
                </a>
              </li>
              <li>
                <a href="#" className="consumer-foot-link">
                  Fast Foods
                </a>
              </li>
              <li>
                <a href="#" className="consumer-foot-link">
                  Vegetable
                </a>
              </li>
              <li>
                <a href="#" className="consumer-foot-link">
                  Salads
                </a>
              </li>
              <li>
                <a href="#" className="consumer-foot-link">
                  Bestseller
                </a>
              </li>
            </ul>
          </div>

          {/* 6) Get The Latest Deals */}
          <div className="consumer-foot-deals">
            <span >
              Get The Latest Deals And Receive $20 Coupon
            </span>
            <div className="consumer-foot-subscribe">
              <input
                type="email"
                placeholder="Enter your email address"
                className="consumer-foot-input"
              />
              <button className="consumer-foot-button">
                Subscribe
              </button>
            </div>
            <div className="consumer-foot-icons">
              <div className="consumer-foot-icon">
                <svg
                  className="consumer-foot-icon-svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M380.9 97.1C339.3 55.5 285.5 32 228.8 32C102.5 32 0 134.5 0 260.8c0 45.3 11.6 89.3 33.7 128.3L0 480l92.8-32.8c37.9 20.8 80.5 31.7 125.9 31.7h.1c126.3 0 228.8-102.5 228.8-228.8c0-56.7-23.5-110.5-66.7-152.9zM228.9 425.2c-40.3 0-79.4-10.7-113.7-31l-8.1-4.8-54.9 19.4l18.7-55.8l-5.3-8.7c-20.4-33.5-31.2-72.1-31.2-111.9c0-114 92.8-206.8 206.9-206.8c55.4 0 107.4 21.6 146.6 60.8c39.2 39.2 60.8 91.2 60.8 146.6c-.1 114.1-92.9 206.9-207 206.9zM345.1 269.4c-6.4-3.2-38-18.7-43.8-20.8c-5.9-2.1-10.2-3.2-14.6 3.2c-4.3 6.4-16.8 20.8-21 25.1c-3.8 3.9-7.7 4.4-14.1 1.6c-6.4-3.2-27.1-10-51.6-31.9c-19.1-17-31.9-38.1-35.6-44.5c-3.7-6.4-.4-9.8 2.8-13c3 3 6.4-3.2 10.2-6.4c3.2-3.2 4.3-6.4 6.4-10.7c2.1-4.3 1.1-8-0.5-11.2c-1.6-3.2-14.6-35.1-20.1-48.1c-5.3-12.8-10.7-11.1-14.6-11.3c-3.7-.2-8-.2-12.3-.2c-4.3 0-11.2 1.6-17.1 7.9c-5.9 6.4-22.3 21.8-22.3 53.2c0 31.5 22.8 61.9 26 66.2c3.2 4.3 44.8 68.5 108.3 96.2c63.5 27.7 63.5 18.5 74.8 17.4c11.2-1.1 36.9-15.1 42.1-29.6c5.3-14.5 5.3-26.9 3.7-29.6c-1.6-2.7-5.8-4.3-12.2-7.4z" />
                </svg>
              </div>
              <div className="consumer-foot-square"></div>
              <div className="consumer-foot-square"></div>
              <div className="consumer-foot-square"></div>
              <div className="consumer-foot-square"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
