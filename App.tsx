import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureSection } from './components/FeatureSection';
import { Stats } from './components/Stats';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { 
  BrainIcon, 
  UsersIcon, 
  GraduationCapIcon,
  CogIcon,
  DocumentArrowDownIcon,
  ChatBubbleLeftRightIcon
} from './components/icons';
import { Feature } from './types';
import { Preloader } from './components/Preloader';
import FloatingCTA from './components/FloatingCTA';

const whyMedAnnaFeatures: Feature[] = [
  {
    icon: <BrainIcon />,
    iconBgColor: 'bg-pink-100',
    iconTextColor: 'text-pink-500',
    title: 'Master clinical reasoning with real-case simulations',
    description: 'Practice with realistic patient scenarios designed to enhance your diagnostic thinking and clinical decision-making skills.',
  },
  {
    icon: <UsersIcon />,
    iconBgColor: 'bg-indigo-100',
    iconTextColor: 'text-indigo-500',
    title: 'Ace clinical rounds and OSCEs with AI patient interviews',
    description: 'Prepare for examinations with interactive AI patients that respond naturally to your questions and assessments.',
  },
  {
    icon: <GraduationCapIcon />,
    iconBgColor: 'bg-emerald-100',
    iconTextColor: 'text-emerald-500',
    title: 'Get NEXT-ready: Practice the future of med exams today',
    description: 'Stay ahead with cutting-edge simulation technology that prepares you for modern medical examinations.',
  },
];

const howItWorksFeatures: Feature[] = [
  {
    icon: <CogIcon />,
    iconBgColor: 'bg-sky-100',
    iconTextColor: 'text-sky-500',
    title: 'Set Your Level & Specialty',
    description: 'Choose your training phase from Pre-clinical to NEXT/FMGE Prep and select a core specialty with EPA focus to match your expertise.',
  },
  {
    icon: <DocumentArrowDownIcon />,
    iconBgColor: 'bg-blue-100',
    iconTextColor: 'text-blue-500',
    title: 'Practice Diagnosis & Clinical Skills',
    description: 'Work through patient presentations, analyze symptoms, and develop your clinical reasoning through interactive case studies.',
  },
  {
    icon: <ChatBubbleLeftRightIcon />,
    iconBgColor: 'bg-indigo-100',
    iconTextColor: 'text-indigo-500',
    title: 'Chat with Your Virtual Patient',
    description: 'Engage in a natural conversation with the AI patient to gather information and refine your diagnosis.',
  },
];


const App: React.FC = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark =
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  if (!isAppReady) {
    return <Preloader onAnimationComplete={() => setIsAppReady(true)} />;
  }

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200 font-sans animate-fadeIn transition-colors duration-300">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero />
          <FeatureSection title="Why MedAnna?" features={whyMedAnnaFeatures} />
          <FeatureSection title="How It Works" features={howItWorksFeatures} />
          <Stats />
          <CTA />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </>
  );
};

export default App;
