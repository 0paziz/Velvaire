import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaUser,
  FaShoppingCart,
  FaChevronDown,
  FaHeart,
  FaSearch,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 📢 Announcement Bar */}
      <div className="bg-yellow-400 text-black text-sm py-2 text-center font-medium">
        📦 Free delivery on orders over $50!
      </div>

      <div className="bg-white shadow-md z-50 sticky top-0">
        {/* 📱 Mobile Second Bar: Logo + Icons */}
        <div className="md:hidden flex items-center justify-between px-4 py-3">
          <Link to="/" className="text-2xl font-bold text-rose-600 tracking-wide">
            Velvaire
          </Link>
          <div className="flex items-center gap-4 text-xl text-gray-800">
            <Link to="/login" className="hover:text-rose-600">
              <FaUser />
            </Link>
            <Link to="/wishlist" className="hover:text-rose-600">
              <FaHeart />
            </Link>
            <Link to="/cart" className="relative hover:text-rose-600">
              <FaShoppingCart />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* 📱 Mobile Third Bar: ☰ + Product Categories + Search */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 md:hidden">
          <div className="flex items-center gap-1">
            <button
              className="text-2xl text-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
            <span className="text-sm font-semibold text-gray-900">
              Product Categories
            </span>
          </div>

          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden px-2">
            <FaSearch className="text-gray-500 text-sm" />
            <input
              type="text"
              placeholder="Search"
              className="w-24 sm:w-32 text-sm px-2 py-1 focus:outline-none"
            />
          </div>
        </div>

    
        <div className="hidden md:flex max-w-7xl mx-auto px-4 py-4 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-rose-600 tracking-wide">
            Velvaire
          </Link>

      
          <div className="flex items-center mx-6 flex-1 max-w-2xl">
            <div className="flex w-full shadow-sm border border-gray-300 rounded-md overflow-hidden">
              <div className="flex items-center px-3 text-gray-500 bg-white">
                <FaSearch className="text-lg" />
              </div>
              <input
                type="text"
                placeholder="Search products, categories, brands..."
                className="w-full px-4 py-2 focus:outline-none text-sm"
              />
              <button className="cursor-pointer bg-rose-600 text-white px-4 text-sm font-medium hover:bg-rose-700 transition">
                Search
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 text-sm text-gray-700">
            <Link to="/login" className="flex items-center gap-1 hover:text-rose-600">
              <FaUser /> <span>Account</span>
            </Link>
            <Link to="/wishlist" className="flex items-center gap-1 hover:text-rose-600">
              <FaHeart /> <span>WishLists</span>
            </Link>
            <Link to="/cart" className="relative flex items-center gap-1 hover:text-rose-600">
              <FaShoppingCart />
              <span>Cart</span>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* 🖥️ Desktop Category Nav */}
        <div className="hidden md:flex bg-gray-100 border-t">
          <div className="max-w-7xl mx-auto px-4 py-2 flex space-x-6 text-sm font-medium text-gray-700 relative">
            {/* Categories */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-rose-600">
                Categories <FaChevronDown className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 top-full mt-2 w-96 bg-white border rounded-md shadow-lg p-6 z-50"
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Shop All</h4>
                        <ul className="space-y-1 text-sm">
                          <li><Link to="#new" className="hover:text-rose-600">New Arrivals</Link></li>
                          <li><Link to="#best" className="hover:text-rose-600">Best Sellers</Link></li>
                          <li><Link to="#" className="hover:text-rose-600">Clearance</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">By Category</h4>
                        <ul className="space-y-1 text-sm">
                          <li><Link to="#" className="hover:text-rose-600">Clothing</Link></li>
                          <li><Link to="#" className="hover:text-rose-600">Shoes</Link></li>
                          <li><Link to="#" className="hover:text-rose-600">Accessories</Link></li>
                        </ul>
                      </div>
                      <div className="w-60 text-center rounded">
                        <img className="rounded w-28" src="/a.jpg" alt="ads" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/product" className="hover:text-rose-600">Men</Link>
            <Link to="/product" className="hover:text-rose-600">Women</Link>
            <Link to="/product" className="hover:text-rose-600">Kids</Link>
            <Link to="/product" className="hover:text-rose-600">Products</Link>
          </div>
        </div>

     
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white shadow-lg border-t px-4 py-6 space-y-4"
            >
              <div className="flex flex-col gap-4 text-sm font-medium text-gray-700">
        
                <Link to="/product" className="hover:text-rose-600">Men</Link>
                <Link to="/product" className="hover:text-rose-600">Women</Link>
                <Link to="/product" className="hover:text-rose-600">Kids</Link>
                <Link to="/product" className="hover:text-rose-600">Products</Link>
                <Link to="#new" className="hover:text-rose-600">New Arrivals</Link>
                <Link to="#best" className="hover:text-rose-600">Best Sellers</Link>
                <Link to="#" className="hover:text-rose-600">Clearance</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
