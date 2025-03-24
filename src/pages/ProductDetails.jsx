import React, { useState } from "react";
import "./ProductDetails.css";
import { useNavigate } from "react-router-dom";

// Example star rating component (optional helper)
function StarRating({ rating }) {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const isFilled = i < rating;
    return (
      <svg
        key={i}
        className={`pd-star ${isFilled ? "pd-star--filled" : "pd-star--empty"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.164c.969 0 
                 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.363 1.118l1.286 3.951c.3.921-.755 1.688-1.54 
                 1.118L10 14.348l-3.352 2.515c-.784.57-1.838-.197-1.539-1.118l1.286-3.951a1 1 0 
                 00-.363-1.118L2.66 9.377c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 
                 00.95-.69l1.286-3.95z"
        />
      </svg>
    );
  });
  return <div className="pd-rating">{stars}</div>;
}

export default function ProductDetails() {
  // State for quantity
  const [quantity, setQuantity] = useState(1);

  // State for active tab
  const [activeTab, setActiveTab] = useState("detail");

  // Example product data
  const product = {
    name: "Fresh Green Orange",
    rating: 4, // out of 5
    availability: "In Stock",
    priceRange: "$7.05 USD - $9.00 USD",
    stockMessage: "Hurry up! Only 9 products left in stock!",
    mainImage:
      "https://media.istockphoto.com/id/2189589345/photo/ripe-mango-fruit-and-mango-cut-into-hedgehog-shaped-style-on-white-background-file-contains.jpg?s=612x612&w=0&k=20&c=TNZ_L_5uOy5lOhM5UbWuPPF4GlxuIWAuf_4xsd53iX0=",
    thumbnails: [
      "https://media.istockphoto.com/id/2189589345/photo/ripe-mango-fruit-and-mango-cut-into-hedgehog-shaped-style-on-white-background-file-contains.jpg?s=612x612&w=0&k=20&c=TNZ_L_5uOy5lOhM5UbWuPPF4GlxuIWAuf_4xsd53iX0=",
      "https://media.istockphoto.com/id/2189589345/photo/ripe-mango-fruit-and-mango-cut-into-hedgehog-shaped-style-on-white-background-file-contains.jpg?s=612x612&w=0&k=20&c=TNZ_L_5uOy5lOhM5UbWuPPF4GlxuIWAuf_4xsd53iX0=",
      "https://media.istockphoto.com/id/2189589345/photo/ripe-mango-fruit-and-mango-cut-into-hedgehog-shaped-style-on-white-background-file-contains.jpg?s=612x612&w=0&k=20&c=TNZ_L_5uOy5lOhM5UbWuPPF4GlxuIWAuf_4xsd53iX0=",
      "https://media.istockphoto.com/id/2189589345/photo/ripe-mango-fruit-and-mango-cut-into-hedgehog-shaped-style-on-white-background-file-contains.jpg?s=612x612&w=0&k=20&c=TNZ_L_5uOy5lOhM5UbWuPPF4GlxuIWAuf_4xsd53iX0=",
    ],
  };

  // Example content for tabs
  const tabContent = {
    detail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry
Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsumum is simply dummy text.
type here your detail one by one li more add
has been the industry’s standard dummy text ever since. Lorem Ips
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.`,
    specification: `Lorem Ipsum is simply dummy text of the printing and typesetting industry
Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsumum is simply dummy text.
type here your detail one by one li more add
has been the industry’s standard dummy text ever since. Lorem Ips
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.`,
    review: `No reviews yet. Be the first to review!`,
    comments: `Comments section goes here...`,
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const navigate = useNavigate();
  return (
    <div className="pd-container">
      {/* Left Section: Images */}
      <div className="pd-left">
        <img
          src={product.mainImage}
          alt={product.name}
          className="pd-main-image"
        />
        <div className="pd-thumbnails">
          {product.thumbnails.map((thumb, idx) => (
            <img key={idx} src={thumb} alt={`Thumbnail ${idx}`} />
          ))}
        </div>
      </div>

      {/* Right Section: Product Info */}
      <div className="pd-right">
        <h1 className="pd-title">{product.name}</h1>
        <StarRating rating={product.rating} />
        <p className="pd-availability">
          Availability: <span>{product.availability}</span>
        </p>
        <p className="pd-price-range">{product.priceRange}</p>
        <p className="pd-stock-message">{product.stockMessage}</p>

        {/* Buttons and Selectors */}
        <div className="pd-actions">
          {/* Size (example) */}
          <div className="pd-size">
            <label htmlFor="size">Size:</label>
            <select id="size" className="pd-size-select">
              <option value="S">S</option>
              <option value="M" defaultValue>
                M
              </option>
              <option value="L">L</option>
            </select>
          </div>

          {/* Quantity */}
          <div className="pd-quantity">
            <label htmlFor="quantity">Quantity:</label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
          </div>

          {/* Add to Cart & Shop Now */}
          <div className="pd-button-group">
            <button className="pd-button pd-button--cart"onClick={() => alert('Item added to cart')} >ADD TO CART</button>
            <button className="pd-button pd-button--shop" onClick={() => navigate('/shop')}>SHOP NOW</button>
          </div>
        </div>

        {/* Guaranteed SAFE Checkout */}
        {/* <div className="pd-safe-checkout">
          <p>Guaranteed SAFE Checkout</p>
          <div className="pd-safe-icons">
            <img
              src="https://via.placeholder.com/80x30?text=Stripe"
              alt="Stripe"
            />
            <img
              src="https://via.placeholder.com/80x30?text=PayPal"
              alt="PayPal"
            />
            <img src="https://via.placeholder.com/80x30?text=Visa" alt="Visa" />
            <img
              src="https://via.placeholder.com/80x30?text=Mastercard"
              alt="Mastercard"
            />
          </div>
        </div> */}
      </div>

      {/* Tabs Section */}
      <div className="pd-tabs">
        <ul className="pd-tab-list">
          <li
            className={activeTab === "detail" ? "active" : ""}
            onClick={() => handleTabClick("detail")}
          >
            More Detail
          </li>
          <li
            className={activeTab === "specification" ? "active" : ""}
            onClick={() => handleTabClick("specification")}
          >
            Key Specification
          </li>
          <li
            className={activeTab === "review" ? "active" : ""}
            onClick={() => handleTabClick("review")}
          >
            Review
          </li>
          <li
            className={activeTab === "comments" ? "active" : ""}
            onClick={() => handleTabClick("comments")}
          >
            Comments
          </li>
        </ul>
        <div className="pd-tab-content">
          {activeTab === "detail" && <p>{tabContent.detail}</p>}
          {activeTab === "specification" && <p>{tabContent.specification}</p>}
          {activeTab === "review" && <p>{tabContent.review}</p>}
          {activeTab === "comments" && <p>{tabContent.comments}</p>}
        </div>
      </div>
    </div>
  );
}
