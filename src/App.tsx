import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

// Lazy load pages (except HomePage)
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

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
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ServicesPage />
            </Suspense>
          } />
          <Route path="/articles" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ArticlePage />
            </Suspense>
          } />
          <Route path="/articles/:slug" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ArticlePage />
            </Suspense>
          } />
          <Route path="/blog" element={
            <Suspense fallback={<LoadingSpinner />}>
              <BlogPage />
            </Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ContactPage />
            </Suspense>
          } />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;