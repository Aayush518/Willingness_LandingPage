import React from 'react';
import { Sun } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
      <Sun className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500 group-hover:animate-spin-slow transition-all duration-300" />
      <span className="font-bold text-lg sm:text-xl tracking-wide group-hover:tracking-widest transition-all duration-300">
        WELLNESSCLUB
      </span>
    </div>
  );
}