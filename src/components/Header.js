import React from 'react';
import { Link } from 'react-scroll';
const Header = () => {
  return (
    <header className='bg-pink-200 fixed w-full h-[80px]'>
      <div className='container mx-auto flex items-center h-full'>
        <nav className='flex space-x-12'>
          <Link href='#' to='hero' spy={true} smooth={true}>
            Home
          </Link>
          <Link href='#' to='about' spy={true} smooth={true}>
            About
          </Link>
          <Link href='#' to='portfolio' spy={true} smooth={true}>
            Portfolio
          </Link>
          <Link href='#' to='blog' spy={true} smooth={true}>
            Blog
          </Link>
          <Link href='#' to='contact' spy={true} smooth={true}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
