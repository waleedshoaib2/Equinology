import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FlagCarousel from '../components/FlagCarousel';
import Facilities from '../components/Facilities';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-[#0A0A0A] via-[#101010] to-[#0A0A0A]">
      <Hero />
      <Services />
      <FlagCarousel />
      <Facilities />
      <Testimonials />
    </div>
  );
};

export default HomePage; 