import React from 'react';
import { Sun } from 'lucide-react';

export const NewArrivalsBadge: React.FC = () => {
  return (
    <div className="absolute -top-16 -left-4 animate-pulse">
      <div className="bg-orange-400 rounded-full p-6 w-32 h-32 flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer group">
        <div className="text-center text-white relative">
          <div className="absolute inset-0 animate-spin-reverse-slower">
            {[...Array(32)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-full text-[8px] font-bold"
                style={{ transform: `rotate(${i * 11.25}deg)` }}
              >
                NEW ARRIVALS •
              </div>
            ))}
          </div>
          <Sun className="h-8 w-8 mx-auto transform group-hover:rotate-180 transition-transform duration-700" />
        </div>
      </div>
    </div>
  );
};