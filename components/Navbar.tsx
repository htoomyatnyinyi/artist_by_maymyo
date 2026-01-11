"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = ["Services", "Gallery", "Reviews", "About", "Contact"];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="absolute top-0 left-0 w-full z-40 flex items-center justify-between px-6 py-6 md:px-12 pointer-events-none md:pointer-events-auto">
        <div className="text-2xl font-serif font-bold tracking-widest text-[#1a1a1a] pointer-events-auto">
          <Link href="/">MAYMYO</Link>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide text-[#333] pointer-events-auto">
          {["Services", "Gallery", "Reviews", "About"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="hover:text-black transition-colors border-b-2 border-transparent hover:border-black py-1"
            >
              {item.toUpperCase()}
            </Link>
          ))}
        </div>
        {/* <div className="hidden md:block pointer-events-auto">
          <Link
            href="/contact"
            className="px-6 py-2 bg-[#1a1a1a] text-white text-xs font-bold tracking-widest hover:bg-black transition-colors uppercase"
          >
            Book Now
          </Link>
        </div> */}

        <div className="block pointer-events-auto">
          <Link
            href="/contact"
            className="px-6 py-2 bg-[#1a1a1a] text-white text-xs font-bold tracking-widest hover:bg-black transition-colors uppercase"
          >
            Book Now
          </Link>
        </div>
      </nav>

      {/* Mobile Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-black text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-300"
        aria-label="Toggle Menu"
      >
        <div className="relative w-6 h-6">
          <span
            className={`absolute left-0 top-1/2 w-6 h-0.5 bg-white transform transition-all duration-300 ${
              isOpen ? "-rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 w-6 h-0.5 bg-white transform transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 w-6 h-0.5 bg-white transform transition-all duration-300 ${
              isOpen ? "rotate-45" : "translate-y-1.5"
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-sm transition-opacity duration-300 md:hidden flex flex-col items-center justify-center ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center space-y-8">
          {navItems.map((item, index) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={`text-2xl font-serif font-medium tracking-widest text-[#1a1a1a] hover:text-black transition-all duration-500 transform ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.toUpperCase()}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
