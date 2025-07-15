import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Images (place these in /src/assets/images)
import img1 from '../assets/images/IMG_9523.JPG';
import img2 from '../assets/images/IMG_8833.JPG';
import img3 from '../assets/images/IMG_8739.JPG';

const images = [img1, img2, img3];

const Hero = () => {
  const videoRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [startTime, setStartTime] = useState(0);

  // Pick random 15-20 sec segment
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedMetadata = () => {
        const maxStart = Math.max(0, video.duration - 20);
        const randomStart = Math.random() * maxStart;
        setStartTime(randomStart);
        video.currentTime = randomStart;
      };

      video.addEventListener('loadedmetadata', handleLoadedMetadata);

      return () => video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    }
  }, []);

  // Rotate images every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/Manish & Megha (online-video-cutter.com).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center min-h-screen px-4 py-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Capturing Life Through Lens</h1>
        <p className="text-lg md:text-xl max-w-xl mb-6">
          Wedding | Pre-wedding | Events | Cinematic Stories
        </p>
        <a
          href="#portfolio"
          className="btn bg-white text-black px-6 py-3 rounded shadow hover:scale-105 transition"
        >
          View Portfolio
        </a>

        {/* Animated floating image */}
        <div className="absolute bottom-10 right-10 w-60 h-80">
          <AnimatePresence>
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              className="absolute w-full h-full object-cover rounded-xl shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.2 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero;
