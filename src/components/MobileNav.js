import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50 text-white">
      <button
        className="text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-black/90 backdrop-blur-md text-white rounded-md shadow-lg p-6 flex flex-col gap-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition">About</Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition">Portfolio</Link>
          <Link to="/pricing" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition">Pricing</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
