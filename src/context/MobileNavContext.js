import React, { useState, useEffect, createContext } from 'react';

export const MobileNavContext = createContext();

const MobileNavProvider = ({ children }) => {
  return (
    <MobileNavContext.Provider value={'nav context'}>
      {children}
    </MobileNavContext.Provider>
  );
};

export default MobileNavProvider;
