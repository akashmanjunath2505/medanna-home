import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="text-center py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          MedAnna © 2025. For educational and simulation purposes only.
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
          Contact: <a href="mailto:aivana@aivanahealth.com" data-interactive className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">aivana@aivanahealth.com</a>
        </p>
      </div>
    </footer>
  );
};