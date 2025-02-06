import React from 'react';
import { Sun, Menu } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { NavLink } from '../ui/NavLink';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  scrolled: boolean;
  onMenuOpen: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ scrolled, onMenuOpen }) => {
  return (
    <motion.nav 
      className={`fixed w-full z-40 transition-all duration-500 ${
        scrolled ? 'py-3 sm:py-4 bg-white/90 backdrop-blur-md shadow-lg' : 'py-4 sm:py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center gap-12">
          <motion.div 
            className="flex items-center gap-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <NavLink href="#">NEW ARRIVALS</NavLink>
            <motion.div 
              className="w-1 h-1 rounded-full bg-orange-400"
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
            <NavLink href="#">COLLABORATION</NavLink>
            <motion.div 
              className="w-1 h-1 rounded-full bg-blue-700"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <NavLink href="#">ABOUT US</NavLink>
          </motion.div>
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button 
              onClick={onMenuOpen}
              className="relative px-8 py-3 bg-blue-700 rounded-full overflow-hidden group"
            >
              <motion.span 
                className="relative z-10 text-sm text-white tracking-[0.2em] font-medium block transition-all duration-300 group-hover:tracking-[0.3em]"
              >
                MENU
              </motion.span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </motion.button>
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 via-blue-700 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 blur transition-all duration-300 group-hover:blur-md"
              style={{ zIndex: -1 }}
            />
          </motion.div>
        </div>
        <motion.button 
          onClick={onMenuOpen}
          className="md:hidden relative p-2 rounded-full bg-blue-700 text-white overflow-hidden group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="h-5 w-5 relative z-10" />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </motion.button>
      </div>
    </motion.nav>
  );
}