import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Lazy load components
const HeaderComponent = lazy(() => import('./components/Header'));
const FooterComponent = lazy(() => import('./components/Footer'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-12 h-12 border-4 border-[#3CAAFF] border-t-transparent rounded-full"
    />
  </div>
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <HeaderComponent />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/articles" element={<ArticlePage />} />
            <Route path="/articles/:slug" element={<ArticlePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <FooterComponent />
      </Suspense>
    </Router>
  );
};

export default App;