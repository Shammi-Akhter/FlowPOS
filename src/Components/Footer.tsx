import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();

    const scrollToSection = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    if (location.pathname === "/") {
      scrollToSection();
    } else {
      navigate("/");
      setTimeout(scrollToSection, 200);
    }
  };

  return (
    <footer className="w-full bg-black md:mt-20 mt-10">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-12 pt-14 pb-20 max-w-md mx-auto md:max-w-xl lg:max-w-full">
          <div className="block">
            <h4 className="text-xl text-white font-bold mb-7">FlowPOS</h4>
            <ul className="text-lg transition-all duration-500">
              <li className="mb-6">
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li className="mb-6">
                <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
              </li>
              <li className="mb-6">
                <a
                  href="#pricing"
                  onClick={(e) => handleScrollLink(e, "pricing")}
                  className="text-gray-400 hover:text-white"
                >
                  Pricing
                </a>
              </li>
              <li className="mb-0">
                <a
                  href="#services"
                  onClick={(e) => handleScrollLink(e, "services")}
                  className="text-gray-400 hover:text-white"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>

           <div className="block">
            <h4 className="text-xl text-white font-bold mb-7">Products</h4>
            <ul className="text-lg transition-all duration-500">
              <li className="mb-6">
                <Link to="/update" className="text-gray-400 hover:text-white">Menu Management</Link>
              </li>
              <li className="mb-6">
                <Link
                  to="/update"
                  className="text-gray-400 hover:text-white"
                >
               Multi-Location
                </Link>
              </li>
              <li className="mb-6">
                <Link to="/update" className="text-gray-400 hover:text-white">Reports & Insights</Link>
              </li>
              <li className="mb-6">
                <Link to="/update" className="text-gray-400 hover:text-white">Components Library</Link>
              </li>
              <li className="mb-0">
                <Link to="/future_update" className="text-gray-400 hover:text-white">Future Element</Link>
              </li>
            </ul>
          </div>

          <div className="block">
            <h4 className="text-xl text-white font-bold mb-7">Resources</h4>
            <ul className="text-lg transition-all duration-500">
              <li className="mb-6">
                <Link to="/faq" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white">FAQs</Link>
              </li>
              
              <li className="mb-6">
                <Link to="/update" className="text-gray-400 hover:text-white">User Guide</Link>
              </li>
              <li className="mb-0">
                <Link to="/update" className="text-gray-400 hover:text-white">Plugin Guide</Link>
              </li>
            </ul>
          </div>

          <div className="block">
            <h4 className="text-xl text-white font-bold mb-7">Support</h4>
            <ul className="text-lg transition-all duration-500">
              <li className="mb-6">
                <Link to="/contact" className="text-gray-400 hover:text-white">Customer Support</Link>
              </li>
      
              <li className="mb-6">
                <Link to="/licence" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white">License</Link>
              </li>
              <li className="mb-6">
                <Link to="/terms" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white">Terms & Conditions</Link>
              </li>
              <li className="mb-0">
                <Link to="/privacy" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-7 border-t border-gray-700">
          <div className="flex items-center justify-center flex-col lg:space-y-0 space-y-8 lg:justify-between lg:flex-row">
            <Link to="/" className="flex justify-center">
              <img src="/images/logo.png" alt="FlowPOS" className="w-15 h-15 bg-white p-1 rounded-full" />
            </Link>

            <span className="text-gray-400 block">
              © FlowPOS 2025, All rights reserved.
            </span>

            <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border bg-emerald-900 border-gray-700 flex justify-center items-center hover:border-emerald-500"
              >
                <SlSocialFacebook className="text-white w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border bg-emerald-900 border-gray-700 flex justify-center items-center hover:border-emerald-500"
              >
                <SlSocialLinkedin className="text-white w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
