import React, { useState, useEffect, useContext } from 'react';
// import components
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
// import router
import { BrowserRouter as Router } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import cursor provider
import { CursorContext } from './context/CursorContext';

const App = () => {
  const { cursorBg, cursorVariants } = useContext(CursorContext);

  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      {/*  cursor */}
      <motion.div
        variants={cursorVariants}
        animate={cursorBg}
        className='bg-primary w-[32px] h-[32px] rounded-full fixed top-0 left-0 pointer-events-none z-50'
      ></motion.div>
    </>
  );
};

export default App;
