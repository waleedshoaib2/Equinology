import { ArrowRight, Star, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import ThreeBackground from './ThreeBackground';
import image from "../images/Hero-Image.webp"
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/50 via-[#111111]/30 to-[#0A0A0A]/50 z-30">
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
              className="inline-flex items-center space-x-2 bg-[#111111]/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#3CAAFF]/30"
            >
              <Compass className="w-4 h-4 text-[#3CAAFF]" />
              <span className="text-sm text-[#ABABAB]">Equestrian Experts</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              <span className="block text-[#F5F5F7]">Bringing Ideas</span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="block mt-2 bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent"
              >
                Into Digital Reality
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-[#ABABAB] max-w-3xl"
            >
              Get in touch today for a no-obligation, one-to-one consultation about your bespoke website. Depending on the project, we aim to deliver your perfect website within approximately a week. We won't consider it complete until you're 100% satisfied, and we offer a transparent, fixed and affordable price. No business is complete without a professional website
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
                onClick={() => navigate('/contact')}
                className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] text-[#0A0A0A] font-medium hover:shadow-lg hover:shadow-[#3CAAFF]/25 transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/services')}
                className="inline-flex items-center px-8 py-3 rounded-full border border-[#3CAAFF]/30 hover:border-[#3CAAFF]/60 text-[#ABABAB] hover:text-[#F5F5F7] transition-colors duration-300"
              >
                Explore Services
              </motion.button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="pt-8 border-t border-[#222222]/30"
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
                        <Star className="w-5 h-5 text-[#3CAAFF] fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>
                  <p className="mt-2 text-sm text-[#777777]">Trusted by 100+ equestrians</p>
                </div>
                <div className="h-12 w-px bg-[#222222]/30"></div>
                <div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="text-2xl font-bold text-[#F5F5F7]"
                  >
                    6
                  </motion.p>
                  <p className="text-sm text-[#777777]">Years of excellence</p>
                </div>
                <div className="h-12 w-px bg-[#222222]/30"></div>
                <div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="text-2xl font-bold text-[#F5F5F7]"
                  >
                    £200
                  </motion.p>
                  <p className="text-sm text-[#777777]">Prices starting from</p>
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
                className="aspect-w-5 aspect-h-3 rounded-2xl overflow-hidden bg-gradient-to-br from-[#3CAAFF]/10 to-[#00E0FF]/10 backdrop-blur-3xl"
              >
                <img
                  src={image}
                  alt="Elegant Horse"
                  className="object-cover w-full h-full rounded-2xl mix-blend-luminosity opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A] via-transparent to-transparent"></div>
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
                className="absolute -top-4 -right-4 w-72 h-72 bg-[#3CAAFF]/10 rounded-full blur-3xl"
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
                className="absolute -bottom-4 -left-4 w-72 h-72 bg-[#00E0FF]/10 rounded-full blur-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;