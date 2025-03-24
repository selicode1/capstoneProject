import React from "react";

export default function ProductDetails() {
  return (
    <div className="text-center my-8">
      {/* Title with green dashes on each side */}
      <div className="flex items-center justify-center space-x-2 mb-4">
        <span className="text-lime-600">—</span>
        <h2 className="text-xl font-semibold text-gray-800">Featured Products</h2>
        <span className="text-lime-600">—</span>
      </div>

      {/* Tabs: NEW PRODUCT, FEATURED PRODUCT, BESTSELLER */}
      <div className="flex items-center justify-center space-x-6 text-sm font-semibold">
        {/* NEW PRODUCT (green + underline) */}
        <div className="text-lime-600 relative pb-1">
          NEW PRODUCT
          <div className="absolute left-0 bottom-0 w-full h-0.5 bg-lime-600" />
        </div>

        {/* FEATURED PRODUCT (gray) */}
        <div className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
          FEATURED PRODUCT
        </div>

        {/* BESTSELLER (gray) */}
        <div className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
          BESTSELLER
        </div>
      </div>
    </div>
  );
}
