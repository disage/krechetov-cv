import React, { useEffect, useState } from 'react';
import './SkillsSection.scss';
import Button from '../../../components/ui/Button/Button';
import { servicesData, skillsData } from '../../../constants';

const SkillsSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentData = activeTab === 'skills' ? skillsData : servicesData;
  const visibleData = isMobile && !showAll ? currentData.slice(0, 3) : currentData;

  return (
    <section className='skills-section'>
      <div className='skills-section-row'>
        <div className='col'>
          <div className='tabs'>
            <button
              className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('skills');
                setShowAll(false);
              }}
            >
              Skills
            </button>
            <button
              className={`tab ${activeTab === 'services' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('services');
                setShowAll(false);
              }}
            >
              Services
            </button>
          </div>

          {/* Таблица */}
          <div className='skills-table'>
            <div className='skills-table-headers'>
              <div className='header'>Area</div>
              <div className='header'>Type</div>
              <div className='header'>Description</div>
            </div>

            {visibleData.map((row, index) => (
              <React.Fragment key={index}>
                <div className='area'>{row.area}</div>
                <div className='type'>{row.type}</div>
                <div className='desc'>{row.description.join(', ')}</div>
              </React.Fragment>
            ))}

            {isMobile && !showAll && (
              <Button onClick={() => setShowAll(true)} children='See more' variant='outline' />
            )}
          </div>
        </div>
        <div className='col skills-image-col'></div>
      </div>
    </section>
  );
};

export default SkillsSection;
