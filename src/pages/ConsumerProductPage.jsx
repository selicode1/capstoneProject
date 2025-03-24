import React, { useState, useEffect } from "react";
import ConsumerNavbar from "../components/ConsumerNavbar";
import ConsumerNavbar2 from "../components/ConsumerNavbar2";
import FruitSection from "../components/FruitSection";
import ConsumerFooter from "../components/ConsumerFooter";
import DiscountSection from "../components/DiscountSection";
import RecentNews from "../components/RecentNews";
import ProductSales from "../components/ProductSales";
import ProductCategory from "../components/ProductCategory";
import { ToastContainer } from "react-toastify";

export default function ConsumerProductPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide the spinner after 1 second (for demo purposes)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Manage the cart state in the parent
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the product already exists by its unique id
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };
  

  return (
    <div>
        <ToastContainer autoClose={2000} />
      <ConsumerNavbar />
      <ConsumerNavbar2 />
      {loading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          {/* Pass addToCart as a prop */}
          <FruitSection addToCart={addToCart} />
          <ProductCategory />
          <ProductSales />
          <RecentNews />
          <DiscountSection />
        </div>
      )}
      <ConsumerFooter />
    </div>
  );
}
