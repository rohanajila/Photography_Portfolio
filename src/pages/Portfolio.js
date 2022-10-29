import React from 'react';
// import motion
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='section'
    >
      <div className='container mx-auto'>portfolio</div>
    </motion.section>
  );
};

export default Portfolio;
