import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      const elapsed = clock.getElapsedTime();
      // More subtle movement (same as before)
      sphereRef.current.position.y = Math.sin(elapsed * 0.5) * 0.15;
      sphereRef.current.position.x = Math.cos(elapsed * 0.3) * 0.1;
      sphereRef.current.rotation.x = elapsed * 0.1;
      sphereRef.current.rotation.y = elapsed * 0.05;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1.5, 64, 64]} position={[1, 0, -1]}>
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect runs only on the client.
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }} dpr={1}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}