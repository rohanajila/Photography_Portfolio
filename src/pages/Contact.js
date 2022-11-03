import React from 'react';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition } from '../variants';
// import image
import WomanImg from '../img/contact/woman.png';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition}
      className='section bg-white'
    >
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center gap-x-8 justify-start text-center lg:text-left pt-36'>
          {/* bg */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            exit={{ opacity: 0, y: '100%' }}
            className='hidden lg:flex bg-[#EEF7F9] absolute bottom-0 left-0 right-0 top-72 -z-10'
          ></motion.div>
          <div className='lg:flex-1 lg:pt-32'>
            <h1 className='text-[54px] lg:text-[108px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em] mb-6'>
              Contact me
            </h1>
            <p className='mb-12'>I would love to get suggestions from you.</p>
            <form className='flex flex-col gap-y-4'>
              <div className='flex gap-x-10'>
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text'
                  placeholder='Your name'
                />
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text'
                  placeholder='Your e-mail address'
                />
              </div>
              <input
                className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 mb-12 placeholder:text-[#757879]'
                type='text'
                placeholder='Your message'
              />
              <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>
                Send it
              </button>
            </form>
          </div>
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={transition}
            exit={{ opacity: 0, xy: '-100%' }}
            className='lg:flex-1'
          >
            <img src={WomanImg} alt='' />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
