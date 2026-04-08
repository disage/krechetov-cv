import React from 'react';
import { motion } from 'framer-motion';
import './SkillsSection.scss';
import { skillsData, servicesData } from '../../../constants';
import Tabs from '../../../components/ui/Tabs/Tabs';

const SKILLS_TABS = [
  { label: 'Skills', value: 'skills' },
  { label: 'Services', value: 'services' },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = React.useState('skills');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className='skills-section' id='skills'>
      <motion.div
        className='skills-content'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Tabs
          tabs={SKILLS_TABS}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          className='skills-tabs-container'
        />

        {activeTab === 'skills' ? (
          <div className='skills-grid'>
            {skillsData.map((category) => (
              <div className='skill-card' key={category.category}>
                <h3 className='skill-card-title'>{category.category}</h3>
                <div className='skill-card-groups'>
                  {category.groups.map((group) => (
                    <div className='skill-group' key={group.name || 'default'}>
                      {group.name && (
                        <span className='skill-group-label'>{group.name}</span>
                      )}
                      <div className='skill-tags'>
                        {group.skills.map((skill) => (
                          <span
                            className={`skill-tag skill-tag--${skill.level}`}
                            key={skill.name}
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='services-grid'>
            {servicesData.map((service) => (
              <div className='service-card' key={service.area}>
                <div className='service-card-header'>
                  <h3 className='service-card-title'>{service.area}</h3>
                  <span className='service-card-type'>{service.type}</span>
                </div>
                <ul className='service-card-list'>
                  {service.description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
