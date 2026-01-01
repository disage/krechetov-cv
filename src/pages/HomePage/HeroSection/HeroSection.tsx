import React from 'react';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section className='hero-section'>
      <h1>
        Hey, I’m <span className='highlighted-name'>Dmytro</span>
      </h1>
      <p>
        A web developer passionate about building digital experiences that actually deliver results
      </p>
    </section>
  );
};

export default HeroSection;
