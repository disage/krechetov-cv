import React from 'react';
import './AboutMeSection.scss';
import Button from '../../../components/ui/Button/Button';

const AboutMeSection = () => {
  return (
    <section className='about-section'>
      <p>
        I'm a <span className='highlighted'>web developer</span> focused on building responsive,
        user-friendly websites using modern technologies.
      </p>
      <p>
        I enjoy turning ideas into clean, efficient code and always strive to create
        <span className='highlighted'>smooth digital experiences</span>.
      </p>
      <Button children='Explore more' variant='outline' href='#' withArrow />
    </section>
  );
};

export default AboutMeSection;
