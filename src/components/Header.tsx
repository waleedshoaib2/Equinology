import { useState, useEffect, useCallback } from "react";
import { Menu, X, ChevronRight, Compass } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      // Calculate scroll progress as a value between 0 and 1
      // Max transparency reached at 300px scroll
      const progress = Math.min(latest / 300, 1);
      setScrollProgress(progress);
    });
  }, [scrollY]);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Facilities", href: "#facilities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  // Calculate background opacity based on scroll progress
  const bgOpacity = 0.6 + (scrollProgress * 0.35); // Starts at 0.6, goes up to 0.95

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300`}
      style={{
        backgroundColor: `rgba(42, 33, 24, ${bgOpacity})`,
        backdropFilter: `blur(${scrollProgress * 8}px)`,
        boxShadow: scrollProgress > 0.1 ? `0 4px 20px rgba(0, 0, 0, ${scrollProgress * 0.2})` : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.a 
            href="#" 
            className="text-2xl font-light tracking-wider group flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Compass className="w-6 h-6 mr-2 text-[#D4B483]" />
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-[#D4B483] to-[#8C7851] bg-clip-text text-transparent"
            >
              EQUINOLOGY
            </motion.span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              ™
            </motion.span>
          </motion.a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-[#E6CCAB] hover:text-[#F2EAD3] transition-colors duration-200 text-sm tracking-wide"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#8C7851] to-[#5F4B32] px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-[#8C7851]/25 transition-all duration-300 text-[#F2EAD3]"
            >
              Contact Us
              <ChevronRight className="inline-block ml-1 w-4 h-4" />
            </motion.button>
          </nav>

          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="md:hidden text-[#E6CCAB] hover:text-[#F2EAD3] transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="py-4 px-2 space-y-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="block text-[#E6CCAB] hover:text-[#F2EAD3] transition-colors duration-200 text-sm tracking-wide py-2"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.button 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="w-full bg-gradient-to-r from-[#8C7851] to-[#5F4B32] px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-[#8C7851]/25 transition-all duration-300 text-[#F2EAD3]"
                >
                  Contact Us
                  <ChevronRight className="inline-block ml-1 w-4 h-4" />
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;