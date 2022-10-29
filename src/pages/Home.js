import React from 'react';
// import image
import WomanImg from '../img/home/woman.png';
// import motion
import { delay, motion } from 'framer-motion';
// import transition
import { transition } from '../variants';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      className='section'
    >
      <div className='container mx-auto relative h-full flex items-center'>
        <div className='flex items-center justify-center'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            exit={{ opacity: 0 }}
            className='text-[108px] font-primary font-bold capitalize leading-none'
          >
            photographer <br /> & film maker
          </motion.div>
          {/* image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={transition}
            className='max-w-[560px] flex-1 overflow-hidden absolute right-0 -z-10'
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition}
              src={WomanImg}
              alt=''
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
