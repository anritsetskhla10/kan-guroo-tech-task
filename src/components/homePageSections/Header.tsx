import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-header-gradient text-white text-center py-28 px-6 flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[url('/dots-pattern.svg')] z-0"></div>
      <div className="relative z-10">
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold mb-4 text-shadow"
        >
          {t('homePage.header.title')}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-primary-lightest mb-8"
        >
          {t('homePage.header.subtitle')}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Link 
            to="/programs" 
            className="w-full sm:w-auto bg-white text-primary font-semibold px-8 py-3 rounded-full transition-transform duration-300 transform hover:scale-105 shadow-lg"
          >
            {t('homePage.header.buttonPrograms')}
          </Link>
          <Link 
            to="/about" 
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 hover:bg-white hover:text-primary"
          >
            {t('homePage.header.buttonAbout')}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;