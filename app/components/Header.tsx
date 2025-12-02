"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Categories", href: "#categories" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4a7c59] to-[#6b9b7a] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl" style={{ fontFamily: 'var(--font-playfair)' }}>G</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#c9a227] rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#2d5a3d] tracking-wide" style={{ fontFamily: 'var(--font-playfair)' }}>
                Grinonce
              </h1>
              <p className="text-xs text-[#4a7c59] tracking-widest">BY GIPL</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-[#2d5a3d] font-medium hover:text-[#4a7c59] transition-colors duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4a7c59] to-[#c9a227] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://mygipl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden px-6 py-2.5 bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] text-white font-medium rounded-full hover:shadow-lg hover:shadow-[#4a7c59]/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 animate-shimmer"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`w-6 h-0.5 bg-[#2d5a3d] transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#2d5a3d] transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#2d5a3d] transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 py-4 glass rounded-2xl px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#2d5a3d] font-medium hover:text-[#4a7c59] transition-colors py-2 border-b border-[#a8d5ba]/30"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://mygipl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center px-6 py-2.5 bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] text-white font-medium rounded-full"
            >
              Shop Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
