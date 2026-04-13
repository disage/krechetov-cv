import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './HeroSection.scss';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className='hero-section'>
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {t('hero.greeting')} <span className='highlighted-name'>{t('hero.name')}</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        {t('hero.subtitle')}
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        className='scroll-indicator'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className='mouse'>
          <div className='wheel'></div>
        </div>
        <span className='scroll-text'>{t('hero.scroll')}</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
