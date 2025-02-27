import React from 'react';
import { ArrowRight, Star, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import ThreeBackground from './ThreeBackground';
import VideoBackground from './VideoBackground';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with gradient */}
      <VideoBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A2118]/50 via-[#3B2F1E]/30 to-[#2A2118]/50 z-30">
        <ThreeBackground />
      </div>

      {/* Content */}
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-[#3B2F1E]/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#8C7851]/30"
            >
              <Compass className="w-4 h-4 text-[#D4B483]" />
              <span className="text-sm text-[#E6CCAB]">Equestrian Excellence</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              <span className="block text-[#F2EAD3]">Elevate Your</span>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="block mt-2 bg-gradient-to-r from-[#D4B483] to-[#8C7851] bg-clip-text text-transparent"
              >
                Equestrian Vision
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-[#E6CCAB] max-w-3xl"
            >
              We blend timeless equestrian tradition with innovative design to create 
              extraordinary experiences for horse enthusiasts, breeders, and equestrian facilities.
            </motion.p>

            {/* CTA buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-[#8C7851] to-[#5F4B32] text-[#F2EAD3] font-medium hover:shadow-lg hover:shadow-[#8C7851]/25 transition-all duration-300"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 rounded-full border border-[#8C7851]/30 hover:border-[#8C7851]/60 text-[#E6CCAB] hover:text-[#F2EAD3] transition-colors duration-300"
              >
                Our Portfolio
              </motion.button>
            </motion.div>

            {/* Social proof */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="pt-8 border-t border-[#5F4B32]/30"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-8">
                <div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="flex items-center"
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.4 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-[#D4B483] fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>
                  <p className="mt-2 text-sm text-[#A89076]">Trusted by 200+ equestrian facilities</p>
                </div>
                <div className="h-12 w-px bg-[#5F4B32]/30"></div>
                <div>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="text-2xl font-bold text-[#F2EAD3]"
                  >
                    25+
                  </motion.p>
                  <p className="text-sm text-[#A89076]">Years of excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero image/illustration */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 lg:mt-0 relative"
          >
            <div className="relative mx-auto max-w-[500px]">
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="aspect-w-5 aspect-h-3 rounded-2xl overflow-hidden bg-gradient-to-br from-[#8C7851]/10 to-[#5F4B32]/10 backdrop-blur-3xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000"
                  alt="Elegant Horse"
                  className="object-cover w-full h-full rounded-2xl mix-blend-luminosity opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2A2118] via-transparent to-transparent"></div>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-72 h-72 bg-[#8C7851]/10 rounded-full blur-3xl"
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -bottom-4 -left-4 w-72 h-72 bg-[#5F4B32]/10 rounded-full blur-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;