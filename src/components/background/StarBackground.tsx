import { useRef, useEffect } from 'react';

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Create stars
    const stars: {x: number; y: number; radius: number; opacity: number; twinkleSpeed: number}[] = [];
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2 + 0.1, // Varied star sizes
        opacity: Math.random() * 0.7 + 0.3, // Varied opacity
        twinkleSpeed: Math.random() * 0.01 + 0.003 // Varied twinkle speed
      });
    }
    
    let animationFrameId: number;
    let time = 0;
    
    // Animation loop
    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach(star => {
        // Subtle twinkling effect
        const twinkleOpacity = star.opacity + Math.sin(time * star.twinkleSpeed * 20) * 0.2;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 220, 255, ${twinkleOpacity})`;
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 bg-gradient-to-b from-[#050505] to-[#0A0A0A]"
    />
  );
};

export default StarBackground;