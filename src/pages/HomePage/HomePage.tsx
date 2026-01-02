import React, { useState, useEffect } from 'react';

import './HomePage.scss';
import AboutMeSection from './AboutMeSection/AboutMeSection';
import ColaborateSection from './ColaborateSection/ColaborateSection';
import HeroSection from './HeroSection/HeroSection';
import SkillsSection from './SkillsSection/SkillsSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import ProjectsSectionHeader from './ProjectsSection/ProjectsSectionHeader';
import JourneySection from './JourneySection/JourneySection';
import JourneySectionHeader from './JourneySection/JourneySectionHeader';
import ScrollyTelling from './ScrollyTelling/ScrollyTelling';
import Footer from '../../components/layout/Footer/Footer';
import Header from '../../components/layout/Header/Header';

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

  // Add Journey section(s) based on screen size
  if (isMobile) {
    scrollyTellingChildren.push(<JourneySectionHeader key="journey-header" />);
    scrollyTellingChildren.push(<JourneySection key="journey-content" showHeader={false} />);
  } else {
    scrollyTellingChildren.push(<JourneySection key="journey" />);
  }

  // Add Projects section(s) based on screen size
  if (isMobile) {
    scrollyTellingChildren.push(<ProjectsSectionHeader key="projects-header" />);
    scrollyTellingChildren.push(<ProjectsSection key="projects-content" showHeader={false} />);
  } else {
    scrollyTellingChildren.push(<ProjectsSection key="projects" />);
  }

  // Add remaining sections
  scrollyTellingChildren.push(<ColaborateSection key="collaborate" />);

  return (
    <div>
      <Header />
      <main>
        <ScrollyTelling>
          {scrollyTellingChildren}
        </ScrollyTelling>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
