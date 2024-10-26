
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (page: string) => {
    setActive(page);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center 
      bg-transparent backdrop-blur-md bg-black/50 
      transition-all duration-300 
      shadow-[inset_0_-5px_6px_rgba(0,0,0,0.2)]`}
    >
      <div className="text-3xl font-bold" style={{ fontFamily: 'Baskervville, serif' }}>
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
      <div
        className={`absolute top-16 left-0 w-full bg-black/50 backdrop-blur-md z-40 flex flex-row justify-center space-x-4 py-4 items-center rounded-b-3xl 
        transition-transform duration-300 ease-in-out transform ${
          menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
        }`}
      >
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
    </nav>
  );
}
