import React from 'react';

interface FloatingCardsProps {
  loaded: boolean;
}

export const FloatingCards: React.FC<FloatingCardsProps> = ({ loaded }) => {
  return (
    <div className="relative self-center mt-6 sm:mt-8 md:mt-0 md:h-screen md:py-24">
      <div className="relative md:absolute md:inset-0 md:overflow-hidden">
        {/* Top Card */}
        <div className={`relative md:absolute md:top-48 md:right-12 z-20 transition-all duration-1000 max-w-[250px] sm:max-w-[280px] md:max-w-sm ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="bg-white/95 backdrop-blur-md shadow-xl p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl transform hover:scale-105 transition-all duration-500 border border-emerald-50 hover:shadow-2xl">
            <p className="text-[11px] sm:text-xs md:text-sm leading-relaxed tracking-wide text-emerald-900 font-medium">
              WELLNESS BEGAN AS A MOOD BOARD FOR LIFE. A COLLECTION OF IMAGES FROM PAST AND PRESENT THAT REPRESENT A LIFE SURROUNDED BY BEAUTY.
            </p>
          </div>
        </div>

        {/* Brand Statement Card */}
        <div className="relative z-20 max-w-[280px] sm:max-w-[320px] md:max-w-md mx-auto mt-4 sm:mt-6 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-8 transform hover:scale-105 transition-all duration-500">
          <div className="bg-gradient-to-br from-emerald-900/95 to-emerald-800/95 backdrop-blur-md p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-2xl border border-emerald-700/50 hover:shadow-emerald-900/20">
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 hover:text-orange-400 transition-colors">
              AS A BRAND WE VALUE OUR MOTHER EARTH.
            </h2>
            <p className="text-[10px] sm:text-xs md:text-sm leading-relaxed tracking-wide text-gray-300">
              THIS IS WHY WE HAVE PARTNERED WITH LEADING ENVIRONMENTAL NON-PROFIT ORGANIZATIONS TO HELP REDUCE AND OFFSET THE DAMAGE THAT PRODUCING GARMENTS DOES TO OUR PLANET.
            </p>
          </div>
        </div>

        {/* Bottom Card */}
        <div className={`relative md:absolute md:bottom-48 md:right-24 z-20 transition-all duration-1000 delay-200 mt-4 sm:mt-6 md:mt-0 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md shadow-xl p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl transform hover:scale-105 transition-all duration-500 border border-emerald-50 hover:shadow-2xl">
            <div className="text-orange-500 font-medium mb-0.5 sm:mb-1 tracking-widest text-[10px] sm:text-xs md:text-sm">
              ComingSoon
            </div>
            <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-emerald-900 drop-shadow-sm">23.05.23</div>
          </div>
        </div>
      </div>
    </div>
  );
};