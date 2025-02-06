import React from 'react';

interface HeroImageProps {
  loaded: boolean;
}

export const HeroImage: React.FC<HeroImageProps> = ({ loaded }) => {
  return (
    <div className={`fixed inset-0 transition-all duration-1500 ${
      loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
    }`}>
      <div className="absolute inset-0 -top-[30%] sm:-top-[10%] md:-top-[15%] lg:-top-[20%]">
        <img 
          src="https://images.unsplash.com/photo-1618375531912-867984bdfd87"
          alt="Fashion model"
          className="w-full h-[150%] sm:h-[130%] md:h-[140%] object-cover object-[center_15%] sm:object-[center_25%] filter contrast-125 brightness-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/30"></div>
    </div>
  );
}