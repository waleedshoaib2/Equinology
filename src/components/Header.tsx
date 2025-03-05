import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import logo from "../images/logo.webp";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate(); 
  const location = useLocation(); 

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const progress = Math.min(latest / 300, 1);
    });
  }, [scrollY]);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
  }, [isSidebarOpen]);

  const handleNavigation = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 500);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "About", action: () => handleNavigation("about") },
    { label: "Services", action: () => handleNavigation("services") },
    { label: "Facilities", action: () => handleNavigation("facilities") },
    { label: "Testimonials", action: () => handleNavigation("testimonials") },
  ];

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

        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="text-white text-md font-small tracking-wide hover:text-gray-400 transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>

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

      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-40"
              onClick={() => setIsSidebarOpen(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 w-[85%] max-w-sm min-h-screen bg-black z-50 flex flex-col p-6 shadow-lg"
            >
              <button
                className="absolute top-5 right-5 text-gray-400 hover:text-white"
                onClick={() => setIsSidebarOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>

              <nav className="mt-16 flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setIsSidebarOpen(false);
                      item.action();
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="text-white text-lg font-medium tracking-wide hover:text-gray-400 transition-colors duration-300"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-auto w-full bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] px-6 py-3 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-[#3CAAFF]/25 transition-all duration-300 text-[#0A0A0A]"
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
