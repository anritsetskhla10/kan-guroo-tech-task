import React from 'react';
import { Outlet, useLocation } from 'react-router-dom'; 
import Navbar from './NavBar'; 
import Footer from './Footer';

interface LayoutProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ theme, toggleTheme }) => {
  const location = useLocation(); 

  return (
    <div className="bg-light-bg dark:bg-primary-darkest text-text-main dark:text-text-light min-h-screen flex flex-col ">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
    
      <main className="flex-grow">
        <Outlet key={location.pathname} />
      </main>

      <Footer theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default Layout;