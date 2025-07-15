import React, { useContext } from 'react';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context


const Pricing = () => {
  

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section bg-white'
    >
      <div
        
        className='container mx-auto h-full flex flex-col justify-center items-center pt-36'
      >
        <h1 className='h1 mb-8'>Pricing</h1>
        <p className='max-w-xl text-center mb-12'>
        Premium Wedding Quotation cost 1,00,000
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
  {/* Day 1 */}
  <div className='border p-6 rounded-xl shadow-md'>
    <h2 className='text-2xl font-bold mb-4'>Day 1 Rituals</h2>
    <ul className='list-disc list-inside space-y-2 text-[#333]'>
      <li>1 Professional Traditional Photographer</li>
      <li>1 Professional Cinematographer</li>
      <li>1 Professional Candid Photographer</li>
      <li>1 Professional Traditional Videographer</li>
    </ul>
  </div>
          {/* Day 2 */}
  <div className='border p-6 rounded-xl shadow-md bg-primary text-white'>
    <h2 className='text-2xl font-bold mb-4'>Day 2 Wedding</h2>
    <ul className='list-disc list-inside space-y-2'>
      <li>1 Professional Traditional Photographer</li>
      <li>1 Professional Cinematographer</li>
      <li>1 Professional Candid Photographer</li>
      <li>1 Professional Traditional Videographer</li>
    </ul>
  </div>
          {/* What you will get */}
  <div className='border p-6 rounded-xl shadow-md'>
    <h2 className='text-2xl font-bold mb-4'>What you will get</h2>
    <ul className='list-disc list-inside space-y-2 text-[#333]'>
      <li>Regular Photos of event</li>
      <li>Regular Traditional video of event</li>
      <li>Cinematic video of full event & reel</li>
    </ul>
  </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;
