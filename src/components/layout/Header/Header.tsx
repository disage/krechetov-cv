import React, { useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './Header.scss';

gsap.registerPlugin(ScrollToPlugin);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Find the target element
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    
    // Find which slide contains the target element
    const slides = Array.from(document.querySelectorAll('.scrolly-slide'));
    let targetSlideIndex = -1;
    
    slides.forEach((slide, index) => {
      if (slide.contains(targetElement)) {
        targetSlideIndex = index;
      }
    });
    
    if (targetSlideIndex === -1) return;
    
    // Calculate scroll position: slideIndex * 100vh + 0.5vh offset
    // The offset ensures we land in the middle of the slide when it's fully visible
    const vh = window.innerHeight;
    const scrollPosition = targetSlideIndex * vh + (vh * 0.5);
    
    // Use GSAP ScrollToPlugin for smooth scroll
    gsap.to(window, {
      scrollTo: scrollPosition,
      duration: 1.5,
      ease: 'power2.inOut',
    });
  };

  return (
    <header className={`site-header ${isOpen ? 'open' : ''}`}>
      <div className='site-header-wrapper'>
        <div className='logo'>KD</div>

        <nav className='nav'>
          <a href='#about' onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a href='#skills' onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
          <a href='#experience' onClick={(e) => handleNavClick(e, 'experience')}>Experience</a>
          <a href='#projects' onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
          <a href='#contact' onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
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
        <a href='#about' onClick={(e) => handleNavClick(e, 'about')}>
          About
        </a>
        <a href='#skills' onClick={(e) => handleNavClick(e, 'skills')}>
          Skills
        </a>
        <a href='#experience' onClick={(e) => handleNavClick(e, 'experience')}>
          Experience
        </a>
        <a href='#projects' onClick={(e) => handleNavClick(e, 'projects')}>
          Projects
        </a>
        <a href='#contact' onClick={(e) => handleNavClick(e, 'contact')}>
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
