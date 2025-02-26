import { CheckCircle2 } from "lucide-react";
import React from "react";

const services = [
  {
    title: "Custom Web Design",
    description: "Tailored aesthetics & UX",
  },
  {
    title: "E-commerce Solutions",
    description: "Sell with ease",
  },
  {
    title: "Performance & SEO",
    description: "Fast, optimized, and discoverable",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-800 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div key={index} className="text-center p-8 rounded-2xl transition-all duration-300 hover:bg-gray-700 border border-gray-600 hover:scale-105">
            <CheckCircle2 className="w-12 h-12 mx-auto mb-6 text-green-400" />
            <h3 className="text-xl font-medium mb-3">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
