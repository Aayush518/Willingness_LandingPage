import React from 'react';
import { X } from 'lucide-react';
import { NavLink } from '../ui/NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 bg-emerald-900 z-50 transition-all duration-500 ${
      isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent mix-blend-overlay"></div>
      <div className="relative h-full p-8 flex flex-col">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform duration-300"
        >
          <X className="h-8 w-8" />
        </button>
        <nav className="flex flex-col gap-8 mt-32">
          {['NEW ARRIVALS', 'COLLABORATION', 'ABOUT US'].map((item) => (
            <div key={item} className="overflow-hidden">
              <a 
                href="#" 
                className="block text-5xl font-bold text-white hover:text-orange-400 transition-colors transform hover:-translate-y-1 hover:translate-x-2 transition-transform duration-300"
              >
                {item}
              </a>
              <div className="h-px bg-white/10 mt-8"></div>
            </div>
          ))}
        </nav>
        <div className="mt-auto">
          <div className="text-white/60 text-sm tracking-widest">FOLLOW US</div>
          <div className="flex gap-4 mt-4">
            {['INSTAGRAM', 'TWITTER', 'FACEBOOK'].map((social) => (
              <a key={social} href="#" className="text-white hover:text-orange-400 transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};