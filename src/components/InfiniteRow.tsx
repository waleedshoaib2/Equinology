import React from "react";
const InfiniteRow = ({ images, delay = 0 }) => {
  // Duplicate the images array for continuous scrolling
  const scrollingImages = [...images, ...images];
  return (
    <div className="overflow-hidden mt-1">
      <div
        className="flex animate-marquee"
        style={{ animationDelay: `${delay}s` }}
      >
        {scrollingImages.map((src, index) => (
          <div key={index} className="mx-1 cursor-pointer">
            {/* Container with fixed width and height */}
            <div className="w-96 h-60 overflow-hidden rounded-lg border-2 border-white">
              <img
                src={src}
                alt={`Banner ${index}`}
                // The image fills the container completely
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default InfiniteRow;
