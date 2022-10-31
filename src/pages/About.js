import React, { useContext } from 'react';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition } from '../variants';
// import images
import WomanImg from '../img/about/woman.png';
// import context
import { CursorContext } from '../context/CursorContext';

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition}
      className='section bg-blue-200/20'
    >
      <div
        className='container mx-auto h-full relative'
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        {/* text & image */}
        <div className='flex flex-col lg:flex-row h-full items-center space-x-24'>
          {/* image */}
          <div className='flex-1'>
            <img src={WomanImg} alt='' />
          </div>
          {/* text */}
          <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10  flex flex-col justify-center items-center lg:items-start'>
            <h1 className='text-[54px] lg:text-[108px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em] mb-2'>
              About me
            </h1>
            <p className='mb-12'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
              scelerisque viverra at id aenean scelerisque. Nec eget condimentum
              etiam leo.
              <br />
              <br />
              Morbi at eget fusce feugiat volutpat et volutpat malesuada. At
              suspendisse nisi, quam neque in leo sollicitudin.
            </p>
            <button className='btn'>View my work</button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
