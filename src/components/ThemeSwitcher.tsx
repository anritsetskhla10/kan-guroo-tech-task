// src/components/ThemeSwitcher.tsx
import React from 'react';
import { Moon, Sun } from 'lucide-react'; // ხატულების იმპორტი

// ვსაზღვრავთ props-ების ტიპებს
interface ThemeSwitcherProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, toggleTheme }) => {
  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full w-fit text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" 
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
};

export default ThemeSwitcher;