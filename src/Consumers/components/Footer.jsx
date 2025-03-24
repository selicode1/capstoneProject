import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        {/* Use a grid for multiple columns */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          
          {/* 1) Brand / Logo */}
          <div>
            <h1 className="text-green-500 text-2xl font-bold mb-4">
              Farmconnect
            </h1>
            {/* You can add a short brand description here if you like */}
          </div>

          {/* 2) Services */}
          <div>
            <h2 className="text-white font-semibold mb-3">Services</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-green-500 hover:text-green-400">
                  About Farmconnect
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  FAQ&apos;s
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* 3) Privacy & Terms */}
          <div>
            <h2 className="text-white font-semibold mb-3">Privacy & Terms</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-100">
                  Payment Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* 4) My Account */}
          <div>
            <h2 className="text-white font-semibold mb-3">My Account</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-100">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  My Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Order History
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Wishlist
                </a>
              </li>
            </ul>
          </div>

          {/* 5) Menu Title */}
          <div>
            <h2 className="text-white font-semibold mb-3">Menu Title</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-100">
                  Fruits
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Fast Foods
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Vegetable
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Salads
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Bestseller
                </a>
              </li>
            </ul>
          </div>

          {/* 6) Get The Latest Deals */}
          <div>
            <h2 className="text-white font-semibold mb-3">
              Get The Latest Deals And Receive $20 Coupon
            </h2>
            {/* Subscription Input + Button */}
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-gray-800 text-sm p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
              />
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-sm">
                Subscribe
              </button>
            </div>
            {/* Icons row (WhatsApp + 4 squares) */}
            <div className="flex items-center space-x-2 mt-4">
              {/* WhatsApp Icon (inline SVG from Font Awesome) */}
              <div className="bg-white rounded-full p-2 text-green-500">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M380.9 97.1C339.3 55.5 285.5 32 228.8 32 102.5 32 0 134.5 0 260.8c0 45.3 11.6 89.3 33.7 128.3L0 480l92.8-32.8c37.9 20.8 80.5 31.7 125.9 31.7h.1c126.3 0 228.8-102.5 228.8-228.8 0-56.7-23.5-110.5-66.7-152.9zM228.9 425.2c-40.3 0-79.4-10.7-113.7-31l-8.1-4.8-54.9 19.4 18.7-55.8-5.3-8.7c-20.4-33.5-31.2-72.1-31.2-111.9 0-114 92.8-206.8 206.9-206.8 55.4 0 107.4 21.6 146.6 60.8 39.2 39.2 60.8 91.2 60.8 146.6-.1 114.1-92.9 206.9-207 206.9zm116.2-155.8c-6.4-3.2-38-18.7-43.8-20.8-5.9-2.1-10.2-3.2-14.6 3.2-4.3 6.4-16.8 20.8-21 25.1-3.8 3.9-7.7 4.4-14.1 1.6-6.4-3.2-27.1-10-51.6-31.9-19.1-17-31.9-38.1-35.6-44.5-3.7-6.4-.4-9.8 2.8-13 3 3 6.4-3.2 10.2-6.4 3.2-3.2 4.3-6.4 6.4-10.7 2.1-4.3 1.1-8-0.5-11.2-1.6-3.2-14.6-35.1-20.1-48.1-5.3-12.8-10.7-11.1-14.6-11.3-3.7-.2-8-.2-12.3-.2-4.3 0-11.2 1.6-17.1 7.9-5.9 6.4-22.3 21.8-22.3 53.2 0 31.5 22.8 61.9 26 66.2 3.2 4.3 44.8 68.5 108.3 96.2 63.5 27.7 63.5 18.5 74.8 17.4 11.2-1.1 36.9-15.1 42.1-29.6 5.3-14.5 5.3-26.9 3.7-29.6-1.6-2.7-5.8-4.3-12.2-7.4z" />
                </svg>
              </div>
              {/* 4 squares (placeholders for more icons, etc.) */}
              <div className="bg-white w-5 h-5 rounded-sm" />
              <div className="bg-white w-5 h-5 rounded-sm" />
              <div className="bg-white w-5 h-5 rounded-sm" />
              <div className="bg-white w-5 h-5 rounded-sm" />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
