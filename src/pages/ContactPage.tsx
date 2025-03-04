"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from "sonner";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const pulse = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: { 
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" 
    }
  }
};

const ContactHero = () => (
  <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
    <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover opacity-40">
      <source src="/contact-bg.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl"
      >
        <div className="mb-4 px-4 py-1.5 text-sm font-medium border border-primary/20 bg-primary/5 rounded-full inline-flex items-center">
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mr-2 h-2 w-2 rounded-full bg-primary inline-block"
          />
          We're here to help
        </div>
        
        <motion.h1 
          className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 drop-shadow-sm mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's Connect
        </motion.h1>
        
        <motion.p 
          className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto"
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
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium text-sm flex items-center group">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
          <button className="px-6 py-3 bg-transparent border border-input rounded-md font-medium text-sm">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: "Call Us",
      description: "We're available Mon-Fri, 9am-5pm",
      value: "+1 (555) 123-4567",
      action: "Call now"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      ),
      title: "Email Us",
      description: "We'll respond within 24 hours",
      value: "contact@example.com",
      action: "Send email"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: "Visit Us",
      description: "Come say hello at our office",
      value: "123 Business Ave, Suite 100, San Francisco, CA 94107",
      action: "Get directions"
    }
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
    >
      {contactMethods.map((method, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          custom={index}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="relative"
        >
          <div className="h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 rounded-lg overflow-hidden">
            <div className="p-6">
              <motion.div
                initial="initial"
                animate="animate"
                variants={pulse}
                className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"
              >
                {method.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mt-4">{method.title}</h3>
              <p className="text-muted-foreground text-sm">{method.description}</p>
            </div>
            <div className="px-6 py-4">
              <p className="font-medium">{method.value}</p>
            </div>
            <div className="px-6 py-4 border-t border-border/50">
              <button className="text-primary flex items-center group">
                {method.action}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const ContactForm = () => {
  const [activeTab, setActiveTab] = useState("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    
    if (!formData.subject || formData.subject.length < 5) {
      newErrors.subject = "Subject must be at least 5 characters.";
    }
    
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };
  
  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have a question or want to work together? Fill out the form below and we'll get back to you as soon as possible.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="w-full">
              <div className="grid w-full grid-cols-2 mb-8 border rounded-lg overflow-hidden">
                <button 
                  className={`py-3 px-4 text-center font-medium text-sm ${activeTab === "contact" ? "bg-primary text-primary-foreground" : "bg-transparent"}`}
                  onClick={() => setActiveTab("contact")}
                >
                  Contact Us
                </button>
                <button 
                  className={`py-3 px-4 text-center font-medium text-sm ${activeTab === "support" ? "bg-primary text-primary-foreground" : "bg-transparent"}`}
                  onClick={() => setActiveTab("support")}
                >
                  Support
                </button>
              </div>
              
              <div className={`space-y-4 ${activeTab === "contact" ? "block" : "hidden"}`}>
                <div className="border border-border/50 bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden">
                  <div className="p-6 border-b border-border/50">
                    <h3 className="text-xl font-semibold">Send us a message</h3>
                    <p className="text-muted-foreground text-sm">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>
                  <div className="p-6">
                    {isSuccess ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-12 text-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-16 w-16 text-green-500 mb-4">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <path d="m9 11 3 3L22 4"></path>
                        </svg>
                        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground mb-6">
                          Thank you for reaching out. We'll get back to you shortly.
                        </p>
                        <button 
                          onClick={() => setIsSuccess(false)}
                          className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium text-sm"
                        >
                          Send Another Message
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <div className="relative">
                              <div className="absolute left-3 top-3 text-muted-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                  <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                              </div>
                              <input 
                                type="text" 
                                name="name"
                                placeholder="Your name" 
                                className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background"
                                value={formData.name}
                                onChange={handleChange}
                              />
                            </div>
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <div className="relative">
                              <div className="absolute left-3 top-3 text-muted-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                              </div>
                              <input 
                                type="email" 
                                name="email"
                                placeholder="Your email" 
                                className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background"
                                value={formData.email}
                                onChange={handleChange}
                              />
                            </div>
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium mb-1">Phone (Optional)</label>
                            <div className="relative">
                              <div className="absolute left-3 top-3 text-muted-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                              </div>
                              <input 
                                type="tel" 
                                name="phone"
                                placeholder="Your phone number" 
                                className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background"
                                value={formData.phone}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Subject</label>
                            <input 
                              type="text" 
                              name="subject"
                              placeholder="What is this regarding?" 
                              className="w-full px-4 py-2 border border-input rounded-md bg-background"
                              value={formData.subject}
                              onChange={handleChange}
                            />
                            {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Message</label>
                          <div className="relative">
                            <div className="absolute left-3 top-3 text-muted-foreground">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                              </svg>
                            </div>
                            <textarea 
                              name="message"
                              placeholder="Your message" 
                              className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background min-h-[120px] resize-none"
                              value={formData.message}
                              onChange={handleChange}
                            ></textarea>
                          </div>
                          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>
                        
                        <button 
                          type="submit" 
                          className="w-full py-3 bg-primary text-primary-foreground rounded-md font-medium text-sm flex items-center justify-center"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                                <path d="m22 2-7 20-4-9-9-4Z"></path>
                                <path d="M22 2 11 13"></path>
                              </svg>
                              Send Message
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
              
              <div className={`space-y-4 ${activeTab === "support" ? "block" : "hidden"}`}>
                <div className="border border-border/50 bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden">
                  <div className="p-6 border-b border-border/50">
                    <h3 className="text-xl font-semibold">Need help with something?</h3>
                    <p className="text-muted-foreground text-sm">
                      Our support team is here to help with any issues you might have.
                    </p>
                  </div>
                  <div className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-1">Name</label>
                          <input 
                            type="text" 
                            name="name"
                            placeholder="Your name" 
                            className="w-full px-4 py-2 border border-input rounded-md bg-background"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Email</label>
                          <input 
                            type="email" 
                            name="email"
                            placeholder="Your email" 
                            className="w-full px-4 py-2 border border-input rounded-md bg-background"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Issue Type</label>
                        <input 
                          type="text" 
                          name="subject"
                          placeholder="Technical issue, billing question, etc." 
                          className="w-full px-4 py-2 border border-input rounded-md bg-background"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Describe your issue</label>
                        <textarea 
                          name="message"
                          placeholder="Please provide as much detail as possible" 
                          className="w-full px-4 py-2 border border-input rounded-md bg-background min-h-[120px] resize-none"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                      </div>
                      
                      <button 
                        type="submit" 
                        className="w-full py-3 bg-primary text-primary-foreground rounded-md font-medium text-sm"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Support Request"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="h-full border border-border/50 bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden">
              <div className="p-6 border-b border-border/50">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <p className="text-muted-foreground text-sm">
                  Reach out to us through any of these channels
                </p>
              </div>
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  {[
                    { 
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                      ), 
                      label: "Email", 
                      value: "contact@example.com" 
                    },
                    { 
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      ), 
                      label: "Phone", 
                      value: "+1 (555) 123-4567" 
                    },
                    { 
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      ), 
                      label: "Address", 
                      value: "123 Business Ave, Suite 100, San Francisco, CA 94107" 
                    }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="mr-3 mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="h-px bg-border/50 my-6"></div>
                
                <div>
                  <h4 className="text-sm font-medium mb-3">Business Hours</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
                
                <div className="h-px bg-border/50 my-6"></div>
                
                <div>
                  <h4 className="text-sm font-medium mb-3">Follow Us</h4>
                  <div className="flex space-x-3">
                    {["Twitter", "LinkedIn", "Facebook", "Instagram"].map((social, i) => (
                      <button key={i} className="h-9 w-9 rounded-full border border-input flex items-center justify-center">
                        <span className="sr-only">{social}</span>
                        {/* Icon would go here */}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly can I expect a response?",
      answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line directly."
    },
    {
      question: "Do you offer consultations?",
      answer: "Yes, we offer free 30-minute consultations to discuss your project needs and how we can help. You can schedule one through our booking system."
    },
    {
      question: "What information should I include in my message?",
      answer: "To help us respond more effectively, please include details about your project, timeline, budget considerations, and any specific requirements you have."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! We work with clients worldwide and can accommodate different time zones for meetings and communication."
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Find answers to common questions about working with us.
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
            >
              <div className="border border-border/50 hover:border-primary/20 transition-all duration-300 rounded-lg overflow-hidden">
                <div className="p-6 border-b border-border/50">
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-muted-foreground">
            Still have questions? We're here to help.
          </p>
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium text-sm">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const ContactPage = () => (
  <div className="min-h-screen">
    <ContactHero />
    
    <div className="my-20 max-w-7xl mx-auto px-4 py-20">
      <ContactInfo />
      <ContactForm />
    </div>
    
    <FAQ />
  </div>
);

export default ContactPage;