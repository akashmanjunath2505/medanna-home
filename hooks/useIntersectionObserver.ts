import React, { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = (options?: IntersectionObserverInit): [React.RefObject<any>, boolean] => {
  const containerRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        ...options
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const currentRef = containerRef.current;
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};
