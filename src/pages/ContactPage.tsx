"use client";

import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from "next-themes";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  CheckCircle,
  Shield
} from 'lucide-react';

// Lazy load the SwirlBackground component
const SwirlBackground = lazy(() => import('../components/background/SwirlBackground'));

const ContactHero = () => {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Swirl background */}
      <div className="absolute inset-0 z-10">
        <Suspense fallback={<div className="absolute inset-0 bg-[#0A0A0A]" />}>
          <SwirlBackground />
        </Suspense>
      </div>
      {/* Grid overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-[0.03] z-20"
      />
      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="px-4 py-1.5 text-sm font-medium border border-[#3CAAFF]/20 bg-[#3CAAFF]/5 rounded-full inline-flex items-center">
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mr-2 h-2 w-2 rounded-full bg-[#3CAAFF]"
                />
                <span className="text-[#3CAAFF]/90">Available for New Projects</span>
              </div>
            </motion.div>
            <motion.h1
              className="text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3CAAFF] via-white to-[#3CAAFF] leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Let's Create<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3CAAFF] to-[#93c5fd]">
                Something Amazing
              </span>
            </motion.h1>
            <motion.p
              className="text-lg text-[#94a3b8]/90 max-w-xl font-light leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Have a project in mind? We're here to turn your vision into reality. Our team combines creativity with
              technical expertise to deliver exceptional results.
            </motion.p>
          </motion.div>
          {/* Right quick info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:pl-12"
          >
            <div className="bg-[#0A0A0A]/40 backdrop-blur-xl rounded-2xl border border-[#3CAAFF]/10 p-8">
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email Us', value: 'enquiries@equinology.co.uk' },
                  { icon: Phone, label: 'Call Us', value: '+44 7493 303857' },
                  { icon: MapPin, label: 'Location', value: 'East Sussex, England' }
                ].map((info, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
                  >
                    <div className="bg-[#3CAAFF]/10 p-3 rounded-xl">
                      <info.icon className="w-6 h-6 text-[#3CAAFF]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white/90">{info.label}</h3>
                      <p className="text-[#94a3b8]/80 font-light">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// New focus areas section
const FocusAreas = () => {
  const areas = [
    { icon: <Calendar className="w-6 h-6 text-[#3CAAFF]" />, title: 'Strategic Planning', desc: 'Tailored roadmaps aligned with your vision.' },
    { icon: <Users className="w-6 h-6 text-[#00E0FF]" />, title: 'Expert Team', desc: 'Dedicated specialists in design, development, QA, and more.' },
    { icon: <Shield className="w-6 h-6 text-[#93c5fd]" />, title: 'Security First', desc: 'Industry-leading practices for data protection.' },
    { icon: <CheckCircle className="w-6 h-6 text-[#3CAAFF]" />, title: 'Quality Assurance', desc: 'Rigorous testing for flawless delivery.' }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF]">
          What We Offer
        </h2>
        <p className="mt-4 text-[#94a3b8]/80">
          Our expertise spans the full project lifecycle, ensuring seamless execution at every step.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {areas.map(({ icon, title, desc }, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative bg-[#111111]/70 backdrop-blur-md p-8 rounded-2xl border border-[#3CAAFF]/10 overflow-hidden"
          >
            <motion.div
              className="absolute -top-6 -right-6 w-32 h-32 bg-[#3CAAFF]/10 rounded-full mix-blend-overlay"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center bg-[#3CAAFF]/10 rounded-full p-3 mb-4">
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-[#94a3b8]/80 font-light leading-relaxed">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ContactPage = () => (
  <div className="bg-black min-h-screen">
    <ContactHero />
    <FocusAreas />
  </div>
);

export default ContactPage;