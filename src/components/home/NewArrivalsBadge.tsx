import React from 'react';
import { Sun } from 'lucide-react';

interface NewArrivalsBadgeProps {
  loaded: boolean;
}

export const NewArrivalsBadge: React.FC<NewArrivalsBadgeProps> = ({ loaded }) => {
  return (
    <div className="absolute top-24 sm:top-4 right-4 sm:right-auto sm:left-4 md:top-20 md:left-8 z-20 animate-float">
      <div className="bg-orange-500 rounded-full p-2 sm:p-3 md:p-4 w-10 h-10 sm:w-14 sm:h-14 md:w-24 md:h-24 flex items-center justify-center transform hover:scale-110 transition-all duration-500 cursor-pointer group shadow-lg hover:shadow-xl">
        <div className="text-center text-white relative">
          <div className="absolute inset-0 animate-spin-reverse-slower">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-full text-[3px] sm:text-[4px] md:text-[6px] font-bold"
                style={{ transform: `rotate(${i * 15}deg)` }}
              >
                NEW ARRIVALS •
              </div>
            ))}
          </div>
          <Sun className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 mx-auto transform group-hover:rotate-180 transition-transform duration-700" />
        </div>
      </div>
    </div>
  );
}