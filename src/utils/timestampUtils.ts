// Timestamp constants for articles
export const ARTICLE_TIMESTAMPS = {
  WORDPRESS_ARTICLE: new Date("2025-04-16T16:10:00").getTime(),
  EXPANDING_INDUSTRIES: new Date("2025-04-15T10:00:00").getTime(),
  EQUINE_WEBSITE_DESIGN: new Date("2025-04-13T15:30:00").getTime(),
  LOGO_DESIGN_TIPS: new Date("2025-04-11T09:15:00").getTime(),
  BRANDING_MATTERS: new Date("2025-04-11T09:15:00").getTime(),
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

// Helper function to get relative time (e.g., "2 hours ago")
export const getRelativeTime = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;
  
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  return 'just now';
}; 