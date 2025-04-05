"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await emailjs.send(
      "your_service_id", // Replace with your EmailJS Service ID
      "your_template_id", // Replace with your EmailJS Template ID
      {
        to_email: "equilinkbackend@gmail.com", // Fixed recipient
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      },
      "-5yP8cK-LV1O9ynqM" // Replace with your EmailJS Public Key
    );

    if (response.status === 200) {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

      setTimeout(() => setIsSuccess(false), 3000);
    } else {
      throw new Error("Failed to send message.");
    }
  } catch (error) {
    setIsSubmitting(false);
    toast.error("Something went wrong. Please try again later.");
  }
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const pulse = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};
const scrollToContactForm = () => {
  document
    .getElementById("contact-form")
    .scrollIntoView({ behavior: "smooth" });
};
const ContactHero = () => (
  <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
    <video
      autoPlay
      loop
      muted
      className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
    >
      <source src="/contact-bg.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black flex flex-col items-center justify-center text-center px-6 mb-4">
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
        <div className="mt-10 px-4 py-1.5 text-sm font-medium border border-primary/20 bg-primary/5 rounded-full inline-flex items-center">
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
          <button
            onClick={scrollToContactForm}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium text-sm flex items-center group"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
          <button
            onClick={scrollToContactForm}
            className="px-6 py-3 bg-transparent border border-input rounded-md font-medium text-sm"
          >
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: "Call Us",
      description: "We're available Mon-Fri, 9am-5pm",
      value: "+44 7493 303857",
      action: "Call now",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      ),
      title: "Email Us",
      description: "We'll respond within 24 hours",
      value: "enquiries@equinology.co.uk",
      action: "Send email",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: "Visit Us",
      description: "Come say hello at our office",
      value: "Battle, East Sussex",
      action: "Get directions",
    },
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
              <p className="text-muted-foreground text-sm">
                {method.description}
              </p>
            </div>
            <div className="px-6 py-4">
              <p className="font-medium">{method.value}</p>
            </div>
            <div className="px-6 py-4 border-t border-border/50">
              <button className="text-primary flex items-center group">
                {method.action}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                >
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 2)
      newErrors.name = "Name must be at least 2 characters.";
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!formData.subject || formData.subject.length < 5)
      newErrors.subject = "Subject must be at least 5 characters.";
    if (!formData.message || formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        "service_n07aajg", // Replace with your EmailJS Service ID
        "template_pv63fm6", // Replace with your EmailJS Template ID
        {
          to_email: "equilinkbackend@gmail.com", // Fixed recipient
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "-5yP8cK-LV1O9ynqM" // Replace with your EmailJS Public Key
      );

      if (response.status === 200) {
        setIsSubmitting(false);
        setIsSuccess(true);
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact-form" className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400"
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
            Have a question or want to work together? Fill out the form below
            and we'll get back to you as soon as possible.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center py-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-16 w-16 text-green-500 mb-4"
              >
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
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-600 rounded-md bg-[#1a1a1a] text-white focus:ring-0 focus:border-gray-400"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-600 rounded-md bg-[#1a1a1a] text-white focus:ring-0 focus:border-gray-400"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-600 rounded-md bg-[#1a1a1a] text-white focus:ring-0 focus:border-gray-400"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  className="w-full px-4 py-2 border border-gray-600 rounded-md bg-[#1a1a1a] text-white focus:ring-0 focus:border-gray-400"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#1E3A8A] hover:bg-[#1E40AF] text-white rounded-md font-medium text-sm transition-all duration-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How quickly can I expect a response to be?",
      answer:
        "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line directly.",
    },
    {
      question: "Do you offer consultations?",
      answer:
        "Yes, we offer free 30-minute consultations to discuss your project needs and how we can help. You can schedule one through our booking system.",
    },
    {
      question: "What information should I include in my message?",
      answer:
        "To help us respond more effectively, please include details about your project, timeline, budget considerations, and any specific requirements you have.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Absolutely! We work with clients worldwide and can accommodate different time zones for meetings and communication.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about working with us.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border/50 hover:border-primary/20 transition-all duration-300 rounded-lg overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </motion.svg>
              </button>

              {/* Answer (Collapsible) */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 border-t border-border/50">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </motion.div>
            </div>
          ))}
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
