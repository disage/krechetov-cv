import React from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import './SkillsModal.scss';
import Tabs from '../../../components/ui/Tabs/Tabs';
import { useLocalizedSkills, useLocalizedServices } from '../../../hooks/useLocalizedData';

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'skills' | 'services';
}

const SkillsModal: React.FC<SkillsModalProps> = ({ isOpen, onClose, initialTab = 'skills' }) => {
  const { t } = useTranslation();
  const skills = useLocalizedSkills();
  const services = useLocalizedServices();
  const [activeTab, setActiveTab] = React.useState<'skills' | 'services'>(initialTab);

  const skillsTabs = [
    { label: t('skills.tabs.skills'), value: 'skills' },
    { label: t('skills.tabs.services'), value: 'services' },
  ];

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

  const handleTabChange = (tab: string) => {
    setActiveTab(tab as 'skills' | 'services');
  };

  const modalContent = (
    <div className="skills-modal-overlay" onClick={onClose}>
      <div className="skills-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="skills-modal-header">
          <h2>{activeTab === 'skills' ? t('skills.modal.allSkills') : t('skills.modal.allServices')}</h2>
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
          tabs={skillsTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          className="skills-modal-tabs"
        />

        <div className="skills-modal-body">
          <div className="skills-table">
            {activeTab === 'services'
              ? services.map((row) => (
                  <div className="skills-row" key={row.id}>
                    <div className="area">{row.area}</div>
                    <div className="type">{row.type}</div>
                    <div className="desc">{row.description.join(', ')}</div>
                  </div>
                ))
              : skills.flatMap((category) =>
                  category.groups.map((group, gIdx) => (
                    <div className="skills-row" key={`${category.id}-${group.id || gIdx}`}>
                      <div className="area">{category.category}</div>
                      <div className="type">{group.name}</div>
                      <div className="desc">
                        {group.skills.map((s) => s.name).join(', ')}
                      </div>
                    </div>
                  ))
                )}
          </div>
        </div>
      </div>
    </div>
  );

  // Render modal in document.body using Portal
  return createPortal(modalContent, document.body);
};

export default SkillsModal;
