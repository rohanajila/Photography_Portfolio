import React from 'react';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition } from '../variants';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition}
      className='section bg-green-200'
    >
      <div className='container mx-auto'>contact</div>
    </motion.section>
  );
};

export default Contact;
