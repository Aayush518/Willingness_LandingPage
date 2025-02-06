import React from 'react';

interface FloatingCardsProps {
  loaded: boolean;
}

export const FloatingCards: React.FC<FloatingCardsProps> = ({ loaded }) => {
  return (
    <div className="relative self-center mt-8 sm:mt-6 md:mt-0 md:h-screen md:py-24">
      <div className="relative md:absolute md:inset-0 md:overflow-hidden">
        {/* Desktop-only decorative elements */}
        <div className="hidden md:block">
          <div className="absolute top-[25%] right-[45%] w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[30%] left-[35%] w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
          <div className="absolute top-[55%] right-[25%] w-24 h-24 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
          
          {/* Adjusted connecting lines */}
          <div className="absolute top-[35%] right-[30%] w-[200px] h-[2px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent transform rotate-[30deg]"></div>
          <div className="absolute bottom-[40%] left-[30%] w-[250px] h-[2px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent transform -rotate-[15deg]"></div>
          <div className="absolute top-[65%] right-[35%] w-[150px] h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform rotate-[45deg]"></div>
        </div>

        <div className="flex flex-col md:block px-4 sm:px-6 md:px-0 gap-4 sm:gap-10 md:gap-0">
          {/* Wellness Card - Moved further right */}
          <div className={`relative md:absolute md:top-[12%] lg:top-[15%] md:right-12 lg:right-16 xl:right-20 z-20 transition-all duration-1000 w-[70%] sm:w-[60%] md:w-[180px] lg:w-[220px] xl:w-[260px] self-end ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="bg-white/95 backdrop-blur-sm shadow-xl p-3 sm:p-4 md:p-3 lg:p-4 rounded-xl transform hover:scale-105 transition-all duration-500 border border-emerald-50 hover:shadow-2xl group">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mb-2 sm:mb-3 group-hover:scale-150 transition-transform"></div>
              <p className="text-[10px] sm:text-xs md:text-xs lg:text-sm leading-relaxed tracking-wide text-emerald-900 font-medium">
                WELLNESS BEGAN AS A MOOD BOARD FOR LIFE. A COLLECTION OF IMAGES FROM PAST AND PRESENT THAT REPRESENT A LIFE SURROUNDED BY BEAUTY.
              </p>
              <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl"></div>
            </div>
          </div>

          {/* Coming Soon Card - Moved closer to footer */}
          <div className={`order-first md:order-none relative md:absolute md:bottom-[8%] lg:bottom-[10%] md:right-16 lg:right-20 z-20 transition-all duration-1000 delay-200 w-[35%] sm:w-[40%] md:w-[160px] lg:w-[200px] xl:w-[220px] self-end mr-4 mb-4 md:mb-0 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="bg-white/95 backdrop-blur-sm shadow-xl p-2 sm:p-4 md:p-3 lg:p-4 rounded-xl transform hover:scale-105 transition-all duration-500 border border-emerald-50 hover:shadow-2xl group">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                <div className="text-orange-500 font-medium tracking-widest text-[6px] sm:text-[8px] md:text-[9px] lg:text-xs">
                  ComingSoon
                </div>
                <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-emerald-900 rounded-full group-hover:scale-150 transition-transform"></div>
              </div>
              <div className="text-base sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-tighter text-emerald-900 group-hover:text-orange-500 transition-colors">23.05.23</div>
              <div className="hidden md:block absolute -top-2 -right-2 w-4 h-4 lg:w-5 lg:h-5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>

          {/* Brand Statement Card - Made smaller and moved down */}
          <div className="relative z-20 w-[80%] sm:w-[70%] md:w-[240px] lg:w-[280px] xl:w-[320px] self-start md:absolute md:top-[55%] lg:top-[60%] md:-translate-y-1/2 md:left-20 lg:left-24 transform hover:scale-105 transition-all duration-500 mb-8 md:mb-0">
            <div className="bg-emerald-900/95 backdrop-blur-sm p-4 sm:p-5 md:p-4 lg:p-5 xl:p-6 rounded-xl shadow-2xl border border-emerald-700/50 hover:shadow-emerald-900/20 group">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full group-hover:scale-150 transition-transform"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-700 rounded-full group-hover:scale-150 transition-transform"></div>
              </div>
              <h2 className="text-xs sm:text-sm md:text-sm lg:text-base font-bold text-white mb-2 hover:text-orange-400 transition-colors">
                AS A BRAND WE VALUE OUR MOTHER EARTH.
              </h2>
              <p className="text-[9px] sm:text-[11px] md:text-xs lg:text-sm leading-relaxed tracking-wide text-gray-300">
                THIS IS WHY WE HAVE PARTNERED WITH LEADING ENVIRONMENTAL NON-PROFIT ORGANIZATIONS TO HELP REDUCE AND OFFSET THE DAMAGE THAT PRODUCING GARMENTS DOES TO OUR PLANET.
              </p>
              <div className="hidden md:block absolute inset-0 rounded-xl border-2 border-emerald-500/0 group-hover:border-emerald-500/20 transition-colors duration-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}