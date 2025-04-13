import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-[#0A0A0A] via-[#101010] to-[#0A0A0A] text-[#F5F5F7]">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Services />
              <Facilities />
              {/* <Gallery /> */}
              <Testimonials />
              {/* <Contact /> */}
            </main>
          } />
          <Route path="/services" element={<main><ServicesPage /></main>} />
          <Route path="/contact" element={<main><ContactPage /></main>} />
          <Route path="/blog/:slug" element={<main><ArticlePage /></main>} />
          <Route path="/blog" element={<main><ArticlePage /></main>} />
          <Route path="/articles/:slug" element={<main><ArticlePage /></main>} />
          <Route path="/articles" element={<main><ArticlePage /></main>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;