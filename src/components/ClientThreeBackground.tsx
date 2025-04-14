import { lazy, Suspense } from 'react';

const ThreeBackground = lazy(() => import('./ThreeBackground'));

export default function ClientThreeBackground() {
  return (
    <Suspense fallback={<div className="absolute inset-0 bg-[#0A0A0A]" />}>
      <ThreeBackground />
    </Suspense>
  );
} 