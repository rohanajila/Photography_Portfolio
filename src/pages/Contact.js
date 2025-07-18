import React from 'react';
// import images
import WomanImg from '../img/contact/man.png';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section bg-white'
    >
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
          {/* bg */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'
          ></motion.div>
          {/* text & form */}
          <div className='lg:flex-1 lg:pt-32 px-4'>
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12'>I would love to get suggestions from you.</p>
            {/* form */}
            <form
              action='https://script.google.com/macros/s/AKfycbyaWPM1e8Mt7krVcq723Pvx6ZUM1Odq88lsfk58ar7AjOc1vodhaqqZl0FGO__flPzJ/exec'
              method='POST'
              className='flex flex-col gap-y-4'
            >
              <div className='flex flex-col md:flex-row gap-x-10 gap-y-4'>
                <input
                  name='name'
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text'
                  placeholder='Full Name'
                  required
                />
                <input
                  name='email'
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='email'
                  placeholder='Email Address'
                  required
                />
              </div>
              <div className='flex flex-col md:flex-row gap-x-10 gap-y-4'>
                <input
                  name='phone'
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='tel'
                  placeholder='Phone Number'
                  required
                />
                <select
                  name='eventType'
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 text-[#757879]'
                  required
                >
                  <option value=''>Select Event Type</option>
                  <option value='Wedding'>Wedding</option>
                  <option value='Pre-wedding'>Pre-wedding</option>
                  <option value='Engagement'>Engagement</option>
                </select>
              </div>
              <div className='flex flex-col md:flex-row gap-x-10 gap-y-4'>
                <input
                  name='eventDate'
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='date'
                  required
                />
                <input
                  name='eventLocation'
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text'
                  placeholder='Event Location'
                  required
                />
              </div>
              <select
                name='package'
                className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 text-[#757879]'
              >
                <option value=''>Interested Package (optional)</option>
                <option value='Bronze'>Bronze</option>
                <option value='Silver'>Silver</option>
                <option value='Gold'>Gold</option>
              </select>
              <textarea
                name='message'
                className='outline-none border-b border-b-primary h-[100px] bg-transparent font-secondary w-full pl-3 pt-2 placeholder:text-[#757879]'
                placeholder='Additional requirements / Questions'
              ></textarea>
              <input type='hidden' name='_redirect' value='https://photography-portfolio-bice-nine.vercel.app/thank-you' />
              <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>
                Send it
              </button>
            </form>
          </div>
          {/* image */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition: transition1, duration: 1.5 }}
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
