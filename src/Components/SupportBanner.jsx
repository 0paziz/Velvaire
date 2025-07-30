
import React from 'react';
import { FaWhatsapp, FaHandHoldingUsd, FaHeadset } from 'react-icons/fa';

const SupportBanner = () => {
  return (
    <section className="bg-[#f8f9fb] py-10 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* WhatsApp Support */}
        <div className="flex items-start gap-4">
          <div className="bg-[#e6f0ff] p-3 rounded-full">
            <FaWhatsapp className="text-[#007bff] text-2xl" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Message via WhatsApp</h4>
            <p className="text-sm text-gray-600">Send instant messages & product info through WhatsApp anytime.</p>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="flex items-start gap-4">
          <div className="bg-[#e6f8f0] p-3 rounded-full">
            <FaHandHoldingUsd className="text-[#28a745] text-2xl" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Money Back Guarantee</h4>
            <p className="text-sm text-gray-600">If items have defects, we'll gladly return or replace them.</p>
          </div>
        </div>

        {/* 24/7 Customer Support */}
        <div className="flex items-start gap-4">
          <div className="bg-[#fff3e6] p-3 rounded-full">
            <FaHeadset className="text-[#ff8c00] text-2xl" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">24/7 Customer Support</h4>
            <p className="text-sm text-gray-600">Our expert team is always here to assist you — day or night.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportBanner;
