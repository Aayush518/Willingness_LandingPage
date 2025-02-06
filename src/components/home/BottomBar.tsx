import React from 'react';

export const BottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-3 sm:bottom-4 md:bottom-6 left-3 right-3 sm:left-4 sm:right-4 md:left-6 md:right-6 z-30">
      <div className="flex justify-between items-center max-w-[2000px] mx-auto bg-white/80 backdrop-blur-md px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <span className="text-[8px] sm:text-[10px] md:text-xs tracking-widest text-emerald-900/80 font-medium">©2023</span>
          <span className="text-orange-500 text-[8px] sm:text-[10px] md:text-xs tracking-widest cursor-pointer hover:text-orange-400 transition-colors font-medium">
            WELLNESS WELLNESS
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
          <span className="text-[8px] sm:text-[10px] md:text-xs tracking-widest text-emerald-900/80 group-hover:text-orange-500 transition-colors font-medium">
            SCROLL DOWN
          </span>
          <div className="w-4 sm:w-6 md:w-8 h-px bg-emerald-900/20 group-hover:w-8 sm:group-hover:w-12 md:group-hover:w-16 group-hover:bg-orange-500 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
}