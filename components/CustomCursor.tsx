import React, { useEffect, useRef } from 'react';

const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

export const CustomCursor: React.FC = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const outlineRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number | undefined>(undefined);

    const mousePos = useRef({ x: 0, y: 0 });
    const outlinePos = useRef({ x: 0, y: 0 });
    const isFirstMove = useRef(true);

    useEffect(() => {
        // Don't run on touch devices
        if (window.matchMedia('(hover: none)').matches) {
            return;
        }

        const moveHandler = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            mousePos.current = { x: clientX, y: clientY };
            
            if (isFirstMove.current) {
                outlinePos.current = { x: clientX, y: clientY };
                isFirstMove.current = false;
            }

            const target = event.target as HTMLElement;
            outlineRef.current?.classList.toggle('cursor-interact', !!target.closest('[data-interactive]'));
        };

        const animate = () => {
            // Outline position interpolates for a smooth trail
            const delay = 0.1;
            outlinePos.current.x = lerp(outlinePos.current.x, mousePos.current.x, delay);
            outlinePos.current.y = lerp(outlinePos.current.y, mousePos.current.y, delay);
            
            if (dotRef.current) {
               dotRef.current.style.left = `${mousePos.current.x}px`;
               dotRef.current.style.top = `${mousePos.current.y}px`;
            }
            if (outlineRef.current) {
               outlineRef.current.style.left = `${outlinePos.current.x}px`;
               outlineRef.current.style.top = `${outlinePos.current.y}px`;
            }
            
            requestRef.current = requestAnimationFrame(animate);
        };
        
        const enterHandler = () => {
             if (outlineRef.current) outlineRef.current.classList.remove('cursor-hidden');
             if (dotRef.current) dotRef.current.classList.remove('cursor-hidden');
        };

        const leaveHandler = () => {
             if (outlineRef.current) outlineRef.current.classList.add('cursor-hidden');
             if (dotRef.current) dotRef.current.classList.add('cursor-hidden');
        };
        
        requestRef.current = requestAnimationFrame(animate);
        window.addEventListener('mousemove', moveHandler);
        document.body.addEventListener("mouseenter", enterHandler);
        document.body.addEventListener("mouseleave", leaveHandler);


        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
            window.removeEventListener('mousemove', moveHandler);
            document.body.removeEventListener("mouseenter", enterHandler);
            document.body.removeEventListener("mouseleave", leaveHandler);
        };
    }, []);

    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
        return null;
    }

    return (
        <>
            <div ref={dotRef} className="custom-cursor-dot"></div>
            <div ref={outlineRef} className="custom-cursor-outline"></div>
        </>
    );
};