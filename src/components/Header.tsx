import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import React from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-gray-900/95 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        <a href="#" className="text-2xl font-light tracking-wider">EQUINOLOGY</a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <button className="bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200">
            Contact Us
          </button>
        </nav>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden py-4 px-2">
          <div className="flex flex-col space-y-4">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200">
              Contact Us
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
