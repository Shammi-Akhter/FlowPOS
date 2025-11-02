import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);

    const scrollToSection = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -80; 
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="FlowPOS Logo"
                className="h-8 w-auto"
              />
              <h6 className="text-emerald-500 text-2xl font-semibold">
                FlowPOS
              </h6>
            </Link>
          </div>
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
                  onClick={(e) => handleScrollLink(e, "services")}
                  className="text-black transition hover:text-emerald-500 cursor-pointer"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => handleScrollLink(e, "pricing")}
                  className="text-black transition hover:text-emerald-500 cursor-pointer"
                >
                  Pricing
                </a>
              </li>
              <li>
                <Link
                  to="/blog" onClick={() => window.scrollTo(0, 0)}
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
            <div className="hidden sm:flex sm:gap-4">
              <Link
                to="/login"
                className="rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-emerald-600 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-emerald-500 hover:bg-gray-200 transition"
              >
                Register
              </Link>
            </div>

    
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="block md:hidden rounded bg-emerald-50 p-2 text-emerald-500 transition hover:text-gray-700"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={22} />}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg animate-fadeIn">
          <ul className="flex flex-col items-center py-4 gap-4 text-sm font-medium">
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-black hover:text-emerald-500"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScrollLink(e, "services")}
                className="text-black hover:text-emerald-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                onClick={(e) => handleScrollLink(e, "pricing")}
                className="text-black hover:text-emerald-500"
              >
                Pricing
              </a>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={() => setMenuOpen(false)}
                className="text-black hover:text-emerald-500"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="text-black hover:text-emerald-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-black hover:text-emerald-500"
              >
                Contact
              </Link>
            </li>
            <li className="flex gap-3 mt-2">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-emerald-500 hover:bg-gray-200"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
