import React from 'react';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition } from '../variants';

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition}
      className='section bg-blue-200/20'
    >
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col h-full items-center gap-x-24 justify-center text-center lg:text-left lg:pt-16'>
          <div>
            <h1 className='text-[54px] lg:text-[108px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em] mb-2'>
              Portfolio
            </h1>
          </div>
          <div className='grid grid-cols-3 gap-12'>
            <div className='w-full bg-blue-200'>photo 1</div>
            <div className='w-full bg-blue-200'>photo 2</div>
            <div className='w-full bg-blue-200'>photo 3</div>
            <div className='w-full bg-blue-200'>photo 4</div>
            <div className='w-full bg-blue-200'>photo 5</div>
            <div className='w-full bg-blue-200'>photo 6</div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
