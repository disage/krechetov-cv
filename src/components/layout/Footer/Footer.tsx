import React from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import InstagramIcon from '../../../assets/instagram.svg?react';
import GithubIcon from '../../../assets/github.svg?react';
import LinkedinIcon from '../../../assets/linkedin.svg?react';
import './Footer.scss';

gsap.registerPlugin(ScrollToPlugin);

const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    // Find the target element
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    // Use GSAP ScrollToPlugin for smooth scroll
    gsap.to(window, {
      scrollTo: { y: targetElement, offsetY: 100 },
      duration: 1.5,
      ease: 'power2.inOut',
    });
  };

  return (
    <footer>
      <div className='social-media'>
        <span>Follow me:</span>
        <ul>
          <li>
            <a
              href='https://www.instagram.com/kd_developer'
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramIcon className='social-media-icon' width={32} height={32} />
            </a>
          </li>
          <li>
            <a href='https://github.com/disage' target='_blank' rel='noopener noreferrer'>
              <GithubIcon className='social-media-icon' width={32} height={32} />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/dkrechetov/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedinIcon className='social-media-icon' width={32} height={32} />
            </a>
          </li>
        </ul>
      </div>
      <div className='divider'></div>
      <ul className='footer-nav'>
        <li>
          <a href='#about' onClick={(e) => handleNavClick(e, 'about')}>
            About
          </a>
        </li>
        <li>
          <a href='#skills' onClick={(e) => handleNavClick(e, 'skills')}>
            Skills
          </a>
        </li>
        <li>
          <a href='#experience' onClick={(e) => handleNavClick(e, 'experience')}>
            Experience
          </a>
        </li>
        <li>
          <a href='#projects' onClick={(e) => handleNavClick(e, 'projects')}>
            Projects
          </a>
        </li>
        <li>
          <a href='#contact' onClick={(e) => handleNavClick(e, 'contact')}>
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
