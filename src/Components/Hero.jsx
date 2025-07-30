
import { Link, Links } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: '/b1.jpg',
    heading: 'Elevate Your Style',
    text: 'Discover modern fashion for every occasion.',
    cta: 'Shop Now'
  },
  {
    image: '/b2.jpg',
    heading: 'Fresh Arrivals Just In',
    text: 'Be the first to shop our new seasonal collection.',
    cta: 'Explore'
  },
  {
    image: '/b3.jpg',
    heading: 'Summer Sale 2025',
    text: 'Up to 50% off selected styles.',
    cta: 'Grab Deals'
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % length), 5000);
    return () => clearInterval(interval);
  }, [autoPlay, current]);

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center "
          style={{ backgroundImage: `url(${slides[current].image})` }}
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{slides[current].heading}</h1>
            <p className="text-lg mb-6 max-w-xl">{slides[current].text}</p>
          <Link to='/product'>  <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-6 py-3 rounded-md transition">
              {slides[current].cta}
            </button></Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white text-2xl bg-black bg-opacity-30 p-2 rounded-full hover:bg-opacity-60">
        <FaChevronLeft />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white text-2xl bg-black bg-opacity-30 p-2 rounded-full hover:bg-opacity-60">
        <FaChevronRight />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

