import React from 'react';
// import motion
import { motion } from 'framer-motion';

const transition = {
  duration: 2,
  ease: [0.6, 0.01, -0.05, 0.9],
  // ease: [0.43, 0.13, 0.23, 0.96],
};

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='section'
    >
      <div className='container mx-auto'>about</div>
    </motion.section>
  );
};

export default About;
