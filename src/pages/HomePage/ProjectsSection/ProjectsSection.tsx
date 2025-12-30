import React, { useState, useMemo } from 'react';
import './ProjectsSection.scss';
import { projectsData } from '../../../constants';
import ProjectModal from './ProjectModal';
import Tabs from '../../../components/ui/Tabs/Tabs';

const TABS = ['Websites', 'UI / UX', 'Bots'];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => project.category === activeTab);
  }, [activeTab]);

  const handleOpenModal = (project: typeof projectsData[0]) => {
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
        <div className='projects-header'>
          <h2 className='section-title'>
            Selected <span className='highlight'>Projects</span>
          </h2>
          <p className='section-subtitle'>
            A collection of digital products, designs, and tools I've built.
          </p>

          <Tabs
            tabs={TABS}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            className='projects-tabs'
          />
        </div>

        <div className='projects-grid'>
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className='project-card'
              onClick={() => handleOpenModal(project)}
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
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ProjectsSection;
