"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Menggunakan IntersectionObserver yang sangat ringan untuk performa maksimal
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1, // Trigger saat 10% elemen terlihat
        rootMargin: "50px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        // Efek 3D ringan menggunakan CSS transform
        transform: isVisible ? 'translateY(0) rotateX(0) scale(1)' : 'translateY(40px) rotateX(-10deg) scale(0.95)',
        transformStyle: 'preserve-3d',
        willChange: 'transform, opacity' // Optimasi untuk HP Kentang (Hardware Acceleration)
      }}
    >
      {children}
    </div>
  );
}
