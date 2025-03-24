import React from "react";

export default function FruitSection() {
  // Sample product data
  const products = [
    {
      name: "Fresh Organic Peachter",
      image: "https://via.placeholder.com/300x300?text=Peachter",
      price: "$60.55 USD",
      oldPrice: "$72.42 USD",
      rating: 4,
    },
    {
      name: "Vegetable tomato fresh",
      image: "https://via.placeholder.com/300x300?text=Tomato",
      price: "$60.55 USD",
      oldPrice: "$72.42 USD",
      rating: 4,
    },
    {
      name: "Fresh apple (5kg)",
      image: "https://via.placeholder.com/300x300?text=Apple",
      price: "$60.55 USD",
      oldPrice: "$72.42 USD",
      rating: 4,
    },
    {
      name: "Fresh dried almond (50g)",
      image: "https://via.placeholder.com/300x300?text=Almond",
      price: "$16.55 USD",
      oldPrice: "$24.42 USD",
      rating: 4,
    },
  ];

  // Helper to render static star rating
  const renderStars = (filled) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${
          i < filled ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.363 1.118l1.286 3.951c.3.921-.755 1.688-1.54 1.118L10 14.348l-3.352 2.515c-.784.57-1.839-.197-1.539-1.118l1.286-3.951a1 1 0 00-.363-1.118L2.66 9.377c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69l1.286-3.95z" />
      </svg>
    ));
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {/* Sort By Dropdown (Optional) */}
      <div className="flex justify-end items-center mb-6">
        <span className="text-sm text-gray-600">Sort by: Price, low to high</span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 flex flex-col items-center text-center shadow hover:shadow-md transition-shadow"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover mb-4"
            />

            {/* Product Name */}
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {product.name}
            </h3>

            {/* Star Rating */}
            <div className="flex items-center justify-center mb-2">
              {renderStars(product.rating)}
            </div>

            {/* Prices */}
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-800">
                {product.price}
              </span>
              <span className="text-sm text-gray-400 line-through">
                {product.oldPrice}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
