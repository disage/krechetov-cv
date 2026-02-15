import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './JourneySection.scss';
import { experienceData, educationData } from '../../../constants';
import Tabs from '../../../components/ui/Tabs/Tabs';

const JOURNEY_TABS = [
  { label: 'Work', value: 'work' },
  { label: 'Education', value: 'education' },
];

const JourneySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('work');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const currentData = activeTab === 'work' ? experienceData : educationData;
  // Safe check to prevent crash when switching tabs if previous index > new data length
  const safeIndex = selectedIndex >= currentData.length ? 0 : selectedIndex;
  const selectedItem = currentData[safeIndex];

  useEffect(() => {
    setSelectedIndex(0);
  }, [activeTab]);

  return (
    <section className='journey-section' id='experience'>
      <div className='journey-container'>
        <motion.div 
          className='journey-header'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className='journey-title'>
            Explore My Developer <span className='highlight'>Journey</span>
          </h2>
          <p className='journey-subtitle'>
            Over the past 4 years, I've collaborated with diverse teams and clients on a wide range
            of projects — turning creative ideas into impactful digital experiences.
          </p>

          <Tabs
            tabs={JOURNEY_TABS}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </motion.div>

        <motion.div 
          className='journey-content'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className='journey-sidebar'>
            {currentData.map((item, index) => (
              <div
                key={index}
                className={`journey-sidebar-item ${index === selectedIndex ? 'active' : ''}`}
                onClick={() => setSelectedIndex(index)}
              >
                <span className='sidebar-item-name'>
                  {activeTab === 'work' ? (item as any).company : (item as any).institution}
                </span>
                <span className='sidebar-item-period'>{item.period}</span>
              </div>
            ))}
          </div>

          <div className='journey-details'>
            <div className='details-header'>
              <h3 className='details-title'>
                {activeTab === 'work' ? (selectedItem as any).company : (selectedItem as any).institution}
              </h3>
              <span className='details-period'>{selectedItem.period}</span>
            </div>
            
            <div className='details-role'>
              {activeTab === 'work' ? (selectedItem as any).position : (selectedItem as any).degree}
            </div>

            <div className='details-description'>
              {selectedItem.description.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </div>

            <div className='details-tags'>
              {selectedItem.tags.map((tag, i) => (
                <span className='tag' key={i}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
