"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, headerContent } from "../constant/hero-const";
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <div className="flex justify-between items-center p-6">
            <h1 className="text-xl font-bold">{headerContent.name}</h1>
            <button onClick={toggleMenu} className="text-black">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center mt-20 space-y-8">
            {navLinks.map((link) => (
              <a key={link.id} href={link.href} className="text-xl" onClick={toggleMenu}>
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Header/Navigation */}
      <header className="relative z-10 px-6 py-4 flex justify-between items-center">
        <Link href={'/'}>
          <h1 className="text-xl font-bold">{headerContent.name}</h1>
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden text-black">
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="relative text-black hover:text-yellow-500 transition-colors duration-300"
            >
              {link.text}
              {/* Yellow Line on Hover */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}