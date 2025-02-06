import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeroTitleProps {
  loaded: boolean;
}

export const HeroTitle: React.FC<HeroTitleProps> = ({ loaded }) => {
  return (
    <div className={`self-center transition-all duration-1000 ${
      loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
    }`}>
      <div className="relative z-10 mt-20 sm:mt-24 md:mt-0 pl-0 md:pl-24">
        <h1 className="flex flex-col">
          <div className="flex items-baseline gap-4">
            <span className="text-4xl sm:text-5xl md:text-7xl lg:text-[10rem] leading-[0.8] font-black text-emerald-800 tracking-tighter hover:text-emerald-700 transition-colors duration-300 drop-shadow-xl">
              WELL
            </span>
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 md:h-10 md:w-10 text-orange-500 animate-pulse drop-shadow-xl" />
          </div>
          <span className="text-4xl sm:text-5xl md:text-7xl lg:text-[10rem] leading-[0.8] font-black text-emerald-800 tracking-tighter -mt-2 sm:-mt-4 md:-mt-6 hover:text-emerald-700 transition-colors duration-300 drop-shadow-xl">
            NESS
          </span>
          <div className="flex items-center gap-4 md:gap-6 ml-2 md:ml-4 mt-4 md:mt-6">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[6rem] leading-[0.8] font-black text-blue-700 tracking-tighter hover:text-blue-600 transition-colors duration-300 drop-shadow-xl">
              FOREVER
            </span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-5 md:h-5 rotate-45 bg-gradient-to-br from-orange-400 to-orange-500 animate-pulse shadow-xl"></div>
          </div>
          <span className="text-5xl sm:text-6xl md:text-8xl lg:text-[12rem] leading-[0.8] font-black text-emerald-800 tracking-tighter mt-2 sm:mt-0 md:-mt-4 hover:text-emerald-700 transition-colors duration-300 drop-shadow-xl">
            YOUNG
          </span>
        </h1>
      </div>
    </div>
  );
};