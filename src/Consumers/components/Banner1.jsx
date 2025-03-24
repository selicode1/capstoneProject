import React from "react";

export default function Banner1() {
  return (
    <div className="relative bg-white overflow-hidden py-8">
      {/* Left Image */}
      <div className="absolute left-0 top-0 w-32 h-32 md:w-40 md:h-40">
        <img
          src="https://plus.unsplash.com/premium_photo-1675798983878-604c09f6d154?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Left Plate"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Image */}
      <div className="absolute right-0 top-0 w-32 h-32 md:w-40 md:h-40">
        <img
          src="https://plus.unsplash.com/premium_photo-1675798983878-604c09f6d154?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Right Plate"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <p className="text-green-600 font-semibold">
          New Customer Offers
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">
          Cooked Vegetable With Sauce And Space
        </h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aenean commodo ligula eget dolor.
        </p>
        <button className="mt-4 bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600 transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
}
