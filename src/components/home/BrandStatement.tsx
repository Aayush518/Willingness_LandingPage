import React from 'react';

interface BrandStatementProps {
  loaded: boolean;
}

export const BrandStatement: React.FC<BrandStatementProps> = ({ loaded }) => {
  return (
    <div className={`bg-[#1a1f2c] p-8 rounded-lg mt-12 max-w-xl transform transition-all duration-1000 ${
      loaded ? 'translate-x-0 opacity-100' : 'translate-x-[-100px] opacity-0'
    }`}>
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 hover:text-orange-400 transition-colors">
        AS A BRAND WE VALUE OUR MOTHER EARTH.
      </h2>
      <p className="text-gray-400 text-sm leading-relaxed tracking-wide">
        THIS IS WHY WE HAVE PARTNERED WITH LEADING ENVIRONMENTAL NON-PROFIT ORGANIZATIONS TO HELP REDUCE AND OFFSET THE DAMAGE THAT PRODUCING GARMENTS DOES TO OUR PLANET. WE ENCOURAGE OUR CUSTOMERS TO KEEP THEIR S&R PIECES FOREVER, AS THEY WILL ONLY GET BETTER WITH TIME.
      </p>
    </div>
  );
};