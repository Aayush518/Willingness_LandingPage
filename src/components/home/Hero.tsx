import React from 'react';
import { HeroImage } from './HeroImage';
import { HeroTitle } from './HeroTitle';
import { FloatingCards } from './FloatingCards';
import { BottomBar } from './BottomBar';
import { NewArrivalsBadge } from './NewArrivalsBadge';

interface HeroProps {
  loaded: boolean;
}

export const Hero: React.FC<HeroProps> = ({ loaded }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 overflow-hidden">
      <HeroImage loaded={loaded} />
      
      <div className="relative z-10 max-w-[2000px] mx-auto min-h-screen">
        <div className="relative min-h-screen px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-20 sm:pt-24 md:pt-0">
          <NewArrivalsBadge loaded={loaded} />
          <HeroTitle loaded={loaded} />
          <FloatingCards loaded={loaded} />
        </div>
        <BottomBar />
      </div>
    </div>
  );
};