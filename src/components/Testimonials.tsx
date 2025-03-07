import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Henry at Equinology really understood what I needed. My previous website had a checkout and basket feature, which didn’t make sense for selling horses. He helped create a system that actually worked for my business. It was great to work with someone who understands the equestrian world.",
      author: "Sarah",
      position: "Dressage Facility Owner",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=200"
    },
    {
      quote: "Working with the Equinology team was a seamless experience from concept to completion. They created a space that perfectly balances luxury and functionality.",
      author: "Michael",
      position: "Equestrian Estate Developer",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=200"
    },
    {
      quote: "It was great to work with a UK-based team who really understands the equestrian world. I didn’t have to keep explaining things, which made the process so much easier. The pricing was also clear and reasonable, with no unexpected costs.",
      author: "Elizabeth",
      position: "Thoroughbred Breeder",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#0A0A0A] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/50 to-[#0A0A0A]"></div>
      
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
              Client Testimonials
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#ABABAB] max-w-2xl mx-auto"
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
              className="bg-gradient-to-br from-[#111111]/80 to-[#0A0A0A]/80 p-8 rounded-2xl border border-[#222222]/20 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#3CAAFF]/20" />
              
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#3CAAFF] fill-current" />
                ))}
              </div>
              
              <p className="text-[#ABABAB] mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[#F5F5F7] font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-[#777777]">{testimonial.position}</p>
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