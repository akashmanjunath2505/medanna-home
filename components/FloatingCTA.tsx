import React from 'react';
import { ArrowRightIcon } from './icons';

interface FloatingCTAProps {
  isVisible: boolean;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ isVisible }) => {
  return (
    <a
      href="https://medannaweb.aivanahealth.com"
      target="_blank"
      rel="noopener noreferrer"
      data-interactive
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 sm:left-8 sm:-translate-x-0 flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      aria-label="Start Simulating"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <span>Start Simulating</span>
      <ArrowRightIcon />
    </a>
  );
};

export default FloatingCTA;