import React from 'react';

// A helper for smooth scrolling
const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const Footer = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <footer ref={ref} className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
            <a href="#" data-interactive className="flex items-center text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
              <span>Med<span className="text-blue-500 dark:text-blue-400">Anna</span></span>
            </a>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-xs">
              AI-powered medical simulations for tomorrow's healthcare professionals.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-4 tracking-wider uppercase text-sm">Product</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('how-it-works')} data-interactive className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">How It Works</button>
              </li>
               <li>
                <button onClick={() => scrollToSection('advanced-features')} data-interactive className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Features</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('voice-showcase')} data-interactive className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Voice Demo</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('student-metrics')} data-interactive className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Metrics</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} data-interactive className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">FAQs</button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
           <div>
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-4 tracking-wider uppercase text-sm">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://about.aivanahealth.com" target="_blank" rel="noopener noreferrer" data-interactive className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">About Us</a>
              </li>
               <li>
                <a href="mailto:ceo@aivanahealth.com" data-interactive className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-4 tracking-wider uppercase text-sm">Legal</h4>
             <ul className="space-y-3">
               <li>
                <a href="https://terms.medanna.aivanahealth.com" target="_blank" rel="noopener noreferrer" data-interactive className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Privacy Policy</a>
               </li>
                 <li>
                <a href="https://terms.medanna.aivanahealth.com" target="_blank" rel="noopener noreferrer" data-interactive className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Terms of Service</a>
               </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            MedAnna © {new Date().getFullYear()} Aivana Health Inc. For educational and simulation purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
});