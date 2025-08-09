import { useState, useEffect, useRef } from 'react';

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export const useCountUp = (end: number, duration: number = 2000, startAnimation: boolean = false) => {
    const [count, setCount] = useState(0);
    const frameRef = useRef<number | null>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (startAnimation && !hasAnimated.current) {
            hasAnimated.current = true;
            let startTime: number | null = null;
            
            const animate = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const elapsed = Math.min(progress / duration, 1);
                const easedProgress = easeOutExpo(elapsed);
                
                setCount(easedProgress * end);
                
                if (progress < duration) {
                    frameRef.current = requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };
            
            frameRef.current = requestAnimationFrame(animate);
        }

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, [startAnimation, end, duration]);
    
    return count;
};
