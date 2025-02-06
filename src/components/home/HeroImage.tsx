import React from 'react';
import { motion } from 'framer-motion';

interface HeroImageProps {
  loaded: boolean;
}

export const HeroImage: React.FC<HeroImageProps> = ({ loaded }) => {
  return (
    <motion.div 
      className="fixed inset-0"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={loaded ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="absolute inset-0 -top-[30%] sm:-top-[10%] md:-top-[15%] lg:-top-[20%]">
        <motion.div
          className="relative w-full h-[150%] sm:h-[130%] md:h-[140%] overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            src="https://images.unsplash.com/photo-1618375531912-867984bdfd87"
            alt="Fashion model"
            className="w-full h-full object-cover object-[center_15%] sm:object-[center_25%] filter contrast-125 brightness-110"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
      </div>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </motion.div>
  );
}