import React, { useEffect, useState } from 'react';
import { HeroImage } from './HeroImage';
import { HeroTitle } from './HeroTitle';
import { FloatingCards } from './FloatingCards';
import { BottomBar } from './BottomBar';
import { NewArrivalsBadge } from './NewArrivalsBadge';
import { ParallaxText } from './ParallaxText';
import { MouseTrail } from './MouseTrail';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  loaded: boolean;
}

export const Hero: React.FC<HeroProps> = ({ loaded }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div 
      className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 overflow-hidden"
      style={{ opacity: backgroundOpacity, scale }}
    >
      <MouseTrail mousePosition={mousePosition} />
      <HeroImage loaded={loaded} />
      
      <div className="relative z-10 max-w-[2000px] mx-auto min-h-screen">
        <div className="relative min-h-screen px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 pt-24 sm:pt-24 md:pt-0">
          <NewArrivalsBadge loaded={loaded} />
          <HeroTitle loaded={loaded} />
          <FloatingCards loaded={loaded} />
        </div>
        
        <motion.div 
          className="relative py-12 overflow-hidden"
          whileInView={{ opacity: [0, 1], y: [50, 0] }}
          transition={{ duration: 0.8 }}
        >
          <ParallaxText baseVelocity={-2}>WELLNESS • FOREVER • YOUNG •</ParallaxText>
          <div className="h-8" />
          <ParallaxText baseVelocity={2}>Aayush518 • Aayush518 • Aayush518 •</ParallaxText>
        </motion.div>
        
        <BottomBar />
      </div>
    </motion.div>
  );
};