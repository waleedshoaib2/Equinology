import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Code, Palette, ShoppingBag, Camera, Globe, MessageSquare, Users, Shield, Zap, Award, Heart } from 'lucide-react';
import StarBackground from '../components/background/StarBackground';
import Footer from '../components/Footer';

// HeroSection component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl sm:text-6xl font-light text-white mb-6 tracking-wide"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Equestrian Web Design
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Crafting sophisticated digital experiences for the equestrian world, 
          where timeless elegance meets modern technology.
        </motion.p>
        
        <motion.div className="mt-10">
          <button className="px-8 py-3 bg-transparent border border-blue-400/30 text-blue-300 rounded-full font-light tracking-wide group flex items-center justify-center gap-2">
            Explore Our Services
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// BrandingIdentitySection component
const BrandingIdentitySection = () => {
  const items = [
    {
      title: "Logo Design",
      desc: "Our expert designers craft memorable, unique logos that capture the essence of your equestrian brand.",
      image: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600",
      icon: <Palette className="w-6 h-6" />
    },
    {
      title: "Brand Collateral",
      desc: "We design business cards, letterheads, and digital assets that ensure your brand maintains a consistent, sophisticated presence.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Visual Identity",
      desc: "Comprehensive visual identity systems that establish your brand's unique presence in the equestrian world.",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-16">
          <span className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">
            Branding & Identity
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden group">
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 text-[#3CAAFF] mb-2">
                  {item.icon}
                  <h3 className="text-xl font-light">{item.title}</h3>
                </div>
                <p className="text-[#ABABAB] text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ServicesSection component
const ServicesSection = () => {
  const services = [
    {
      title: 'Custom Web Development',
      description: 'Bespoke websites tailored for equestrian businesses with modern design and functionality.',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'E-Commerce Solutions',
      description: 'Custom online stores for selling equestrian products and services with secure payment processing.',
      icon: <ShoppingBag className="w-6 h-6" />
    },
    {
      title: 'Photography & Media',
      description: 'Professional photography and media services specialized for equestrian businesses.',
      icon: <Camera className="w-6 h-6" />
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your equestrian business online.',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Social Media Management',
      description: 'Expert social media management to build and engage your equestrian community.',
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: 'Event Coverage',
      description: 'Professional coverage of equestrian events with live streaming capabilities.',
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-32 px-4 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-16">
          <span className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">
            Our Services
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#111111] border border-[#222222]/20 hover:border-[#3CAAFF]/30 transition-colors"
            >
              <div className="text-[#3CAAFF] mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-light text-[#3CAAFF] mb-3">{service.title}</h3>
              <p className="text-[#ABABAB]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// WhyChooseUs component
const WhyChooseUs = () => {
  const features = [
    {
      title: "Security First",
      description: "Enterprise-grade security measures to protect your digital assets.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Lightning Fast",
      description: "Optimized performance for quick loading and smooth user experience.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Award Winning",
      description: "Recognized excellence in equestrian web design and development.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support for your digital presence needs.",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-32 px-4 bg-[#111111]   relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-16">
          <span className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">
            Why Choose Us
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-[#0A0A0A] border border-[#222222]/20 hover:border-[#3CAAFF]/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-[#3CAAFF] mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-light text-[#3CAAFF] mb-3 text-center">{feature.title}</h3>
              <p className="text-[#ABABAB] text-sm text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTASection component
const CTASection = () => {
  return (
    <section className="py-32 px-4 bg-[#111111] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#3CAAFF]/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center">
          <h2 className="text-4xl font-light mb-6">
            Ready to <span className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">
              Transform
            </span> Your Equestrian Business?
          </h2>
          <p className="text-[#ABABAB] text-lg mb-10">
            Let's create something extraordinary together. Contact us today to begin your journey.
          </p>
          <button className="px-8 py-3 bg-[#3CAAFF] text-white rounded-full font-light tracking-wide group flex items-center gap-2 mx-auto hover:bg-[#3CAAFF]/90 transition-colors">
            Get Started
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

function ServicesPage() {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F7]">
      <StarBackground />
      <HeroSection />
      <BrandingIdentitySection />
      <ServicesSection />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}

export default ServicesPage;