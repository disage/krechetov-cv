import React, { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './ColaborateModal.scss';

interface ColaborateModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}


const ColaborateModal: React.FC<ColaborateModalProps> = ({ isOpen, onClose, children }) => {
  const [show, setShow] = useState(false);
  const [animState, setAnimState] = useState<'opening' | 'open' | 'closing'>('opening');

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setAnimState('opening');

      const t = setTimeout(() => setAnimState('open'), 20);

      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';

      return () => clearTimeout(t);
    } else {
      setAnimState('closing');
      const timeout = setTimeout(() => setShow(false), 300);

      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);

      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!show) return null;

  return ReactDOM.createPortal(
    <div className={`modal-overlay ${animState}`} onClick={onClose}>
      <div className={`modal-window ${animState}`} onClick={(e) => e.stopPropagation()}>
        <span className='modal-close' onClick={onClose}>
          ×
        </span>
        <div className='modal-content'>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default ColaborateModal;
