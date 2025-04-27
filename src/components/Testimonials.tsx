import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
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
    <div
      className={`flex-shrink-0 w-[90vw] sm:w-[500px] md:w-[600px] mx-auto ${
        isActive ? 'opacity-100' : 'opacity-30'
      } transition-opacity duration-300`}
    >
      <div className="bg-[#111111] p-6 sm:p-8 rounded-xl border border-[#222222]/30">
        {/* Quote Text */}
        <div className="relative mb-6">
          <Quote className="absolute -top-3 -left-2 w-8 h-8 text-[#3CAAFF]/10" />
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed pl-6">
            {testimonial.quote}
          </p>
        </div>

        {/* Author Info */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <div>
            <p className="text-lg font-semibold text-white">
              {testimonial.author}
            </p>
            <p className="text-base text-[#ABABAB]">
              {testimonial.position}
            </p>
          </div>
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[#3CAAFF]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Simple intersection observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      id: 1,
      company: {
        name: "Equestrian Training Academy",
        logo: "/logos/company1.png",
        industry: "Equestrian Training",
        location: "UK"
      },
      testimonial: {
        quote: "It was such an amazing opportunity to work with Henry. He has a collaborative approach to projects and has the utmost patience for changes, big or small, that you ask for. I'm always nervous going into projects where I feel as though I don't know what I'm doing, but Henry made it very easy to provide feedback and articulate what I wanted. It was such a pleasure working with him!",
        author: "Ben S",
        position: "Hobby Horses LLC",
        rating: 5
      }
    },
    {
      id: 2,
      company: {
        name: "AD Accounting",
        logo: "/logos/company4.png",
        industry: "Accounting Services",
        location: "UK"
      },
      testimonial: {
        quote: "I had the pleasure of working with Henry on a recent web scraping project, and I can confidently say he exceeded all expectations. His technical expertise, attention to detail, and ability to deliver clean, structured data from even the most complex sources were impressive. Henry communicated clearly throughout the project, kept me updated on progress, and was quick to implement any feedback or changes. He delivered everything ahead of schedule and went the extra mile to ensure the final output",
        author: "",
        position: "AD Accounting",
        rating: 5
      }
    },
    {
      id: 3,
      company: {
        name: "Construction Solutions Ltd",
        logo: "/logos/company2.png",
        industry: "Construction",
        location: "UK"
      },
      testimonial: {
        quote: "Henry's creativity and dedication shone through as he designed a new logo from scratch for our construction industry product. He presented several innovative concepts, which we refined together to achieve the final artwork. I am delighted with the outcome and look forward to collaborating with Henry on future projects across different brands. Thank you!",
        author: "Rachel G",
        position: "Rapid Kerb Ltd",
        rating: 5
      }
    },
    {
      id: 4,
      company: {
        name: "Dressage Excellence",
        logo: "/logos/company3.png",
        industry: "Equestrian Sports",
        location: "UK"
      },
      testimonial: {
        quote: "Henry at Equinology really understood what I needed. My previous website had a checkout and basket feature, which didn't make sense for selling horses. He helped create a system that actually worked for my business. It was great to work with someone who understands the equestrian world.",
        author: "Sarah M",
        position: "Owner",
        rating: 5
      }
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
      className="py-16 md:py-24 relative"
      ref={testimonialRef}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Hear From Our Clients
          </h2>
          <p className="text-[#ABABAB] max-w-xl mx-auto">
            Discover how we've helped equestrian businesses thrive with tailored digital solutions.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="w-full max-w-4xl mx-auto overflow-hidden">
            <div 
              className="flex items-center transition-transform duration-300"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard
                    testimonial={{
                      id: testimonial.id,
                      ...testimonial.testimonial
                    }}
                    isActive={index === activeIndex}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:border-[#3CAAFF]/50 hover:bg-black/70 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white/70" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:border-[#3CAAFF]/50 hover:bg-black/70 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white/70" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative ${
                  index === activeIndex ? 'w-10' : 'w-3'
                } h-3 transition-all duration-300`}
              >
                <div className={`relative h-full rounded-full ${
                  index === activeIndex
                    ? 'bg-[#3CAAFF]'
                    : 'bg-white/20'
                }`}></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;