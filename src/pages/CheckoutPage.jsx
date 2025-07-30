import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    clearCart();
    navigate('/');
  };

  return (
    <section className="max-w-6xl mx-auto p-4 md:p-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <Link to="/" className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">Checkout</span>
      </nav>

      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-2 bg-white p-6 rounded shadow space-y-6"
        >
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="border px-4 py-2 rounded w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="border px-4 py-2 rounded w-full"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="border px-4 py-2 rounded w-full"
            />
            <input
              type="text"
              name="address"
              placeholder="Shipping Address"
              value={form.address}
              onChange={handleChange}
              className="border px-4 py-2 rounded w-full"
              required
            />
          </div>

          <textarea
            name="notes"
            placeholder="Order Notes (Optional)"
            value={form.notes}
            onChange={handleChange}
            rows="3"
            className="w-full border px-4 py-2 rounded"
          ></textarea>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Your Order</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-3">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between border-b pb-2 text-sm"
                >
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
              <li className="flex justify-between font-bold text-lg pt-4 border-t mt-4">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
