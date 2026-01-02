import React, { useState, useMemo } from 'react';
import './ProjectsSection.scss';
import { projectsData } from '../../../constants';
import ProjectModal from './ProjectModal';
import Tabs from '../../../components/ui/Tabs/Tabs';

const TABS = ['Websites', 'UI / UX', 'Bots'];

interface ProjectsSectionProps {
  showHeader?: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ showHeader = true }) => {
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
    return projectsData.filter((project) => project.category === activeTab);
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
    <section className={`projects-section ${!showHeader ? 'projects-section-no-header' : ''}`} id={showHeader ? 'projects' : undefined}>
      <div className='projects-container'>
        {showHeader && (
          <div className='projects-header'>
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
          </div>
        )}

        {!showHeader && (
          <div className='projects-header-compact'>
            <Tabs
              tabs={TABS}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              className='projects-tabs'
            />
          </div>
        )}

        {isMobile ? (
          <div className='projects-mobile-slider'>
            {filteredProjects.length > 0 && (
              <div
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
              </div>
            )}

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
          </div>
        ) : (
          <div className='projects-grid'>
            {filteredProjects.map((project, index) => (
              <div key={index} className='project-card' onClick={() => handleOpenModal(project)}>
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
              </div>
            ))}
          </div>
        )}
      </div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default ProjectsSection;
