import { motion } from 'framer-motion';
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
          I'm a <span className='highlighted'>web developer</span> focused on building responsive,
          user-friendly websites using modern technologies.
        </p>
        <p>
          I enjoy turning ideas into clean, efficient code and always strive to create
          <span className='highlighted'> smooth digital experiences</span>.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMeSection;
