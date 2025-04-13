import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue, useSpring } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// Define types for AnimatedOrb props (copied from Services.tsx)
interface AnimatedOrbProps {
  style?: React.CSSProperties;
  customAnimation?: { [key: string]: any };
  className?: string;
  parallaxValue?: number | MotionValue<number>;
}

// Reusable AnimatedOrb component (copied from Services.tsx)
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

// New component for individual testimonial card with scroll focus effect
interface TestimonialCardProps {
  testimonial: {
    id: number;
    quote: string;
    author: string;
    position: string;
    rating: number;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'] // Track from bottom entering to top leaving
  });

  // Create a value that maps scroll progress to viewport position
  // 0 = bottom of viewport, 0.5 = center, 1 = top of viewport
  const viewportProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Scale and opacity based on proximity to center (0.5)
  const scale = useTransform(viewportProgress, [0, 0.4, 0.5, 0.6, 1], [0.85, 0.95, 1, 0.95, 0.85]);
  const opacity = useTransform(viewportProgress, [0, 0.4, 0.5, 0.6, 1], [0.5, 0.9, 1, 0.9, 0.5]);
  // Optional: Parallax effect for the content *within* the card
  const contentY = useTransform(viewportProgress, [0, 1], ['5%', '-5%']);

  // Item variants for initial appearance (if needed, but scroll handles main effect)
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] },
    },
  };

  return (
    <motion.div 
      ref={cardRef} 
      style={{ scale, opacity }} // Apply scroll-based scale and opacity
      className="origin-center" // Ensure scaling happens from the center
      variants={itemVariants} // Apply initial animation variant if container uses them
    >
      <div className="bg-gradient-to-br from-[#111111]/80 to-[#0A0A0A]/80 p-8 rounded-2xl border border-[#222222]/30 backdrop-blur-sm shadow-lg relative overflow-hidden">
        <Quote className="absolute top-4 right-4 w-10 h-10 text-[#3CAAFF]/20" strokeWidth={1.5} />

        {/* Apply inner parallax to this content div */}
        <motion.div className="relative z-10" style={{ y: contentY }}>
          {/* Star Rating - Changed filled star color to blue */}
          <div className="flex items-center mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[#3CAAFF] fill-current mr-1" />
            ))}
            {[...Array(5 - testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[#444444] fill-current mr-1" />
            ))}
          </div>

          {/* Quote Text - Removed italic and medium weight, changed color */}
          <p className="text-xl md:text-2xl text-[#F5F5F7] mb-6 leading-relaxed">
            &ldquo;{testimonial.quote}&rdquo;
          </p>

          {/* Author Info */}
          <div className="text-right">
            <p className="font-semibold text-lg text-[#F5F5F7]">{testimonial.author}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonialRef = useRef<HTMLDivElement>(null);

  // Scroll progress for the *entire section* (used for orbs)
  const { scrollYProgress: sectionScroll } = useScroll({
    target: testimonialRef,
    offset: ['start end', 'end start']
  });

  // Parallax for orbs (using sectionScroll)
  const smoothScroll = useSpring(sectionScroll, { stiffness: 100, damping: 30 });
  const parallaxUp = useTransform(smoothScroll, [0, 1], [0, 20]);
  const parallaxDown = useTransform(smoothScroll, [0, 1], [20, 0]);

  // Restore original testimonial data
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

  // Container variants (can keep for initial stagger if desired)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <section
      id="testimonials"
      className="py-20 -mt-16 relative overflow-hidden"
      ref={testimonialRef}
    >
      {/* Removed the explicit parallax background div, as the main gradient shows through */}
      {/* <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#101010]/50 to-[#0A0A0A]"
        style={{ y: bgY }}
      /> */}
      
      {/* Animated Orbs - adjusted opacity and animation */}
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
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        {/* Use the TestimonialCard component with restored data */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;