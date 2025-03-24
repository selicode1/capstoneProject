import React from "react";

export default function FreshVegetable() {
  return (
    <div className="container mx-auto py-8">
      {/* Section Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold flex items-center justify-center space-x-2">
          {/* Simple dashes on each side of the title */}
          <span className="text-gray-300">—</span>
          <span>Fresh Vegetable</span>
          <span className="text-gray-300">—</span>
        </h2>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="relative bg-gray-50 p-4 text-center rounded shadow">
          {/* Left Arrow */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-green-500 text-white p-1 rounded-r">
            {/* Inline SVG (Left Arrow) */}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>

          <img
            src="https://media.istockphoto.com/id/185011004/photo/organic-carrots.webp?a=1&b=1&s=612x612&w=0&k=20&c=6OYB1zwg7ST187_vI7NO3NLPCLcKKn7IzJETloBfoNU="
        
            alt="Fresh Organic Peachter"
            className="mx-auto h-32 object-contain"
          />

          <h3 className="mt-2 text-sm font-semibold text-gray-800">
            Fresh Organic Peachter
          </h3>

          {/* Star Rating (static example) */}
          <div className="mt-2 flex justify-center space-x-1">
            {/* Filled stars */}
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.363 1.118l1.286 3.951c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.352 2.515c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.363-1.119L2.66 9.377c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69l1.286-3.95z" />
              </svg>
            ))}
            {/* Empty star */}
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 20 20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.363 1.118l1.286 3.951c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.352 2.515c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.363-1.119L2.66 9.377c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69l1.286-3.95z"
              />
            </svg>
          </div>

          {/* Prices */}
          <div className="mt-2 flex items-center justify-center space-x-2">
            <span className="text-lg font-semibold text-gray-800">GH₵60.55 </span>
            <span className="text-gray-400 line-through text-sm">GH₵72.42 </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-gray-50 p-4 text-center rounded shadow">
          <img
            src="https://images.unsplash.com/photo-1579584705540-46ebde56da8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FiYmFnZXxlbnwwfHwwfHx8MA%3D%3D"
            
            alt="Blackberry 100%Organic"
            className="mx-auto h-32 object-contain"
          />
          <h3 className="mt-2 text-sm font-semibold text-gray-800">
            Blackberry 100%Organic
          </h3>

          {/* Star Rating (static example) */}
          <div className="mt-2 flex justify-center space-x-1">
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.363 1.118l1.286 3.951c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.352 2.515c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.363-1.119L2.66 9.377c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69l1.286-3.95z" />
              </svg>
            ))}
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 20 20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.363 1.118l1.286 3.951c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.352 2.515c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.363-1.119L2.66 9.377c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69l1.286-3.95z"
              />
            </svg>
          </div>

          <div className="mt-2 flex items-center justify-center space-x-2">
            <span className="text-lg font-semibold text-gray-800">GH₵60.55 </span>
            <span className="text-gray-400 line-through text-sm">GH₵72.42 </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-gray-50 p-4 text-center rounded shadow">
          <img
            src="https://plus.unsplash.com/premium_photo-1668076517573-fa01307d87ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25pb258ZW58MHx8MHx8fDA%3D"
            alt="Natural grassbean"
            className="mx-auto h-32 object-contain"
          />
          <h3 className="mt-2 text-sm font-semibold text-gray-800">
            Natural grassbean
          </h3>

          {/* Star Rating (static example) */}
          <div className="mt-2 flex justify-center space-x-1">
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.363 1.118l1.286 3.951c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.352 2.515c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.363-1.119L2.66 9.377c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69l1.286-3.95z" />
              </svg>
            ))}
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 20 20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.363 1.118l1.286 3.951c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.352 2.515c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.363-1.119L2.66 9.377c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69l1.286-3.95z"
              />
            </svg>
          </div>

          <div className="mt-2 flex items-center justify-center space-x-2">
            <span className="text-lg font-semibold text-gray-800">GH₵60.55 </span>
            <span className="text-gray-400 line-through text-sm">GH₵72.42 </span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative bg-gray-50 p-4 text-center rounded shadow">
          {/* Right Arrow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-500 text-white p-1 rounded-l">
            {/* Inline SVG (Right Arrow) */}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          <img
            src="https://media.istockphoto.com/id/137350104/photo/green-peppers.webp?a=1&b=1&s=612x612&w=0&k=20&c=7u2DZpZoSZIWkSDyvAbxkvNU09BrvPdQCPzM4LcsxvU="
            alt="Fresh & Healthy Food"
            className="mx-auto h-32 object-contain"
          />
          <h3 className="mt-2 text-sm font-semibold text-gray-800">
            Fresh & Healthy Food
          </h3>

          {/* Star Rating (static example) */}
          <div className="mt-2 flex justify-center space-x-1">
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.363 1.118l1.286 3.951c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.352 2.515c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.363-1.119L2.66 9.377c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69l1.286-3.95z" />
              </svg>
            ))}
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 20 20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.363 1.118l1.286 3.951c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.352 2.515c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.363-1.119L2.66 9.377c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69l1.286-3.95z"
              />
            </svg>
          </div>

          <div className="mt-2 flex items-center justify-center space-x-2">
            <span className="text-lg font-semibold text-gray-800">GH₵60.55 </span>
            <span className="text-gray-400 line-through text-sm">GH₵72.42 </span>
          </div>
        </div>
      </div>
    </div>
  );
}
