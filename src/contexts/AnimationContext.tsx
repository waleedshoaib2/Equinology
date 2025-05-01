import React, { createContext, useContext, useEffect, useState } from 'react';

interface AnimationContextType {
  isMobile: boolean;
  disableAnimations: boolean;
  isReducedMotion: boolean;
}

const AnimationContext = createContext<AnimationContextType>({
  isMobile: false,
  disableAnimations: false,
  isReducedMotion: false
});

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [disableAnimations, setDisableAnimations] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleReducedMotionChange);

    // Check device type
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Only disable animations if user prefers reduced motion
      setDisableAnimations(mobile && isReducedMotion);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', handleReducedMotionChange);
    };
  }, [isReducedMotion]);

  return (
    <AnimationContext.Provider value={{ isMobile, disableAnimations, isReducedMotion }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => useContext(AnimationContext); 