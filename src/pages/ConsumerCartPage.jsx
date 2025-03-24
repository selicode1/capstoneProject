import React, {useState, useEffect} from 'react'
import ConsumerNavbar from '../components/ConsumerNavbar'
import ConsumerNavbar2 from '../components/ConsumerNavbar2'
import CartSection from '../components/CartSection'
import ConsumerFooter from '../components/ConsumerFooter'
import { ToastContainer } from "react-toastify";

export default function ConsumerCartPage() {
          const [loading, setLoading] = useState(true);
        
          useEffect(() => {
            // Hide the spinner after 5 seconds
            const timer = setTimeout(() => {
              setLoading(false);
            }, 1000);
        
            return () => clearTimeout(timer); // Cleanup timeout
          }, []);
  return (
    <div style={{backgroundColor: '#fff'}}>
        <ToastContainer autoClose={2000} />
        <ConsumerNavbar/>
        <ConsumerNavbar2/>
                {loading ? (
                    <div className="spinner-container">
                      <div className="spinner"></div>
                    </div>
                  ) : (
                    <CartSection/>
                  )}
        <ConsumerFooter/>
    </div>
  )
}
