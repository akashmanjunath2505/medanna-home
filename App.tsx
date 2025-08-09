import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RevolutionaryFeatures } from './components/RevolutionaryFeatures';
import { HowItWorksSection } from './components/HowItWorksSection';
import { VoiceShowcase } from './components/VoiceShowcase';
import { UnlimitedCases } from './components/UnlimitedCases';
import { AdvancedFeatures } from './components/AdvancedFeatures';
import { StudentMetrics } from './components/StudentMetrics';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { FAQ } from './components/FAQ';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    const currentRef = footerRef.current;
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

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
          <RevolutionaryFeatures />
          <HowItWorksSection />
          <VoiceShowcase />
          <UnlimitedCases />
          <AdvancedFeatures />
          <StudentMetrics />
          <CTA />
          <FAQ />
        </main>
        <Footer ref={footerRef} />
        <FloatingCTA isVisible={!isFooterVisible} />
      </div>
    </>
  );
};

export default App;