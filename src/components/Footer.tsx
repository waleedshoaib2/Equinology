import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-[#ABABAB] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start pb-12 border-b border-[#111111]">
          {/* Brand Section (Left Side) */}
          <div className="max-w-md">
            <motion.a 
              href="#" 
              className="inline-flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Compass className="w-8 h-8 mr-2 text-[#3CAAFF]" />
              <span className="text-2xl font-light tracking-wider bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] bg-clip-text text-transparent">
                EQUINOLOGY
              </span>
            </motion.a>
            <p className="text-[#777777]">
              Equinology blends timeless equestrian tradition with innovative design to create extraordinary experiences for horse enthusiasts, breeders, and equestrian facilities worldwide.
            </p>
          </div>

          {/* Navigation Links (Right Side) */}
          <div className="text-right">
            <h3 className="text-[#F5F5F7] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services" className="text-[#777777] hover:text-[#3CAAFF] transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-[#777777] hover:text-[#3CAAFF] transition-colors duration-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-sm text-[#777777]">
          <p>&copy; {new Date().getFullYear()} Equinology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
