import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './Header.scss';

gsap.registerPlugin(ScrollToPlugin);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const currentLang = i18n.resolvedLanguage === 'de' ? 'de' : 'en';
  const nextLang = currentLang === 'en' ? 'de' : 'en';

  const handleLangToggle = () => {
    i18n.changeLanguage(nextLang);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);

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
    <motion.header
      className={`site-header ${isOpen ? 'open' : ''}`}
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className='site-header-wrapper'>
        <div className='logo'><img src='/krechetov-cv/avatar.jpg' alt='Dmytro Krechetov' /></div>

        <nav className='nav'>
          <a href='#about' onClick={(e) => handleNavClick(e, 'about')}>{t('header.nav.about')}</a>
          <a href='#skills' onClick={(e) => handleNavClick(e, 'skills')}>{t('header.nav.skills')}</a>
          <a href='#experience' onClick={(e) => handleNavClick(e, 'experience')}>{t('header.nav.experience')}</a>
          <a href='#projects' onClick={(e) => handleNavClick(e, 'projects')}>{t('header.nav.projects')}</a>
          <a href='#contact' onClick={(e) => handleNavClick(e, 'contact')}>{t('header.nav.contact')}</a>
        </nav>

        <button
          type='button'
          className='language'
          onClick={handleLangToggle}
          aria-label={`Switch language to ${nextLang.toUpperCase()}`}
        >
          {t(`header.langToggle.${currentLang}`)}
        </button>

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
          {t('header.nav.about')}
        </a>
        <a href='#skills' onClick={(e) => handleNavClick(e, 'skills')}>
          {t('header.nav.skills')}
        </a>
        <a href='#experience' onClick={(e) => handleNavClick(e, 'experience')}>
          {t('header.nav.experience')}
        </a>
        <a href='#projects' onClick={(e) => handleNavClick(e, 'projects')}>
          {t('header.nav.projects')}
        </a>
        <a href='#contact' onClick={(e) => handleNavClick(e, 'contact')}>
          {t('header.nav.contact')}
        </a>

        <button
          type='button'
          className='mobile-language'
          onClick={handleLangToggle}
          aria-label={`Switch language to ${nextLang.toUpperCase()}`}
        >
          {t(`header.langToggle.${currentLang}`)}
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
