import React, { useEffect } from 'react';
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
        <div className='flex flex-col lg:flex-row h-full items-center gap-x-24 justify-start text-center lg:text-left pt-36 pb-8'>
          <div>
            <h1 className='text-[54px] lg:text-[108px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em] mb-10'>
              Portfolio
            </h1>
            <p className='mb-12 max-w-md'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
              <b> scelerisque viverra</b> at id aenean scelerisque. Nec eget
              condimentum etiam leo.
              <br />
              <br />
              Morbi at eget fusce feugiat volutpat et volutpat malesuada. At
              suspendisse nisi, quam neque in leo sollicitudin.
            </p>
            <button className='btn mb-[30px] mx-auto lg:mx-0'>hire me</button>
          </div>
          <div className='grid grid-cols-2 gap-3'>
            <div className='w-[220px] lg:w-[320px] h-[180px] lg:h-[220px] bg-blue-200'>
              photo 1
            </div>
            <div className='w-[220px] lg:w-[320px] h-[180px] lg:h-[220px] bg-blue-200'>
              photo 2
            </div>
            <div className='w-[220px] lg:w-[320px] h-[180px] lg:h-[220px] bg-blue-200'>
              photo 3
            </div>
            <div className='w-[220px] lg:w-[320px] h-[180px] lg:h-[220px] bg-blue-200'>
              photo 4
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
