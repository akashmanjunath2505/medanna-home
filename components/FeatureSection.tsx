import React from 'react';
import { FeatureCard } from './FeatureCard';
import { Feature } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FeatureSectionProps {
  title: string;
  features: Feature[];
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({ title, features }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const sectionId = title.toLowerCase().replace(/\s+/g, '-').replace(/[?]/g, '');

  return (
    <section id={sectionId} ref={ref} className="py-20 lg:py-24 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center text-slate-900 dark:text-slate-100 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${isVisible ? index * 150 : 0}ms` }}
            >
               <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
