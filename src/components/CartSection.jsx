import React, { useState, useEffect } from "react";
import "./CartSection.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

export default function CartSection() {
  // State for cart items (initially empty, then populated from localStorage)
//   const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  // State for shipping info
  const [shippingInfo, setShippingInfo] = useState({
    country: "India",
    state: "",
    email: "",
    deliveryMethod: "",
  });

  // Read cart items from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setCartItems(parsedCart);
      } catch (error) {
        console.error("Error parsing cart items from localStorage:", error);
      }
    }
  }, []);

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => {
    // Ensure item.price is a valid string before using replace
    const priceStr = item.price ? item.price.toString() : "0";
    const numericPrice = parseFloat(priceStr.replace(/[^0-9.]/g, ""));
    return acc + (numericPrice || 0) * item.quantity;
  }, 0);
  

  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    console.log("Updating item id:", id, "to quantity:", newQuantity);
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };
  

  // Remove item
  const handleRemove = (id) => {
    const index = cartItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedCart = [...cartItems];
      updatedCart.splice(index, 1);
      setCartItems(updatedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    }
  };
  

  // Handle shipping info change
  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Handle shipping calculation (example)
  const handleCalculateShipping = () => {
    alert("Shipping cost calculated (demo).");
  };

  useEffect(() => {
    localStorage.setItem("subtotal", subtotal.toFixed(2));
  }, [subtotal]); // Runs every time subtotal updates

  // Handle checkout (example)
  const handleCheckout = () => {
    // Store subtotal in localStorage or Context
    console.log("Saved subtotal to localStorage:", subtotal.toFixed(2));
    localStorage.setItem("subtotal", subtotal.toFixed(2));
    window.location.href = "/checkout";
  };

  // Example actions
  const handleUpdateCart = () => {
    toast.success(`Cart has been updated`, { autoClose: 2000 });
  };
  const handleContinueShopping = () => {
    window.location.href = "/shop";
  };
  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <div className="cart-container">
      {/* Left: Cart Items */}
      <div className="cart-left">
        <div className="cart-header">
          <h2>My Cart :</h2>
          <span>{cartItems.length} Item(s)</span>
        </div>

        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-item-left">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>
                  Size: <span>{item.size}</span>
                </p>
                <p>{item.store && <span>{item.store}</span>}</p>
                <p className="cart-item-price">
                   ${parseFloat(item.price.replace(/[^0-9.]/g, "")).toFixed(2)} USD
                </p>
              </div>
            </div>

            <div className="cart-item-right">
              <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
              <div className="cart-quantity-control">
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                >
                  -
                </button>
                <input
                  id={`quantity-${item.id}`}
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, Number(e.target.value))
                  }
                />
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <p className="cart-item-total">
              ${(parseFloat(item.price.replace(/[^0-9.]/g, "")) * item.quantity).toFixed(2)} USD
              </p>
              <button
                className="cart-remove"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        {/* Bottom Actions */}
        <div className="cart-bottom-actions">
          <button onClick={handleUpdateCart}>Update Cart</button>
          <button onClick={handleContinueShopping}>Continue Shopping</button>
          <button onClick={handleClearCart}>Clear Cart</button>
        </div>
      </div>

      {/* Right: Shipping Info */}
      <div className="cart-right">
        <h3 className="cart-shipping-title">Shipping Info</h3>
        <div className="cart-shipping-form">
          <label htmlFor="country">Region</label>
          <select
            id="country"
            name="country"
            value={shippingInfo.country}
            onChange={handleShippingChange}
          >
            <option value="India">Ashanti</option>
            <option value="USA">Greater Accra</option>
            <option value="UK">Central</option>
          </select>

          <label htmlFor="state">City/town</label>
          <input
            id="state"
            name="state"
            placeholder="Enter your state"
            value={shippingInfo.state}
            onChange={handleShippingChange}
          />

          <label htmlFor="email">Enter your email address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={shippingInfo.email}
            onChange={handleShippingChange}
          />

          <label htmlFor="deliveryMethod">Delivery Method</label>
          <select
            id="deliveryMethod"
            name="deliveryMethod"
            value={shippingInfo.deliveryMethod}
            onChange={handleShippingChange}
          >
            <option value="Pickup">Pickup</option>
            <option value="Delivery">Delivery</option>
          </select>

          <button
            className="cart-calc-button"
            onClick={handleCalculateShipping}
          >
            Calculate
          </button>
        </div>

        <div className="cart-total-section">
          <p>
            Total: <span>${subtotal.toFixed(2)} USD</span>
          </p>
          <button
            className="cart-checkout-button"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
