import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useAnimation } from '../contexts/AnimationContext';

const Testimonials = () => {
  const { disableAnimations } = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
    layoutEffect: false
  });

  // Simplified parallax effect
  const parallax = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const testimonials = [
    {
      id: 1,
      name: "Ben S",
      role: "Equestrian Business Owner",
      content: "Equinology transformed our online presence. Their custom website has significantly increased our bookings and client engagement. The attention to detail and understanding of the equestrian industry is unmatched.",
      rating: 5
    },
    {
      id: 2,
      name: "Rachel G",
      role: "Riding School Manager",
      content: "Working with Equinology was a game-changer for our business. They created a beautiful, functional website that perfectly represents our brand. The booking system integration has streamlined our operations.",
      rating: 5
    },
    {
      id: 3,
      name: "Sarah M",
      role: "Equestrian Photographer",
      content: "The website they built for my photography business has helped me showcase my work beautifully and attract more clients. The image galleries and client portal are exactly what I needed.",
      rating: 5
    },
    {
      id: 4,
      name: "James T",
      role: "Horse Sales Business",
      content: "Our new website has revolutionized how we sell horses. The search functionality and detailed listings have made it much easier for potential buyers to find what they're looking for.",
      rating: 5
    }
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative py-32 overflow-hidden"
      style={{ position: 'relative' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {disableAnimations ? (
            <>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">
                  Client Testimonials
                </span>
              </h2>
              <p className="text-[#ABABAB] max-w-2xl mx-auto">
                Hear from our satisfied clients about their experience working with us.
              </p>
            </>
          ) : (
            <>
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.165, 0.84, 0.44, 1] }}
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">
                  Client Testimonials
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
                className="text-[#ABABAB] max-w-2xl mx-auto"
              >
                Hear from our satisfied clients about their experience working with us.
              </motion.p>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            disableAnimations ? (
              <div 
                key={testimonial.id}
                className="bg-[#0A0A0A] rounded-2xl p-8 shadow-lg shadow-black/20"
              >
                <div className="flex items-center mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#F5F5F7]">{testimonial.name}</h3>
                    <p className="text-[#ABABAB]">{testimonial.role}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#3CAAFF] fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-[#ABABAB] leading-relaxed">{testimonial.content}</p>
              </div>
            ) : (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.165, 0.84, 0.44, 1]
                }}
                className="bg-[#0A0A0A] rounded-2xl p-8 shadow-lg shadow-black/20"
              >
                <div className="flex items-center mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#F5F5F7]">{testimonial.name}</h3>
                    <p className="text-[#ABABAB]">{testimonial.role}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#3CAAFF] fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-[#ABABAB] leading-relaxed">{testimonial.content}</p>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;