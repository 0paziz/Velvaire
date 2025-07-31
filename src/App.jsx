// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './pages/Home';

import ProductDetailsPage from './pages/ProductsPage';
import CartPage from './pages/Cart';
import CheckoutPage from './pages/CheckoutPage';
import { CartProvider } from './context/CartContext';
import WishlistPage from './pages/Wishlist';
import LoginForm from './pages/Login';
import { ProductProvider } from './context/ProductContext';
import ScrollToTop from './Components/ScrollTop';
import ProductsPage from './pages/Products';


function App() {
  return (

 <ProductProvider>
 <CartProvider>
      <Router>
        <ScrollToTop/>
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow overflow-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetailsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/wishlist" element={<WishlistPage/>} />
              <Route path="/login" element={<LoginForm/>} />
              <Route path="/product" element={<ProductsPage/>} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
     </CartProvider>
       </ProductProvider>
  
 
  );
}

export default App;
