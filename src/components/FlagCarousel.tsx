import React from 'react';
import { motion } from 'framer-motion';

const countries = [
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    region: 'East Sussex'
  },
  {
    name: 'United States',
    flag: '🇺🇸',
    region: 'California'
  },
  {
    name: 'Ireland',
    flag: '🇮🇪',
    region: 'Dublin'
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    region: 'Bavaria'
  },
  {
    name: 'France',
    flag: '🇫🇷',
    region: 'Normandy'
  },
  {
    name: 'Netherlands',
    flag: '🇳🇱',
    region: 'Amsterdam'
  },
  {
    name: 'Belgium',
    flag: '🇧🇪',
    region: 'Brussels'
  },
  {
    name: 'Sweden',
    flag: '🇸🇪',
    region: 'Stockholm'
  }
];

const FlagCarousel = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3CAAFF] to-[#93c5fd]">
              International Clients
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#94a3b8]/80 font-light"
          >
            Trusted by equestrian businesses worldwide
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
          
          <motion.div 
            className="flex gap-8 py-8"
            animate={{ 
              x: [0, -1920],
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...countries, ...countries].map((country, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 bg-gradient-to-br from-[#0A0A0A] to-[#111111] p-6 rounded-xl border border-[#3CAAFF]/10 hover:border-[#3CAAFF]/20 transition-all duration-300 min-w-[200px]"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-3">{country.flag}</div>
                <h3 className="text-white/90 font-medium mb-1">{country.name}</h3>
                <p className="text-[#94a3b8]/70 text-sm font-light">{country.region}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FlagCarousel; 