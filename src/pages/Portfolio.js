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
        <div className='flex flex-col lg:flex-row h-full items-center gap-x-24 justify-start text-center lg:text-left pt-36 pb-8 overflow-x-auto lg:overflow-hidden'>
          <div>
            <h1 className='text-[54px] lg:text-[108px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em] mb-10'>
              Portfolio
            </h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2  xl:grid-cols-2 gap-4 mb-8'>
            <div className='w-[320px] h-[220px] bg-blue-200'>photo 1</div>
            <div className='w-[320px] h-[220px] bg-blue-200'>photo 2</div>
            <div className='w-[320px] h-[220px] bg-blue-200'>photo 3</div>
            <div className='w-[320px] h-[220px] bg-blue-200'>photo 4</div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
