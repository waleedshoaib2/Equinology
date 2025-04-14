import React, { useState } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, ChevronRight, ChevronDown } from 'lucide-react';
import { useAnimation as useAnimationContext } from '../contexts/AnimationContext';

const countries = [
  { name: 'United Kingdom', flag: '🇬🇧', region: 'Europe' },
  { name: 'United States', flag: '🇺🇸', region: 'North America' },
  { name: 'Australia', flag: '🇦🇺', region: 'Oceania' },
  { name: 'Germany', flag: '🇩🇪', region: 'Europe' },
  { name: 'France', flag: '🇫🇷', region: 'Europe' },
  { name: 'Netherlands', flag: '🇳🇱', region: 'Europe' },
  { name: 'Canada', flag: '🇨🇦', region: 'North America' },
  { name: 'New Zealand', flag: '🇳🇿', region: 'Oceania' },
  { name: 'Ireland', flag: '🇮🇪', region: 'Europe' },
  { name: 'Sweden', flag: '🇸🇪', region: 'Europe' },
  { name: 'Denmark', flag: '🇩🇰', region: 'Europe' },
  { name: 'Belgium', flag: '🇧🇪', region: 'Europe' },
];

const FlagCarousel = () => {
  const { disableAnimations } = useAnimationContext();
  const [showAllFlags, setShowAllFlags] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const x = useMotionValue(0);
  const rotateY = useTransform(x, [-200, 0, 200], [-15, 0, 15]);
  const scale = useTransform(x, [-200, 0, 200], [0.9, 1, 0.9]);
  const opacity = useTransform(x, [-200, 0, 200], [0.7, 1, 0.7]);

  React.useEffect(() => {
    if (inView && !disableAnimations) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      });
    }
  }, [inView, controls, disableAnimations]);

  const renderMobileVersion = () => {
    const displayedCountries = showAllFlags ? countries : countries.slice(0, 6);

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {displayedCountries.map((country) => (
            <div
              key={country.name}
              className="bg-[#111111]/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-[#3CAAFF]/20"
            >
              <div className="text-4xl sm:text-5xl mb-2 sm:mb-3 text-center">
                {country.flag}
              </div>
              <div className="text-white text-sm font-medium mb-1 text-center">
                {country.name}
              </div>
              <div className="text-[#3CAAFF] text-xs text-center">
                {country.region}
              </div>
            </div>
          ))}
        </div>
        {!showAllFlags && (
          <button
            onClick={() => setShowAllFlags(true)}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] text-[#0A0A0A] font-medium text-sm hover:shadow-lg hover:shadow-[#3CAAFF]/25 transition-all duration-300"
          >
            View More Countries
            <ChevronDown className="w-4 h-4" />
          </button>
        )}
      </div>
    );
  };

  const renderDesktopVersion = () => (
    <div 
      className="relative h-[500px]"
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          x: disableAnimations ? 0 : x,
          rotateY: disableAnimations ? 0 : rotateY,
          scale: disableAnimations ? 1 : scale,
          opacity: disableAnimations ? 1 : opacity,
        }}
        drag={disableAnimations ? false : "x"}
        dragConstraints={{ left: -200, right: 200 }}
        dragElastic={0.1}
        whileHover={disableAnimations ? {} : { scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              className="relative group"
              initial={disableAnimations ? {} : { opacity: 0, y: 20 }}
              animate={disableAnimations ? {} : {
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.1 }
              }}
              whileHover={disableAnimations ? {} : { scale: 1.05, zIndex: 1 }}
            >
              <div className="bg-[#111111]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#3CAAFF]/20 group-hover:border-[#3CAAFF]/50 transition-all duration-300 h-full flex flex-col items-center justify-center">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {country.flag}
                </div>
                <div className="text-white text-sm font-medium mb-1 text-center">
                  {country.name}
                </div>
                <div className="text-[#3CAAFF] text-xs text-center">
                  {country.region}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  return (
    <section className="relative py-16 sm:py-32 overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#101010] to-[#0A0A0A]">
      <div className="absolute inset-0 bg-[url('/noise.webp')] opacity-5"></div>
      
      <motion.div
        ref={ref}
        initial={disableAnimations ? {} : { opacity: 0, y: 50 }}
        animate={disableAnimations ? {} : controls}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="text-center mb-12 sm:mb-20">
          <motion.div
            initial={disableAnimations ? {} : { opacity: 0, y: 20 }}
            animate={disableAnimations ? {} : { opacity: 1, y: 0 }}
            transition={disableAnimations ? {} : { duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center mb-4 sm:mb-6"
          >
            <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-[#3CAAFF] mr-3" />
            <span className="text-[#3CAAFF] text-sm font-medium tracking-wider">GLOBAL REACH</span>
          </motion.div>
          <motion.h2
            initial={disableAnimations ? {} : { opacity: 0, y: 20 }}
            animate={disableAnimations ? {} : { opacity: 1, y: 0 }}
            transition={disableAnimations ? {} : { duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">
              Worldwide Equestrian Presence
            </span>
          </motion.h2>
          <motion.p
            initial={disableAnimations ? {} : { opacity: 0, y: 20 }}
            animate={disableAnimations ? {} : { opacity: 1, y: 0 }}
            transition={disableAnimations ? {} : { duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Trusted by equestrian businesses across the globe, from small yards to international brands
          </motion.p>
        </div>

        {disableAnimations ? renderMobileVersion() : renderDesktopVersion()}

        {disableAnimations && (
          <motion.div
            initial={disableAnimations ? {} : { opacity: 0, y: 20 }}
            animate={disableAnimations ? {} : { opacity: 1, y: 0 }}
            transition={disableAnimations ? {} : { duration: 0.6, delay: 0.5 }}
            className="mt-8 sm:mt-16 text-center"
          >
            <p className="text-gray-400 text-sm mb-4 sm:mb-6">
              And many more countries worldwide...
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default FlagCarousel; 