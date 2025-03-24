import React from "react";
 import "./DiscountSection.css";

export default function DiscountSection() {
  return (
    <div className="consumer-discount-section">
      {/* Card 1 */}
      <div className="consumer-card">
        {/* Background Image (Oranges) */}
        <img
          src="https://images.unsplash.com/photo-1514553981858-62f20a5a7358?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFza2V0JTIwb2YlMjBvcmFuZ2V8ZW58MHx8MHx8fDA%3D"
          alt="Oranges"
        />

        {/* Text Overlay */}
        <div className="consumer-card-overlay">
          <p className="consumer-card-category">Winter Fruits</p>
          <h3 className="consumer-card-title">Oranges and Monstera</h3>
          <p className="consumer-card-description">Flats 25% Discount</p>
          <a href="#" className="consumer-shop-now">SHOP NOW</a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="consumer-card">
        {/* Background Image (Smoothie) */}
        <img
          src="https://images.unsplash.com/photo-1558818498-28c1e002b655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvZXN8ZW58MHx8MHx8fDA%3D"
          alt="Smoothie"
        />

        {/* Text Overlay */}
        <div className="consumer-card-overlay">
          <p className="consumer-card-category">Prod Of India</p>
          <h3 className="consumer-card-title">Organic Fresh Tomatoes</h3>
          <p className="consumer-card-description">Get 30% Off On Your Order</p>
          <a href="#" className="consumer-shop-now">SHOP NOW</a>
        </div>
      </div>
    </div>
  );
}
