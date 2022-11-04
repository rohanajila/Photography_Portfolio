import React, { useContext, useState } from 'react';
// import icons
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
// import motion
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';
import { Link } from 'react-router-dom';

const menuVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className='text-primary xl:hidden'>
      {/* nav trigger btn */}
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='text-3xl cursor-pointer'
        onClick={() => setOpenMenu(true)}
      >
        <CgMenuRight />
      </div>
      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'
      >
        {/* icon */}
        <div
          onClick={() => setOpenMenu(false)}
          className='z-30 absolute left-4 top-14 text-4xl text-primary cursor-pointer'
        >
          <IoMdClose />
        </div>
        {/* menu list */}
        <ul>
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
          <Link className='text-[#696c6d] hover:text-primary' to='/contact'>
            Contact
          </Link>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
