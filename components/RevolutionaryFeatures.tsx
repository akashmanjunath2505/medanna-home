import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { SpeakingHeadIcon, InfinityMedicalIcon, BrainConversationIcon, ArrowRightIcon } from './icons';

const features = [
  {
    icon: <SpeakingHeadIcon />,
    title: "Virtual Talking Patients",
    description: "Have real conversations with AI patients using natural speech—they respond with realistic voices, emotions, and medically accurate symptoms.",
    cta: "Try Voice Interaction"
  },
  {
    icon: <InfinityMedicalIcon />,
    title: "Unlimited Case Generation",
    description: "Never run out of practice scenarios. Our AI creates endless unique cases tailored to your learning needs and specialty focus.",
    cta: "See Case Variety"
  },
  {
    icon: <BrainConversationIcon />,
    title: "Adaptive Conversation Engine",
    description: "AI patients adapt their responses based on your questions, creating realistic patient personalities and medical presentations. Each conversation is unique.",
    cta: "Learn More"
  }
];

export const RevolutionaryFeatures: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="revolutionary-features" ref={ref} className="bg-white dark:bg-slate-800/50 py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            The Future of Medical Training is Here
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Breakthrough features that go beyond simulation to provide true-to-life clinical experience.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl dark:hover:shadow-blue-500/10 transition-all duration-300 flex flex-col items-start text-left h-full hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${isVisible ? index * 150 : 0}ms` }}
            >
              <div className="p-4 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed grow mb-6">{feature.description}</p>
              <button data-interactive className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 flex items-center gap-2">
                <span>{feature.cta}</span>
                <ArrowRightIcon />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};