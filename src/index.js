import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import cursor provider
import CursorProvider from './context/CursorContext';
// import nav mobile provider
import MobileNavProvider from './context/MobileNavContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CursorProvider>
    <MobileNavProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MobileNavProvider>
  </CursorProvider>
);
