// src/pages/WishlistPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist, addToCart } = useCart();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6 text-center">Your Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty. <Link to="/" className="text-pink-600 underline">Browse dresses</Link></p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className=" rounded-lg shadow-md p-4 relative group">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover rounded-md"
              />
              <h2 className="text-lg font-bold mt-4">{item.name}</h2>
              <p className="text-gray-600 mb-2">${item.price.toFixed(2)}</p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => addToCart(item)}
                  className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-1 rounded text-sm"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-1 rounded text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
