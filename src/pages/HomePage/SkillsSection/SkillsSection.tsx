import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './SkillsSection.scss';
import Button from '../../../components/ui/Button/Button';
import { servicesData, skillsData } from '../../../constants';
import Tabs from '../../../components/ui/Tabs/Tabs';
import SkillsModal from './SkillsModal';

const SKILLS_TABS = [
  { label: 'Skills', value: 'skills' },
  { label: 'Services', value: 'services' },
];

const SkillsSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const [activeTab, setActiveTab] = useState('skills');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const currentData = activeTab === 'skills' ? skillsData : servicesData;
  // Mobile: show 3 items, Desktop: show only Programming (first 3 rows)
  const visibleData = isMobile ? currentData.slice(0, 3) : currentData.slice(0, 3);

  return (
    <section className='skills-section' id='skills'>
      <div className='skills-section-row'>
        <motion.div 
          className='col'
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Tabs
            tabs={SKILLS_TABS}
            activeTab={activeTab}
            onTabChange={handleTabChange}
            className='skills-tabs-container'
          />

          {/* Таблица */}
          <div className='skills-table'>


            {visibleData.map((row, index) => (
              <React.Fragment key={index}>
                <div className='area'>{row.area}</div>
                <div className='type'>{row.type}</div>
                <div className='desc'>{row.description.join(', ')}</div>
              </React.Fragment>
            ))}
          </div>

          {/* See more button outside table */}
          <Button 
            onClick={() => setIsModalOpen(true)} 
            children='See more' 
            variant='outline' 
          />
        </motion.div>
        <div className='col skills-image-col'></div>
      </div>

      <SkillsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        initialTab={activeTab as 'skills' | 'services'}
      />
    </section>
  );
};

export default SkillsSection;
