import React from 'react'
import './ConsumerFeatureRow.css'

export default function ConsumerFeatureRow() {
  return (
    <div class="consumer-banner">
  <div class="consumer-banner-container">
    

    <div class="consumer-feature">
      <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="Truck Icon" class="consumer-icon"/>
      <div>
        <h3 class="consumer-feature-title">Free Delivery</h3>
        <p class="consumer-feature-description">Shipped in max 1-2 days</p>
      </div>
    </div>

    <div class="consumer-feature">
      <img src="https://cdn-icons-png.flaticon.com/512/1042/1042334.png" alt="Cedi Icon" class="consumer-icon"/>
      <div>
        <h3 class="consumer-feature-title">Return & Refund</h3>
        <p class="consumer-feature-description">Money Back Guarantee</p>
      </div>
    </div>

    
    <div class="consumer-feature">
      <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Headphones Icon" class="consumer-icon"/>
      <div>
        <h3 class="consumer-feature-title">Quality Support</h3>
        <p class="consumer-feature-description">Ready to help 24/7</p>
      </div>
    </div>

    <div class="consumer-feature">
      <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Mail Icon" class="consumer-icon"/>
      <div>
        <h3 class="consumer-feature-title">Join Newsletter</h3>
        <p class="consumer-feature-description">Stay up to date with everything</p>
      </div>
    </div>

  </div>
</div>

  )
}
