import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Equinology transformed our vision into reality. Their attention to detail and understanding of equestrian needs resulted in a facility that exceeds all our expectations.",
      author: "Sarah Johnson",
      position: "Dressage Facility Owner",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=200"
    },
    {
      quote: "Working with the Equinology team was a seamless experience from concept to completion. They created a space that perfectly balances luxury and functionality.",
      author: "Michael Thompson",
      position: "Equestrian Estate Developer",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=200"
    },
    {
      quote: "The innovative design solutions provided by Equinology have significantly improved the efficiency of our breeding operation while creating a stunning aesthetic.",
      author: "Elizabeth Carter",
      position: "Thoroughbred Breeder",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#2A2118] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#3B2F1E]/50 to-[#2A2118]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-[#D4B483] to-[#8C7851] bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#E6CCAB] max-w-2xl mx-auto"
          >
            Hear what our clients have to say about their experience working with Equinology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-[#3B2F1E]/80 to-[#2A2118]/80 p-8 rounded-2xl border border-[#5F4B32]/20 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#D4B483]/20" />
              
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#D4B483] fill-current" />
                ))}
              </div>
              
              <p className="text-[#E6CCAB] mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[#F2EAD3] font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-[#A89076]">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;