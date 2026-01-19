import React from 'react';
import { Button } from './Button';
import { Youtube, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#8c59e4] text-white pt-20 pb-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-2 tracking-tight">Make your first</h2>
        <h2 className="text-5xl md:text-6xl font-black mb-10 tracking-tight">impression count.</h2>
        
        <div className="mb-16">
            <Button variant="dark" className="px-10 py-4 text-lg">Let's do this!</Button>
        </div>

        <div className="border-t border-white/20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-semibold opacity-80">
                <img 
                    src="https://res.cloudinary.com/dcnz8e0nz/image/upload/v1768831079/ZYkvgAAAABklEQVQDAMcDOUrHMya8AAAAAElFTkSuQmCC_uxcd4o.png" 
                    alt="Aswin GFX" 
                    className="w-6 h-6 rounded-full border border-white/20"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                />
                <span>© Aswin GFX</span>
            </div>

            <div className="flex gap-6">
                <a href="#" className="hover:scale-110 transition-transform"><Instagram size={24} /></a>
                <a href="#" className="hover:scale-110 transition-transform"><Youtube size={24} /></a>
                <a href="#" className="hover:scale-110 transition-transform"><Twitter size={24} /></a>
            </div>
        </div>
      </div>
    </footer>
  );
};