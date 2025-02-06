import React, { useEffect, useRef } from 'react';

interface MouseTrailProps {
  mousePosition: { x: number; y: number };
}

export const MouseTrail: React.FC<MouseTrailProps> = ({ mousePosition }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<Array<{ x: number; y: number; age: number; velocity: number; angle: number }>>([]);
  const animationFrameId = useRef<number>();
  const lastMousePosition = useRef(mousePosition);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate velocity and angle
      const velocity = Math.sqrt(
        Math.pow(mousePosition.x - lastMousePosition.current.x, 2) +
        Math.pow(mousePosition.y - lastMousePosition.current.y, 2)
      );
      const angle = Math.atan2(
        mousePosition.y - lastMousePosition.current.y,
        mousePosition.x - lastMousePosition.current.x
      );

      // Add new point with angle
      points.current.push({
        x: mousePosition.x,
        y: mousePosition.y,
        age: 0,
        velocity,
        angle
      });

      lastMousePosition.current = mousePosition;

      // Enhanced trail rendering
      points.current.forEach((point, i) => {
        point.age += 1;
        if (point.age > 30) {
          points.current.splice(i, 1);
          return;
        }

        const opacity = 1 - point.age / 30;
        const size = Math.min(5, 2 + point.velocity * 0.08);
        
        // Create enhanced gradient trail
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, size * 2
        );
        gradient.addColorStop(0, `rgba(5, 150, 105, ${opacity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(249, 115, 22, ${opacity * 0.4})`);

        // Draw main trail
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Add directional particles
        if (point.velocity > 1) {
          const particleCount = Math.floor(point.velocity);
          for (let j = 0; j < particleCount; j++) {
            const particleAngle = point.angle + (Math.random() - 0.5) * Math.PI / 2;
            const distance = Math.random() * size * 3;
            const px = point.x + Math.cos(particleAngle) * distance;
            const py = point.y + Math.sin(particleAngle) * distance;
            
            ctx.beginPath();
            ctx.arc(px, py, size * 0.3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(5, 150, 105, ${opacity * 0.3})`;
            ctx.fill();
          }
        }

        // Enhanced glow effect
        ctx.shadowColor = 'rgba(5, 150, 105, 0.4)';
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'overlay' }}
    />
  );
};