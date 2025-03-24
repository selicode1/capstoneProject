import React from "react";
import "./FruitSection.css";
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FruitSection({ addToCart = () => console.warn("addToCart not provided") }) {

    const navigate = useNavigate();
    // const { addToCart } = useContext(CartContext);

  // Sample product data
  const products = [
    {
      name: "Fresh Organic Peaches",
      image: "https://media.istockphoto.com/id/1393599686/photo/peach-fruit-one-cut-in-half-with-green-leaf.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q3hFNmQ6e3ThmkUQxaMJheCCiLHTJdDmse82gMLg0F8=",
      price: "GH₵ 60.55",
      oldPrice: "GH₵ 72.42",
      rating: 4.5,
    },
    {
      name: "Vegetable Tomato Fresh",
      image: "https://media.istockphoto.com/id/1450576005/photo/tomato-isolated-tomato-on-white-background-perfect-retouched-tomatoe-side-view-with-clipping.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZU83V6A3l-M0srgbCsAP3dbyX8ZjhjCJCuaZ8mSUg8Q=",
      price: "GH₵ 40.00",
      oldPrice: "GH₵ 50.00",
      rating: 4.3,
    },
    {
      name: "Fresh Apple",
      image: "https://media.istockphoto.com/id/834816218/photo/red-apple-fruit-with-half-and-green-leaf-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=7MkXaN_Ulsf8IAG2hD6YnIxxGyLwcA00Cq0QMEZKjow=",
      price: "GH₵ 30.99",
      oldPrice: "GH₵ 38.99",
      rating: 4.7,
    },
    {
      name: "Fresh Dried Almond",
      image: "https://media.istockphoto.com/id/2149001040/photo/bowl-of-roasted-almonds-on-a-white-background-dried-nuts-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=E6GXohrMKx9PIVXpkWZXGsiFn3nYXsKGlIe7WdLAJqs=",
      price: "GH₵ 16.55",
      oldPrice: "GH₵ 24.42",
      rating: 4.6,
    },
    {
      name: "Fresh Organic Bananas",
      image: "https://images.unsplash.com/photo-1587334206596-c0f9f7dccbe6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEZyZXNoJTIwT3JnYW5pYyUyMEJhbmFuYXN8ZW58MHx8MHx8fDA%3D",
      price: "GH₵ 18.75",
      oldPrice: "GH₵ 22.50",
      rating: 4.4,
    },
    {
      name: "Fresh Carrots",
      image: "https://media.istockphoto.com/id/1461328272/photo/fresh-carrots-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=AWQLR7d10aO7boemvMtDdKDt5T0kzEzzHACZLV8_S2c=",
      price: "GH₵ 9.99",
      oldPrice: "GH₵ 12.99",
      rating: 4.2,
    },
    {
      name: "Blueberries",
      image: "https://media.istockphoto.com/id/2058001169/photo/blueberry-isolated-blueberries-with-leaves-on-white-background-blueberry-with-clipping-path.webp?a=1&b=1&s=612x612&w=0&k=20&c=hVWixCJjt9I-Mw8v79hhF6cNxGL0isd-o-wJZGFLPEw=",
      price: "GH₵ 14.50",
      oldPrice: "GH₵ 18.00",
      rating: 4.8,
    },
    {
      name: "Juicy Watermelon",
      image: "https://media.istockphoto.com/id/1321448019/photo/ripe-juicy-watermelon-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=OIp_aD84UkemMoyJdtVZWP1LJr8g90efEaEI-Dy2FJw=",
      price: "GH₵ 25.00",
      oldPrice: "GH₵ 30.00",
      rating: 4.9,
    },
  ];
  
  
  

  // Helper to render star rating
  const renderStars = (filled) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`fruit-sec-star ${
          i < filled ? "fruit-sec-star--filled" : "fruit-sec-star--empty"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.363 1.118l1.286 3.951c.3.921-.755 1.688-1.54 1.118L10 14.348l-3.352 2.515c-.784.57-1.839-.197-1.539-1.118l1.286-3.951a1 1 0 00-.363-1.118L2.66 9.377c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69l1.286-3.95z" />
      </svg>
    ));
  };

  // Handle adding item to cart and show toast using react-toastify
  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    const uniqueProduct = { ...product, id: Date.now(), quantity: 1 };
    let cart = localStorage.getItem("cartItems");
    cart = cart ? JSON.parse(cart) : [];
    cart.push(uniqueProduct);
    localStorage.setItem("cartItems", JSON.stringify(cart));
    toast.success(`${product.name} added to cart!`, { autoClose: 2000 });
  };
  

  return (
    <div className="fruit-sec-container" onClick={() => navigate('/details')}>
      {/* Product Grid */}
      <div className="fruit-sec-grid">
        {products.map((product, index) => (
          <div key={index} className="fruit-sec-card">
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="fruit-sec-product-image"
            />

            {/* Product Name */}
            <h3 className="fruit-sec-product-name">{product.name}</h3>

            {/* Star Rating */}
            <div className="fruit-sec-rating">
              {renderStars(product.rating)}
            </div>

            {/* Prices */}
            <div className="fruit-sec-prices">
              <span className="fruit-sec-price">{product.price}</span>
              <span className="fruit-sec-old-price">{product.oldPrice}</span>
            </div>
            <button
              className="fruit-sec-add-button"
              onClick={(e) => handleAddToCart(product, e)}
            >
              Add to Cart
            </button>

          </div>
          
        ))}
      </div>
    </div>
  );
}
