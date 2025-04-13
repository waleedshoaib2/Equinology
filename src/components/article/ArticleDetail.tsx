import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Article } from '../../data/articleData';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface ArticleDetailProps {
  post: Article;
  onBackClick: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ post, onBackClick }) => {
  if (!post) {
    return <div className="text-center py-20">Article not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 max-w-6xl w-full"
    >
      <Helmet>
        <title>{`${post.title} | Equinology Articles`}</title>
        <meta name="description" content={post.summary} />
      </Helmet>

      <div className="mb-6">
        <button 
          onClick={() => {
            onBackClick();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
          className="inline-flex items-center text-[#3CAAFF] hover:text-[#00E0FF] hover:underline transition-colors"
        >
          <ArrowLeft size={18} className="mr-1" /> Back to articles
        </button>
      </div>
      
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{post.title}</h1>
        <div className="text-gray-400">
          <span>{post.date}</span> {post.readTime && <>• <span>{post.readTime} min read</span></>}
        </div>
        {post.coverImage && (
          <div className="w-full">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-auto rounded-lg shadow-md object-cover"
              style={{ maxHeight: '600px' }}
            />
          </div>
        )}
      </div>

      <div className="prose prose-lg max-w-none prose-invert">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
          components={{
            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold my-6 text-white" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold my-5 text-[#3CAAFF]" {...props} />,
            h3: ({ node, ...props }) => <h3 className="text-xl font-bold my-4 text-white" {...props} />,
            p: ({ node, ...props }) => <p className="my-4 text-gray-300 md:text-lg" {...props} />,
            ul: ({ node, ...props }) => <ul className="list-disc pl-6 my-4 text-gray-300" {...props} />,
            ol: ({ node, ...props }) => <ol className="list-decimal pl-6 my-4 text-gray-300" {...props} />,
            li: ({ node, ...props }) => <li className="my-2 text-gray-300" {...props} />,
            a: ({ node, href, ...props }) => (
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#3CAAFF] hover:text-[#00E0FF] transition-colors hover:underline" {...props} />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote className="border-l-4 border-[#3CAAFF]/50 pl-4 italic my-4 text-gray-400" {...props} />
            ),
            code: ({ node, className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <pre className="bg-gray-900 rounded p-4 overflow-x-auto my-4 text-gray-300">
                  <code className={className} {...props}>
                    {children}
                  </code>
                </pre>
              ) : (
                <code className="bg-gray-900 text-gray-300 rounded px-1 py-0.5" {...props}>
                  {children}
                </code>
              );
            },
            pre: ({ node, ...props }) => (
              <pre className="bg-gray-900 rounded p-4 overflow-x-auto my-4 text-gray-300" {...props} />
            ),
            img: ({ node, src, alt, ...props }) => (
              <img
                src={src}
                alt={alt}
                className="w-full h-auto rounded my-4 shadow-sm"
                {...props}
              />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </motion.div>
  );
};

export default ArticleDetail; 