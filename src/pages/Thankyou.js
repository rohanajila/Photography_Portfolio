import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="h1">Thank You!</h1>
      <p className="text-lg max-w-xl mb-8 text-gray-700">
        Your message has been received. We’ll get back to you shortly with more information about your inquiry.
      </p>
      <Link
        to="/"
        className="btn bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
      >
        Back to Home
      </Link>
    </motion.section>
  );
};

export default ThankYou;
