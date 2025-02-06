import React from 'react';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <motion.a 
      href={href} 
      className="relative text-sm tracking-[0.2em] text-emerald-900 transition-colors group"
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
      <motion.div 
        className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-orange-400 to-orange-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
      />
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-orange-400/20 to-orange-500/20 rounded-lg opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100"
        style={{ zIndex: -1 }}
      />
    </motion.a>
  );
};