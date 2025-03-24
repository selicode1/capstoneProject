import React from 'react'
import './ConsumerHero.css'
import { useNavigate } from 'react-router-dom'

export default function ConsumerHero() {
    const navigate = useNavigate();
  return (
    <section class="consumer-section">
  <div class="consumer-container">
    
    <div class="consumer-text-content">
      <span class="consumer-highlight">Summer Juice</span>
      <h1 class="consumer-title-hero">
        Your First Order <span>20% Off</span>
      </h1>
      <p class="consumer-description">
        Refresh yourself with our organic and delicious summer juices.
        Enjoy a healthy lifestyle with a burst of flavor in every sip.
      </p>
      <button class="consumer-button" onClick={() => navigate('/shop')}>Shop Now</button>
    </div>

    <div class="consumer-image-container">
      <img
        src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D"
        alt="Juice Bottle"
        class="consumer-image"
      />
    </div>
  </div>
</section>

  )
}
