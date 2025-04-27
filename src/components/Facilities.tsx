import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue, useSpring, useAnimation } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useAnimation as useAnimationContext } from '../contexts/AnimationContext';
import { useInView } from 'framer-motion';

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

const Facilities = () => {
  const { disableAnimations } = useAnimationContext();
  const navigate = useNavigate();
  const facilitiesRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const { scrollYProgress } = useScroll({
    target: facilitiesRef,
    offset: ["start end", "end start"],
    layoutEffect: false
  });
  
  // Simplified parallax effect
  const parallax = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const facilities = [
    {
      title: "Photography Websites",
      description: "Sell and showcase your equestrian photography with high-resolution galleries, secure image purchasing, instant downloads, and seamless client access.",
      image: "https://i.postimg.cc/zXFSVZW7/temp-Image83v-NOK.avif"
    },
    {
      title: "Equine Sales Platforms",
      description: "Whether you need a full classified platform or a custom site for your horse sales business, we create tailored solutions with search filters, detailed listings, high-quality media, and direct buyer enquiries.",
      image: "https://images.unsplash.com/photo-1506696495449-78c912b30e10?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Riding School Websites",
      description: "Manage bookings, showcase your facilities, and attract new clients with a professional, user-friendly website. Include class schedules, rider registration, pricing, and easy contact options.",
      image: "https://plus.unsplash.com/premium_photo-1664304525253-156489378204?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background SVG pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDgwODA4Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMxNTE1MTUiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          {disableAnimations ? (
            <>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">Our Examples</span>
              </h2>
              <p className="text-[#ABABAB] max-w-2xl mx-auto">
                Explore our tailored services designed specifically for equestrian businesses. See what's possible for your project.
              </p>
            </>
          ) : (
            <motion.div
              initial="hidden"
              animate={controls}
              variants={containerVariants}
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">Our Examples</span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-[#ABABAB] max-w-2xl mx-auto"
              >
                Explore our tailored services designed specifically for equestrian businesses. See what's possible for your project.
              </motion.p>
            </motion.div>
          )}
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="space-y-32"
        >
          {facilities.map((facility, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden group shadow-lg shadow-black/20">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={facility.image} 
                      alt={`${facility.title} - Equinology Service`}
                      className={`object-cover w-full h-full transition-opacity duration-300 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="lazy"
                      onLoad={() => setImageLoaded(true)}
                    />
                    {!imageLoaded && (
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A] via-transparent to-transparent animate-pulse" />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent opacity-80"></div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[#F5F5F7]">
                  {facility.title}
                </h3>
                <p className="text-[#ABABAB] mb-8 text-lg leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16"
        >
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <p className="text-[#ABABAB] text-lg">
              We also work with a variety of other businesses beyond the equestrian industry. 
              <br className="hidden sm:block" />
              <Link to="/contact" className="text-[#3CAAFF] font-medium hover:text-[#F5F5F7] transition-colors duration-300">Contact us</Link> to discuss your project.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;
