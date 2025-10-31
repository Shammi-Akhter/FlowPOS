import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-12 pt-14 pb-20 max-w-md mx-auto md:max-w-xl lg:max-w-full">
          <div className="block">
            <h4 className="text-xl text-white font-bold mb-7">Pagedone</h4>
            <ul className="text-lg transition-all duration-500">
              {["Home", "About", "Pricing", "Features", "Pro Version"].map((item) => (
                <li key={item} className="mb-6 last:mb-0">
                  <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="block">
            <h4 className="text-xl text-white font-bold mb-7">Products</h4>
            <ul className="text-lg transition-all duration-500">
              {["Figma UI System", "Icons Assets", "Responsive Blocks", "Components Library", "Plugin Guide"].map((item) => (
                <li key={item} className="mb-6 last:mb-0">
                  <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="block">
            <h4 className="text-xl text-white font-bold mb-7">Resources</h4>
            <ul className="text-lg transition-all duration-500">
              {["FAQs", "Quick Start", "Documentation", "User Guide", "Plugin Guide"].map((item) => (
                <li key={item} className="mb-6 last:mb-0">
                  <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="block">
            <h4 className="text-xl text-white font-bold mb-7">Support</h4>
            <ul className="text-lg transition-all duration-500">
              {["Customer Support", "Cookies", "License", "Terms & Conditions", "Privacy Policy"].map((item) => (
                <li key={item} className="mb-6 last:mb-0">
                  <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-7 border-t border-gray-700">
          <div className="flex items-center justify-center flex-col lg:space-y-0 space-y-8 lg:justify-between lg:flex-row">
            <a href="https://pagedone.io/" className="flex justify-center">
              {/* Replace this with your SVG component */}
              <svg className="w-40 h-8" viewBox="0 0 164 33" fill="none">
                {/* SVG paths here */}
              </svg>
            </a>
            <span className="text-gray-400 block">
              © <a href="https://pagedone.io/">FlowPOS</a> 2024, All rights reserved.
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0">
              <a href="#" className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-indigo-600">
                {/* Example icon */}
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-indigo-600">
                {/* Example icon */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;