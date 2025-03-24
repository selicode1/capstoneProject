import React from "react";
import { Link } from "react-router-dom";

export default function Navbar2() {
  // State to toggle mobile menu
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top row: Logo/Category, Nav links, and user info/hamburger */}
        <div className="flex items-center justify-between h-14">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            {/* Browse Category + Dropdown on hover */}
            <div className="relative group">
              {/* Browse Category button */}
              <div className="bg-green-600 flex items-center px-4 py-2 cursor-pointer">
                <span className="mr-2 font-semibold whitespace-nowrap">
                  Browse Category
                </span>
                {/* Dropdown Arrow Icon */}
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.23 7.387a.75.75 0 011.06-.027L10 10.04l3.71-2.68a.75.75 0 01.88 1.21l-4.25 3.07a.75.75 0 01-.88 0l-4.25-3.07a.75.75 0 01-.027-1.06z" />
                </svg>
              </div>

              {/* Dropdown menu (hidden by default, shown on hover) */}
              <div className="absolute left-0 top-full bg-white text-gray-700 w-[180px] py-2 hidden group-hover:block z-50">
                <ul className="space-y-1">
                  <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                    <span className="mr-2">🍎</span> Fresh Fruits
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                    <span className="mr-2">🥩</span> Fresh Meat
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                    <span className="mr-2">🥦</span> Fresh Vegetable
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                    <span className="mr-2">🐟</span> Green Seafood
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                    <span className="mr-2">🌰</span> Organic Dryfruit
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                    <span className="mr-2">🌶️</span> Organic Masala
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                    <span className="mr-2">🧃</span> Organic Juice
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                    <span className="mr-2">🦀</span> Sea & Fish
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                    <span className="mr-2">🍉</span> Summer Fruit
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                    <span className="mr-2">🍞</span> Baker's Rack
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                    <span className="mr-2">🧀</span> Dairy & Cheese
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                    <span className="mr-2">🍷</span> Organic Wine
                  </li>
                </ul>
              </div>
            </div>

            {/* Desktop Nav Links (hidden on small screens) */}
            <ul className="hidden md:flex items-center space-x-6 uppercase text-sm font-semibold ml-4">
              <li>
                <Link to="/landing" className="hover:text-green-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-green-400">
                  Shop
                </Link>
              </li>
              <li className="cursor-pointer hover:text-green-400">Cart</li>
              <li className="cursor-pointer hover:text-green-400">Pages</li>
              <li className="cursor-pointer hover:text-green-400">Blog</li>
              <li className="cursor-pointer hover:text-green-400">Wishlist</li>
            </ul>
          </div>

          {/* Right Section: Status + Username + Hamburger button */}
          <div className="flex items-center space-x-4">
            {/* Status + Username (hidden on small screens if you prefer) */}
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-green-400 text-xs">online</span>
              <div className="flex items-center space-x-1">
                {/* User Icon */}
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.492 2 12.03c0 5.523 4.477 10 10 10 5.539 0 10.03-4.477 10.03-10C22.03 6.492 17.522 2 12 2zm0 3.5a3.001 3.001 0 110 6 3.001 3.001 0 010-6zm0 15.438c-2.488 0-4.67-1.258-6-3.165.03-1.993 4-3.088 6-3.088 1.989 0 5.97 1.095 6 3.088-1.33 1.907-3.512 3.165-6 3.165z" />
                </svg>
                <span>John Green</span>
              </div>
            </div>

            {/* Hamburger (visible on mobile) */}
            <button
              className="md:hidden p-2 text-gray-200 hover:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* Icon can be any hamburger icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (shown when hamburger is clicked) */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-2">
            <ul className="uppercase text-sm font-semibold">
              <li>
                <Link
                  to="/landing"
                  className="block py-2 hover:text-green-400"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="block py-2 hover:text-green-400"
                  onClick={() => setIsOpen(false)}
                >
                  Shop
                </Link>
              </li>
              <li className="block py-2 cursor-pointer hover:text-green-400">
                Cart
              </li>
              <li className="block py-2 cursor-pointer hover:text-green-400">
                Pages
              </li>
              <li className="block py-2 cursor-pointer hover:text-green-400">
                Blog
              </li>
              <li className="block py-2 cursor-pointer hover:text-green-400">
                Wishlist
              </li>
            </ul>

            {/* User info on mobile, if desired */}
            <div className="flex items-center space-x-2 mt-2 ml-2">
              <span className="text-green-400 text-xs">online</span>
              <div className="flex items-center space-x-1">
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.492 2 12.03c0 5.523 4.477 10 10 10 5.539 0 10.03-4.477 10.03-10C22.03 6.492 17.522 2 12 2zm0 3.5a3.001 3.001 0 110 6 3.001 3.001 0 010-6zm0 15.438c-2.488 0-4.67-1.258-6-3.165.03-1.993 4-3.088 6-3.088 1.989 0 5.97 1.095 6 3.088-1.33 1.907-3.512 3.165-6 3.165z" />
                </svg>
                <span>John Green</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
