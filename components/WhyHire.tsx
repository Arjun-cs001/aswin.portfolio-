import React from 'react';

export const WhyHire: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-zinc-950 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-20 text-white">Why should I hire Aswin?</h2>

        <div className="space-y-24">
            {/* Block 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-[#8c59e4] font-bold mb-4 text-lg">I am firmly anti-clickbait.</h3>
                    <p className="text-zinc-300 leading-relaxed">
                        Creators spend a long time building up trust with their audience. To attract them with a packaging that doesn't reflect your content means to betray that trust. I design around your video, not around a "formula" for views.
                    </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-zinc-800 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img src="https://picsum.photos/seed/clickbait/600/400" alt="Anti clickbait" className="w-full h-auto grayscale hover:grayscale-0 transition-all" />
                </div>
            </div>

            {/* Block 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:order-2">
                    <h3 className="text-[#8c59e4] font-bold mb-4 text-lg">I involve you in the creative process.</h3>
                    <p className="text-zinc-300 leading-relaxed">
                        Maybe you've already worked with a designer that disappears for days, then comes back with something you don't like. I communicate multiple steps along the way, from concept to feedback, to make sure you're satisfied.
                    </p>
                </div>
                <div className="md:order-1 rounded-xl overflow-hidden border border-zinc-800 shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img src="https://picsum.photos/seed/process/600/400" alt="Process" className="w-full h-auto grayscale hover:grayscale-0 transition-all" />
                </div>
            </div>

            {/* Block 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-[#8c59e4] font-bold mb-4 text-lg">I don't just follow trends, I start them.</h3>
                    <p className="text-zinc-300 leading-relaxed">
                        Many designers directly copy entire concepts off of other creators, essentially branding their client as a knock-off. I make an effort to come up with unique designs that sometimes start entirely new trends.
                    </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-zinc-800 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img src="https://picsum.photos/seed/trend/600/400" alt="Trends" className="w-full h-auto grayscale hover:grayscale-0 transition-all" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};