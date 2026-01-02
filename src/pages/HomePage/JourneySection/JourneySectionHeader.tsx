import React from 'react';
import './JourneySection.scss';

const JourneySectionHeader: React.FC = () => {
  return (
    <section className='journey-section journey-section-header-only' id='experience'>
      <div className='journey-container'>
        <div className='journey-header'>
          <h2 className='journey-title'>
            Explore My Developer <span className='highlight'>Journey</span>
          </h2>
          <p className='journey-subtitle'>
            Over the past 4 years, I've collaborated with diverse teams and clients on a wide range
            of projects — turning creative ideas into impactful digital experiences.
          </p>

          {/* Scroll indicator for mobile */}
          <div className='scroll-indicator'>
            <div className='mouse'>
              <div className='wheel'></div>
            </div>
            <span className='scroll-text'>Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySectionHeader;
