import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Compass } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import NavItems from './NavItems'; // Correct the import path

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
    { label: "Services", href: "/services" },
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
        backgroundColor: `rgba(10, 10, 10, ${bgOpacity})`,
        backdropFilter: `blur(${scrollProgress * 8}px)`,
        boxShadow: scrollProgress > 0.1 ? `0 4px 20px rgba(0, 0, 0, ${scrollProgress * 0.2})` : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <a href="/" className="flex items-center">
          <Compass className="w-8 h-8 mr-2 text-[#3CAAFF]" />
          <span className="text-2xl font-light tracking-wider bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">
            EQUINOLOGY
          </span>
        </a>

        <NavItems navItems={navItems} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="md:hidden text-[#ABABAB] hover:text-[#F5F5F7] transition-colors duration-200"
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
                  className="block text-[#ABABAB] hover:text-[#F5F5F7] transition-colors duration-200 text-sm tracking-wide py-2"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-[#3CAAFF]/25 transition-all duration-300 text-[#0A0A0A]"
              >
                Contact Us
                <ChevronRight className="inline-block ml-1 w-4 h-4" />
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;