import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity } from 'framer-motion';
import { wrap } from '@motionone/utils';

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

export function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div
        className="text-2xl md:text-4xl font-bold tracking-tight text-emerald-900/20 flex whitespace-nowrap flex-nowrap hover:text-emerald-900/40 transition-colors duration-500"
        style={{ x }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <span className="block mr-4">{children} </span>
        <span className="block mr-4">{children} </span>
        <span className="block mr-4">{children} </span>
        <span className="block mr-4">{children} </span>
      </motion.div>
    </div>
  );
}

function useAnimationFrame(callback: (time: number, delta: number) => void) {
  const initialTimestamp = useRef<number>(performance.now());
  const frameRef = useRef<number>(0);

  React.useEffect(() => {
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  function animate(timestamp: number) {
    const delta = timestamp - initialTimestamp.current;
    callback(timestamp, delta);
    initialTimestamp.current = timestamp;
    frameRef.current = requestAnimationFrame(animate);
  }
}