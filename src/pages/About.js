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
      className='section'
    >
      <div
        className='container mx-auto h-full relative'
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        {/* text & image */}
        <div className='flex flex-col lg:flex-row h-full items-center gap-x-24 justify-center text-center lg:text-left lg:pt-16'>
          {/* image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={WomanImg} alt='' />
          </div>
          {/* text */}
          <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10  flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>About me</h1>
            <p className='mb-12 max-w-md'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
              <b> scelerisque viverra</b> at id aenean scelerisque. Nec eget
              condimentum etiam leo.
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
