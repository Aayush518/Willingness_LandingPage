import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroTitleProps {
  loaded: boolean;
}

export const HeroTitle: React.FC<HeroTitleProps> = ({ loaded }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={loaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="self-center"
    >
      <div className="relative z-10 mt-28 sm:mt-16 md:mt-0 pl-0 md:pl-24">
        <motion.h1 
          className="flex flex-col px-4 sm:px-6 md:px-0"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex items-baseline gap-3 sm:gap-3 md:gap-4">
            <motion.span 
              className="text-4xl sm:text-3xl md:text-6xl lg:text-8xl xl:text-9xl leading-[0.8] font-black text-emerald-800 tracking-tighter hover:text-emerald-700 transition-colors duration-300 drop-shadow-xl [text-shadow:_2px_2px_0_rgb(0_0_0_/_10%)] cursor-default"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              WELL
            </motion.span>
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Sparkles className="h-4 w-4 sm:h-4 sm:w-4 md:h-8 md:w-8 lg:h-10 lg:w-10 text-orange-500 drop-shadow-xl" />
            </motion.div>
          </div>
          <motion.span 
            className="text-4xl sm:text-3xl md:text-6xl lg:text-8xl xl:text-9xl leading-[0.8] font-black text-emerald-800 tracking-tighter -mt-1 sm:-mt-2 md:-mt-4 hover:text-emerald-700 transition-colors duration-300 drop-shadow-xl [text-shadow:_2px_2px_0_rgb(0_0_0_/_10%)] cursor-default"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            NESS
          </motion.span>
          <div className="flex items-center gap-3 sm:gap-3 md:gap-4 ml-1 sm:ml-2 md:ml-4 mt-3 sm:mt-3 md:mt-4">
            <motion.span 
              className="text-2xl sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl leading-[0.8] font-black text-blue-700 tracking-tighter hover:text-blue-600 transition-colors duration-300 drop-shadow-xl [text-shadow:_1px_1px_0_rgb(0_0_0_/_10%)] cursor-default"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              FOREVER
            </motion.span>
            <motion.div 
              className="w-2 h-2 sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full shadow-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <motion.span 
            className="text-5xl sm:text-4xl md:text-7xl lg:text-9xl xl:text-[10rem] leading-[0.8] font-black text-emerald-800 tracking-tighter mt-2 sm:mt-2 md:mt-0 hover:text-emerald-700 transition-colors duration-300 drop-shadow-xl [text-shadow:_3px_3px_0_rgb(0_0_0_/_10%)] cursor-default"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            YOUNG
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="hidden lg:block mt-12 text-lg xl:text-xl text-emerald-800/80 max-w-xl pl-2 tracking-wide leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover timeless elegance and sustainable fashion that celebrates both style and environmental consciousness.
          <motion.span 
            className="block mt-4 text-orange-500 font-medium"
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Explore our latest collection →
          </motion.span>
        </motion.p>
      </div>
    </motion.div>
  );
}