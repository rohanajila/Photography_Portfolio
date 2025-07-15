import React, { useContext } from 'react';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';


const Socials = () => {
  

  return (
    <div className="flex items-center gap-x-6 text-white">
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noreferrer"
        
        className="hover:text-yellow-400 transition"
      >
        <FaYoutube size={20} />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        
        className="hover:text-yellow-400 transition"
      >
        <FaInstagram size={20} />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        
        className="hover:text-yellow-400 transition"
      >
        <FaFacebook size={20} />
      </a>
    </div>
  );
};

export default Socials;
