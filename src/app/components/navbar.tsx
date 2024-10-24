'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; // Hamburger & close icons from react-icons

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false); // Track if the mobile menu is open

  const handleClick = (page: string) => {
    setActive(page);
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center 
      bg-transparent backdrop-blur-md bg-black/50 
      transition-all duration-300 
      shadow-[inset_0_-5px_6px_rgba(0,0,0,0.5)]`} // Inner shadow effect
    >
      {/* Navbar Brand */}
      <div className="text-3xl font-bold" style={{ fontFamily: 'Prata'}}>
        Sami AZ 
      </div>

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
            className={`hover:text-white transition ${
              active === item ? 'text-white' : 'text-gray-400'
            }`}
            onClick={() => handleClick(item)}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Menu (visible only when menuOpen is true) */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/50 backdrop-blur-md z-40 flex flex-col space-y-4 py-4 items-center">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`hover:text-white transition ${
                active === item ? 'text-white' : 'text-gray-400'
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
