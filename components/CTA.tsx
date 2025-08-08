import React from 'react';
import { ArrowRightIcon } from './icons';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const CTA: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  return (
    <section ref={ref} className="py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl p-12 text-center shadow-2xl transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Enhance Your Diagnostic Skills?
          </h2>
          <p className="max-w-2xl mx-auto text-indigo-100 mb-8">
            Join thousands of medical professionals improving their clinical reasoning with MedAnna.
          </p>
          <a
            href="https://medannaweb.aivanahealth.com"
            target="_blank"
            rel="noopener noreferrer"
            data-interactive
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-slate-100 transition-all duration-300 flex items-center gap-2 mx-auto hover:scale-105 active:scale-95"
          >
            <span>Begin Your Journey</span>
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
};
