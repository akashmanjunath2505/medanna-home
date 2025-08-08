import React from 'react';
import { ArrowRightIcon } from './icons';

const FloatingCTA: React.FC = () => {
  // Return null on touch devices for a cleaner mobile UX, as hover effects are not available.
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <a
      href="https://medannaweb.aivanahealth.com"
      target="_blank"
      rel="noopener noreferrer"
      data-interactive
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-900 animate-fadeIn"
      aria-label="Start Simulating"
    >
      <span>Start Simulating</span>
      <ArrowRightIcon />
    </a>
  );
};

export default FloatingCTA;
