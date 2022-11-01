import React, { useState } from 'react';
// import icons
import { IoMdClose } from 'react-icons/io';
// import motion
import { motion } from 'framer-motion';

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
  const [openMenu, setOpenMenu] = useState(true);
  return (
    <nav className='text-primary xl:hidden'>
      {/* nav trigger btn */}
      <div onClick={() => setOpenMenu(true)}>nav trigger</div>
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
        <ul>menu list</ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
