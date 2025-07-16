import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bronzeBanner from '../assets/pricing/bronze.png';
import silverBanner from '../assets/pricing/silver.png';
import goldBanner from '../assets/pricing/gold.png';

const packages = [
  {
    name: 'Bronze',
    banner: bronzeBanner,
    text: 'Bronze Wedding Package - ₹60,000',
    details: [
      {
        title: 'Day 1 Rituals',
        items: [
          '1 Traditional Photographer',
          '1 Videographer'
        ]
      },
      {
        title: 'What you will get',
        items: [
          'Regular Photos',
          'Traditional video of event'
        ]
      }
    ]
  },
  {
    name: 'Silver',
    banner: silverBanner,
    text: 'Silver Wedding Package - ₹80,000',
    details: [
      {
        title: 'Day 1 Rituals',
        items: [
          '1 Traditional Photographer',
          '1 Candid Photographer',
          '1 Videographer'
        ]
      },
      {
        title: 'What you will get',
        items: [
          'Regular + Candid Photos',
          'Traditional video of event',
          'Highlight video reel'
        ]
      }
    ]
  },
  {
    name: 'Gold',
    banner: goldBanner,
    text: 'Premium Wedding Quotation - ₹1,00,000',
    details: [
      {
        title: 'Day 1 Rituals',
        items: [
          '1 Professional Traditional Photographer',
          '1 Professional Cinematographer',
          '1 Professional Candid Photographer',
          '1 Professional Traditional Videographer'
        ]
      },
      {
        title: 'Day 2 Wedding',
        items: [
          '1 Professional Traditional Photographer',
          '1 Professional Cinematographer',
          '1 Professional Candid Photographer',
          '1 Professional Traditional Videographer'
        ]
      },
      {
        title: 'What you will get',
        items: [
          'Regular Photos of event',
          'Regular Traditional video of event',
          'Cinematic video of full event & reel'
        ]
      }
    ]
  }
];

const Pricing = () => {
  const [selected, setSelected] = useState(null);
  const detailRef = useRef(null);

  useEffect(() => {
    if (selected !== null && window.innerWidth < 768) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }
  }, [selected]);

  return (
    <section className="min-h-screen px-4 sm:px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="h1">Pricing</h1>
        <p className="text-gray-600">Choose a wedding package to view details</p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center mb-12"
      >
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.name}
            className="cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300"
            onClick={() => setSelected(index)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={pkg.banner}
              alt={`${pkg.name} Package`}
              className="w-full max-w-[190px] mx-auto h-auto rounded-lg shadow-md border"
            />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            ref={detailRef}
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 border relative mt-4 sm:mt-8"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg font-bold"
            >
              &times;
            </button>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-2xl font-bold text-center mb-4"
            >
              {packages[selected].text}
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {packages[selected].details.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.2 }}
                  className="bg-gray-100 p-4 rounded-md"
                >
                  <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {section.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Pricing;
