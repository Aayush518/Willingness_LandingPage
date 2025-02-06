import React from 'react';
import { Sun, Menu } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { NavLink } from '../ui/NavLink';

interface NavigationProps {
  scrolled: boolean;
  onMenuOpen: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ scrolled, onMenuOpen }) => {
  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${
      scrolled ? 'py-3 sm:py-4 bg-white/90 backdrop-blur-md shadow-lg' : 'py-4 sm:py-6'
    }`}>
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-8">
            <NavLink href="#">NEW ARRIVALS</NavLink>
            <div className="w-2 h-2 rotate-45 bg-orange-400"></div>
            <NavLink href="#">COLLABORATION</NavLink>
            <div className="w-2 h-2 rotate-45 bg-blue-700"></div>
            <NavLink href="#">ABOUT US</NavLink>
          </div>
          <button 
            onClick={onMenuOpen}
            className="group relative overflow-hidden px-8 py-3 bg-blue-700 rounded-full hover:bg-blue-800 transition-colors"
          >
            <span className="relative z-10 text-sm text-white tracking-[0.2em] font-medium">MENU</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
        <button 
          onClick={onMenuOpen}
          className="md:hidden p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
}