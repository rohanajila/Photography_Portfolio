import React, { createContext, useState, useEffect } from 'react';

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorBG, setCursorBG] = useState('default');
  const [cursorVariants, setCursorVariants] = useState({});

  // Handle mouse movement with throttling using requestAnimationFrame
  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Cursor variants based on state
  useEffect(() => {
    setCursorVariants({
      default: {
        x: position.x - 16,
        y: position.y - 16,
      },
      link: {
        height: 48,
        width: 48,
        x: position.x - 24,
        y: position.y - 24,
        backgroundColor: '#fff',
        mixBlendMode: 'difference',
      },
    });
  }, [position]);

  const mouseEnterHandler = () => setCursorBG('link');
  const mouseLeaveHandler = () => setCursorBG('default');

  return (
    <CursorContext.Provider
      value={{
        cursorVariants,
        cursorBG,
        mouseEnterHandler,
        mouseLeaveHandler,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
