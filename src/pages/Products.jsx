import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const ProductsPage = () => {
  const { products } = useProducts();
  const { addToCart, addToWishlist } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="md:text-3xl text-2xl font-bold mb-10 text-gray-800">All Products</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group  rounded-lg overflow-hidden flex flex-col"
          >
            <Link to={`/product/${product.id}`} className="block w-full aspect-w-1 aspect-h-1 bg-gray-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full border border-gray-200 h-full  rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div className="p-4 flex flex-col flex-grow">
              <Link to={`/product/${product.id}`} className="text-lg font-semibold text-gray-800 hover:underline">
                {product.name}
              </Link>
              <p className="mt-2 text-green-700 font-semibold">${product.price.toFixed(2)}  <span className=' text-sm text-gray-500 line-through'>{product.dis}</span> </p>

             <div className="mt-auto flex gap-5 pt-4 justify-between">
            <button
                onClick={() => addToCart(product)}
                className=" px-1 md:px-2 bg-rose-600 text-white py-0.5 md:py-1 rounded text-sm hover:bg-rose-700 transition"
                aria-label={`Add ${product.name} to cart`}
            >
            Add to Cart
        </button>
        <button
            onClick={() => addToWishlist(product)}
            className="  py-2 rounded  transition cursor-pointer"
            aria-label={`Add ${product.name} to wishlist`}
        >
            <FaHeart size={21} className='text-rose-600 hover:text-gray-700 ' />
    
        </button>
        </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
