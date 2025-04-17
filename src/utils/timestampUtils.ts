import React, { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';

// Timestamp constants for articles
export const getArticleTimestamps = {
  WORDPRESS_ARTICLE: () => new Date().getTime() - (24 * 60 * 60 * 1000), // 1 day ago
  EXPANDING_INDUSTRIES: () => new Date().getTime() - (2 * 24 * 60 * 60 * 1000), // 2 days ago
  EQUINE_WEBSITE_DESIGN: () => new Date().getTime() - (4 * 24 * 60 * 60 * 1000), // 4 days ago
  LOGO_DESIGN_TIPS: () => new Date().getTime() - (6 * 24 * 60 * 60 * 1000), // 6 days ago
  BRANDING_MATTERS: () => new Date().getTime() - (6 * 24 * 60 * 60 * 1000), // 6 days ago
} as const;

// Helper function to format timestamps for display
export const formatTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp);
  return date.toLocaleString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
};

// Helper function to get relative time
export const getRelativeTime = (timestamp: number): string => {
  return formatDistanceToNow(timestamp, { addSuffix: true });
};

// Custom hook for real-time timestamp updates
export const useRealTimeTimestamp = (timestamp: number) => {
  const [relativeTime, setRelativeTime] = useState(getRelativeTime(timestamp));

  useEffect(() => {
    // Update every minute
    const interval = setInterval(() => {
      setRelativeTime(getRelativeTime(timestamp));
    }, 60000); // 60 seconds

    return () => clearInterval(interval);
  }, [timestamp]);

  return relativeTime;
}; 