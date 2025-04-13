"use client";

import { useEffect, useRef } from 'react';

const SwirlBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let time = 0;
    const numPoints = 50;
    const points: { x: number; y: number; angle: number; speed: number }[] = [];

    // Initialize points in a circular pattern
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        angle: (i / numPoints) * Math.PI * 2,
        speed: 0.1 + Math.random() * 0.1
      });
    }

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw points
      points.forEach((point, i) => {
        // Update angle
        point.angle += point.speed * 0.01;
        
        // Calculate position in a swirling pattern
        const radius = Math.min(canvas.width, canvas.height) * 0.3;
        const swirlRadius = radius * (0.5 + Math.sin(time + i * 0.1) * 0.25);
        point.x = canvas.width / 2 + Math.cos(point.angle) * swirlRadius;
        point.y = canvas.height / 2 + Math.sin(point.angle) * swirlRadius;

        // Draw point with gradient
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, 10
        );
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      time += 0.01;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'rgba(0, 0, 0, 0.8)' }}
    />
  );
};

export default SwirlBackground; 