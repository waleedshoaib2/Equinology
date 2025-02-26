import "./index.css"; // Import global styles
import Header from "./components/Header";
import Hero from "./components/Hero";
import TechnicalMetrics from "./components/TechnicalMetrics";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <Hero />
      <TechnicalMetrics />
      <Services />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
