import React from "react";

const Footer = () => {
    return (
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h3 className="text-xl font-light tracking-wider">EQUINOLOGY</h3>
            <p className="text-gray-400 text-sm mt-2">
              Making websites since 2020 for equestrians and agriculture.
            </p>
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Equinology. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  