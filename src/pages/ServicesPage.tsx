import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useViewportScroll, useTransform } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// TypewriterText component with a subtle glow effect
const TypewriterText = ({ text, onComplete }: { text: string; onComplete: () => void; }) => {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index + 1));
      index++;
      if (index === text.length) {
        clearInterval(interval);
        setTimeout(() => onComplete(), 1500);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [text, onComplete]);
  return <span className="drop-shadow-lg">{displayed}</span>;
};

// AdvancedVideoBackground with parallax effect using Framer Motion
const AdvancedVideoBackground = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  return (
    <motion.video
      autoPlay
      loop
      muted
      style={{ y }}
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/hero-bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </motion.video>
  );
};

// HeroSection: immersive full-screen section with video background & typewriter effect
const HeroSection = () => {
  const phrases = ['Luxury', 'Speed', 'Performance'];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const handleComplete = () => setPhraseIndex((prev) => (prev + 1) % phrases.length);

  return (
    <section className="section relative min-h-screen flex items-center justify-center">
      <AdvancedVideoBackground />
      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-5xl sm:text-6xl font-serif font-bold text-blue-400 mb-4 drop-shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Equestrian Web Design
        </motion.h1>
        <AnimatePresence>
          <motion.h2
            key={phraseIndex}
            className="text-3xl sm:text-4xl font-serif text-blue-300 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <TypewriterText text={phrases[phraseIndex]} onComplete={handleComplete} />
            <span className="animate-blink">|</span>
          </motion.h2>
        </AnimatePresence>
      </div>
    </section>
  );
};

// BrandingIdentitySection: dedicated immersive section for Branding & Identity
const BrandingIdentitySection = () => {
  const items = [
    {
      title: "Logo Design",
      desc: "Our expert designers craft memorable, unique logos that capture the essence of your equestrian brand.",
      image: "https://via.placeholder.com/600x400?text=Logo+Design"
    },
    {
      title: "Brand Collateral",
      desc: "We design business cards, letterheads, and digital assets that ensure your brand maintains a consistent, sophisticated presence.",
      image: "https://via.placeholder.com/600x400?text=Brand+Collateral"
    },
    {
      title: "Visual Identity",
      desc: "Our team refines color palettes and typography to build a visual identity that truly sets you apart.",
      image: "https://via.placeholder.com/600x400?text=Visual+Identity"
    },
    {
      title: "Brand Strategy",
      desc: "Through comprehensive consultations, we align every design element with your vision to forge a timeless brand narrative.",
      image: "https://via.placeholder.com/600x400?text=Brand+Strategy"
    },
  ];

  return (
    <section className="section py-16 px-4 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-blue-400 text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Branding & Identity
        </motion.h2>
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16`}
              initial={{ opacity: 0, x: isEven ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <div className="md:w-1/2">
                <img src={item.image} alt={item.title} className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2 md:px-8 mt-8 md:mt-0">
                <motion.h3 className="text-3xl font-semibold text-blue-400 mb-4">
                  {item.title}
                </motion.h3>
                <motion.p className="text-lg text-blue-200">
                  {item.desc}
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

// ServiceCard for remaining services (unchanged)
const ServiceCard = ({ title, description }: { title: string; description: string; }) => (
  <motion.div
    className="bg-[#111111] rounded-lg p-6"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-xl font-semibold text-blue-400 mb-2">{title}</h3>
    <p className="text-sm text-blue-200">{description}</p>
  </motion.div>
);

// ServicesSection: displays other service offerings (excluding Branding & Identity)
const ServicesSection = () => {
  const services = [
    { title: 'Equestrian Web Design', description: 'Modern, responsive websites tailored for stables, breeders, and equestrian centres.' },
    { title: 'E-Commerce Solutions', description: 'Custom online stores for selling equestrian products and services.' },
    { title: 'Live Event Streaming', description: 'Integrated live streaming for horse shows and equestrian events.' },
    { title: 'Mobile App Development', description: 'User-friendly apps for stable management and event coordination.' },
    { title: 'Digital Marketing', description: 'SEO, social media and content strategies tailored for the equestrian market.' },
  ];

  return (
    <section className="section py-16 px-4 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center text-blue-400 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Updated WhyChooseUs: features appear in separate animated cards (unchanged)
const WhyChooseUs = () => (
  <section className="section py-16 px-4 bg-[#0A0A0A]">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold text-blue-400 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Why Choose Us?
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {[
          "Custom designs for the equestrian world",
          "Responsive, mobile-friendly layouts",
          "A blend of modern technology and timeless elegance",
          "Dedicated support and maintenance"
        ].map((feature, i) => (
          <motion.div
            key={i}
            className="bg-[#111111] rounded-lg p-6 border border-blue-800 transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p className="text-lg text-blue-200">{feature}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// TestimonialsCarousel using react-slick for smooth transitions (unchanged)
const TestimonialsCarousel = () => {
  const testimonials = [
    { name: 'John Doe', text: "Their design transformed our stable's online presence!" },
    { name: 'Jane Smith', text: 'Professional and creative. Highly recommended for equestrian businesses.' },
    { name: 'Mark Johnson', text: 'A perfect blend of modern design and equestrian flair.' },
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    fade: true,
  };

  return (
    <section className="section py-16 px-4 bg-[#111111]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-6">What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, i) => (
            <div key={i} className="px-4">
              <p className="text-xl text-blue-200">"{testimonial.text}"</p>
              <p className="mt-4 font-semibold text-blue-200">- {testimonial.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

// PortfolioSection (unchanged)
const PortfolioSection = () => {
  const portfolioItems = [
    { id: 1, title: 'Project 1', image: 'https://via.placeholder.com/300x200?text=Project+1' },
    { id: 2, title: 'Project 2', image: 'https://via.placeholder.com/300x200?text=Project+2' },
    { id: 3, title: 'Project 3', image: 'https://via.placeholder.com/300x200?text=Project+3' },
    { id: 4, title: 'Project 4', image: 'https://via.placeholder.com/300x200?text=Project+4' },
  ];
  return (
    <section className="section py-16 px-4 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-blue-400 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Our Portfolio
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative group overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-bold">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ContactSection (unchanged)
const ContactSection = () => (
  <section id="contact" className="section py-16 px-4 bg-[#111111]">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center text-blue-400 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Get In Touch
      </motion.h2>
      <form className="space-y-6">
        <div>
          <label className="block text-blue-200 mb-2">Name</label>
          <input type="text" className="w-full p-3 rounded bg-gray-800 text-blue-200" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-blue-200 mb-2">Email</label>
          <input type="email" className="w-full p-3 rounded bg-gray-800 text-blue-200" placeholder="Your Email" />
        </div>
        <div>
          <label className="block text-blue-200 mb-2">Message</label>
          <textarea className="w-full p-3 rounded bg-gray-800 text-blue-200" rows={4} placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="w-full py-3 bg-[#FFD700] hover:bg-yellow-600 text-black font-bold rounded">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

// FloatingCTA: persistent call-to-action button
const FloatingCTA = () => (
  <a
    href="#contact"
    className="fixed bottom-8 right-8 bg-[#FFD700] text-black px-4 py-2 rounded-full shadow-lg hover:shadow-2xl transition-shadow"
  >
    Contact Us
  </a>
);

// Main ServicesPage: combining all sections for an advanced, immersive scrolling experience
const ServicesPage = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <BrandingIdentitySection />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <FloatingCTA />
    </div>
  );
};

export default ServicesPage;