import React from 'react';
import { createPortal } from 'react-dom';
import './SkillsModal.scss';
import Button from '../../../components/ui/Button/Button';
import Tabs from '../../../components/ui/Tabs/Tabs';
import { skillsData, servicesData } from '../../../constants';

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'skills' | 'services';
}

const SKILLS_TABS = [
  { label: 'Skills', value: 'skills' },
  { label: 'Services', value: 'services' },
];

const SkillsModal: React.FC<SkillsModalProps> = ({ isOpen, onClose, initialTab = 'skills' }) => {
  const [activeTab, setActiveTab] = React.useState<'skills' | 'services'>(initialTab);

  React.useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentData = activeTab === 'skills' ? skillsData : servicesData;

  const handleTabChange = (tab: string) => {
    setActiveTab(tab as 'skills' | 'services');
  };

  const modalContent = (
    <div className="skills-modal-overlay" onClick={onClose}>
      <div className="skills-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="skills-modal-header">
          <h2>All {activeTab === 'skills' ? 'Skills' : 'Services'}</h2>
          <button 
            className="skills-modal-close" 
            onClick={onClose} 
            aria-label="Close modal"
            type="button"
          >
            ✕
          </button>
        </div>

        <Tabs
          tabs={SKILLS_TABS}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          className="skills-modal-tabs"
        />

        <div className="skills-modal-body">
          <div className="skills-table">
            <div className="skills-table-headers">
              <div className="header">Area</div>
              <div className="header">Type</div>
              <div className="header">Description</div>
            </div>

            {currentData.map((row, index) => (
              <React.Fragment key={index}>
                <div className="area">{row.area}</div>
                <div className="type">{row.type}</div>
                <div className="desc">{row.description.join(', ')}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Render modal in document.body using Portal
  return createPortal(modalContent, document.body);
};

export default SkillsModal;
