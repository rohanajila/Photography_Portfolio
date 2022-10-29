import React from 'react';
import WomanImg from '../img/home/woman.png';
// import motion
import { motion } from 'framer-motion';

const transition = {
  duration: 0.6,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const Home = () => {
  return (
    <section className='section' id='hero'>
      <div className='container mx-auto'>
        <div className='flex'>
          {/* text */}
          <div className=''>text</div>
          {/* image */}
          <div className='max-w-[560px] flex-1 overflow-hidden'>
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition}
              src={WomanImg}
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
