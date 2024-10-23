// components/navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; // Hamburger & close icons from react-icons

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Track if the mobile menu is open

  // Track the scroll position to apply styles when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (page: string) => {
    setActive(page);
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0d1b2a]/90 backdrop-blur-md' : 'bg-[#0d1b2a]/50'
      } px-8 py-4 flex justify-between items-center`}
    >
      {/* Navbar Brand */}
      <div className="text-3xl font-bold">Sami AZ.</div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        {menuOpen ? (
          <FiX
            size={30}
            className="text-white cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <FiMenu
            size={30}
            className="text-white cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {/* Navbar Links (visible on desktop, hidden on mobile) */}
      <div className="hidden md:flex space-x-12">
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`hover:text-cyan-400 transition ${
              active === item ? 'text-cyan-400' : 'text-white'
            }`}
            onClick={() => handleClick(item)}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Menu (visible only when menuOpen is true) */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0d1b2a]/90 backdrop-blur-md:hidden flex flex-col space-y-4 py-4 items-center">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`hover:text-cyan-400 transition ${
                active === item ? 'text-cyan-400' : 'text-white'
              }`}
              onClick={() => handleClick(item)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
