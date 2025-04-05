import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
const testimonials = [
  {
    id: 1,
    name: "ANIA",
    role: "FASHION DIRECTOR",
    time: "2 hours ago",
    image:
      "https://petapixel.com/assets/uploads/2022/02/Petapixel-Article-Images-5-800x600.jpg",
    review:
      "This service is absolutely amazing! The design is cutting-edge and the experience unforgettable.",
  },
  {
    id: 2,
    name: "SMIKEE",
    role: "CREATIVE LEAD",
    time: "1 day ago",
    image:
      "https://cdn.shopify.com/s/files/1/1619/4221/files/S0001_e811c10b-062a-4a66-8310-e19ad434506b.jpg?v=1656063829",
    review:
      "A true masterpiece! Their attention to detail and creative vision is unparalleled in the industry.",
  },
  {
    id: 3,
    name: "KANTY",
    role: "PRODUCT DESIGNER",
    time: "3 days ago",
    image:
      "https://www.katebackdrop.com/cdn/shop/products/59409850_10205453216046251_6233943853875855360_o.jpg?v=1687278612",
    review:
      "Innovative and brilliant. This team transformed our vision into reality with ease and flair.",
  },
];
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -500 : 500,
    opacity: 0,
  }),
};
export default function TestimonialCarousel() {
  const [[index, direction], setIndex] = useState([0, 0]);
  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(([i]) => {
        const newIndex = i === testimonials.length - 1 ? 0 : i + 1;
        return [newIndex, 1];
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const handleNext = () => {
    setIndex(([i]) => {
      const newIndex = i === testimonials.length - 1 ? 0 : i + 1;
      return [newIndex, 1];
    });
  };
  const handlePrev = () => {
    setIndex(([i]) => {
      const newIndex = i === 0 ? testimonials.length - 1 : i - 1;
      return [newIndex, -1];
    });
  };
  const handleSelect = (newIndex) => {
    setIndex(([i]) => [newIndex, newIndex > i ? 1 : -1]);
  };
  // For vertical tabs
  const prevIndex = index === 0 ? testimonials.length - 1 : index - 1;
  const nextIndex = index === testimonials.length - 1 ? 0 : index + 1;
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center py-16 bg-black text-white overflow-hidden">
      {/* Container with horizontal spacing so the tabs aren't squished */}
      <div className="relative flex items-center justify-center space-x-8 mt-20">
        {/* Left Vertical Tab (Previous) */}
        <div className="hidden md:flex flex-col space-y-4 items-center">
          <button
            onClick={() => handleSelect(prevIndex)}
            className={`h-[150px] w-[60px] bg-black text-white flex flex-col items-center justify-center
              rounded-md transition-all border border-gray-800
              ${
                index === prevIndex
                  ? "opacity-100"
                  : "opacity-70 hover:opacity-90"
              }`}
          >
            <span className="text-sm font-bold tracking-widest rotate-90 transform">
              {testimonials[prevIndex].name}
            </span>
          </button>
        </div>
        {/* Main Carousel Card (wider width, consistent height for the image) */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={testimonials[index].id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="bg-black rounded-lg overflow-hidden shadow-xl border border-gray-800 relative
                       w-[800px] max-w-full" // wider card
          >
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-full h-[450px] object-cover" // consistent image height
            />
            <div className="p-6">
              <p className="text-lg italic mb-2">
                "{testimonials[index].review}"
              </p>
              <h3 className="text-2xl font-bold">{testimonials[index].name}</h3>
              <p className="text-sm font-medium">{testimonials[index].role}</p>
              <p className="text-xs opacity-75 mt-1">
                {testimonials[index].time}
              </p>
            </div>
            {/* Navigation Arrows on the card */}
            <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4">
              <button
                onClick={handlePrev}
                className="bg-black/50 hover:bg-black/80 p-2 rounded-full shadow-md border border-gray-700"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </button>
              <button
                onClick={handleNext}
                className="bg-black/50 hover:bg-black/80 p-2 rounded-full shadow-md border border-gray-700"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Right Vertical Tab (Next) */}
        <div className="hidden md:flex flex-col space-y-4 items-center">
          <button
            onClick={() => handleSelect(nextIndex)}
            className={`h-[150px] w-[60px] bg-black text-white flex flex-col items-center justify-center
              rounded-md transition-all border border-gray-800
              ${
                index === nextIndex
                  ? "opacity-100"
                  : "opacity-70 hover:opacity-90"
              }`}
          >
            <span className="text-sm font-bold tracking-widest rotate-90 transform">
              {testimonials[nextIndex].name}
            </span>
          </button>
        </div>
      </div>
      {/* Pagination Dots */}
      <div className="flex justify-center mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            className={`h-2 rounded-full mx-1 transition-all ${
              index === idx ? "bg-white w-4" : "bg-gray-600 w-2"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
