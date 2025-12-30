import React from 'react';
import './HeroSection.scss';
import Button from '../../../components/ui/Button/Button';

const HeroSection = () => {
  return (
    <section className='hero-section'>
      <h1>
        Hey, I’m <span className='highlighted-name'>Dmytro</span>
      </h1>
      <p>I enjoy designing tech websites and digital products</p>
      <Button children='About me' variant='outline' href='#' withArrow />
    </section>
  );
};

export default HeroSection;
