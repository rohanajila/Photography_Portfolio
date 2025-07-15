import React, { useContext, useEffect, useState } from 'react';
// import components
import Socials from './Socials';
import Logo from '../img/header/logo_new.png';
import MobileNav from './MobileNav';
// import link
import { Link } from 'react-router-dom';
// import cursor context


const Header = () => {
  
  const [isScrolled, setIsScrolled] = useState(false);

  // Animate header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${isScrolled ? 'bg-black/50 backdrop-blur-md h-[70px]' : 'bg-black/30 backdrop-blur-sm h-[90px]'}`}
    >
      <div className="flex items-center justify-between w-full h-full px-6 lg:px-16">
        {/* Logo */}
        <Link
          to="/"
          
          className="flex-shrink-0 w-[140px] z-50"
        >
          <img
            src={Logo}
            alt="Jack Films Logo"
            className="block w-full max-w-[140px] object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden xl:flex gap-x-10 font-semibold text-white"
          
        >
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link to="/portfolio" className="hover:text-yellow-400 transition">Portfolio</Link>
          <Link to="/pricing" className="hover:text-yellow-400 transition">Pricing</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>

        </nav>

        {/* Right side: socials + mobile nav */}
        <div className="flex items-center gap-4">
          {/* Socials always visible */}
          <div className="hidden lg:flex text-white">
            <Socials />
          </div>

          {/* Mobile nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
