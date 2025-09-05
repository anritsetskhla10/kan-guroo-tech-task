import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../assets/kenguro-logo.jpg'; 
import ThemeSwitcher from './ThemeSwitcher';
import { contactItems, programLinks, quickLinks, socialLinks } from '../constants/HelperArray';
import SocialLinks from './SocialLinks';

interface FooterProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Footer: React.FC<FooterProps> = ({ theme, toggleTheme }) => {

  const { t } = useTranslation();

  return (
    <footer className="bg-light-bg dark:bg-primary-darkest text-gray-800 dark:text-white">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:items-center lg:items-start gap-8 px-8 py-12">

          {/* Logo, Info, Socials & Theme Switcher */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <img src={Logo} alt="Kan-Guroo Logo" className="w-20 h-20 rounded-full mb-4" />
            <p className="text-sm leading-relaxed mb-6 max-w-xs text-gray-600 dark:text-gray-300">
              {t('footer.description')}
            </p>

            {/*socialLinks*/}
            <div className="flex flex-col space-y-4">
              <SocialLinks />
              <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative">
              {t('footer.quickLinksTitle')}
              <span className="absolute left-0 bottom-[-8px] h-0.5 w-12 bg-yellow-400"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className="text-sm hover:text-yellow-500 dark:hover:text-yellow-400 hover:underline">
                    {t(link.translationKey)} 
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative">
              {t('footer.programsTitle')}
              <span className="absolute left-0 bottom-[-8px] h-0.5 w-12 bg-yellow-400"></span>
            </h3>
            <ul className="space-y-3">
              {programLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className="text-sm hover:text-yellow-500 dark:hover:text-yellow-400 hover:underline">
                    {t(link.translationKey)} 
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative">
              {t('footer.contactTitle')}
              <span className="absolute left-0 bottom-[-8px] h-0.5 w-12 bg-yellow-400"></span>
            </h3>
            <ul className="space-y-3">
              {contactItems.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-yellow-400">{item.icon}</span>
                  
                  {item.type === 'link' ? (
                    
                    <Link to={item.to} className="text-sm hover:text-yellow-500 dark:hover:text-yellow-400 hover:underline">
                      <p>
                        {item.translationKey ? t(item.translationKey) : 'Default Text'}
                      </p>
                    </Link>
                  ) : (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-yellow-500 dark:hover:text-yellow-400 hover:underline">
                       {item.translationKey ? t(item.translationKey) : item.text}
                    </a>
                  )}
                </li>
              ))}

            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-6 bg-light-gray dark:bg-[#0003] text-center text-xs text-gray-800 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} <a href="https://kan-guroo.com" target="_blank" rel="noopener noreferrer" className="text-yellow-500 ...">Kan-Guroo.com</a>. {t('footer.copyright')}
          </p>
        </div>
    </footer>
  );
};

export default Footer;