import React from 'react';
// import image
import WomanImg from '../img/home/woman.png';
// import motion
import { motion } from 'framer-motion';
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
      <div className='container mx-auto h-full relative'>
        {/* text & image */}
        <div className='flex flex-col justify-center'>
          {/* text */}
          <div className='bg-yellow-200 w-full lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
            <h1 className='text-[54px] lg:text-[108px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em] mb-2'>
              photographer <br /> & film maker
            </h1>
            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>
              Los Angeles, USA
            </p>
            <button className='btn mb-[30px]'>hire me</button>
          </div>
          {/* image */}
          <div className='bg-blue-200 flex justify-end max-h-96 lg:max-h-max'>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition}
              className='relative lg:-right-40'
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
      </div>
    </motion.section>
  );
};

export default Home;

//  {/* text */}
//  <motion.div
//  initial={{ opacity: 0, y: '-100%' }}
//  animate={{ opacity: 1, y: 0 }}
//  transition={transition}
//  exit={{ opacity: 0 }}
//  className='lg:absolute z-10 text-center lg:text-left'
// >
//  <h1 className='text-[54px] lg:text-[108px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em] mb-2'>
//    photographer <br /> & film maker
//  </h1>
//  <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>
//    Los Angeles, USA
//  </p>
//  <button className='btn mb-[30px]'>hire me</button>
// </motion.div>
// {/* image */}
// <motion.div
//  initial={{ scale: 0 }}
//  animate={{ scale: 1 }}
//  exit={{ scale: 0 }}
//  transition={transition}
//  className='max-w-[400px] lg:max-w-[560px] flex-1 overflow-hidden lg:absolute lg:top-0 lg:right-10'
// >
//  <motion.img
//    whileHover={{ scale: 1.1 }}
//    transition={transition}
//    src={WomanImg}
//    alt=''
//  />
// </motion.div>
