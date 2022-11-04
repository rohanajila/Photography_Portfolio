import React, { useContext, useEffect } from 'react';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import images
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
// import context
import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center gap-x-24 justify-start text-center lg:text-left pt-36 pb-8'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <h1 className='h1'>Portfolio</h1>
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
          </motion.div>
          {/* images */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='grid grid-cols-2 lg:gap-2'
          >
            <div className='w-[250px] lg:w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover w-[250px] lg:w-[320px] h-[187px] lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image1}
                alt=''
              />
            </div>
            <div className='w-[250px] lg:w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover w-[250px] lg:w-[320px] h-[187px] lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image2}
                alt=''
              />
            </div>
            <div className='w-[250px] lg:w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover w-[250px] lg:w-[320px] h-[187px] lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image3}
                alt=''
              />
            </div>
            <div className='w-[250px] lg:w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover w-[250px] lg:w-[320px] h-[187px] lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image4}
                alt=''
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
