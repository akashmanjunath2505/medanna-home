import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import {
  VoiceWaveformMedicalIcon, InfinityLoopPatientsIcon, MultipleFacesIcon, SymptomTimelineIcon,
  HeartEmotionIcon, GlobeSpeechBubblesIcon, BrainDecisionTreeIcon, VoiceStethoscopeIcon,
  HandshakeEmpathyIcon, SpecialtyConversationIcon
} from './icons';

const advancedFeatures = [
  {
    icon: <VoiceWaveformMedicalIcon />,
    title: "Natural Voice Conversations",
    description: "Speak naturally with AI patients who respond with realistic voices, accents, and emotional expressions.",
  },
  {
    icon: <InfinityLoopPatientsIcon />,
    title: "Unlimited Case Generation",
    description: "Our AI creates endless unique scenarios, ensuring you never repeat the same case twice.",
  },
  {
    icon: <MultipleFacesIcon />,
    title: "Realistic Patient Personalities",
    description: "Each AI patient has a unique personality, background, and communication style for diverse practice.",
  },
  {
    icon: <SymptomTimelineIcon />,
    title: "Real-Time Symptom Evolution",
    description: "Patient symptoms can evolve during the conversation based on your questions and clinical approach.",
  },
  {
    icon: <HeartEmotionIcon />,
    title: "Emotional Intelligence Training",
    description: "Learn to handle anxious, angry, or distressed patients in a safe, controlled environment.",
  },
  {
    icon: <GlobeSpeechBubblesIcon />,
    title: "Accent and Language Variations",
    description: "Practice with diverse patient backgrounds, preparing you for real-world clinical encounters.",
  },
  {
    icon: <BrainDecisionTreeIcon />,
    title: "Advanced Clinical Reasoning",
    description: "The AI analyzes your diagnostic approach in real-time and suggests improvements and alternatives.",
  },
  {
    icon: <VoiceStethoscopeIcon />,
    title: "Voice-Activated Physical Exam",
    description: "Verbally request examinations like 'Listen to heart sounds' or 'Check blood pressure' to get real-time findings.",
  },
  {
    icon: <HandshakeEmpathyIcon />,
    title: "Bedside Manner Assessment",
    description: "Receive specific feedback on your communication skills, empathy, and professional demeanor.",
  },
  {
    icon: <SpecialtyConversationIcon />,
    title: "Specialty-Specific Interactions",
    description: "Pediatric patients act like children, and elderly patients have age-appropriate concerns and histories.",
  },
];

export const AdvancedFeatures: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="advanced-features" ref={ref} className="py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Beyond Traditional Simulation
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-16">
            Our platform is packed with advanced features designed to bridge the gap between classroom learning and clinical practice.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {advancedFeatures.map((feature, index) => (
            <div
              key={index}
              className={`flex items-start gap-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${isVisible ? index * 100 : 0}ms` }}
            >
              <div className="flex-shrink-0 p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
