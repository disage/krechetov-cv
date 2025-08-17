import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className='site-header'>
      <div className='logo'>KD</div>
      <nav className='nav'>
        <a href='#about'>About</a>
        <a href='#skills'>Skills</a>
        <a href='#experience'>Experience</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </nav>
      <div className='language'>En</div>
      <div className='hamburger-menu'>
        <svg
          width='20'
          height='14'
          viewBox='0 0 20 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='20' height='2' fill='#6A6B6C' />
          <rect x='8' y='6' width='12' height='2' fill='#6A6B6C' />
          <rect y='12' width='20' height='2' fill='#6A6B6C' />
        </svg>
      </div>
    </header>
  );
};

export default Header;
