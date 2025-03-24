import React from "react";

export default function RecentNews() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Section Heading */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold flex items-center justify-center space-x-2">
          {/* Optional decorative dashes on each side */}
          <span className="text-gray-300">—</span>
          <span>Recent News</span>
          <span className="text-gray-300">—</span>
        </h2>
      </div>

      {/* News Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded shadow">
          <img
            src="https://plus.unsplash.com/premium_photo-1708971732760-12df6e68b5c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVnZXRhYmxlcyUyMG5ld3N8ZW58MHx8MHx8fDA%3D"
            alt="Green Onion Knife And Salad Placed"
            className="w-full h-48 object-cover rounded-t"
          />
          <div className="p-4">
            {/* Date & Comments */}
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span>JUN 17, 2020</span>
              <span>1 Comment</span>
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Green Onion Knife And Salad Placed
            </h3>
            {/* Description */}
            <p className="text-sm text-gray-600 mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Aenean commodo ligula eget dolor...
            </p>
            {/* Read More Link */}
            <a
              href="#"
              className="text-green-600 font-semibold hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded shadow">
          <img
            src="https://media.istockphoto.com/id/2152213609/photo/woman-blog-about-healthy-eating-using-smartphone-and-ring-light.webp?a=1&b=1&s=612x612&w=0&k=20&c=s3CRfpcuplXgnXA0z9EslflV9X_DHIXixmK3u4BwAak="
            alt="All Time Fresh Every Time Healthy"
            className="w-full h-48 object-cover rounded-t"
          />
          <div className="p-4">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span>JUN 17, 2020</span>
              <span>1 Comment</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              All Time Fresh Every Time Healthy
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Aenean commodo ligula eget dolor...
            </p>
            <a
              href="#"
              className="text-green-600 font-semibold hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded shadow">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJ1aXRzJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D"
            alt="Health And Skin For Your Organic"
            className="w-full h-48 object-cover rounded-t"
          />
          <div className="p-4">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span>JUN 17, 2020</span>
              <span>1 Comment</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Health And Skin For Your Organic
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Aenean commodo ligula eget dolor...
            </p>
            <a
              href="#"
              className="text-green-600 font-semibold hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
