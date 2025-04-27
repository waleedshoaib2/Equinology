import { lazy } from 'react';
import { useAnimation } from '../contexts/AnimationContext';

const ThreeBackground = lazy(() => import('./ThreeBackground'));

export default function ClientThreeBackground() {
  const { isMobile } = useAnimation();

  if (isMobile) {
    return null;
  }

  return <ThreeBackground />;
} 