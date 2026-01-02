import React, { useState } from 'react';
import './ColaborateSection.scss';
import Button from '../../../components/ui/Button/Button';
import Modal from '../../../components/elements/ColaborateModal/ColaborateModal';
import InstagramIcon from '../../../assets/instagram.svg?react';

const ColaborateSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className='colaborate-section' id='contact'>
      <h2>
        Let’s <span className='highlighted'>Colaborate </span>
      </h2>
      <p>
        Ready to elevate your digital game? I combine creative thinking and technical expertise to
        help businesses build stronger digital experiences that convert.
      </p>
      <div className='colaborate-section-action'>
        <div className='colaborate-section-action-bg'></div>
        <Button
          className='colaborate-button'
          children='Work with me'
          variant='outline'
          onClick={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className='modal-col'>
          <div>
            {' '}
            <h2>
              Meet with <span className='highlighted'>Me</span>{' '}
            </h2>
            <p>Let me help you level up your digital strategy</p>
            <div className='row'>
              <div className='my-avatar'></div>
              <div className='my-description col'>
                <span>Krechetov Dmytro</span>
                <span>Web Developer</span>
              </div>
            </div>
            <p>
              “You can contact me anytime, any day — I'm always here to hear from you. Feel free to
              write to me in English, German, Ukrainian, or Russian.”
            </p>
          </div>
          <ul>
            <li>
              <InstagramIcon className='social-media-icon' width={32} height={32} />
            </li>
            <li>
              <InstagramIcon className='social-media-icon' width={32} height={32} />
            </li>
            <li>
              <InstagramIcon className='social-media-icon' width={32} height={32} />
            </li>
          </ul>
        </div>
        <div className='modal-col'>
          <form className='colaborate-form'>
            <label>
              Full Name* <input type='text' name='fullName' placeholder='Your Full Name' required />
            </label>

            <label>
              Email* <input type='email' name='email' placeholder='Your Email' required />
            </label>

            <label>
              Phone <input type='phone' name='phone' placeholder='Your Phone Number' />
            </label>

            <label>
              Message
              <textarea name='message' placeholder='Your Message'></textarea>
            </label>

            <Button children='Send Message' variant='solid' href='#' />
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default ColaborateSection;
