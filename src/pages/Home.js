import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Images (place these in /src/assets/images)
import img1 from '../assets/images/image1.JPG';
import img2 from '../assets/images/image2.JPG';
import img3 from '../assets/images/image3.JPG';
import video1 from '../assets/videos/Video1.mp4';
import video2 from '../assets/videos/Video2.mp4';
import video3 from '../assets/videos/Video3.mp4';

const videoPool = [video1, video2, video3];
const images = [img1, img2, img3];

const Hero = () => {
  const videoRefs = [useRef(null), useRef(null), useRef(null)];
  const [currentImage, setCurrentImage] = useState(0);
  const [startTimes, setStartTimes] = useState([0, 0, 0]);
  const [showVideo, setShowVideo] = useState(0);

  const fullDurations = [39, 15, 17];
  const clipLength = 7;

  // Calculate random start times for each video
  const generateRandomStartTimes = () => {
    return fullDurations.map(duration => {
      const maxStart = Math.max(0, duration - clipLength);
      return Math.floor(Math.random() * maxStart);
    });
  };

  useEffect(() => {
    let cycleTimeout;
    let videoEls = videoRefs.map(ref => ref.current);

    const playCinematicSequence = () => {
      const newStartTimes = generateRandomStartTimes();
      setStartTimes(newStartTimes);

      videoEls.forEach((video, index) => {
        if (video) {
          video.pause();
          video.currentTime = newStartTimes[index];
        }
      });

      const showTimers = [0, 7000, 14000];
      const timers = showTimers.map((time, i) =>
        setTimeout(() => {
          setShowVideo(i);
          const vid = videoRefs[i].current;
          if (vid) vid.play();
        }, time)
      );

      const finalPause = setTimeout(() => {
        videoRefs.forEach(ref => {
          if (ref.current) ref.current.pause();
        });
        cycleTimeout = setTimeout(playCinematicSequence, 2000); // pause for 2s, then restart
      }, 21000);

      return () => {
        timers.forEach(clearTimeout);
        clearTimeout(finalPause);
        clearTimeout(cycleTimeout);
      };
    };

    const cleanup = playCinematicSequence();

    return () => {
      cleanup && cleanup();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Crossfade Video Backgrounds */}
      {videoPool.map((src, i) => (
        <motion.video
          key={i}
          ref={videoRefs[i]}
          autoPlay
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          style={{ opacity: showVideo === i ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      ))}

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center min-h-screen px-4 py-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Capturing Life Through Lens</h1>
        <p className="text-lg md:text-xl max-w-xl mb-6">
          Wedding | Pre-wedding | Events | Cinematic Stories
        </p>
        <a
          href="portfolio"
          className="btn bg-white text-black px-6 py-3 rounded shadow hover:scale-105 transition"
        >
          View Portfolio
        </a>
      </div>

      {/* Floating image animation (bottom corner only on md+) */}
      <div className="hidden md:block absolute bottom-10 right-10 w-72 h-96 z-30">
        <AnimatePresence>
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            className="absolute w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
