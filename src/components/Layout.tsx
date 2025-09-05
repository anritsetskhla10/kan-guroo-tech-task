import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Navbar from './NavBar'; // დარწმუნდი რომ ფაილის იმპორტი სწორია
import Footer from './Footer';

interface LayoutProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ theme, toggleTheme }) => {
  return (
    <div className="bg-light-bg dark:bg-primary-darkest text-text-main dark:text-text-light min-h-screen flex flex-col ">
      {/* Navbar-ს გადავცეთ props-ები */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
    
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default Layout;