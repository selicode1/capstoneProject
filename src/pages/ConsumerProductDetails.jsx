import React, { useState, useEffect } from 'react'
import ProductDetails from './ProductDetails'
import ConsumerNavbar from '../components/ConsumerNavbar'
import ConsumerNavbar2 from '../components/ConsumerNavbar2'
import ConsumerFooter from '../components/ConsumerFooter'
import ProductCategory from '../components/ProductCategory'
import ProductSales from '../components/ProductSales'

export default function ConsumerProductDetails() {
              const [loading, setLoading] = useState(true);
            
              useEffect(() => {
                // Hide the spinner after 5 seconds
                const timer = setTimeout(() => {
                  setLoading(false);
                }, 1000);
            
                return () => clearTimeout(timer); // Cleanup timeout
              }, []);
  return (
    <div>
        <ConsumerNavbar/>
        <ConsumerNavbar2/>
                {loading ? (
                    <div className="spinner-container">
                      <div className="spinner"></div>
                    </div>
                  ) : (
                    <div>
        <ProductDetails/>
        <ProductCategory/>
        <ProductSales/>
                    </div>
                  )}
        <ConsumerFooter/>
    </div>
  )
}
