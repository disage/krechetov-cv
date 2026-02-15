import React, { useState, useEffect } from 'react';
import './HomePage.scss';
import AboutMeSection from './AboutMeSection/AboutMeSection';
import ColaborateSection from './ColaborateSection/ColaborateSection';
import HeroSection from './HeroSection/HeroSection';
import SkillsSection from './SkillsSection/SkillsSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import JourneySection from './JourneySection/JourneySection';
import Footer from '../../components/layout/Footer/Footer';
import Header from '../../components/layout/Header/Header';
import LightSphere from '../../assets/light-sphere.svg?react';

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Build children array for ScrollyTelling
  const scrollyTellingChildren = [
    <HeroSection key="hero" />,
    <AboutMeSection key="about" />,
    <SkillsSection key="skills" />,
  ];

  // Add Journey section
  scrollyTellingChildren.push(<JourneySection key="journey" />);

  // Add Projects section
  scrollyTellingChildren.push(<ProjectsSection key="projects" />);

  // Add remaining sections
  scrollyTellingChildren.push(<ColaborateSection key="collaborate" />);

  return (
    <div>
      <Header />
      <main className="main-content">
        <div className="light-sphere-wrapper">
          <LightSphere />
        </div>
        {scrollyTellingChildren}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
