import React from "react";
// Import the icons you need from Lucide
import { Truck, DollarSign, Headphones, Mail } from "lucide-react";
// import { assets } from "../../assets/assets.js";

export default function FeatureRow() {
  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        
        {/* Free Delivery */}
        <div className="flex items-start space-x-3">
          <Truck className="w-8 h-8 text-gray-700" />
          <div>
            <h3 className="font-semibold text-gray-800">Free Delivery</h3>
            <p className="text-sm text-gray-600">Shipped in max 1-2 days</p>
          </div>
        </div>

        {/* Return & Refund */}
        <div className="flex items-start space-x-3">
          {/* <img src={assets.cediIcon} className=" w-7 lg:w-8"/> */}
          <div>
            <h3 className="font-semibold text-gray-800">Return & Refund</h3>
            <p className="text-sm text-gray-600">Money Back Guarantee</p>
          </div>
        </div>

        {/* Quality Support */}
        <div className="flex items-start space-x-3">
          <Headphones className="w-8 h-8 text-gray-700" />
          <div>
            <h3 className="font-semibold text-gray-800">Quality Support</h3>
            <p className="text-sm text-gray-600">Ready to help 24/7</p>
          </div>
        </div>

        {/* Join Newsletter */}
        <div className="flex items-start space-x-3">
          <Mail className="w-8 h-8 text-gray-700" />
          <div>
            <h3 className="font-semibold text-gray-800">Join Newsletter</h3>
            <p className="text-sm text-gray-600">Stay up to date with everything</p>
          </div>
        </div>

      </div>
    </div>
  );
}
