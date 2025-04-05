import React from "react";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Title */}
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
          My Awesome Blog Post
        </h1>

        {/* Author Info */}
        <div className="flex items-center space-x-4 text-sm text-gray-300">
          <img
            src="https://i.pravatar.cc/40"
            alt="Author Avatar"
            className="w-10 h-10 rounded-full border border-gray-600"
          />
          <div>
            <p className="font-medium">John Doe</p>
            <p>Published on April 4, 2025</p>
          </div>
        </div>

        {/* Image */}
        <img
          src="https://aqomi.com/wp-content/uploads/2023/08/Importance-of-Aesthetics-AQOMI-1.jpg"
          alt="Blog Visual"
          className="w-full rounded-2xl shadow-xl"
        />

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vehicula, nunc at scelerisque convallis, purus risus convallis
            purus, in imperdiet dui justo eget libero. Duis scelerisque
            sollicitudin purus, sed consequat ipsum volutpat at.
          </p>
          <p>
            Quisque ac justo nec arcu convallis faucibus. Donec sollicitudin
            urna ut neque dignissim, eget molestie velit dictum.
          </p>

          <blockquote>
            "Design is not just what it looks like and feels like. Design is how
            it works." – Steve Jobs
          </blockquote>

          <p>
            Sed ac lectus vitae sapien varius fermentum. Morbi a quam vitae
            libero gravida tincidunt. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {["Design", "Creativity", "Inspiration", "Aesthetics"].map((tag) => (
            <span
              key={tag}
              className="bg-white/10 text-sm px-3 py-1 rounded-full backdrop-blur-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-10 text-center">
          <h3 className="text-2xl font-semibold mb-2">Enjoyed the read?</h3>
          <p className="mb-4 text-gray-300">
            Subscribe to our newsletter for more awesome content like this!
          </p>
          <button className="bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-gray-200 transition">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
