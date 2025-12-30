import React from 'react';
import './Tabs.scss';

export interface Tab {
  label: string;
  value: string;
}

interface TabsProps {
  tabs: (string | Tab)[];
  activeTab: string;
  onTabChange: (value: string) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange, className = '' }) => {
  return (
    <div className={`ui-tabs ${className}`}>
      {tabs.map((tab) => {
        const isString = typeof tab === 'string';
        const label = isString ? tab : tab.label;
        const value = isString ? tab : tab.value;
        const isActive = activeTab === value;

        return (
          <button
            key={value}
            className={`ui-tab-btn ${isActive ? 'active' : ''}`}
            onClick={() => onTabChange(value)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
