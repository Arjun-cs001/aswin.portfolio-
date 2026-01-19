import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

interface HeaderProps {
  onOpenOrder: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrder }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-[#8c59e4] rounded-full blur opacity-30 group-hover:opacity-75 transition duration-200"></div>
              <img 
                src="https://res.cloudinary.com/dcnz8e0nz/image/upload/v1768831079/ZYkvgAAAABklEQVQDAMcDOUrHMya8AAAAAElFTkSuQmCC_uxcd4o.png" 
                alt="Aswin GFX" 
                width={40}
                height={40}
                className="relative w-10 h-10 rounded-full border-2 border-[#8c59e4] object-cover bg-zinc-800"
                onError={(e) => {
                  // Fallback if image not found
                  const target = e.target as HTMLImageElement;
                  target.src = "https://ui-avatars.com/api/?name=Aswin+GFX&background=8c59e4&color=fff&rounded=true&bold=true";
                }}
              />
            </div>
            <span className="font-bold text-xl tracking-tight">Aswin GFX</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="hover:text-[#8c59e4] transition-colors font-medium">Home</a>
              <a href="#portfolio" className="hover:text-[#8c59e4] transition-colors font-medium">Portfolio</a>
              <a href="#story" className="hover:text-[#8c59e4] transition-colors font-medium">Why Me?</a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button variant="primary" className="py-2 text-sm" onClick={onOpenOrder}>Hire Aswin Today</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-[#8c59e4]">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-zinc-800 hover:text-[#8c59e4]">Home</a>
            <a href="#portfolio" className="block px-3 py-2 rounded-md hover:bg-zinc-800 hover:text-[#8c59e4]">Portfolio</a>
            <div className="mt-4 px-3">
                <Button variant="primary" fullWidth className="py-2" onClick={() => { setIsOpen(false); onOpenOrder(); }}>Hire Aswin Today</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};