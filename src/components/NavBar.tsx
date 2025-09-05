import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../assets/kenguro-logo.jpg";
import Lottie from "lottie-react";
import kangarooAnim from "../assets/kangaroo.json";

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    navigate('/signin');
    window.location.reload();
  };

  const closeMenu = () => setMenuOpen(false);
  
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-text-main dark:text-text-light hover:text-primary dark:hover:text-primary-light transition duration-150 ease-in-out font-medium ${
      isActive ? 'text-primary dark:text-primary-light' : ''
    }`;


  const navLinks = [
    { title: t('navbar.home'), href: "/" },
    { title: t('navbar.about'), href: "/about" },
    { title: t('navbar.contact'), href: "/contact" },
  ];

  return (
    <nav className="w-full relative bg-light-bg dark:bg-primary-darkest shadow-md">
      <div className="absolute z-0 h-12 w-12 animate-kangarooMove">
        <Lottie animationData={kangarooAnim} loop={true} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link) => (
            <NavLink key={link.title} to={link.href} className={linkClass}>
              {link.title}
            </NavLink>
          ))}
          {isAuthenticated && <NavLink to="/profile" className={linkClass}>{t('navbar.profile')}</NavLink>}
        </div>

        {/* Desktop Right side Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="w-24">
             <LanguageSwitcher />
          </div>
          <button onClick={toggleTheme} className="p-2 rounded-full text-text-main dark:text-text-light hover:bg-light-gray dark:hover:bg-secondary">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="text-sm font-medium text-error hover:opacity-80">
              {t('navbar.logout')}
            </button>
          ) : (
            <Link to="/signin" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors">
              {t('navbar.signin')}
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-text-main dark:text-text-light">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-light-bg dark:bg-primary-darkest shadow-lg z-50 p-4">
           <nav className="flex flex-col gap-4 text-lg font-medium">
            {navLinks.map((link) => (
              <NavLink key={link.title} to={link.href} className={linkClass} onClick={closeMenu}>
                {link.title}
              </NavLink>
            ))}
            {isAuthenticated && <NavLink to="/profile" className={linkClass} onClick={closeMenu}>{t('navbar.profile')}</NavLink>}
            
            <div className="border-t border-border-color dark:border-secondary pt-4 mt-2">
              {isAuthenticated ? (
                  <button onClick={handleLogout} className="w-full text-left py-2 font-medium text-error">{t('navbar.logout')}</button>
                ) : (
                  <Link to="/signin" className="block py-2 font-medium" onClick={closeMenu}>{t('navbar.signin')}</Link>
                )}
            </div>
           
            <div className="flex items-center justify-between p-2 bg-light-gray dark:bg-secondary rounded-lg mt-2">
                <div className="w-24">
                    <LanguageSwitcher />
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-text-secondary dark:text-gray-300">{t('navbar.theme')}</span>
                    <button onClick={toggleTheme} className="p-2 rounded-full text-text-main dark:text-text-light hover:bg-white dark:hover:bg-primary-darkest">
                       {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </div>

           </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;