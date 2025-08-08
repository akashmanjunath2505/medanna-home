import React from 'react';
import { Feature } from '../types';

interface FeatureCardProps {
  feature: Feature;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const { icon, iconBgColor, iconTextColor, title, description } = feature;
  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl dark:hover:shadow-blue-500/10 transition-all duration-300 flex flex-col items-start text-center h-full hover:-translate-y-2">
      <div className={`mx-auto p-4 rounded-xl ${iconBgColor} ${iconTextColor} mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 w-full">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed w-full">{description}</p>
    </div>
  );
};