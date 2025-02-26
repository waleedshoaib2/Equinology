import { ChevronDown, ArrowRight } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-105">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-white-horse-running-in-the-snow-22513-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-md"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light mb-6">Seamless Web Design for the Equine Industry.</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12">
          Modern, high-performance websites tailored for equine businesses.
        </p>
        <button className="group bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium inline-flex items-center hover:bg-gray-200">
          Get Started
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      <ChevronDown className="relative bottom-8 mt-20 animate-bounce w-6 h-6 text-gray-400" />
    </section>
  );
};

export default Hero;
