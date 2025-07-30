// src/pages/CartPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <Link to="/" className=""> <button className='text-blue-600 underline cursor-pointer'>Go to Shopping</button> </Link>
      </div>
    );
  }

  return (
    <>
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="md:text-3xl text-2xl font-bold mb-6">My Cart</h1>
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b pb-4">
            <div className="flex gap-4 items-center">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price}</p>
                <div className="flex items-center mt-2">
                  <label className="mr-2">Qty:</label>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 border px-2 py-1"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="text-right mt-8">
        <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
        <div className="mt-4 flex gap-4 justify-end">
          <button
            onClick={clearCart}
            className="text-red-500 border border-red-500 px-4 py-2 hover:bg-red-100"
          >
            Clear Cart
          </button>
          <Link to="/checkout" className="bg-black text-white px-6 py-2">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
      </>
  );
};

export default CartPage;
