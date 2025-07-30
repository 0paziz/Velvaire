import React from 'react';
import { Link } from 'react-router-dom';

const FlashDeals = ({ product }) => {
  return (
    <div className="flex  w-xl  gap-2 p-4 rounded">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-40 h-28 object-cover rounded border border-gray-100 hover:opacity-70"
        />
      </Link>

      <div className="w-full">
        <h3 className="font-semibold w-28 text-gray-800 ">{product.name}</h3>
        <p className="text-green-700 font-semibold text-sm mt-1">${product.price} <span className='ml-1 text-sm text-gray-600 line-through'>{product.dis}</span> </p>
      </div>
    </div>
  );
};

export default FlashDeals;
