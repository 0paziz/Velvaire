// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaApple, FaGooglePlay } from 'react-icons/fa';
import SupportBanner from './SupportBanner';

const Footer = () => {
  return (
    <>

   
    <footer className="bg-white mt-20 text-gray-700">
       <SupportBanner/>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Velvaire</h2>
          <p className="text-sm mb-4">Discover premium fashion for every season.</p>
          <div className="flex items-start gap-2 text-sm">
            <FaMapMarkerAlt className="mt-1" />
            <span>Palaza Block, Building 20/H, Kampala, Uganda</span>
          </div>
          <div className="flex items-center gap-2 mt-2 text-sm">
            <FaPhoneAlt />
            <span>(256) 781 511 430</span>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Affiliates</a></li>
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Help & Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Advertise</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Documentation</a></li>
          </ul>
        </div>

        {/* Social & Apps */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Stay Connected</h3>
          <div className="flex items-center gap-4 text-lg mb-4">
            <FaFacebookF className="hover:text-black cursor-pointer" />
            <FaInstagram className="hover:text-black cursor-pointer" />
            <FaYoutube className="hover:text-black cursor-pointer" />
            <FaEnvelope className="hover:text-black cursor-pointer" />
          </div>

          <h4 className="font-semibold text-sm mb-2">Download App</h4>
          <div className="flex gap-3">
            <button className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
              <FaApple /> iOS App
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
              <FaGooglePlay /> Android App
            </button>
          </div>
        </div>
      </div>

      {/* Category Links */}
      <div className="bg-gray-100 py-6 text-sm text-center text-gray-600">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <div>
              <strong>Women’s Fashion:</strong> Blog | Dresses | Tops | Accessories | Shoes
            </div>
            <div>
              <strong>Men’s Style:</strong> Blog | Shirts | Denim | Watches | Sneakers
            </div>
            <div>
              <strong>Collections:</strong> Blog | Summer | Fall | Essentials | New Arrivals
            </div>
          </div>
          <p className="mt-6 text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Velvaire. Designed with ❤️ for fashion.
          </p>
        </div>
      </div>
    </footer>
        </>
  );
};

export default Footer;
