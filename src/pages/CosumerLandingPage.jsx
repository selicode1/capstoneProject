import React, { useState, useEffect } from 'react';
import ConsumerNavbar from '../components/ConsumerNavbar';
import ConsumerNavbar2 from '../components/ConsumerNavbar2';
import ConsumerHero from '../components/ConsumerHero';
import ConsumerFeatureRow from '../components/ConsumerFeatureRow';
import DiscountSection from '../components/DiscountSection';
import ProductCategory from '../components/ProductCategory';
import ProductsSales from '../components/ProductSales';
import Banner from '../components/Banner';
import FreshVegetable from '../components/FreshVegetable';
import RecentNews from '../components/RecentNews';
import ConsumerFooter from '../components/ConsumerFooter';
import './ConsumerLandingPage.css'; // Import CSS file

export default function ConsumerLandingPage() {
  const [loading, setLoading] = useState(true);
  // const { user } = useAuth();

  useEffect(() => {
    // Hide the spinner after 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <>
              <ConsumerNavbar />
              <ConsumerNavbar2 />
      {loading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          <ConsumerHero />
          <ConsumerFeatureRow />
          <DiscountSection />
          <ProductCategory />
          <ProductsSales />
          <Banner />
          <FreshVegetable />
          <RecentNews />
        </div>
      )}
                <ConsumerFooter />
    </>
  );
}
