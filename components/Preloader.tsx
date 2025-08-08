import React, { useState, useEffect } from 'react';
import { PreloaderHeartbeatIcon } from './icons';

interface PreloaderProps {
  onAnimationComplete: () => void;
}

const headlinePart1 = "What if your first patient...";
const headlinePart2 = "wasn't your first?";
const subtitle = "Practice with AI patients who teach, not judge.";

// Timings
const startDelay = 500;
const typingDurationMs = 1500;
const emphasisDelayMs = typingDurationMs + 200;
const subtitleDelayMs = emphasisDelayMs + 1000;
const heartbeatDelayMs = subtitleDelayMs + 200;
const heartbeatDurationMs = 1000; // Duration of the line drawing animation
const fadeOutDelayMs = heartbeatDelayMs + heartbeatDurationMs;
const completionDelayMs = fadeOutDelayMs + 500;

const typingAnimationCss = `typing ${typingDurationMs}ms steps(${headlinePart1.length}, end) forwards`;
const caretAnimationCss = 'blink-caret 750ms step-end infinite';

export const Preloader: React.FC<PreloaderProps> = ({ onAnimationComplete }) => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [showEmphasis, setShowEmphasis] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showHeartbeat, setShowHeartbeat] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [typingStarted, setTypingStarted] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setTypingStarted(true), startDelay),
      setTimeout(() => setTypingComplete(true), startDelay + typingDurationMs),
      setTimeout(() => setShowEmphasis(true), startDelay + emphasisDelayMs),
      setTimeout(() => setShowSubtitle(true), startDelay + subtitleDelayMs),
      setTimeout(() => setShowHeartbeat(true), startDelay + heartbeatDelayMs),
      setTimeout(() => setIsFadingOut(true), startDelay + fadeOutDelayMs),
      setTimeout(() => onAnimationComplete(), startDelay + completionDelayMs),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onAnimationComplete]);

  return (
    <div
      className={`fixed inset-0 bg-slate-900 flex flex-col items-center justify-center z-[100] transition-opacity duration-500 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
      aria-label="Loading animation" role="status"
    >
      <div className="w-full max-w-4xl px-4 text-center">
        <h1 className="font-mono text-3xl md:text-5xl text-blue-400 min-h-[8rem] flex flex-col justify-center">
          {typingStarted && (
             <div
              className="inline-block overflow-hidden whitespace-nowrap border-r-4"
              style={{
                animation: `${typingAnimationCss}, ${!typingComplete ? caretAnimationCss : 'none'}`,
                width: '0',
                borderColor: !typingComplete ? 'currentColor' : 'transparent',
              }}
            >
              {headlinePart1}
            </div>
          )}

          <div className={`transition-opacity duration-700 ease-in ${showEmphasis ? 'opacity-100 animate-fadeInEmphasis' : 'opacity-0'}`}>
            {headlinePart2}
          </div>
        </h1>
        <p className={`mt-4 font-sans text-xl text-slate-400 transition-opacity duration-1000 ${showSubtitle ? 'opacity-100' : 'opacity-0'}`}>
          {subtitle}
        </p>
        <div className="mt-8 h-12 flex items-center justify-center">
          {showHeartbeat && (
            <PreloaderHeartbeatIcon className="w-48 md:w-64 text-blue-400 animate-draw-line" />
          )}
        </div>
      </div>
    </div>
  );
};
