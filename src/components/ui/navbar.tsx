"use client"
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu on click
  };

  return (
    <nav className="bg-blue-200 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            {/* <a
              href="#"
              onClick={() => handleScroll("home")}
              className="text-lg font-bold cursor-pointer"
            >
              <img src="Pretty_Homes_Logo.jpg" className="w-20 " alt="Pretty Homes Logo" />

            </a> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center text-xl">
            <button
              onClick={() => handleScroll("home")}
              className="hover:text-blue-200 text-white font-bold"
            >
              Home
            </button>
            <button
              onClick={() => handleScroll("about")}
              className="hover:text-blue-200 text-white font-bold"
            >
              About
            </button>
            <button
              onClick={() => handleScroll("project")}
              className="hover:text-blue-200 text-white font-bold"
            >
              Projects
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="hover:text-blue-200 text-white font-bold"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center font-bold">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-500">
          <button
            onClick={() => handleScroll("home")}
            className="block w-full px-4 py-2 text-left text-white hover:bg-blue-400 font-bold"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="block w-full px-4 py-2 text-left text-white hover:bg-blue-400 font-bold"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("project")}
            className="block w-full px-4 py-2 text-left text-white hover:bg-blue-400 font-bold"
          >
            Project
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="block w-full px-4 py-2 text-left text-white hover:bg-blue-400 font-bold"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
