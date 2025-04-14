import React, { lazy, Suspense } from 'react';

// Lazy load components
const Hero = lazy(() => import('../components/Hero'));
const Services = lazy(() => import('../components/Services'));
const Facilities = lazy(() => import('../components/Facilities'));
const Testimonials = lazy(() => import('../components/Testimonials'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-[50vh] flex items-center justify-center bg-[#0A0A0A]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3CAAFF]"></div>
  </div>
);

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-[#0A0A0A] via-[#101010] to-[#0A0A0A]">
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Facilities />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>
    </div>
  );
};

export default HomePage; 