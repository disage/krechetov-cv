import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface Project {
  category: string;
  title: string;
  company: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  role: string;
  images?: string[];
  websiteUrl?: string | null;
  githubUrl?: string | null;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0); // Reset slider on open
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const hasImages = project.images && project.images.length > 0;
  const hasMultipleImages = hasImages && project.images!.length > 1;

  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  const prevImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
    }
  };

  return ReactDOM.createPortal(
    <div className='project-modal-overlay' onClick={onClose}>
      <div className='project-modal-container' onClick={(e) => e.stopPropagation()}>
        <button className='modal-close-btn' onClick={onClose}>
          ✕
        </button>

        <div className='modal-hero'>
          <div className='modal-hero-content'>
            <span className='modal-category'>{project.category}</span>
            <h2 className='modal-title'>{project.title}</h2>
            <p className='modal-company'>{project.company}</p>

            <div className='modal-actions'>
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='action-btn primary'
                >
                  Visit Website ↗
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='action-btn secondary'
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>

        <div className='modal-body'>
          {hasImages && (
            <div className='modal-slider'>
              <div className='slider-track'>
                <img
                  src={project.images![currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className='slider-image'
                />
              </div>
              {hasMultipleImages && (
                <>
                  <button className='slider-btn prev' onClick={prevImage}>
                    ‹
                  </button>
                  <button className='slider-btn next' onClick={nextImage}>
                    ›
                  </button>
                  <div className='slider-dots'>
                    {project.images!.map((_, idx) => (
                      <span
                        key={idx}
                        className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(idx)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          <div className='modal-section'>
            <h3>Overview</h3>
            <p>{project.fullDescription}</p>
          </div>

          <div className='modal-meta-grid'>
            <div className='meta-item'>
              <span className='meta-label'>Role</span>
              <span className='meta-value'>{project.role}</span>
            </div>
            <div className='meta-item'>
              <span className='meta-label'>Tech Stack</span>
              <div className='tech-tags'>
                {project.technologies.map((tech, index) => (
                  <span key={index} className='tech-tag'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
