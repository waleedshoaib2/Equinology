// Fixed timestamp for April 27, 2025 2:57 PM
const FIXED_TIMESTAMP = new Date('2025-04-27T14:57:00').getTime();

/** Return a timestamp exactly 1 second ago from the fixed timestamp. */
export function timestampDaysAgo(): number {
  return FIXED_TIMESTAMP - 1000;
}

/** Return a timestamp exactly 1 second ago from the fixed timestamp. */
export function randomTimestampLast(): number {
  return FIXED_TIMESTAMP - 1000;
} 