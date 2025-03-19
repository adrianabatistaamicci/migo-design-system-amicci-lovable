
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Hook to handle page transitions
export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);
    setShowContent(false);
    
    const timer = setTimeout(() => {
      setShowContent(true);
      
      // Complete transition after animation finishes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 250);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return { isTransitioning, showContent };
};

// Animation variants for staggered children
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 10 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.3, 
      ease: [0.4, 0.0, 0.2, 1]
    } 
  },
};

// Lazy loading image utility
export const lazyLoadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
};
