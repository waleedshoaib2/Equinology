import React from 'react';
import { Link } from 'react-router-dom';
import { useRealTimeTimestamp } from '../utils/timestampUtils';

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    slug: string;
    timestamp: number;
    summary: string;
    image: string;
    readTime?: string;
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const relativeTime = useRealTimeTimestamp(article.timestamp);

  return (
    <Link to={`/blog/${article.slug}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
        <div className="relative h-48 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span>{relativeTime}</span>
            {article.readTime && (
              <>
                <span className="mx-2">•</span>
                <span>{article.readTime} min read</span>
              </>
            )}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {article.title}
          </h3>
          <p className="text-gray-600 line-clamp-3">{article.summary}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard; 