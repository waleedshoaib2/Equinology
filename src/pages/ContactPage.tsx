"use client";

import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useState, useRef, useEffect, FormEvent, ChangeEvent, memo, useMemo, useCallback } from 'react';
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
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

// Memoize scroll handler
const useScrollToContactForm = () => {
  return useCallback(() => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
};

// Memoize components for better performance
const MemoizedSwirlBackground = memo(SwirlBackground);

const ContactHero = memo(() => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scrollToForm = useScrollToContactForm();
  const variants = useAnimationVariants();

  return (
    <section ref={ref} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-black">
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
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToForm}
            className="px-6 py-3 bg-[#3b82f6] text-white rounded-md font-medium text-sm flex items-center group relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/0 via-[#3b82f6]/20 to-[#3b82f6]/0"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToForm}
            className="px-6 py-3 bg-transparent border border-[#3b82f6] text-[#3b82f6] rounded-md font-medium text-sm relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/0 via-[#3b82f6]/10 to-[#3b82f6]/0"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            Learn More
          </motion.button>
        </motion.div>
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
            <p className="text-[#94a3b8]">Battle<br />East Sussex</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = memo(() => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );
      
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }, [formRef, setFormData]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  return (
    <section id="contact-form" className="py-16 px-6 bg-black">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-8 rounded-lg border border-[#3b82f6]/20 bg-[#3b82f6]/5 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold text-[#3b82f6] mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#94a3b8] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-black border border-[#3b82f6]/20 text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#94a3b8] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-black border border-[#3b82f6]/20 text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#94a3b8] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-md bg-black border border-[#3b82f6]/20 text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 bg-[#3b82f6] text-white rounded-md font-medium text-sm hover:bg-[#3b82f6]/90 transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
});

const FAQ = memo(() => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const variants = useAnimationVariants();

  const toggleFAQ = useCallback((index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  }, []);

  const faqs = [
    {
      question: "How long does it take to get a response?",
      answer: "We typically respond to all inquiries within 24 hours during business days."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer a free 30-minute consultation to discuss your project needs and how we can help."
    },
    {
      question: "What are your business hours?",
      answer: "Our office is open Monday through Friday, 9:00 AM to 5:00 PM EST."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we work with clients from all over the world. We can accommodate different time zones and communication preferences."
    }
  ];

  return (
    <section className="relative py-16 pb-64 overflow-hidden bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-2xl mx-auto px-4 sm:px-6 z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3 text-[#3b82f6]">Frequently Asked Questions</h2>
          <p className="text-lg text-[#94a3b8]">
            Find answers to common questions about our services and process.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-5 bg-black border border-[#3b82f6]/20 rounded-lg text-left hover:border-[#3b82f6]/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transform transition-transform text-[#3b82f6] ${openIndex === index ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pt-3 text-[#94a3b8]">{faq.answer}</p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
});

// Use cleanup hook in main component 
const ContactPage = () => {
  // Cleanup on page unmount
  useEffect(() => {
    return () => {
      // Force cleanup of any animations when leaving page
      const cleanupEvent = new CustomEvent('cleanupAnimations');
      window.dispatchEvent(cleanupEvent);
    };
  }, []);

  return (
    <div className="relative bg-black">
      {/* Absolute background that covers everything */}
      <div className="absolute inset-0 bg-black min-h-screen w-full" style={{ minHeight: '150vh' }} />
      
      {/* Main content */}
      <div className="relative z-10">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <FAQ />
        
        {/* Extra padding at bottom to ensure black extends below */}
        <div className="h-96 bg-black w-full" />
      </div>
    </div>
  );
};

export default ContactPage;