import React from "react";
import "./ProductCategory.css";

export default function ProductCategory() { 
  return (
    <div className="consumer-product-category">
      {/* Title with green dashes on each side */}
      <div className="consumer-title">
        <span className="consumer-dash-cat">—</span>
        <span>Featured Products</span>
        <span className="consumer-dash-cat">—</span>
      </div>

      {/* Tabs: NEW PRODUCT, FEATURED PRODUCT, BESTSELLER */}
      <div className="consumer-tabs">
        {/* NEW PRODUCT (green + underline) */}
        <div className="consumer-tab-active">NEW PRODUCT</div>

        {/* FEATURED PRODUCT (gray) */}
        <div className="consumer-tab">FEATURED PRODUCT</div>

        {/* BESTSELLER (gray) */}
        <div className="consumer-tab">BESTSELLER</div>
      </div>
    </div>
  );
}
