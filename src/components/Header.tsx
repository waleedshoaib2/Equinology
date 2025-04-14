import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import logo from "../images/logo.webp";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate(); 
  const location = useLocation(); 
  
  // Use useTransform for more efficient scroll calculations
  const { scrollY } = useScroll();
  const bgOpacityValue = useTransform(scrollY, [0, 300], [0.7, 0.95]);
  const blurValue = useTransform(scrollY, [0, 300], [4, 12]);
  const shadowOpacity = useTransform(scrollY, [0, 300], [0, 0.2]);

  // Convert opacity to rgba string
  const bgOpacity = useTransform(bgOpacityValue, (latest) => `rgba(0, 0, 0, ${latest})`);

  // Close sidebar when route changes
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  // Handle resize and mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  // Memoize navigation handlers
  const handleNavigation = useCallback((sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    }
    setIsSidebarOpen(false);
  }, [location.pathname, navigate]);

  // Memoize nav items to prevent unnecessary re-renders
  const navItems = useMemo(() => [
    { label: "About", action: () => handleNavigation("about") },
    { label: "Services", action: () => handleNavigation("services") },
    { label: "Testimonials", action: () => handleNavigation("testimonials") },
    { 
      label: "Articles", 
      action: () => {
        navigate("/articles");
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsSidebarOpen(false);
      } 
    },
  ], [handleNavigation, navigate]);

  const HeaderWrapper = isMobile ? 'header' : motion.header;
  const NavWrapper = isMobile ? 'div' : motion.div;

  return (
    <>
      <HeaderWrapper
        style={{
          backgroundColor: bgOpacity,
          backdropFilter: `blur(${blurValue}px)`,
          boxShadow: `0 4px 30px rgba(0, 0, 0, ${shadowOpacity})`,
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <NavWrapper
            initial={isMobile ? undefined : { opacity: 0 }}
            animate={isMobile ? undefined : { opacity: 1 }}
            transition={isMobile ? undefined : { duration: 0.5 }}
            className="flex items-center"
          >
            <img src={logo} alt="Equinology Logo" className="h-8 w-auto" />
          </NavWrapper>

          {/* Desktop Navigation */}
          <NavWrapper
            initial={isMobile ? undefined : { opacity: 0 }}
            animate={isMobile ? undefined : { opacity: 1 }}
            transition={isMobile ? undefined : { duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="text-[#ABABAB] hover:text-white transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] text-[#0A0A0A] font-medium hover:shadow-lg hover:shadow-[#3CAAFF]/25 transition-all duration-300"
            >
              Contact Us
            </button>
          </NavWrapper>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden p-2 text-[#ABABAB] hover:text-white transition-colors duration-200"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </HeaderWrapper>

      {/* Mobile Sidebar - Simplified animations */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.2 }}
              className="fixed right-0 top-0 bottom-0 w-64 bg-[#0A0A0A] border-l border-white/10 z-50 md:hidden"
            >
              <div className="p-4 flex justify-between items-center border-b border-white/10">
                <span className="text-white font-medium">Menu</span>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 text-[#ABABAB] hover:text-white transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.action}
                    className="flex items-center justify-between text-[#ABABAB] hover:text-white transition-colors duration-200 py-2"
                  >
                    {item.label}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ))}
                <button
                  onClick={() => {
                    navigate('/contact');
                    setIsSidebarOpen(false);
                  }}
                  className="mt-4 w-full px-6 py-2 rounded-full bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] text-[#0A0A0A] font-medium hover:shadow-lg hover:shadow-[#3CAAFF]/25 transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
