import React from "react";

export default function FruitSection3() {
  // Example product data
  const products = [
    {
      id: 1,
      name: "Fresh Organic Reacheter",
      image:
        "https://images.unsplash.com/photo-1574226516831-e1dff4207c38?w=400&h=400&fit=crop&auto=format",
      price: 60.55,
      oldPrice: 72.42,
      rating: 4,
    },
    {
      id: 2,
      name: "Blackberry 100%Organic",
      image:
        "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=400&h=400&fit=crop&auto=format",
      price: 60.55,
      oldPrice: 72.42,
      rating: 5,
    },
    {
      id: 3,
      name: "Natural grassbean",
      image:
        "https://images.unsplash.com/photo-1622324760872-7df78d6d5c67?w=400&h=400&fit=crop&auto=format",
      price: 60.55,
      oldPrice: 72.42,
      rating: 4,
    },
    {
      id: 4,
      name: "Fresh & Healthy Food",
      image:
        "https://images.unsplash.com/photo-1586082105680-359247465d06?w=400&h=400&fit=crop&auto=format",
      price: 60.55,
      oldPrice: 72.42,
      rating: 4,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
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
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < product.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.984a1 1 0 00.95.69h4.19c.969 
                  0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.363 
                  1.118l1.286 3.984c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 
                  00-1.176 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.984a1 
                  1 0 00-.363-1.118L2.025 9.41c-.783-.57-.38-1.81.588-1.81h4.19a1 1 0 
                  00.95-.69l1.286-3.984z" />
                </svg>
              ))}
            </div>

            {/* Prices */}
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-800">
                ${product.price.toFixed(2)} USD
              </span>
              <span className="text-sm text-gray-400 line-through">
                ${product.oldPrice.toFixed(2)} USD
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
