import React, { useState, useEffect } from "react";
import "./CheckoutSection.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CheckoutSection() {
  const [checkoutDetails, setCheckoutDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "India",
    paymentMethod: "credit-card",
  });

  const [subtotal, setSubtotal] = useState(0);
  const shipping = 10.0;
  const discount = 5.0;

  useEffect(() => {
    const savedSubtotal = localStorage.getItem("subtotal");
    if (savedSubtotal) {
      setSubtotal(parseFloat(savedSubtotal)); // Convert to number
    }
  }, []);

  const total = (subtotal + shipping - discount).toFixed(2);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckoutDetails({ ...checkoutDetails, [name]: value });
  };

  // Handle order submission
  const handlePlaceOrder = () => {
    toast.success(`Order was placed successfully!`, { autoClose: 2000 });
  };

  return (
    <div className="checkout-container">
      {/* Left Section: Billing & Shipping */}
      <div className="checkout-left">
        <h2>Checkout</h2>

        {/* Billing Details */}
        <div className="checkout-section">
          <h3>Billing Details</h3>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={checkoutDetails.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={checkoutDetails.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
          <div className="input-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={checkoutDetails.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </div>
        </div>

        {/* Shipping Details */}
        <div className="checkout-section">
          <h3>Delivery Address</h3>
          <div className="input-group">
            <label>Street Address</label>
            <input
              type="text"
              name="address"
              value={checkoutDetails.address}
              onChange={handleChange}
              placeholder="Enter street address"
            />
          </div>
          <div className="input-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={checkoutDetails.city}
              onChange={handleChange}
              placeholder="Enter city"
            />
          </div>
          <div className="input-group">
            <label>District</label>
            <input
              type="text"
              name="state"
              value={checkoutDetails.state}
              onChange={handleChange}
              placeholder="Enter District"
            />
          </div>
          <div className="input-group">
            <label>Digital Address</label>
            <input
              type="text"
              name="zipCode"
              value={checkoutDetails.zipCode}
              onChange={handleChange}
              placeholder="Enter Digital Address"
            />
          </div>
          <div className="input-group">
            <label>Region</label>
            <select
              name="country"
              value={checkoutDetails.country}
              onChange={handleChange}
            >
              <option value="Ashanti">Ashanti</option>
              <option value="Greater Accra">Greater Accra</option>
              <option value="Volta">Volta</option>
              {/* Add more countries */}
            </select>
          </div>
        </div>

        {/* Payment Method */}
        <div className="checkout-section">
          <h3>Payment Method</h3>
          <div className="payment-options">
            <div className="payment-option">
              <input
                type="radio"
                id="credit-card"
                name="paymentMethod"
                value="credit-card"
                checked={checkoutDetails.paymentMethod === "credit-card"}
                onChange={handleChange}
              />
              <label htmlFor="credit-card">Bank Transfer</label>
            </div>
            <div className="payment-option">
              <input
                id="paypal"
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={checkoutDetails.paymentMethod === "paypal"}
                onChange={handleChange}
              />
              <label htmlFor="paypal">Mobile Money</label>
            </div>
            <div className="payment-option">
              <input
                id="cod"
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={checkoutDetails.paymentMethod === "cod"}
                onChange={handleChange}
              />
              <label htmlFor="cod">Cash on Delivery</label>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Order Summary */}
      <div className="checkout-right">
        <h3>Order Summary</h3>
        <div className="summary-details">
          <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
          <p>Shipping: <span>${shipping.toFixed(2)}</span></p>
          <p>Discount: <span>-${discount.toFixed(2)}</span></p>
          <p className="total">
            Total: <span>${total}</span>
          </p>
        </div>

        <button className="checkout-button" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}
