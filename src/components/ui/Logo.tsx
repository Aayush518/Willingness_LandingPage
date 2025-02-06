import React from 'react';
import { Sun } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <Sun className="h-8 w-8 text-orange-500 group-hover:animate-spin-slow transition-all duration-300" />
      <span className="font-bold text-xl tracking-wide group-hover:tracking-widest transition-all duration-300">
        WELLNESSCLUB
      </span>
    </div>
  );
};