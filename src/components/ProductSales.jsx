import React from "react";
import { Star } from "lucide-react";
import "./ProductSales.css"; // Import CSS file
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function ProductSales() {
    const navigate = useNavigate();
  // Rating Component
  const Rating = ({ value }) => {
    return (
      <div className="consumer-rating-container">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`consumer-star-icon ${i < value ? "consumer-star-filled" : "consumer-star-empty"}`}
            fill={i < value ? "currentColor" : "none"}
          />
        ))}
      </div>
    );
  };

  // Product Card Component
  const ProductCard = ({ product }) => {
    return (
      <div className="consumer-product-card" onClick={() => navigate('/details')}>
        {/* Discount Badge */}
        {product.discountBadge && (
          <div className="consumer-discount-badge">
            {product.discountBadge}
          </div>
        )}

        {/* Product Image */}
        <img src={product.image} alt={product.name} className="consumer-product-image" />

        {/* Product Name */}
        <h3 className="consumer-product-name">{product.name}</h3>

        {/* Star Rating */}
        <Rating value={product.rating} />

        {/* Prices */}
        <div className="consumer-prices">
          <span className="consumer-price">{product.price}</span>
          {product.oldPrice && <span className="consumer-old-price">{product.oldPrice}</span>}
        </div>
      </div>
    );
  };

  // Sample Products
  const products = [
    {
      name: "Fresh Mangoes",
      image: "https://media.istockphoto.com/id/2189589345/photo/ripe-mango-fruit-and-mango-cut-into-hedgehog-shaped-style-on-white-background-file-contains.jpg?s=612x612&w=0&k=20&c=TNZ_L_5uOy5lOhM5UbWuPPF4GlxuIWAuf_4xsd53iX0=",
      rating: 5,
      price: "₵89.04 ",
      oldPrice: "₵94.99 ",
      discountBadge: "Sale",
    },
    {
      name: "Fresh Organic Oranges",
      image: "https://media.istockphoto.com/id/672613170/photo/orange-slices-isolated-on-white.jpg?s=612x612&w=0&k=20&c=LmtA98kK5aS_ZaecHbg2sPh5l04RlEX74sxC-5RuTH0=",
      rating: 5,
      price: "₵296.80 ",
    },
    {
      name: "Fresh Banana",
      image: "data:image/jpeg;base64,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",
      rating: 5,
      price: "₵178.08 ",
    },
    {
      name: "Fresh Orange",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBQpy3Sg2E5GZ66qUmrHkeGV6q1a4oEAhSA&s",
      rating: 5,
      price: "₵48.67",
      oldPrice: "₵72",
    },
  ];

  return (
    <div className="consumer-products-container">
      {products.map((product, index) => (
        <ProductCard key={index} product={product}  />
      ))}
    </div>
  );
}
