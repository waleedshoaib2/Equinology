import React from 'react';
import TimeAgo from 'react-timeago';
import { Article } from '../data/articleData';

interface ArticleCardProps {
  article: Article;
}

// Custom formatter to change weeks-to-months threshold to 28 days
const formatter = (value: number, unit: string, suffix: string) => {
  if (unit === 'week' && value >= 4) {
    return `${Math.floor(value / 4)} month${Math.floor(value / 4) !== 1 ? 's' : ''} ${suffix}`;
  }
  return `${value} ${unit}${value !== 1 ? 's' : ''} ${suffix}`;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-[#111111] rounded-xl overflow-hidden border border-[#222222]/30 transition-all duration-300 hover:border-[#3CAAFF]/30 hover:shadow-lg hover:shadow-[#3CAAFF]/10">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-[#ABABAB] mb-4 line-clamp-3">
          {article.summary}
        </p>
        <div className="flex items-center justify-between text-sm text-[#777777]">
          <span>
            <TimeAgo date={article.timestamp} formatter={formatter} />
          </span>
          <span>{article.readTime} min read</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard; 