import React from 'react';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section className='hero-section'>
      <h1>
        Hey, I'm <span className='highlighted-name'>Dmytro</span>
      </h1>
      <p>
        A web developer passionate about building digital experiences that actually deliver results
      </p>

      {/* Scroll indicator */}
      <div className='scroll-indicator'>
        <div className='mouse'>
          <div className='wheel'></div>
        </div>
        <span className='scroll-text'>Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;
