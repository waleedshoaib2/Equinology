import "./index.css"; // Import global styles
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Facilities from "./components/Facilities";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#2A2118] text-[#F2EAD3]">
    <Header />
    <Hero />
    <Services />
    <Facilities />
    <Gallery />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
  );
}

export default App;
