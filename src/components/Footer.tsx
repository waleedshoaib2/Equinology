import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ChevronRight } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#team" },
      { label: "Careers", href: "#careers" },
      { label: "News", href: "#news" }
    ],
    services: [
      { label: "Facility Design", href: "#services" },
      { label: "Stable Architecture", href: "#services" },
      { label: "Arena Planning", href: "#services" },
      { label: "Property Development", href: "#services" }
    ],
    resources: [
      { label: "Portfolio", href: "#gallery" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Blog", href: "#blog" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" }
    ]
  };

  return (
    <footer className="bg-[#1A150F] text-[#E6CCAB] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-[#3B2F1E]">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.a 
              href="#" 
              className="inline-flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Compass className="w-8 h-8 mr-2 text-[#D4B483]" />
              <span className="text-2xl font-light tracking-wider bg-gradient-to-r from-[#D4B483] to-[#8C7851] bg-clip-text text-transparent">
                EQUINOLOGY
              </span>
            </motion.a>
            <p className="text-[#A89076] mb-6 max-w-md">
              Equinology blends timeless equestrian tradition with innovative design to create extraordinary experiences for horse enthusiasts, breeders, and equestrian facilities worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#2A2118] p-2 rounded-full hover:bg-[#3B2F1E] transition-colors duration-300">
                <svg className="w-5 h-5 text-[#D4B483]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="bg-[#2A2118] p-2 rounded-full hover:bg-[#3B2F1E] transition-colors duration-300">
                <svg className="w-5 h-5 text-[#D4B483]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="bg-[#2A2118] p-2 rounded-full hover:bg-[#3B2F1E] transition-colors duration-300">
                <svg className="w-5 h-5 text-[#D4B483]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="bg-[#2A2118] p-2 rounded-full hover:bg-[#3B2F1E] transition-colors duration-300">
                <svg className="w-5 h-5 text-[#D4B483]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="text-[#F2EAD3] font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-[#A89076] hover:text-[#D4B483] transition-colors duration-200 flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#F2EAD3] font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-[#A89076] hover:text-[#D4B483] transition-colors duration-200 flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#F2EAD3] font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-[#A89076] hover:text-[#D4B483] transition-colors duration-200 flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <h3 className="text-[#F2EAD3] font-semibold mt-6 mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-[#A89076] hover:text-[#D4B483] transition-colors duration-200 flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-b border-[#3B2F1E]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-[#F2EAD3] mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-[#A89076]">Stay updated with our latest projects and equestrian design insights.</p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 bg-[#2A2118] border border-[#3B2F1E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4B483]/50 text-[#F2EAD3]"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-[#8C7851] to-[#5F4B32] rounded-lg text-[#F2EAD3] font-medium hover:shadow-lg hover:shadow-[#8C7851]/25 transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#A89076] text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Equinology. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-[#A89076] hover:text-[#D4B483] text-sm">Privacy Policy</a>
            <span className="text-[#5F4B32]">•</span>
            <a href="#" className="text-[#A89076] hover:text-[#D4B483] text-sm">Terms of Service</a>
            <span className="text-[#5F4B32]">•</span>
            <a href="#" className="text-[#A89076] hover:text-[#D4B483] text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;