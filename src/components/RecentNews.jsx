import React from "react";
import "./RecentNews.css"; // Import the CSS file

export default function RecentNews() {
  return (
    <div className="consumer-recent-container">
      {/* Section Heading */}
      <div className="consumer-recent-text-center consumer-recent-mb-6">
        <h2 className="consumer-recent-title">
          {/* Optional decorative dashes on each side */}
          <span className="consumer-recent-text-gray">—</span>
          <span>Recent News</span>
          <span className="consumer-recent-text-gray">—</span>
        </h2>
      </div>

      {/* News Cards Grid */}
      <div className="consumer-recent-grid">
        {/* Card 1 */}
        <div className="consumer-recent-card">
          <img
            src="https://plus.unsplash.com/premium_photo-1708971732760-12df6e68b5c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVnZXRhYmxlcyUyMG5ld3N8ZW58MHx8MHx8fDA%3D"
            alt="Green Onion Knife And Salad Placed"
            className="consumer-recent-image"
          />
          <div className="consumer-recent-p-4">
            {/* Date & Comments */}
            <div className="consumer-recent-flex">
              <span>JUN 17, 2020</span>
              <span>1 Comment</span>
            </div>
            {/* Title */}
            <h3 className="consumer-recent-text-lg">
              Green Onion Knife And Salad Placed
            </h3>
            {/* Description */}
            <p className="consumer-recent-text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Aenean commodo ligula eget dolor...
            </p>
            {/* Read More Link */}
            <a href="#" className="consumer-recent-link">
              Read More →
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="consumer-recent-card">
          <img
            src="https://media.istockphoto.com/id/2152213609/photo/woman-blog-about-healthy-eating-using-smartphone-and-ring-light.webp?a=1&b=1&s=612x612&w=0&k=20&c=s3CRfpcuplXgnXA0z9EslflV9X_DHIXixmK3u4BwAak="
            alt="All Time Fresh Every Time Healthy"
            className="consumer-recent-image"
          />
          <div className="consumer-recent-p-4">
            <div className="consumer-recent-flex">
              <span>JUN 17, 2020</span>
              <span>1 Comment</span>
            </div>
            <h3 className="consumer-recent-text-lg">
              All Time Fresh Every Time Healthy
            </h3>
            <p className="consumer-recent-text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Aenean commodo ligula eget dolor...
            </p>
            <a href="#" className="consumer-recent-link">
              Read More →
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="consumer-recent-card">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJ1aXRzJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D"
            alt="Health And Skin For Your Organic"
            className="consumer-recent-image"
          />
          <div className="consumer-recent-p-4">
            <div className="consumer-recent-flex">
              <span>JUN 17, 2020</span>
              <span>1 Comment</span>
            </div>
            <h3 className="consumer-recent-text-lg">
              Health And Skin For Your Organic
            </h3>
            <p className="consumer-recent-text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Aenean commodo ligula eget dolor...
            </p>
            <a href="#" className="consumer-recent-link">
              Read More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
