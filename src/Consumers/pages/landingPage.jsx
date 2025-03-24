import React from 'react'
import FeatureRow from '../components/FeatureRow'
import DiscountSection from '../components/discountSection'
import ProductDetails from '../components/ProductDetails'
import ProductsSales1 from '../components/ProductSales1'
import Banner1 from '../components/Banner1'
import FreshVegetable from '../components/FreshVegetable'
import RecentNews from '../components/RecentNews'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const LandingPageConsumer = () => {
  return (
    <div>

    <div>
        <Hero/>
    </div>

    {/*  */}
    <div>
        <FeatureRow/>
    </div>
     <div>
        <DiscountSection/>
    </div>
    <div>
        <ProductDetails/>
    </div>
     <div>
        <ProductsSales1/>
    </div>
    <div>
        <Banner1/>
    </div>
    <div>
        <FreshVegetable/>
    </div>
     <div>
        <RecentNews/>
    </div>
    <div>
        <Footer/>
    </div>
    
    </div>
  )
}

export default LandingPageConsumer