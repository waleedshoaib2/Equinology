import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  summary: string;
  content: string;
  image: string;
  author: string;
}

// Helper function to create slugs
const slugify = (text: string): string =>
  text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');

const BlogPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Sample blog posts with slugs
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Power of Equine Therapy",
      slug: slugify("The Power of Equine Therapy"),
      date: "August 15, 2023",
      summary: "Explore how equine therapy can transform lives and promote healing.",
      content: "Equine therapy, also known as horse therapy, equine-assisted therapy, and equine-assisted psychotherapy, is a treatment that includes equine activities and/or an equine environment in order to promote physical, occupational, and emotional growth in persons suffering from ADD, anxiety, autism, cerebral palsy, dementia, depression, developmental delay, genetic syndromes, traumatic brain injuries, behavioral issues, abuse issues, and many other mental health problems.",
      image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      author: "Dr. Emma Johnson"
    },
    {
      id: 2,
      title: "Advanced Riding Techniques",
      slug: slugify("Advanced Riding Techniques"),
      date: "July 5, 2023",
      summary: "Master the art of riding with these advanced techniques.",
      content: "Advanced riding techniques involve developing a deeper connection with your horse and refining your ability to communicate through subtle cues. This includes mastering collected and extended gaits, flying lead changes, lateral movements, and developing an independent seat. These skills require years of dedicated practice and a thorough understanding of equine biomechanics.",
      image: "https://images.unsplash.com/photo-1566068256639-2f4e8291df4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      author: "Michael Reynolds"
    },
    {
      id: 3,
      title: "Equine Nutrition Essentials",
      slug: slugify("Equine Nutrition Essentials"),
      date: "June 10, 2023",
      summary: "Understanding the fundamentals of proper equine nutrition for optimal health.",
      content: "Proper equine nutrition is the cornerstone of horse health and performance. Horses are herbivores with specific digestive systems designed to process forage continuously. A balanced diet includes appropriate amounts of forage, concentrates, vitamins, and minerals tailored to the individual horse's needs based on age, workload, and health status. Understanding these nutritional principles is essential for preventing common health issues like colic, laminitis, and metabolic disorders.",
      image: "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      author: "Dr. Sarah Phillips"
    }
  ];

  // Find the post based on slug when the component mounts or slug changes
  useEffect(() => {
    if (slug) {
      const post = blogPosts.find(p => p.slug === slug);
      setSelectedPost(post || null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setSelectedPost(null);
    }
  }, [slug]);

  // Navigate back to the main blog page
  const handleBackClick = () => {
    navigate('/blog');
  };

  // Determine if we are showing a single post or the list
  const showSinglePost = slug && selectedPost;

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {!showSinglePost && (
            <>
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3CAAFF] to-[#00E0FF] mb-4">
                Our Blog
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Insights, stories, and expertise from the world of equine therapy and education
              </p>
            </>
          )}
        </motion.div>

        {showSinglePost ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={handleBackClick}
              className="mb-8 flex items-center text-[#3CAAFF] hover:text-[#00E0FF] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to all articles
            </button>
            <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
              <div className="h-[40vh] relative">
                <img
                  src={selectedPost.image}
                  alt={`${selectedPost.title} - Blog Post Cover`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              <div className="p-8 md:p-12">
                <p className="text-[#3CAAFF] mb-2">{selectedPost.date} • By {selectedPost.author}</p>
                <h1 className="text-3xl md:text-4xl font-bold mb-6">{selectedPost.title}</h1>
                <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
                  {selectedPost.content.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {blogPosts.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg h-full flex flex-col group-hover:shadow-xl group-hover:shadow-[#3CAAFF]/10 transition-all"
                >
                  <div className="h-56 relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={`${post.title} - Blog Post Summary`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-[#3CAAFF] text-sm mb-2">{post.date}</p>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#00E0FF] transition-colors">{post.title}</h3>
                    <p className="text-gray-300 mb-4 flex-grow">{post.summary}</p>
                    <p className="text-[#3CAAFF] flex items-center mt-auto font-medium">
                      Read more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage; 