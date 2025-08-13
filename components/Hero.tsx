import React, { useState, useRef, useEffect } from 'react';
import { InteractiveParticles } from './InteractiveParticles';

// Helper to map a value from one range to another.
const mapRange = (value: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
  if (inMin === inMax) return outMin;
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};


export const Hero: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = heroRef.current;
      if (heroElement) {
        const { top } = heroElement.getBoundingClientRect();
        const animationDuration = window.innerHeight * 2; // Corresponds to h-[300vh]
        const progress = Math.max(0, Math.min(1, -top / animationDuration));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const MIN_OPACITY = 0.2;
  const MIN_SCALE = 1;
  const MAX_SCALE = 1.3;

  const getWordStyle = (wordIndex: number): React.CSSProperties => {
    const segmentDuration = 1 / 3;
    const startProgress = wordIndex * segmentDuration;
    const endProgress = startProgress + segmentDuration;

    // Calculate how far we are into this word's "focus" period.
    const progressInSegment = mapRange(scrollProgress, startProgress, endProgress, 0, 1);

    // Use a sine wave shape for a smooth zoom-in and zoom-out effect
    const focusFactor = Math.sin(Math.max(0, Math.min(1, progressInSegment)) * Math.PI);

    const opacity = MIN_OPACITY + (1 - MIN_OPACITY) * focusFactor;
    const scale = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * focusFactor;

    return {
      opacity,
      transform: `scale(${scale})`,
      transition: 'transform 150ms ease-out, opacity 150ms ease-out',
      willChange: 'transform, opacity',
      transformOrigin: 'left center',
    };
  };
  
  const fadeOutStyle: React.CSSProperties = {
     // Fade out everything at the very end of the scroll
    opacity: mapRange(scrollProgress, 0.9, 1.0, 1, 0),
    willChange: 'opacity',
  }

  return (
    <section ref={heroRef} className="relative h-[300vh] bg-slate-900">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <InteractiveParticles />
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-900 to-slate-900"></div>
        
        {/* Main Content Layout */}
        <div className="relative z-10 grid h-full w-full grid-cols-1 md:grid-cols-2" style={fadeOutStyle}>
          
          {/* Left Column: Text Animation */}
          <div className="flex items-center justify-center md:justify-start">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col space-y-2">
                <h1
                  className="font-sans font-extrabold tracking-tighter text-6xl sm:text-8xl md:text-9xl text-white drop-shadow-lg"
                  style={getWordStyle(0)}
                >
                  simulate
                </h1>
                <h1
                  className="font-sans font-extrabold tracking-tighter text-6xl sm:text-8xl md:text-9xl text-white drop-shadow-lg"
                  style={getWordStyle(1)}
                >
                  diagnose
                </h1>
                <h1
                  className="font-sans font-extrabold tracking-tighter text-6xl sm:text-8xl md:text-9xl text-blue-400"
                  style={{ ...getWordStyle(2), textShadow: '0 0 15px rgba(59, 130, 246, 0.6)' }}
                >
                  learn
                </h1>
              </div>
            </div>
          </div>
          
          {/* Right Column: Video Demo */}
          <div className="hidden md:flex items-center justify-center p-8 lg:p-12">
            <div className="w-full max-w-2xl aspect-video video-glow">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-black/50 ring-1 ring-white/10 video-mask">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ccbKv0WWVCA?autoplay=1&mute=1&loop=1&playlist=ccbKv0WWVCA&controls=0&showinfo=0&rel=0&modestbranding=1&autohide=1"
                  title="MedAnna Product Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};