import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full py-16 px-4 md:px-8 flex items-center justify-center bg-gradient-to-r from-green-50 via-white to-green-50">
      {/* Left arrow button */}
      

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="flex flex-col space-y-4 order-2 md:order-1">
          <span className="text-xs font-medium text-green-600 tracking-wider uppercase">
            Summer Juice
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Your First Order{" "}
            <span className="text-green-600">20% Off</span>{" "}
            
          </h1>
          <p className="text-gray-600 max-w-md">
            Refresh yourself with our organic and delicious summer juices. 
            Enjoy a healthy lifestyle with a burst of flavor in every sip.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-transform duration-300 hover:scale-105 shadow focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 w-max">
            Shop Now
          </button>
        </div>

        {/* Hero Image (replace with your own) */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D"
            alt="Juice Bottle"
            className="w-full h-auto max-w-sm object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

     
    </section>
  );
}
