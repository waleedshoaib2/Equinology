export function randomDateInLastMonth(): string {
  const now = Date.now();
  const msInMonth = 1000 * 60 * 60 * 24 * 30;
  return new Date(now - Math.random() * msInMonth).toISOString();
} 