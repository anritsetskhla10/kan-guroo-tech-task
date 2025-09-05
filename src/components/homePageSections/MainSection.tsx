import React from 'react';
import PartnersSwitcher from './PartnersSwitcher';
import ProgramsSection from './ProgramsSection';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fadeInUp } from '../SectionTitle';

const MainSection = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* პარტნიორების სექცია */}
      <section className="py-16 md:py-24 px-4 dark:bg-primary-light bg-primary-mintgreen">
        <div className="max-w-7xl mx-auto">
          <h1 className='text-2xl font-bold text-center mb-3'>{t('homePage.partnersSection.title')}</h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            {t('homePage.partnersSection.subtitle')}
          </motion.p>
          <PartnersSwitcher />
        </div>
      </section>
      
      {/* ვიდეოსექცია */}
       <section className="py-16 md:py-24 px-4 bg-white dark:bg-primary-dark">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white">
              {t('homePage.videoSection.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-12 rounded"></div>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="aspect-w-16 aspect-h-10 rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              className="w-full h-64 md:h-96"
              src="https://www.youtube.com/embed/ivQXqtSvacE" 
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* პროგრამების სექცია */}
      <ProgramsSection />
    </div>
  );
};

export default MainSection;