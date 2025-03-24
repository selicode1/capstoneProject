 import React from "react";

export default function DiscountSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {/* Card 1 */}
      <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
        {/* Background Image (Oranges) */}
        <img
          src="https://images.unsplash.com/photo-1514553981858-62f20a5a7358?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFza2V0JTIwb2YlMjBvcmFuZ2V8ZW58MHx8MHx8fDA%3D"
          alt="Oranges"
          className="w-full h-full object-cover"
        />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 py-4 bg-white/50">
          <p className="text-sm text-gray-600 mb-1">Winter Fruits</p>
          <h3 className="text-xl font-semibold text-gray-800">
            Oranges and Monstera
          </h3>
          <p className="text-sm text-gray-700">Flats 25% Discount</p>
          <a
            href="#"
            className="mt-2 inline-block text-green-600 font-semibold hover:underline"
          >
            SHOP NOW
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
        {/* Background Image (Smoothie) */}
        <img
          src="https://images.unsplash.com/photo-1558818498-28c1e002b655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvZXN8ZW58MHx8MHx8fDA%3D"
          alt="Smoothie"
          className="w-full h-full object-cover"
        />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 py-4 bg-white/50">
          <p className="text-sm text-gray-600 mb-1">Prod Of India</p>
          <h3 className="text-xl font-semibold text-gray-800">
            Organic Fresh Tomatoes
          </h3>
          <p className="text-sm text-gray-700">Get 30% Off On Your Order</p>
          <a
            href="#"
            className="mt-2 inline-block text-green-600 font-semibold hover:underline"
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </div>
  );
}
