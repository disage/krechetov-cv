import React, { useState } from 'react';
import './JourneySection.scss';
import { experienceData, educationData } from '../../../constants';

const JourneySection = () => {
  const [activeTab, setActiveTab] = useState('work');

  const currentData = activeTab === 'work' ? experienceData : educationData;

  return (
    <section className='journey-section' id='experience'>
      <div className='journey-container'>
        <div className='journey-header'>
          <h2 className='journey-title'>
            Explore My Developer <span className='highlight'>Journey</span>
          </h2>
          <p className='journey-subtitle'>
            Over the past 4 years, I've collaborated with diverse teams and clients on a wide range
            of projects — turning creative ideas into impactful digital experiences.
          </p>
        </div>

        <div className='journey-tabs-container'>
          <div className='journey-tabs'>
            <button
              className={`journey-tab ${activeTab === 'work' ? 'active' : ''}`}
              onClick={() => setActiveTab('work')}
            >
              Work
            </button>
            <button
              className={`journey-tab ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
          </div>
        </div>

        <div className='journey-content'>
          <div className='journey-card'>
            {currentData.map((item, index) => (
              <div className='journey-item' key={index}>
                <div className='journey-info'>
                  <div className='journey-item-header'>
                    <h3 className='journey-item-title'>
                      {activeTab === 'work' ? (item as any).company : (item as any).institution}
                    </h3>
                    <div className='journey-item-role'>
                      {activeTab === 'work' ? (item as any).position : (item as any).degree}
                    </div>
                    <div className='journey-item-period'>• {item.period}</div>
                  </div>
                  <div className='journey-item-description'>
                    {item.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </div>
                  <div className='journey-item-tags'>
                    {item.tags.map((tag, i) => (
                      <span className='tag' key={i}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
