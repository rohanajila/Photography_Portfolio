import React, { useContext } from 'react';

import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from 'react-icons/im';
// import context
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      className='ml-24 hidden xl:flex'
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <ul className='flex gap-x-4'>
        <li>
          <a target='_blank' href='http://www.facebook.com'>
            <ImFacebook />
          </a>
        </li>
        <li>
          <a target='_blank' href='http://www.twitter.com'>
            <ImTwitter />
          </a>
        </li>
        <li>
          <a target='_blank' href='http://www.pinterest.com'>
            <ImPinterest />
          </a>
        </li>
        <li>
          <a target='_blank' href='http://www.instagram.com'>
            <ImInstagram />
          </a>
        </li>
        <li>
          <a target='_blank' href='http://www.youtube.com'>
            <ImYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
