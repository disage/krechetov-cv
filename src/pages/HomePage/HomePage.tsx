import React from 'react';

import './HomePage.scss';
import AboutMeSection from './AboutMeSection/AboutMeSection';
import ColaborateSection from './ColaborateSection/ColaborateSection';
import HeroSection from './HeroSection/HeroSection';
import SkillsSection from './SkillsSection/SkillsSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import JourneySection from './JourneySection/JourneySection';
import ScrollyTelling from './ScrollyTelling/ScrollyTelling';
import Footer from '../../components/layout/Footer/Footer';
import Header from '../../components/layout/Header/Header';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <ScrollyTelling>
          <HeroSection />
          <AboutMeSection />
          <SkillsSection />
          <JourneySection />
          <ProjectsSection />
          <ColaborateSection />
        </ScrollyTelling>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
