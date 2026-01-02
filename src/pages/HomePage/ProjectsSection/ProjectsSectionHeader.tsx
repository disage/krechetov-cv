import React from 'react';
import './ProjectsSection.scss';

const ProjectsSectionHeader: React.FC = () => {
  return (
    <section className='projects-section projects-section-header-only' id='projects'>
      <div className='projects-container'>
        <div className='projects-header'>
          <h2 className='section-title'>
            See What I've <span className='highlight'>Built</span>
          </h2>
          <p className='section-subtitle'>
            A showcase of my best work — crafted with creativity, strategy, and attention to detail.
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

export default ProjectsSectionHeader;
