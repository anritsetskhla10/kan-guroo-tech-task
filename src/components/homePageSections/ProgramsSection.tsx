import React from 'react';
import { motion } from 'framer-motion';
import { programs } from '../../constants/HelperArray';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const ProgramsSection = () => {
  const { t } = useTranslation();

  const translatedPrograms = programs.map((program, index) => ({
    ...program,
    title: t(`homePage.programsSection.cards.${index}.title`),
    description: t(`homePage.programsSection.cards.${index}.description`),
  }));

  return (
    <section className="py-16 md:py-24 px-4 dark:bg-primary bg-primary-mintgreen">
      <div className="max-w-7xl mx-auto">
        <h1 className='text-2xl font-bold text-center mb-3'>{t('homePage.programsSection.title')}</h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {translatedPrograms.map((program, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col bg-light-gray dark:bg-primary-light rounded-2xl shadow-lg overflow-hidden text-left"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute top-0 left-0 w-full h-24 bg-primary-dark rounded-b-2xl"></div>

              <div className="relative z-10 p-6 flex flex-col flex-grow items-center">
                <div className="w-20 h-20 mb-4 bg-white dark:bg-primary-lightest rounded-full flex items-center justify-center shadow-md text-3xl">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-text-main dark:text-white mb-2">
                  {program.title}
                </h3>
                <p className="text-text-secondary dark:text-primary-lightest text-center text-sm flex-grow mb-6">
                  {program.description}
                </p>
                <a href='https://calendly.com/kan-guroo/15min?month=2025-09' className="w-full text-center py-3 px-4 bg-secondary text-white font-semibold rounded-lg transition-colors duration-300 hover:bg-primary-dark">
                  {t('homePage.programsSection.button')}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;