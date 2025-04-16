import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// Define types for AnimatedOrb props
interface AnimatedOrbProps {
  style?: React.CSSProperties;
  customAnimation?: { [key: string]: any };
  className?: string;
  parallaxValue?: number | MotionValue<number>;
}

// Reusable AnimatedOrb component
const AnimatedOrb: React.FC<AnimatedOrbProps> = ({ style, customAnimation, className, parallaxValue = 0 }) => {
  return (
    <motion.div
      className={`absolute rounded-full filter blur-[100px] ${className}`}
      animate={customAnimation}
      transition={{
        duration: 15,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "linear",
      }}
      style={{ ...style, y: parallaxValue }}
    />
  );
};

// Testimonial card component
interface TestimonialCardProps {
  testimonial: {
    id: number;
    quote: string;
    author: string;
    position: string;
    rating: number;
  };
  isActive: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.3 }}
      className={`flex-shrink-0 w-[90vw] md:w-[600px] mx-4 transition-all duration-300 ${
        isActive ? 'cursor-default' : 'cursor-pointer'
      }`}
    >
      <div className="bg-gradient-to-br from-[#111111]/80 to-[#0A0A0A]/80 p-8 rounded-2xl border border-[#222222]/30 backdrop-blur-sm shadow-lg relative overflow-hidden h-full">
        <Quote className="absolute top-4 right-4 w-10 h-10 text-[#3CAAFF]/20" strokeWidth={1.5} />
        
        <div className="relative z-10">
          {/* Star Rating */}
          <div className="flex items-center mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-[#3CAAFF] fill-current mr-1" />
            ))}
            {[...Array(5 - testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-[#444444] fill-current mr-1" />
            ))}
          </div>

          {/* Quote Text */}
          <p className="text-xl md:text-2xl text-[#F5F5F7] mb-8 leading-relaxed">
            &ldquo;{testimonial.quote}&rdquo;
          </p>

          {/* Author Info */}
          <div className="text-right">
            <p className="font-semibold text-lg text-[#F5F5F7]">{testimonial.author}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll progress for the entire section (used for orbs)
  const { scrollYProgress: sectionScroll } = useScroll({
    target: testimonialRef,
    offset: ['start end', 'end start']
  });

  // Parallax for orbs
  const smoothScroll = useSpring(sectionScroll, { stiffness: 100, damping: 30 });
  const parallaxUp = useTransform(smoothScroll, [0, 1], [0, 20]);
  const parallaxDown = useTransform(smoothScroll, [0, 1], [20, 0]);

  const testimonials = [
    {
      id: 1,
      quote: "Henry at Equinology really understood what I needed. My previous website had a checkout and basket feature, which didn't make sense for selling horses. He helped create a system that actually worked for my business. It was great to work with someone who understands the equestrian world.",
      author: "Sarah",
      position: "Dressage Facility Owner",
      rating: 5
    },
    {
      id: 2,
      quote: "Working with the Equinology team was a seamless experience from concept to completion. They created a space that perfectly balances luxury and functionality.",
      author: "Michael",
      position: "Equestrian Estate Developer",
      rating: 5
    },
    {
      id: 3,
      quote: "It was great to work with a UK-based team who really understands the equestrian world. I didn't have to keep explaining things, which made the process so much easier. The pricing was also clear and reasonable, with no unexpected costs.",
      author: "Elizabeth",
      position: "Thoroughbred Breeder",
      rating: 5
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className="py-20 -mt-16 relative overflow-hidden"
      ref={testimonialRef}
    >
      {/* Animated Orbs */}
      <AnimatedOrb
        className="bg-gradient-to-r from-[#3CAAFF]/10 to-[#00E0FF]/10"
        style={{ width: 350, height: 350, top: "15%", left: "-100px" }}
        customAnimation={{
          scale: [1, 1.02, 1],
          x: [-8, 8, -8],
          opacity: [0.25, 0.35, 0.25],
        }}
        parallaxValue={parallaxUp}
      />
      <AnimatedOrb
        className="bg-gradient-to-r from-[#00E0FF]/10 to-[#3CAAFF]/10"
        style={{ width: 320, height: 320, bottom: "12%", right: "-80px" }}
        customAnimation={{
          scale: [1, 1.01, 1],
          x: [6, -6, 6],
          opacity: [0.3, 0.4, 0.3],
        }}
        parallaxValue={parallaxDown}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.165, 0.84, 0.44, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">
              Hear From Our Clients
            </span>
          </h2>
          <p className="text-[#ABABAB] max-w-xl mx-auto">
            Discover how we've helped equestrian businesses thrive with tailored digital solutions.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="w-full max-w-3xl mx-auto overflow-hidden">
            <motion.div 
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard
                    testimonial={testimonial}
                    isActive={index === activeIndex}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-[#3CAAFF] w-4'
                    : 'bg-[#444444] hover:bg-[#666666]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;