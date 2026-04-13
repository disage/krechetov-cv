import { motion } from 'framer-motion';
import { Trans } from 'react-i18next';
import './AboutMeSection.scss';

const AboutMeSection = () => {
  return (
    <section className='about-section' id='about'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p>
          <Trans i18nKey='about.p1' components={{ 1: <span className='highlighted' /> }} />
        </p>
        <p>
          <Trans i18nKey='about.p2' components={{ 1: <span className='highlighted' /> }} />
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMeSection;
