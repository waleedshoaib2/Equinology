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
    return scrollY.onChange(() => {});
  }, [scrollY]);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  const handleNavigation = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 500);
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
    { label: "Testimonials", action: () => handleNavigation("testimonials") },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-0 right-0 z-50 bg-black/60 backdrop-blur-md shadow-2xl rounded-full mx-auto"
      style={{
        maxWidth: "950px",
        width: "100%",
        height: "60px",
      }}
    >
      <div className="flex items-center justify-between w-full h-full px-4 gap-6 font-inter">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-auto border-none shadow-none outline-none ring-0"
            style={{ filter: "none" }}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="relative text-gray-400 text-sm tracking-wide group transition-all duration-300 hover:text-white"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#3CAAFF] rounded-full transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-white hover:text-[#3CAAFF] transition"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
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
              className="fixed top-0 left-0 w-[85%] max-w-sm min-h-screen bg-black z-50 flex flex-col p-6"
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
                    className="text-white text-base font-medium hover:text-[#3CAAFF] transition"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-auto w-full bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] px-6 py-3 rounded-full text-lg font-medium hover:shadow-lg text-[#0A0A0A]"
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
