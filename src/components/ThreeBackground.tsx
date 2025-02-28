import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      // More subtle movement
      sphereRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.15;
      sphereRef.current.position.x = Math.cos(clock.getElapsedTime() * 0.3) * 0.1;
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.1;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.05;
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
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}