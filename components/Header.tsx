import React from 'react';
import { ClockIcon, MoonIcon, SunIcon } from './icons';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="sticky top-0 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md z-50 transition-colors duration-300">
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-center py-2 text-sm">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <ClockIcon />
          <span>Free full access until August 31. Start now!</span>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="https://medannaweb.aivanahealth.com" target="_blank" rel="noopener noreferrer" data-interactive className="flex items-center text-2xl font-bold text-slate-800 dark:text-slate-100">
              <span>Med<span className="text-blue-500 dark:text-blue-400">Anna</span></span>
            </a>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              onClick={toggleDarkMode}
              data-interactive
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-900 focus:ring-blue-500"
              aria-label={isDarkMode ? 'Activate light mode' : 'Activate dark mode'}
            >
              <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
                <SunIcon className={`absolute transition-all duration-300 transform ${isDarkMode ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
                <MoonIcon className={`absolute transition-all duration-300 transform ${isDarkMode ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
