import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';

// Lazy load pages
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3CAAFF]"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-[#0A0A0A] via-[#101010] to-[#0A0A0A] text-[#F5F5F7]">
        <Header />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <Services />
                <Facilities />
                <Testimonials />
              </main>
            } />
            <Route path="/services" element={
              <Suspense fallback={<LoadingFallback />}>
                <main><ServicesPage /></main>
              </Suspense>
            } />
            <Route path="/contact" element={
              <Suspense fallback={<LoadingFallback />}>
                <main><ContactPage /></main>
              </Suspense>
            } />
            <Route path="/blog/:slug" element={
              <Suspense fallback={<LoadingFallback />}>
                <main><ArticlePage /></main>
              </Suspense>
            } />
            <Route path="/blog" element={
              <Suspense fallback={<LoadingFallback />}>
                <main><ArticlePage /></main>
              </Suspense>
            } />
            <Route path="/articles/:slug" element={
              <Suspense fallback={<LoadingFallback />}>
                <main><ArticlePage /></main>
              </Suspense>
            } />
            <Route path="/articles" element={
              <Suspense fallback={<LoadingFallback />}>
                <main><ArticlePage /></main>
              </Suspense>
            } />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;