"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Insights", href: "/insights" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock background scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="/" className="z-50 block flex items-center">
          <img src="/logo-nav.png" alt="E-O Samson & Partners" className="h-28 w-auto object-contain" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-brass transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/book-consultation"
          className="hidden lg:inline-block bg-brass text-navy font-semibold text-sm px-5 py-2.5 rounded-sm hover:bg-brass-light transition-colors"
        >
          Book Consultation
        </a>

        {/* Hamburger / Close toggle (mobile + tablet) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="lg:hidden z-50 relative w-8 h-8 flex flex-col justify-center items-center gap-[6px]"
        >
          <span
            className={`block h-[2px] w-7 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-7 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-7 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Full-screen mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-navy z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${i * 60}ms` : "0ms" }}
              className={`font-display text-3xl md:text-4xl text-white hover:text-brass transition-all duration-300 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        
       <a href="/book-consultation"
          onClick={() => setIsOpen(false)}
          className="absolute bottom-12 bg-brass text-navy font-semibold px-8 py-4 rounded-sm hover:bg-brass-light transition-colors text-sm tracking-wide"
        >
          Book Consultation
        </a>
      </div>
    </header>
  );
}