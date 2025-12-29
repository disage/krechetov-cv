import React, { useState } from 'react';
import './Header.scss';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`site-header ${isOpen ? 'open' : ''}`}>
      <div className='site-header-wrapper'>
        <div className='logo'>KD</div>

        <nav className='nav'>
          <a href='#about'>About</a>
          <a href='#skills'>Skills</a>
          <a href='#experience'>Experience</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>

        <div className='language'>En</div>

        <div className='hamburger-menu' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg width='20' height='20' viewBox='0 0 20 20'>
              <line x1='2' y1='2' x2='18' y2='18' stroke='#6A6B6C' strokeWidth='2' />
              <line x1='18' y1='2' x2='2' y2='18' stroke='#6A6B6C' strokeWidth='2' />
            </svg>
          ) : (
            <svg width='20' height='14' viewBox='0 0 20 14'>
              <rect width='20' height='2' fill='#6A6B6C' />
              <rect y='6' width='20' height='2' fill='#6A6B6C' />
              <rect y='12' width='20' height='2' fill='#6A6B6C' />
            </svg>
          )}
        </div>
      </div>

      <div className='mobile-menu'>
        <a href='#about' onClick={() => setIsOpen(false)}>
          About
        </a>
        <a href='#skills' onClick={() => setIsOpen(false)}>
          Skills
        </a>
        <a href='#experience' onClick={() => setIsOpen(false)}>
          Experience
        </a>
        <a href='#projects' onClick={() => setIsOpen(false)}>
          Projects
        </a>
        <a href='#contact' onClick={() => setIsOpen(false)}>
          Contact
        </a>

        <div className='follow'>
          <p>Follow me</p>
          <div className='socials'>
            <a href='https://github.com/' target='_blank' rel='noreferrer'>
              🐙
            </a>
            <a href='https://linkedin.com/' target='_blank' rel='noreferrer'>
              💼
            </a>
            <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
              🐦
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
