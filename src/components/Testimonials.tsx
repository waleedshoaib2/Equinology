import { useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import React from "react";

const testimonials = [
  {
    quote: "Equinology brought our equine business to life online with a sleek, professional website!",
    author: "Sarah Thompson",
    role: "Owner",
    company: "Willow Creek Stables",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200"
  },
  {
    quote: "The technical expertise and attention to detail transformed our online presence completely.",
    author: "Michael Rodriguez",
    role: "Director",
    company: "Elite Equestrian Academy",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200"
  },
  {
    quote: "Their understanding of both web technology and the equestrian industry is unmatched.",
    author: "Emma Chen",
    role: "Marketing Manager",
    company: "Royal Stables International",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200"
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const changeTestimonial = (direction: "next" | "prev") => {
    const newIndex =
      direction === "next"
        ? (currentTestimonial + 1) % testimonials.length
        : (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    setCurrentTestimonial(newIndex);
  };

  return (
    <section className="py-24 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl mb-12">What Our Clients Say</h2>

        <div className="relative max-w-3xl mx-auto">
          <blockquote className="text-2xl italic mb-6 text-gray-100">
            "{testimonials[currentTestimonial].quote}"
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <cite className="text-gray-100 font-medium block">
                {testimonials[currentTestimonial].author}
              </cite>
              <span className="text-gray-400 text-sm">
                {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-6">
          <button onClick={() => changeTestimonial("prev")} className="text-gray-400 hover:text-white">
            <ArrowLeftCircle className="w-8 h-8" />
          </button>
          <button onClick={() => changeTestimonial("next")} className="text-gray-400 hover:text-white">
            <ArrowRightCircle className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
