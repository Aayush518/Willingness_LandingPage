import React from 'react';
import { motion } from 'framer-motion';

interface FloatingCardsProps {
  loaded: boolean;
}

export const FloatingCards: React.FC<FloatingCardsProps> = ({ loaded }) => {
  return (
    <div className="relative self-center mt-8 sm:mt-6 md:mt-0 md:h-screen md:py-24">
      <div className="relative md:absolute md:inset-0 md:overflow-hidden">
        {/* Desktop-only decorative elements */}
        <div className="hidden md:block">
          <motion.div 
            className="absolute top-[25%] right-[45%] w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-[30%] left-[35%] w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div 
            className="absolute top-[55%] right-[25%] w-24 h-24 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* Enhanced connecting lines */}
          <motion.div 
            className="absolute top-[35%] right-[30%] w-[200px] h-[1px]"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.2), transparent)",
              transform: "rotate(30deg)"
            }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-[40%] left-[30%] w-[250px] h-[1px]"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.2), transparent)",
              transform: "rotate(-15deg)"
            }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div 
            className="absolute top-[65%] right-[35%] w-[150px] h-[1px]"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)",
              transform: "rotate(45deg)"
            }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="flex flex-col md:block px-4 sm:px-6 md:px-0 gap-4 sm:gap-10 md:gap-0">
          {/* Wellness Card */}
          <motion.div 
            className={`relative md:absolute md:top-[12%] lg:top-[15%] md:right-12 lg:right-16 xl:right-20 z-20 w-[70%] sm:w-[60%] md:w-[180px] lg:w-[220px] xl:w-[260px] self-end`}
            initial={{ opacity: 0, y: 50 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="bg-white/95 backdrop-blur-sm shadow-xl p-3 sm:p-4 md:p-3 lg:p-4 rounded-xl border border-emerald-50 hover:shadow-2xl group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div 
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mb-2 sm:mb-3"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <p className="text-[10px] sm:text-xs md:text-xs lg:text-sm leading-relaxed tracking-wide text-emerald-900 font-medium">
                WELLNESS BEGAN AS A MOOD BOARD FOR LIFE. A COLLECTION OF IMAGES FROM PAST AND PRESENT THAT REPRESENT A LIFE SURROUNDED BY BEAUTY.
              </p>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 rounded-xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
              />
            </motion.div>
          </motion.div>

          {/* Coming Soon Card */}
          <motion.div 
            className={`order-first md:order-none relative md:absolute md:bottom-[8%] lg:bottom-[10%] md:right-16 lg:right-20 z-20 w-[35%] sm:w-[40%] md:w-[160px] lg:w-[200px] xl:w-[220px] self-end mr-4 mb-4 md:mb-0`}
            initial={{ opacity: 0, y: 50 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="bg-white/95 backdrop-blur-sm shadow-xl p-2 sm:p-4 md:p-3 lg:p-4 rounded-xl border border-emerald-50 hover:shadow-2xl group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                <motion.div 
                  className="text-orange-500 font-medium tracking-widest text-[6px] sm:text-[8px] md:text-[9px] lg:text-xs"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ComingSoon
                </motion.div>
                <motion.div 
                  className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-emerald-900 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <motion.div 
                className="text-base sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-tighter text-emerald-900"
                whileHover={{ color: "#f97316" }}
                transition={{ duration: 0.3 }}
              >
                23.05.23
              </motion.div>
              <motion.div 
                className="absolute -top-2 -right-2 w-4 h-4 lg:w-5 lg:h-5 bg-orange-500 rounded-full opacity-0"
                whileHover={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Brand Statement Card */}
          <motion.div 
            className="relative z-20 w-[80%] sm:w-[70%] md:w-[240px] lg:w-[280px] xl:w-[320px] self-start md:absolute md:top-[55%] lg:top-[60%] md:-translate-y-1/2 md:left-20 lg:left-24"
            initial={{ opacity: 0, x: -50 }}
            animate={loaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="bg-emerald-900/95 backdrop-blur-sm p-4 sm:p-5 md:p-4 lg:p-5 xl:p-6 rounded-xl shadow-2xl border border-emerald-700/50 group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <motion.div 
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-700 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </div>
              <motion.h2 
                className="text-xs sm:text-sm md:text-sm lg:text-base font-bold text-white mb-2"
                whileHover={{ color: "#fb923c" }}
                transition={{ duration: 0.3 }}
              >
                AS A BRAND WE VALUE OUR MOTHER EARTH.
              </motion.h2>
              <p className="text-[9px] sm:text-[11px] md:text-xs lg:text-sm leading-relaxed tracking-wide text-gray-300">
                THIS IS WHY WE HAVE PARTNERED WITH LEADING ENVIRONMENTAL NON-PROFIT ORGANIZATIONS TO HELP REDUCE AND OFFSET THE DAMAGE THAT PRODUCING GARMENTS DOES TO OUR PLANET.
              </p>
              <motion.div 
                className="absolute inset-0 rounded-xl border-2 border-emerald-500/0"
                whileHover={{ borderColor: "rgba(16, 185, 129, 0.2)" }}
                transition={{ duration: 0.7 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}