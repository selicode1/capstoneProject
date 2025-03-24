import React from "react";
import "./FreshVegetable.css"; // Import the CSS file

export default function FreshVegetable() {
  return (
    <div className="consumer-vegetable-container">
      {/* Section Title */}
      <div className="consumer-text-center consumer-mb-6">
        <h2 className="consumer-title">
          {/* Simple dashes on each side of the title */}
          <span className="consumer-text-gray">—</span>
          <span>Fresh Vegetable</span>
          <span className="consumer-text-gray">—</span>
        </h2>
      </div>

      {/* Product Cards Grid */}
      <div className="consumer-grid">
        {/* Card 1 */}
        <div className="consumer-vegetable-card">
          {/* Left Arrow */}
          <div className="consumer-arrow-left">
            {/* Inline SVG (Left Arrow) */}
            <svg
              className="consumer-arrow-icon"
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
            className="consumer-vegetable-image"
          />

          <h3 className="consumer-product-title">
            Fresh Organic Peachter
          </h3>

          {/* Star Rating (static example) */}
          <div className="consumer-stars">
            {/* Filled stars */}
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                className="consumer-star-filled"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.363 1.118l1.286 3.951c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.352 2.515c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.363-1.119L2.66 9.377c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69l1.286-3.95z" />
              </svg>
            ))}
            {/* Empty star */}
            <svg
              className="consumer-star-empty"
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
          <div className="consumer-prices">
            <span className="consumer-price">GH₵60.55</span>
            <span className="consumer-price-old">GH₵72.42</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="consumer-vegetable-card">
          <img
            src="https://images.unsplash.com/photo-1579584705540-46ebde56da8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FiYmFnZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Blackberry 100%Organic"
            className="consumer-vegetable-image"
          />
          <h3 className="consumer-product-title">
            Blackberry 100%Organic
          </h3>

          {/* Star Rating */}
          <div className="consumer-stars">
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                className="consumer-star-filled"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.363 1.118l1.286 3.951c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.352 2.515c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.363-1.119L2.66 9.377c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69l1.286-3.95z" />
              </svg>
            ))}
            <svg
              className="consumer-star-empty"
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

          <div className="consumer-prices">
            <span className="consumer-price">GH₵60.55</span>
            <span className="consumer-price-old">GH₵72.42</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="consumer-vegetable-card">
          <img
            src="https://plus.unsplash.com/premium_photo-1668076517573-fa01307d87ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25pb258ZW58MHx8MHx8fDA%3D"
            alt="Natural grassbean"
            className="consumer-vegetable-image"
          />
          <h3 className="consumer-product-title">
            Natural grassbean
          </h3>

          {/* Star Rating */}
          <div className="consumer-stars">
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                className="consumer-star-filled"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.363 1.118l1.286 3.951c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.352 2.515c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.363-1.119L2.66 9.377c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69l1.286-3.95z" />
              </svg>
            ))}
            <svg
              className="consumer-star-empty"
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

          <div className="consumer-prices">
            <span className="consumer-price">GH₵60.55</span>
            <span className="consumer-price-old">GH₵72.42</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="consumer-vegetable-card">
          {/* Right Arrow */}
          <div className="consumer-arrow-right">
            {/* Inline SVG (Right Arrow) */}
            <svg
              className="consumer-arrow-icon"
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
            className="consumer-vegetable-image"
          />
          <h3 className="consumer-product-title">
            Fresh & Healthy Food
          </h3>

          {/* Star Rating */}
          <div className="consumer-stars">
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                className="consumer-star-filled"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.363 1.118l1.286 3.951c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.352 2.515c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.363-1.119L2.66 9.377c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69l1.286-3.95z" />
              </svg>
            ))}
            <svg
              className="consumer-star-empty"
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

          <div className="consumer-prices">
            <span className="consumer-price">GH₵60.55</span>
            <span className="consumer-price-old">GH₵72.42</span>
          </div>
        </div>
      </div>
    </div>
  );
}
