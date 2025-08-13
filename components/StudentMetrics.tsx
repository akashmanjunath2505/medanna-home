import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useCountUp } from '../hooks/useCountUp';
import {
  ClinicalReasoningIcon,
  ToolsEffectivenessIcon,
  PreparednessIcon,
  StudentAdoptionIcon,
  ReturnUserIcon,
  FeedbackIcon,
  SurveyedStudentsIcon,
  BetaTestersIcon,
  MedicalEducatorsIcon,
  SimulationNecessityIcon,
  ArrowRightIcon,
  QuoteIcon
} from './icons';

const metricsData = [
  { icon: <ClinicalReasoningIcon />, value: 82.3, suffix: '%', label: 'Improved Clinical Reasoning', color: '#2E86AB' },
  { icon: <StudentAdoptionIcon />, value: 67.7, suffix: '%', label: 'Student Adoption Rate', color: '#00D4AA' },
  { icon: <PreparednessIcon />, value: 57.2, suffix: '%', label: 'Prepared for Scenarios', color: '#A23B72' },
  { icon: <FeedbackIcon />, value: 57.7, suffix: '%', label: 'Want Real-Time Feedback', color: '#F18F01' },
  { icon: <ReturnUserIcon />, value: 35, suffix: '%', label: 'Return User Rate (3 days)', color: '#2E86AB' },
  { icon: <SimulationNecessityIcon />, value: 91, suffix: '%', label: 'Consider Simulation a Necessity', color: '#00D4AA' },
  { icon: <ToolsEffectivenessIcon />, value: 67.7, suffix: '%', label: 'Rate Current Tools Effective', color: '#A23B72' },
  { icon: <SurveyedStudentsIcon />, value: 390, suffix: '+', label: 'Surveyed Medical Students', color: '#F18F01' },
  { icon: <BetaTestersIcon />, value: 125, suffix: '+', label: 'Beta Testers', color: '#2E86AB' },
  { icon: <MedicalEducatorsIcon />, value: 50, suffix: '+', label: 'Medical Educators Consulting', color: '#00D4AA' },
];

const testimonials = [
  "MedAnna clinical cases interaction doesn't look like MCQs and doesn't add pressure on mind, rather seems like dealing with a patient on-spot.",
  "MedAnna is very user friendly to me.",
  "It improved my clinical reasoning significantly.",
  "Average session time: 4.5 minutes with strong engagement."
];

const authors = ["Beta User", "Medical Student", "Survey Response", "Analytics"];

const MetricCard: React.FC<{ metric: typeof metricsData[0]; isVisible: boolean }> = ({ metric, isVisible }) => {
  const count = useCountUp(metric.value, 2000, isVisible);
  const isInt = Number.isInteger(metric.value);

  return (
    <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-lg hover:shadow-xl dark:hover:shadow-blue-500/10 transition-all duration-300 flex flex-col items-center text-center h-full hover:-translate-y-2 border border-slate-200 dark:border-slate-700/50">
      <div className="p-3 rounded-xl mb-4" style={{ backgroundColor: `${metric.color}20`, color: metric.color }}>
        {metric.icon}
      </div>
      <span className="text-4xl font-bold text-slate-800 dark:text-slate-100" style={{fontFamily: "'SF Pro Display', sans-serif"}}>
        {isInt ? Math.round(count) : count.toFixed(1)}
        {metric.suffix}
      </span>
      <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">{metric.label}</p>
    </div>
  );
};

export const StudentMetrics: React.FC = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    if (isSectionVisible) {
      const timer = setInterval(() => {
        setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isSectionVisible]);

  return (
    <section id="student-metrics" ref={sectionRef} className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/30 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-700 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4" style={{fontFamily: "'SF Pro Display', sans-serif"}}>
            Student Success Metrics
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-16">
            Real feedback and results from hundreds of medical students using MedAnna.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {metricsData.map((metric, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${isSectionVisible ? index * 100 : 0}ms` }}
            >
              <MetricCard metric={metric} isVisible={isSectionVisible} />
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center max-w-4xl mx-auto">
           <div className="relative h-40">
                {testimonials.map((quote, index) => (
                    <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}>
                        <QuoteIcon className="mx-auto h-8 w-8 text-slate-400 dark:text-slate-600 mb-4"/>
                        <p className="text-lg md:text-2xl font-medium text-slate-700 dark:text-slate-300">
                            "{quote}"
                        </p>
                        <p className="mt-4 text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide">
                            - {authors[index]}
                        </p>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-16 text-center">
             <a
                href="https://medannaweb.aivanahealth.com"
                target="_blank"
                rel="noopener noreferrer"
                data-interactive
                className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 inline-flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>Join 390+ Students Who've Improved Their Clinical Skills</span>
                <ArrowRightIcon />
              </a>
        </div>
      </div>
    </section>
  );
};