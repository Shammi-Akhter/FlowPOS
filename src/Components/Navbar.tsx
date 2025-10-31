import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
     
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link to="/" className="block text-emerald-500">
             <div className="flex items-center gap-2">
              <img src="/images/logo.png" alt="FlowPOS Logo" className="h-8 w-auto" /> 
             <h6 className="text-emerald-500 text-2xl font-semibold">FlowPOS</h6>
             </div>
            </Link>
          </div>

      
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">

                <li>
                  <Link
                    to="/"
                    className="text-black transition hover:text-emerald-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleScrollLink(e, 'services')}
                    className="text-black transition hover:text-emerald-500 cursor-pointer"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    onClick={(e) => handleScrollLink(e, 'pricing')}
                    className="text-black transition hover:text-emerald-500 cursor-pointer"
                  >
                   Pricing
                  </a>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-black transition hover:text-emerald-500"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-black transition hover:text-emerald-500"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-black transition hover:text-emerald-500"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  to="/login"
                  className="rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-emerald-600 transition"
                >
                  Login
                </Link>

                <div className="hidden sm:flex">
                  <Link
                    to="/register"
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-emerald-500 hover:bg-gray-200 transition"
                  >
                    Register
                  </Link>
                </div>
              </div>
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;