import React from 'react';
import InstagramIcon from '../../../assets/instagram.svg?react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className='social-media'>
        <span>Follow me:</span>
        <ul>
          <li>
            <InstagramIcon className='social-media-icon' width={32} height={32} />
          </li>
          <li>
            <InstagramIcon className='social-media-icon' width={32} height={32} />
          </li>
          <li>
            <InstagramIcon className='social-media-icon' width={32} height={32} />
          </li>
        </ul>
      </div>
      <div className='divider'></div>
      <ul className='footer-nav'>
        <li>
          <a href='#About'>About</a>
        </li>
        <li>
          <a href='#Skills'>Skills</a>
        </li>
        <li>
          <a href='#Expirience'>Expirience</a>
        </li>
        <li>
          <a href='#Projects'>Projects</a>
        </li>
        <li>
          <a href='#Contacts'>Contacts</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
