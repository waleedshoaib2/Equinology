import React, { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

// Lazy load components
const HeroSection = lazy(() => import('../components/services/HeroSection'));
const BrandingIdentitySection = lazy(() => import('../components/services/BrandingIdentitySection'));
const ServicesSection = lazy(() => import('../components/services/ServicesSection'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-[50vh] flex items-center justify-center bg-[#0A0A0A]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3CAAFF]"></div>
  </div>
);

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F7]">
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <BrandingIdentitySection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <ServicesSection />
      </Suspense>
      <div className="text-center mt-16">
        <button 
          onClick={() => {
            navigate('/contact');
            setTimeout(() => window.scrollTo(0, 0), 100);
          }}
          className="inline-flex items-center px-10 py-4 rounded-full bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] text-[#0A0A0A] font-medium text-lg hover:shadow-lg hover:shadow-[#3CAAFF]/25 transition-all duration-300"
        >
          Contact Us Now
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1">
            <path d="M22 16.92V19a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3 4.18 2 2 0 0 1 5 2h2.09a2 2 0 0 1 2 1.72c.12.81.31 1.6.56 2.36a2 2 0 0 1-.45 2.11L8.21 9.79a16 16 0 0 0 6 6l1.5-1.5a2 2 0 0 1 2.11-.45c.76.25 1.55.44 2.36.56a2 2 0 0 1 1.72 2z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;
