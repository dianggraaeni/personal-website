
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-purple-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">What They Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Kind words from people I've worked with about my dedication and the impact of the solutions I build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={i} 
              className="p-8 rounded-[2.5rem] bg-zinc-900/80 border border-white/5 hover:border-purple-500/30 transition-all group"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-purple-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-8 flex-grow leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-purple-300 transition-colors">{t.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Colleague</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
