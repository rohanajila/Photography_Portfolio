import React, { useState, useEffect, createContext } from 'react';

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  // mouse position state
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });
  // cursor bg state
  const [cursorBg, setCursorBg] = useState('default');

  useEffect(() => {
    const move = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
    };
  });

  const cursorVariants = {
    default: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      background: '#0e1112',
    },
    text: {
      width: '150px',
      height: '150px',
      x: cursorPosition.x - 72,
      y: cursorPosition.y - 72,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
    },
  };

  const mouseEnterHandler = () => {
    setCursorBg('text');
  };

  const mouseLeaveHandler = () => {
    setCursorBg('default');
  };

  return (
    <CursorContext.Provider
      value={{
        cursorPosition,
        cursorBg,
        cursorVariants,
        mouseEnterHandler,
        mouseLeaveHandler,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
