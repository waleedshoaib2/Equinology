import React from "react";

const portfolioImages = [
    "https://images.unsplash.com/photo-1534307250431-ef2530a9d8c5",
    "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a",
    "https://images.unsplash.com/photo-1553284965-71ec4d4fa8eb",
  ];
  
  const Portfolio = () => {
    return (
      <section id="portfolio" className="py-24 bg-gray-900 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl mb-12">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioImages.map((image, index) => (
              <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg group">
                <img
                  src={`${image}?auto=format&fit=crop&w=800`}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  