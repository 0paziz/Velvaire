// src/Components/Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Card = ({ product }) => {
  const { addToCart, addToWishlist } = useCart();

  return (
    <div  className="rounded p-2 transition w-40 sm:w-44 md:w-60 text-sm mb-2">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:h-52 object-cover rounded border border-gray-100 hover:opacity-75"
        />
        <h3 className="font-medium mt-1 truncate">{product.name}</h3>
        <p className="text-green-700 font-semibold">${product.price.toFixed(2)} <span className='ml-1 text-sm text-gray-500 line-through'>{product.dis}</span>  </p>
      </Link>

      <div className="flex justify-between items-center mt-2 ">
        <button
          onClick={() => addToCart(product)}
          className="flex text-xs items-center gap-1 cursor-pointer bg-rose-600 hover:bg-rose-700 text-white px-1 py-1 rounded"
        >
         Add to Cart <FaShoppingCart />
        </button>
        <button
          onClick={() => addToWishlist(product)}
          className="text-rose-500 hover:text-rose-700 cursor-pointer"
        >
          <FaHeart size={18} />
        </button>
      </div>
    </div>
  );
};

export default Card;
