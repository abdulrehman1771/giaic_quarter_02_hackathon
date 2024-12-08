import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
    <div className="w-full bg-[#EEEFFB]">
    <div className="w-[95%] mx-auto max-w-[1400px]">
    <footer className="py-10">
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Newsletter Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Hekto</h2>
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-[70%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="w-[30%] bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
                Sign Up
              </button>
            </div>
            <p className="text-sm text-gray-600">
              <a href="#" className="text-pink-500 underline">
                Contact Info
              </a>
              <br />
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>

          {/* Customer Care Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Care</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          {/* Pages Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Pages</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    
    </div>
    </div>
    
     <div className="w-full h-[53px] bg-[#E7E4F8]">
     <div className="flex h-full justify-between items-center w-[60%] mx-auto max-w-[1400px]">
        <div>
            <p>&#169;Webecy - All Rights Reserved</p>
        </div>
        <div className="flex gap-3">
            <div>
                <Image src='icon-facebook.svg' width={20} height={20} alt=""></Image>
            </div>
            <div>
                <Image src='icon-instagram.svg' width={20} height={20} alt=""></Image>
            </div>
            <div>
                <Image src='icon-twitter.svg' width={20} height={20} alt=""></Image>
            </div>
        </div>
    </div>
    </div>
    </>
  );
};

export default Footer;
