import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import GlobeComponent from "./GlobeComponent";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-header-gradient text-white h-screen overflow-hidden flex flex-col xl:flex-row items-center justify-center">
      <div className="absolute inset-0 bg-[url('/dots-pattern.svg')] z-0"></div>
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center p-6 
                       xl:flex-1 xl:items-start xl:text-left xl:p-0 xl:max-w-xl xl:pl-24">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl lg:text-5xl font-extrabold mb-4 text-shadow"
        >
          {t('homePage.header.title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-lg md:text-xl mb-8"
        >
          {t('homePage.header.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center sm:justify-center xl:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Link
            to="/programs"
            className="w-full sm:w-auto bg-primary-darkest hover:bg-white text-white hover:text-primary-darkest font-semibold px-8 py-3 rounded-md transition-transform duration-300 transform hover:scale-105 shadow-lg"
          >
            {t('homePage.header.buttonPrograms')}
          </Link>
          <Link
            to="/about"
            className="w-full sm:w-auto bg-primary-darkest hover:bg-white text-white hover:text-primary-darkest font-semibold px-8 py-3 rounded-md transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
            {t('homePage.header.buttonAbout')}
          </Link>
        </motion.div>
      </div>

      <div className="hidden xl:flex flex-1 justify-center items-center relative z-10 h-full">
        <GlobeComponent />
      </div>
    </div>
  );
};

export default Header;