import React, { useEffect, useState } from 'react';
import FlashDeals from './FlashSale';
import { FaArrowRight } from 'react-icons/fa';
import Card from './Card';
import { Link } from 'react-router-dom';

const flash = [
  { id: 41, name: 'Silver Men’s Watch', price: 59.99, dis: "$"+67.99, image: '/images/watch-m.jpg', description: 'Elegant silver-toned wristwatch with leather band and analog display.' },
  { id: 16, name: 'Men’s Style Kit', price: 44.99, dis: "$"+54.99, image: '/images/men-fashion.jpg', description: 'A flat-lay of essential men’s wear accessories — perfect for the modern man’s wardrobe.' },
  { id: 33, name: 'Grey Sweater', price: 49.99, dis: "$"+59.99, image: '/images/sweater-m.jpg', description: 'Warm knit sweater with ribbed cuffs, perfect for chilly weather.' },
  { id: 12, name: 'Grey Hoodie', price: 32.99,dis: "$"+37.99, image: '/images/hody-m.jpg', description: 'Essential grey hoodie with zipper front and modern fit, suitable for all seasons.' },
];


const RecentProducts = [
  { id: 31, name: 'Colorful Socks Set', price: 9.99, dis: "$"+15.99, image: './images/socks.jpg', description: 'Bright and cozy socks that add fun to your everyday essentials.' },
  { id: 34, name: 'Oversized Sweathody', price: 38.99,  image: './images/sweathody-k.jpg', description: 'Comfy oversized hoodie for lounging or street style layering.' },
  { id: 30, name: 'Tech-Run Sneakers', price: 69.99, dis: "$"+74.99, image: './images/shoes3-m.jpg', description: 'Lightweight performance sneakers made for training and daily wear.' },
   { id: 8, name: 'Classic Fedora Hat', price: 14.99, dis: "$"+19.99, image: './images/hat-m.jpg', description: 'Stylish fedora hat with a structured brim, perfect for elevating your outfit.' },
  { id: 42, name: 'Women’s Shirt', price: 29.99, image: './images/women-shirt.jpg', description: 'Casual loose-fit women’s shirt with a soft drape and modern collar.' },
  { id: 2, name: 'Reading Glasses', price: 19.99, dis: "$"+23.99, image: './images/glasses.jpg', description: 'Lightweight, modern eyeglasses designed for clarity and comfort during reading or screen use.' },
  { id: 3, name: 'Stylish Eyewear', price: 21.99, image: './images/glasses2.jpg', description: 'Trendy clear-frame glasses for fashion-forward individuals. Ideal for both work and casual wear.' },
   { id: 37, name: 'T-shirt on Hanger', price: 22.99, dis: "$"+24.99, image: './images/t-shirt-m.jpg', description: 'Classic black tee displayed on hanger. A wardrobe essential in all seasons.' },
  { id: 38, name: 'Clothing Bundle', price: 55.99, image: './images/tuananh-m.jpg', description: 'Mixed apparel set including bras, tops, and wraps for cozy layering.' },
  { id: 39, name: 'Men’s Wallet', price: 24.99,dis: "$"+26.99, image: './images/wallet-men.jpg', description: 'Compact leather wallet with bill slots and card compartments.' },
  { id: 21, name: 'Kid’s Shirt Pose', price: 15.99, image: './images/shirt-kid.jpg', description: 'Trendy kid’s cotton shirt in bright colors, ideal for school or playdates.' },
  { id: 23, name: 'Stacked T-Shirts', price: 27.99,  dis: "$"+35.99, image: './images/shirts-m.jpg', description: 'A variety of crewneck t-shirts in neutral shades, made from premium cotton.' },
  
];


  

const Best = [
 { id: 29, name: 'Classic Men’s Shoes', price: 64.99, image: './images/shoes.jpg', description: 'Polished leather shoes suitable for formal occasions and office wear.' },
  { id: 32, name: 'Business Suit', price: 89.99, image: './images/suit-m.jpg', description: 'Two-piece tailored suit for men, combining elegance with comfort.' },
  { id: 39, name: 'Men’s Wallet', price: 24.99, image: './images/wallet-men.jpg', description: 'Compact leather wallet with bill slots and card compartments.' },
  { id: 18, name: 'Men’s Pants Collection', price: 29.99, image: './images/pant-m.jpg', description: 'Smart-casual pants designed with comfort stretch fabric, available in earthy tones.' },
];




export default function ProductSection() {

   const [timeLeft, setTimeLeft] = useState(3 * 60 * 60); // 3 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

const formatTime = (seconds) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return `${hrs.toString().padStart(2, '0')} hrs : ${mins
    .toString()
    .padStart(2, '0')} mins : ${secs.toString().padStart(2, '0')} sec`;
};


  return (
   <>
    
   <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
  <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-4 gap-2">
    <h2 className="text-xl sm:text-2xl font-bold text-left self-start text-gray-800">Flash Sale Today</h2>
    <div className="flex items-center  gap-3 text-gray-500 ">
      Deals ends in:
      <span className="text-xs sm:text-sm bg-rose-700 rounded-md font-semibold text-white px-3 py-1.5">
        {formatTime(timeLeft)}
      </span>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {flash.map((product) => (
      <FlashDeals key={product.id} product={product} />
    ))}
  </div>
</section>

<section id="new" className="max-w-6xl mx-auto px-4 md:px-8 py-12">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Recent Products</h2>
    <Link to="/product" className="text-sm sm:text-base underline text-gray-800 font-semibold">
      All
    </Link>
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {RecentProducts.map((product) => (
      <Card key={product.id} product={product} />
    ))}
  </div>
</section>

<section id="best" className="max-w-6xl mx-auto px-4 md:px-8 py-12">
  <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Top Sellers</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {Best.map((product) => (
      <Card key={product.id} product={product} />
    ))}
  </div>
</section>


 
   </>
  )
}

