import React, { useState, useEffect, useRef } from "react";
import georgia from "../assets/flags/georgia.svg";
import usa from "../assets/flags/usa.svg";
import { useTranslation } from 'react-i18next';
import { ChevronDown } from "lucide-react"; 

const languages = [
  { code: "en", label: "EN", flag: usa },
  { code: "ge", label: "GE", flag: georgia },
];

function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const switcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("i18nextLng", code);
    setIsOpen(false);
  };

  const selectedLanguageCode = localStorage.getItem("i18nextLng") || "en";
  const selectedLang = languages.find((lang) => lang.code === selectedLanguageCode) || languages[0];

  return (
    <div className="relative" ref={switcherRef}>
      <button
        className="flex items-center justify-between py-2 px-3 border border-border-color dark:border-gray-600 rounded-lg cursor-pointer hover:bg-light-gray dark:hover:bg-secondary w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={selectedLang.flag} alt={selectedLang.label} className="w-6 h-6 rounded-full" />
        <span className="ml-2 text-sm font-medium text-text-main dark:text-text-light">{selectedLang.label}</span>
        <ChevronDown size={16} className={`ml-1 text-text-secondary dark:text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* ჩამოსაშლელი მენიუ */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-full bg-white dark:bg-secondary border border-border-color dark:border-gray-700 rounded-lg shadow-lg z-20">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="flex items-center w-full text-left py-2 px-3 hover:bg-light-gray dark:hover:bg-primary-darkest"
              onClick={() => changeLanguage(lang.code)}
            >
              <img src={lang.flag} alt={lang.label} className="w-6 h-6 rounded-full" />
              <span className="ml-2 text-sm font-medium text-text-main dark:text-text-light">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;