import React from 'react';

const thumbnails = [
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840416/finalwith_smile_qzhh9e.jpg",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840408/final_d4wnw2.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840385/1_S_xca4ez.jpg",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840371/11_nwfdsa.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840354/tr-Recoveredfs_gilftt.jpg",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840328/akshay_prankstar_rv4l8o.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840296/food_store32_fvakp3.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840290/iphone32_dptfff.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840289/pc_tech_dqcii6.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840288/new_irl_s0z00j.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840287/gadget_n5heg7.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840285/watch_j5xqxf.jpg",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840285/skashi_final_vi_bxseke.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840285/fi_ue95dd.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840285/valio_gi_locceh.png",
  "https://res.cloudinary.com/dcnz8e0nz/image/upload/f_auto,q_auto,w_500/v1768840283/12_xpewrq.jpg"
];

// Duplicate items to ensure smooth infinite loop
const galleryItems = [...thumbnails, ...thumbnails];

const MarqueeRow: React.FC<{ 
  direction: 'left' | 'right'; 
  images: string[];
  speed?: string;
}> = ({ direction, images }) => {
  return (
    <div className="flex overflow-hidden relative w-full group">
      <div className={`flex gap-4 whitespace-nowrap ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'} will-change-transform`}>
        {images.map((src, index) => (
          <div 
            key={index} 
            className="w-[200px] sm:w-[250px] flex-shrink-0 aspect-video rounded-xl overflow-hidden border border-zinc-800 group-hover:border-[#8c59e4] transition-colors duration-300 relative"
          >
            {/* Overlay removed for clarity */}
            <img 
              src={src} 
              alt={`Portfolio item ${index}`} 
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-black overflow-hidden relative border-t border-zinc-900">
      
      <div className="max-w-7xl mx-auto px-4 mb-16">
         <span className="text-[#8c59e4] font-bold tracking-wider uppercase text-sm mb-2 block">Portfolio</span>
         <h2 className="text-4xl md:text-5xl font-black text-white">Works</h2>
      </div>

      <div className="flex flex-col gap-6">
        {/* Layer 1: Left to Right */}
        <div className="transform scale-105 transition-opacity duration-500">
           <MarqueeRow direction="right" images={galleryItems} />
        </div>

        {/* Layer 2: Right to Left */}
        <div className="transform scale-105 z-10 transition-opacity duration-500">
           <MarqueeRow direction="left" images={[...galleryItems].reverse()} />
        </div>

        {/* Layer 3: Left to Right */}
        <div className="transform scale-105 transition-opacity duration-500">
           <MarqueeRow direction="right" images={[...galleryItems].reverse()} />
        </div>
      </div>
      
      {/* Overlay Gradients to soften edges */}
      <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

    </section>
  );
};