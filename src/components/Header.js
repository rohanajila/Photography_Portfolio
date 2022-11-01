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
    <header className='fixed w-full px-[100px] z-30 h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row items-center w-full justify-between'>
        {/* logo */}
        <Link
          to={'/'}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <img src={Logo} alt='' />
        </Link>
        <nav
          className='hidden lg:flex space-x-12'
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <Link className='text-[#696c6d] hover:text-primary transition' to='/'>
            Home
          </Link>
          <Link
            className='text-[#696c6d] hover:text-primary transition'
            to='/about'
          >
            About
          </Link>
          <Link
            className='text-[#696c6d] hover:text-primary transition'
            to='/portfolio'
          >
            Portfolio
          </Link>
          <Link
            className='text-[#696c6d] hover:text-primary transition'
            to='/blog'
          >
            Blog
          </Link>
          <Link className='text-[#696c6d] hover:text-primary' to='/contact'>
            Contact
          </Link>
        </nav>
      </div>
      <Socials />
    </header>
  );
};

export default Header;
