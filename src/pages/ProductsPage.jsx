import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductContext';

const colorOptions = ['White', 'Black', 'Blue'];
const sizeOptions = ['S', 'M', 'L', 'XL'];

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart, addToWishlist } = useCart();
  const { products } = useProducts();

  const product = products.find((p) => p.id === parseInt(id));

  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="p-10">Product not found.</div>;

  const enhancedProduct = {
    ...product,
    selectedColor,
    selectedSize,
    quantity,
  };

  return (
    <>
    
      <div className="max-w-6xl mx-auto px-4 pt-6 text-sm text-gray-600">
        <nav className="flex gap-2">
          <Link to="/" className="hover:underline text-gray-500">Home</Link>
          <span>/</span>
          <Link to="/product" className=" hover:underline text-gray-500">Products</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 mt-2">
     
      <div className="flex flex-row gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full sm:w-1/2 md:h-[400px] h-[250px] sm:h-[300px] object-cover rounded shadow"
        />
        <div className='sm:w-1/2'>
          <h1 className="md:text-3xl text-xl font-bold mb-2 text-gray-800">{product.name}</h1>
          <p className="text-sm text-rose-600 font-semibold">${product.price}</p>
          <p className="mt-4 text-gray-600">{product.description || 'No description available.'}</p>

          {/* Color Selection */}
          <div className="mt-6">
            <label className="block text-gray-700 mb-2 font-medium">Select Color:</label>
            <div className="flex gap-3">
              {colorOptions.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`md:px-4 px-2 md:py-2 py-1 border rounded ${
                    selectedColor === color
                      ? 'bg-rose-600 text-white'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-6">
            <label className="block text-gray-700 mb-2 font-medium">Select Size:</label>
            <div className="flex gap-3">
              {sizeOptions.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`md:px-4 px-2 md:py-2 py-1 border rounded ${
                    selectedSize === size
                      ? 'bg-rose-600 text-white'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Input */}
          <div className="mt-6">
            <label className="block text-gray-700 mb-2 font-medium">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border border-gray-300 px-3 py-2 rounded w-24"
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex  gap-4">
            <button
              onClick={() => addToCart(enhancedProduct)}
              className="bg-rose-600 text-white md:px-6 px-1 md:py-2 py-1 text-xs rounded hover:bg-rose-700"
            >
              Add to Cart
            </button>
            <button
              onClick={() => addToWishlist(enhancedProduct)}
              className="border border-gray-400 text-gray-700 md:px-6 px-1 md:py-2 py-1 rounded hover:bg-gray-100"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
        </>
  );
};

export default ProductDetailsPage;
