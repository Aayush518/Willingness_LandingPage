import React from 'react';
import { Sun } from 'lucide-react';

interface NewArrivalsBadgeProps {
  loaded: boolean;
}

export const NewArrivalsBadge: React.FC<NewArrivalsBadgeProps> = ({ loaded }) => {
  return (
    <div className="absolute top-0 sm:top-6 right-4 sm:right-auto sm:left-4 md:top-20 md:left-8 z-20 animate-float">
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full p-4 sm:p-6 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 flex items-center justify-center transform hover:scale-110 transition-all duration-500 cursor-pointer group shadow-lg hover:shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30">
        <div className="text-center text-white relative">
          <div className="absolute inset-0 animate-spin-reverse-slower">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-full text-[5px] sm:text-[6px] md:text-[8px] font-bold"
                style={{ transform: `rotate(${i * 15}deg)` }}
              >
                NEW ARRIVALS •
              </div>
            ))}
          </div>
          <Sun className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 mx-auto transform group-hover:rotate-180 transition-transform duration-700" />
        </div>
      </div>
    </div>
  );
};