import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Facilities from "../components/Facilities";
import Testimonials from "../components/Testimonials";
import InfiniteBanner from "../components/InfiniteBanner";

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Facilities />
      <InfiniteBanner />
      {/* <Gallery /> */}
      <Testimonials />
      {/* <Contact /> */}
    </>
  );
};
