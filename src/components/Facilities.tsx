import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      title: "Luxury Stables",
      description: "Our stable designs blend luxury with functionality, creating spaces that prioritize horse comfort while making a stunning architectural statement.",
      image: "https://images.unsplash.com/photo-1518484233463-f6ddb68400ec?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Indoor Arenas",
      description: "State-of-the-art indoor arenas designed for optimal training conditions year-round, with perfect footing, lighting, and climate control.",
      image: "https://images.unsplash.com/photo-1506696495449-78c912b30e10?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Equestrian Estates",
      description: "Comprehensive estate planning that harmoniously integrates equestrian facilities with luxury residences and natural landscapes.",
      image: "https://plus.unsplash.com/premium_photo-1664304525253-156489378204?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section id="facilities" className="py-24 bg-[#0A0A0A] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#111111]/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">
              Featured Facilities
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#ABABAB] max-w-2xl mx-auto"
          >
            Explore our signature facility designs that combine functionality, beauty, and a deep understanding of equestrian needs.
          </motion.p>
        </div>

        <div className="space-y-24">
          {facilities.map((facility, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0.8 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative rounded-2xl overflow-hidden group"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={facility.image} 
                      alt={facility.title} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80"></div>
                </motion.div>
              </div>
              
              <div className="lg:w-1/2">
                <motion.h3 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl sm:text-3xl font-bold mb-4 text-[#F5F5F7]"
                >
                  {facility.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-[#ABABAB] mb-6 text-lg"
                >
                  {facility.description}
                </motion.p>
                <motion.button 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center text-[#3CAAFF] hover:text-[#F5F5F7] transition-colors duration-300 group"
                >
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:ml-3 transition-all duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;