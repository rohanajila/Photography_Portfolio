import React from 'react';
// import Link
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-pink-400/20 fixed w-full px-24 h-[80px] z-30'>
      <div className='flex items-center h-full'>
        <nav className='flex space-x-12'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
