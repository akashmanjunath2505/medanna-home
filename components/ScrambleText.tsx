import React, { useState, useEffect, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  play: boolean;
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:,.<>?';

export const ScrambleText: React.FC<ScrambleTextProps> = ({ text, play }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<number | null>(null);
  const hasPlayed = useRef(false);

  useEffect(() => {
    // Set initial state to empty spaces to avoid showing final text before animation
    setDisplayText(''.padStart(text.length, ' '));
  }, [text]);

  useEffect(() => {
    if (play && !hasPlayed.current) {
      hasPlayed.current = true;
      let iteration = 0;
      
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = window.setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((_letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          if(intervalRef.current) clearInterval(intervalRef.current);
        }

        iteration += 1 / 3;
      }, 30);
    }
    return () => {
      if(intervalRef.current) clearInterval(intervalRef.current);
    }
  }, [play, text]);
  
  // Using a monospaced font helps prevent layout shifts during scramble
  return <span className="font-mono">{displayText}</span>;
};