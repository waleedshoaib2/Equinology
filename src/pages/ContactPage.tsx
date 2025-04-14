"use client";

import { motion } from 'framer-motion';
import { memo, useMemo, useCallback } from 'react';
import { useTheme } from "next-themes";
import SwirlBackground from '../components/background/SwirlBackground';

// Memoize animation variants
const useAnimationVariants = () => {
  return useMemo(() => ({
    fadeInUp: {
      hidden: { opacity: 0, y: 20 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1,
          duration: 0.5,
        }
      })
    },
    staggerContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    },
    pulse: {
      initial: { scale: 1 },
      animate: { 
        scale: [1, 1.05, 1],
        transition: { 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse" 
        }
      }
    }
  }), []);
};

// Memoize components for better performance
const MemoizedSwirlBackground = memo(SwirlBackground);

const ContactHero = memo(() => {
  const { theme } = useTheme();
  const variants = useAnimationVariants();

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Swirl background without any overlay to hide it */}
      <div className="absolute inset-0 z-10">
        <MemoizedSwirlBackground />
      </div>
      
      {/* Very subtle grid pattern with low opacity */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-[0.03] z-20"
      />

      {/* Content with highest z-index */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-30 max-w-3xl text-center px-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="inline-block mb-6"
        >
          <div className="px-4 py-1.5 text-sm font-medium border border-[#3b82f6]/20 bg-[#3b82f6]/5 rounded-full inline-flex items-center">
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mr-2 h-2 w-2 rounded-full bg-[#3b82f6] inline-block"
            />
            We're here to help
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] via-[#93c5fd] to-[#3b82f6] drop-shadow-sm mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's Connect
        </motion.h1>
        
        <motion.p 
          className="text-xl text-[#94a3b8] mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Have a question or want to work together? We'd love to hear from you.
          Our team is ready to help bring your vision to life.
        </motion.p>
      </motion.div>
    </section>
  );
});

const ContactInfo = memo(() => {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-lg border border-[#3b82f6]/20 bg-[#3b82f6]/5 backdrop-blur-sm"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3b82f6]/10 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#3b82f6]">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#3b82f6] mb-2">Call Us</h3>
            <p className="text-[#94a3b8]">+44 7493 303857</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-lg border border-[#3b82f6]/20 bg-[#3b82f6]/5 backdrop-blur-sm"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3b82f6]/10 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#3b82f6]">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#3b82f6] mb-2">Email Us</h3>
            <p className="text-[#94a3b8]">enquiries@equinology.co.uk</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-lg border border-[#3b82f6]/20 bg-[#3b82f6]/5 backdrop-blur-sm"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3b82f6]/10 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#3b82f6]">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#3b82f6] mb-2">Visit Us</h3>
            <p className="text-[#94a3b8]">Northumberland, United Kingdom</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

const ContactPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <ContactHero />
      <ContactInfo />
    </div>
  );
};

export default ContactPage;