import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import NavItems from "./NavItems";
import logo from "../images/logo.webp";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const progress = Math.min(latest / 300, 1);
      setScrollProgress(progress);
    });
  }, [scrollY]);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when sidebar is open
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }
  }, [isSidebarOpen]);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "/services" },
    { label: "Facilities", href: "#facilities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const bgOpacity = 1; // Fully solid background

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 transition-all duration-300 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <a href="/" className="flex items-center">
          <img src={logo} className="w-40 h-auto" alt="Logo" />
        </a>

        {/* Desktop Nav */}
        <NavItems navItems={navItems} isMenuOpen={isSidebarOpen} setIsMenuOpen={setIsSidebarOpen} />

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="md:hidden text-[#ABABAB] hover:text-[#F5F5F7] transition-colors duration-200"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Sidebar for Mobile */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40" // Removed opacity here for solid bg
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 w-72 h-full bg-black z-50 flex flex-col items-start justify-start p-6"
            >
              {/* Close Button */}
              <button
                className="absolute top-5 right-5 text-gray-400 hover:text-white"
                onClick={() => setIsSidebarOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Links - Left-Aligned */}
              <nav className="mt-16 flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="text-white text-xl font-medium tracking-wide hover:text-gray-400 transition-colors duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              {/* Contact Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 w-full bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] px-6 py-3 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-[#3CAAFF]/25 transition-all duration-300 text-[#0A0A0A]"
                onClick={() => setIsSidebarOpen(false)}
              >
                Contact Us
                <ChevronRight className="inline-block ml-2 w-5 h-5" />
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
