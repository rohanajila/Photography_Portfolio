import React, { useContext } from 'react';
// import images
import WomanImg from '../img/about/man.png';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import cursor context


const About = () => {
  
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div
        
        className='container mx-auto relative'
      >
        {/* text & img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          {/* image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={WomanImg} alt='' />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1'>About me</h1>
            <p className="text-lg md:text-xl max-w-xl mb-6">
              <strong>Jack Films Nagpur</strong> is led by <strong>Sanket Jakkanwar</strong>, a passionate photographer and filmmaker dedicated to capturing real moments with cinematic depth. Based in Nagpur, we specialize in weddings, pre-wedding shoots, event coverage, and storytelling visuals that connect emotionally.
            </p>
            <p className="text-lg md:text-xl max-w-xl mb-6">
               Whether it's a vibrant celebration or an intimate portrait, we focus on crafting timeless memories with professional quality and a personal touch. Our studio is located at:
            </p>
            <p className="text-lg md:text-xl max-w-xl mb-6">
              <strong>171, Sai Shilpa Apartment</strong><br />
              Ladekar Layout, Manewada Road<br />
              Nagpur – 440024
            </p>
            <p className="text-lg md:text-xl max-w-xl">
              <strong>Contact:</strong> <a href="tel:9789459897" className="text-yellow-500 hover:underline">9789459897</a>
            </p>
            

            <div className="mb-12">
                      <Link
                        to="/portfolio"
                        className="bg-black text-white font-semibold py-3 px-8 rounded transition-transform duration-300 hover:scale-105 hover:bg-gray-900 inline-block"
                      >
                        View my work
                      </Link>
                    </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
