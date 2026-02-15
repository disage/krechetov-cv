import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectsSection.scss';
import { projectsData } from '../../../constants';
import ProjectModal from './ProjectModal';
import Tabs from '../../../components/ui/Tabs/Tabs';

const TABS = ['Websites', 'UI / UX', 'Bots'];

const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset slider when tab changes
  React.useEffect(() => {
    setCurrentSlide(0);
  }, [activeTab]);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => project.categories.includes(activeTab));
  }, [activeTab]);

  const handleOpenModal = (project: (typeof projectsData)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Wait for animation if we add one
  };

  return (
    <section className='projects-section' id='projects'>
      <div className='projects-container'>
        <motion.div 
          className='projects-header'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className='section-title'>
            See What I've <span className='highlight'>Built</span>
          </h2>
          <p className='section-subtitle'>
            A showcase of my best work — crafted with creativity, strategy, and attention to detail.
          </p>

          <Tabs
            tabs={TABS}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            className='projects-tabs'
          />
        </motion.div>

        {isMobile ? (
          <motion.div 
            className='projects-mobile-slider'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode='wait'>
              {filteredProjects.length > 0 && (
                <motion.div
                  key={filteredProjects[currentSlide].title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className='project-card'
                  onClick={() => handleOpenModal(filteredProjects[currentSlide])}
                >
                  <div className='card-content'>
                    <div className='card-header'>
                      <span className='company-label'>{filteredProjects[currentSlide].company}</span>
                      <div className='arrow-icon'>→</div>
                    </div>
                    <h3 className='project-title'>{filteredProjects[currentSlide].title}</h3>
                    <p className='project-description'>
                      {filteredProjects[currentSlide].description}
                    </p>
                    <div className='card-footer'>
                      <span className='role-tag'>{filteredProjects[currentSlide].role}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {filteredProjects.length > 1 && (
              <div className='slider-controls'>
                <button
                  className='control-btn prev'
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide((prev) =>
                      prev === 0 ? filteredProjects.length - 1 : prev - 1
                    );
                  }}
                  aria-label='Previous project'
                >
                  ←
                </button>
                <span className='slide-indicator'>
                  {currentSlide + 1} / {filteredProjects.length}
                </span>
                <button
                  className='control-btn next'
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide((prev) => (prev + 1) % filteredProjects.length);
                  }}
                  aria-label='Next project'
                >
                  →
                </button>
              </div>
            )}
          </motion.div>
        ) : (
          <div className='projects-grid'>
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.title} 
                className='project-card' 
                onClick={() => handleOpenModal(project)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3 }}
              >
                <div className='card-content'>
                  <div className='card-header'>
                    <span className='company-label'>{project.company}</span>
                    <div className='arrow-icon'>→</div>
                  </div>
                  <h3 className='project-title'>{project.title}</h3>
                  <p className='project-description'>{project.description}</p>
                  <div className='card-footer'>
                    <span className='role-tag'>{project.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default ProjectsSection;
