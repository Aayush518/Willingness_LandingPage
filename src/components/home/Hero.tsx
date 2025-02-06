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
        <div className="relative min-h-screen px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 pt-24 sm:pt-24 md:pt-0">
          <NewArrivalsBadge loaded={loaded} />
          <HeroTitle loaded={loaded} />
          <FloatingCards loaded={loaded} />
        </div>
        <BottomBar />
      </div>
      
      {/* Desktop-only decorative elements - Adjusted positions */}
      <div className="hidden lg:block">
        <div className="fixed top-40 left-24 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="fixed bottom-40 right-24 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-emerald-900/5 rounded-full"></div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-emerald-900/10 rounded-full"></div>
      </div>
    </div>
  );
};