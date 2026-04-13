import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';
import './ColaborateSection.scss';
import Button from '../../../components/ui/Button/Button';
import Modal from '../../../components/elements/ColaborateModal/ColaborateModal';
import InstagramIcon from '../../../assets/instagram.svg?react';
import GithubIcon from '../../../assets/github.svg?react';
import LinkedinIcon from '../../../assets/linkedin.svg?react';

const ColaborateSection = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.section
      className='colaborate-section'
      id='contact'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2>
        <Trans i18nKey='collaborate.title' components={{ 1: <span className='highlighted' /> }} />
      </h2>
      <p>{t('collaborate.intro')}</p>
      <div className='colaborate-section-action'>
        <div className='colaborate-section-action-bg'></div>
        <Button
          className='colaborate-button'
          children={t('collaborate.cta')}
          variant='outline'
          onClick={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className='modal-col modal-col--left'>
          <div>
            <h2>
              <Trans i18nKey='collaborate.modalTitle' components={{ 1: <span className='highlighted' /> }} />
            </h2>
            <p>{t('collaborate.languageNote')}</p>
            <div className='row'>
              <div className='my-avatar'>
                <img src='/krechetov-cv/avatar.jpg' alt='Dmytro Krechetov' />
              </div>
              <div className='my-description col'>
                <span className='my-name'>Dmytro Krechetov</span>
                <span className='my-role'>{t('collaborate.myRole')}</span>
              </div>
            </div>
          </div>
          <ul className='social-links'>
            <li>
              <a
                href='https://www.instagram.com/kd_developer'
                target='_blank'
                rel='noopener noreferrer'
              >
                <InstagramIcon className='social-media-icon' width={28} height={28} />
              </a>
            </li>
            <li>
              <a href='https://github.com/disage' target='_blank' rel='noopener noreferrer'>
                <GithubIcon className='social-media-icon' width={28} height={28} />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/dkrechetov/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <LinkedinIcon className='social-media-icon' width={28} height={28} />
              </a>
            </li>
          </ul>
        </div>
        <div className='modal-col modal-col--right'>
          <div className='contact-cards'>
            <a href='mailto:krechetov52@gmail.com' className='contact-card'>
              <div className='contact-card-icon'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <polyline
                    points='22,6 12,13 2,6'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <h3>{t('collaborate.emailMe')}</h3>
              <span className='contact-card-value'>krechetov52@gmail.com</span>
              <span className='contact-card-desc'>{t('collaborate.emailDesc')}</span>
            </a>

            <a
              href='https://t.me/krechetov_dev'
              target='_blank'
              rel='noopener noreferrer'
              className='contact-card'
            >
              <div className='contact-card-icon'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M21.2 4.4L2.4 10.8c-.6.2-.6 1.1 0 1.3l4.5 1.5 1.7 5.5c.2.5.8.7 1.2.4l2.5-2 4.9 3.6c.5.4 1.2.1 1.3-.5L21.8 5.3c.2-.7-.3-1.2-.6-.9z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M8.9 13.6l9.4-7.8'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <h3>{t('collaborate.telegram')}</h3>
              <span className='contact-card-value'>@krechetov_dev</span>
              <span className='contact-card-desc'>{t('collaborate.telegramDesc')}</span>
            </a>
          </div>
        </div>
      </Modal>
    </motion.section>
  );
};

export default ColaborateSection;
