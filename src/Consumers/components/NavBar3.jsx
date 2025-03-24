import React from "react";
// You can use any icon library or even plain images for the icons

export default function NavBar3() {
  return (
    <header className="flex items-center w-full p-4 bg-white shadow">
      {/* Logo */}
      <div className="text-green-500 text-2xl font-bold mr-8">
        Farmconnect
      </div>

      {/* Search Bar */}
      <div className="flex flex-1 items-center border border-green-500 rounded overflow-hidden">
        <input
          type="text"
          placeholder="Search products, features or something"
          className="flex-1 px-3 py-2 text-gray-700 focus:outline-none"
        />
        <button className="bg-green-500 text-white px-4 py-2">
          {/* Replace with an actual search icon if you like */}
          Q
        </button>
      </div>

      {/* Icons on the Right */}
      <div className="ml-6 flex items-center space-x-4">
        {/* Favorite Icon */}
        <button>
          {/* Replace with your favorite icon or library */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
            alt="Favorites"
            className="w-5 h-5"
          />
        </button>
        {/* Cart Icon */}
        <button>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
            alt="Cart"
            className="w-5 h-5"
          />
        </button>
      </div>
    </header>
  );
}
