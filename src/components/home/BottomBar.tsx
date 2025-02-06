import React from 'react';

export const BottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-4 right-4 md:left-8 md:right-8 z-30">
      <div className="flex justify-between items-center max-w-[2000px] mx-auto bg-white/90 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="text-[10px] sm:text-xs md:text-sm tracking-widest text-emerald-900/80 font-medium">©2023</span>
          <span className="text-orange-500 text-[10px] sm:text-xs md:text-sm tracking-widest cursor-pointer hover:text-orange-400 transition-colors font-medium">
            WELLNESS WELLNESS
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
          <span className="text-[10px] sm:text-xs md:text-sm tracking-widest text-emerald-900/80 group-hover:text-orange-500 transition-colors font-medium">
            SCROLL DOWN
          </span>
          <div className="w-6 sm:w-8 md:w-12 h-px bg-emerald-900/20 group-hover:w-12 sm:group-hover:w-16 md:group-hover:w-24 group-hover:bg-orange-500 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
};