import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

// AnimatedSphere now takes a `pauseAnimation` prop.
// When true, we skip updating the position and rotation.
function AnimatedSphere({ pauseAnimation }: { pauseAnimation: boolean }) {
  const sphereRef = useRef<THREE.Mesh>(null);
  const frameCount = useRef(0);

  useFrame(({ clock }) => {
    if (!sphereRef.current) return;
    // If scrolling is happening, skip updates to reduce GPU load
    if (pauseAnimation) return;
    
    // Throttle updates to every other frame
    frameCount.current = (frameCount.current + 1) % 2;
    if (frameCount.current !== 0) return;

    const elapsed = clock.getElapsedTime();
    // Apply subtle movement and rotation
    sphereRef.current.position.y = Math.sin(elapsed * 0.5) * 0.15;
    sphereRef.current.position.x = Math.cos(elapsed * 0.3) * 0.1;
    sphereRef.current.rotation.x = elapsed * 0.1;
    sphereRef.current.rotation.y = elapsed * 0.05;
  });

  return (
    <Sphere ref={sphereRef} args={[1.5, 32, 32]} position={[1, 0, -1]}>
      <meshPhongMaterial
        color="#3CAAFF"
        opacity={0.08}
        transparent
        wireframe
      />
    </Sphere>
  );
}

export default function ThreeBackground() {
  const [mounted, setMounted] = useState(false);
  // Track whether the page is being scrolled.
  const [isScrolling, setIsScrolling] = useState(false);
  // We'll use a timeout to debounce the scroll event.
  let scrollTimeout: ReturnType<typeof setTimeout>;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 100); // 100ms debounce after scrolling stops
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-[#0A0A0A]" />;
  }

  return (
    <div
      className="absolute inset-0 -z-10"
      style={{ willChange: "transform" }} // Hints browser for better GPU optimization
    >
      <Canvas 
        camera={{ position: [0, 0, 5] }}
        dpr={[1, 1]} // Limit device pixel ratio to reduce load on mobile devices
        gl={{ antialias: false }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <AnimatedSphere pauseAnimation={isScrolling} />
      </Canvas>
    </div>
  );
}