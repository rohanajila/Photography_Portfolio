import React from 'react';
import { motion } from 'framer-motion';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

// Image imports (assuming these exist in /src/assets/images)
import image1 from '../assets/images/image1.JPG';
import image2 from '../assets/images/image2.JPG';
import image3 from '../assets/images/image3.JPG';
import image4 from '../assets/images/image4.JPG';
import image5 from '../assets/images/image5.JPG';
import image6 from '../assets/images/image6.JPG';
import image7 from '../assets/images/image7.JPG';
import image8 from '../assets/images/image8.JPG';
import image9 from '../assets/images/image9.JPG';
import image10 from '../assets/images/image10.JPG';
import image11 from '../assets/images/image11.JPG';
import image12 from '../assets/images/image12.JPG';
import image13 from '../assets/images/image13.JPG';
import image14 from '../assets/images/image14.JPG';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14];

const Portfolio = () => {
  return (
    <section className="min-h-screen bg-white text-black px-4 pt-36 pb-16 cursor-default">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[40px] lg:text-[80px] leading-none mb-6 font-bold"
        >
          
          <h1 className='h1'>Portfolio</h1>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg mb-4 max-w-4xl"
        >
          Welcome to <strong>Jack Films Nagpur</strong>, founded by <strong>Sanket Jakkanwar</strong>. We specialize in documenting life's most cherished events — from weddings and engagements to intimate portrait sessions. Our approach blends artistry and emotion to tell stories that last a lifetime.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg mb-8 max-w-4xl"
        >
          Explore our featured moments below. If you like what you see, let’s create something timeless together.
        </motion.p>

        <div className="mb-12">
          <Link
            to="/contact"
            className="bg-black text-white font-semibold py-3 px-8 rounded transition-transform duration-300 hover:scale-105 hover:bg-gray-900 inline-block"
          >
            HIRE ME
          </Link>
        </div>

        <PhotoProvider>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid overflow-hidden rounded-lg shadow-md hover:shadow-xl cursor-pointer"
              >
                <PhotoView src={img}>
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-200 hover:scale-105"
                  />
                </PhotoView>
              </motion.div>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
};

export default Portfolio;
