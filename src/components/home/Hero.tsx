import React from 'react';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
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
      
      {/* Geometric Patterns - Desktop Only */}
      <div className="hidden lg:block">
        {/* Large circles */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-emerald-900/[0.02] rounded-full"></div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-emerald-900/[0.03] rounded-full"></div>
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-emerald-900/[0.05] rounded-full"></div>
        
        {/* Gradient orbs */}
        <div className="fixed top-20 left-[15%] w-[500px] h-[500px] bg-emerald-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="fixed bottom-20 right-[10%] w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
        <div className="fixed top-[40%] right-[5%] w-[400px] h-[400px] bg-orange-100/20 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
        
        {/* Decorative lines */}
        <div className="fixed top-0 left-[10%] w-px h-[200px] bg-gradient-to-b from-transparent via-emerald-900/10 to-transparent"></div>
        <div className="fixed top-0 right-[15%] w-px h-[300px] bg-gradient-to-b from-transparent via-emerald-900/10 to-transparent"></div>
        <div className="fixed bottom-0 left-[20%] w-px h-[250px] bg-gradient-to-t from-transparent via-emerald-900/10 to-transparent"></div>
        <div className="fixed bottom-0 right-[25%] w-px h-[150px] bg-gradient-to-t from-transparent via-emerald-900/10 to-transparent"></div>
        
        {/* Corner accents */}
        <div className="fixed top-12 left-12 w-[100px] h-[100px] border-l-2 border-t-2 border-emerald-900/10 rounded-tl-3xl"></div>
        <div className="fixed top-12 right-12 w-[100px] h-[100px] border-r-2 border-t-2 border-emerald-900/10 rounded-tr-3xl"></div>
        <div className="fixed bottom-12 left-12 w-[100px] h-[100px] border-l-2 border-b-2 border-emerald-900/10 rounded-bl-3xl"></div>
        <div className="fixed bottom-12 right-12 w-[100px] h-[100px] border-r-2 border-b-2 border-emerald-900/10 rounded-br-3xl"></div>
        
        {/* Diagonal lines */}
        <div className="fixed top-0 left-0 w-[200px] h-[2px] bg-gradient-to-r from-transparent via-emerald-900/5 to-transparent transform rotate-45 translate-x-[100px] translate-y-[100px]"></div>
        <div className="fixed top-0 right-0 w-[200px] h-[2px] bg-gradient-to-r from-transparent via-emerald-900/5 to-transparent transform -rotate-45 -translate-x-[100px] translate-y-[100px]"></div>
      </div>
      
      <div className="relative z-10 max-w-[2000px] mx-auto min-h-screen">
        <div className="relative min-h-screen px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 pt-24 sm:pt-24 md:pt-0">
          <NewArrivalsBadge loaded={loaded} />
          <HeroTitle loaded={loaded} />
          <FloatingCards loaded={loaded} />
        </div>
        <BottomBar />
      </div>
    </div>
  );
};