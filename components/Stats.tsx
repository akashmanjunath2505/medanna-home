import React from 'react';
import { InfinityIcon } from './icons';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ScrambleText } from './ScrambleText';

const StatItem: React.FC<{ value: string | React.ReactNode; label: string; playAnimation: boolean }> = ({ value, label, playAnimation }) => (
  <div className="text-center">
    <div className="text-5xl lg:text-6xl font-bold text-blue-600 dark:text-blue-400 h-16 lg:h-20 flex items-center justify-center">
      {typeof value === 'string' ? (
        <ScrambleText text={value} play={playAnimation} />
      ) : (
        value
      )}
    </div>
    <p className="mt-2 text-slate-600 dark:text-slate-400">{label}</p>
  </div>
);

export const Stats: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
  return (
    <section ref={ref} className={`py-16 bg-white dark:bg-slate-800/50 transition-opacity duration-700 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-around gap-12">
          <StatItem value="9+" label="Medical Specialties" playAnimation={isVisible} />
          <StatItem value="3+" label="Training phases" playAnimation={isVisible} />
          <StatItem value={<InfinityIcon />} label="AI-Generated Cases" playAnimation={isVisible} />
        </div>
      </div>
    </section>
  );
};