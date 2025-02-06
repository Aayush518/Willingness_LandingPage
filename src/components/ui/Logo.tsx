import React from 'react';
import { Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export const Logo: React.FC = () => {
  return (
    <motion.div 
      className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div
        className="relative"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Sun className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500 relative z-10" />
        <motion.div
          className="absolute inset-0 bg-orange-500/20 rounded-full blur-md"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      <motion.div className="relative">
        <motion.span 
          className="font-bold text-lg sm:text-xl tracking-wide text-emerald-900"
          whileHover={{ letterSpacing: "0.2em" }}
          transition={{ duration: 0.3 }}
        >
          WELLNESSCLUB
        </motion.span>
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-orange-400/10 to-emerald-500/10 rounded-lg opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100"
          style={{ zIndex: -1 }}
        />
      </motion.div>
    </motion.div>
  );
}