import React, { useContext } from 'react';
// import components
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
// import Link
import { Link } from 'react-router-dom';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <header
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className='fixed w-full px-[100px] z-30 h-[80px] flex items-center'
    >
      <div className='flex flex-col lg:flex-row items-center w-full justify-between'>
        {/* logo */}
        <Link to={'/'}>
          <img src={Logo} alt='' />
        </Link>
        <nav className='hidden lg:flex space-x-12'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
      </div>
      <Socials />
    </header>
  );
};

export default Header;
