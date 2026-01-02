
import React, { useState } from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>("01");

  return (
    <section id="services" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">My Quality Services</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I combine modern software engineering with intelligent data insights to build secure and impactful digital experiences.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-4">
        {SERVICES.map((service) => (
          <div 
            key={service.id}
            className={`group rounded-[2rem] border transition-all duration-500 overflow-hidden ${
              activeId === service.id 
              ? 'bg-purple-300 text-black border-transparent' 
              : 'bg-white/5 text-white border-white/10 hover:border-purple-500/30'
            }`}
          >
            <button 
              onClick={() => setActiveId(activeId === service.id ? null : service.id)}
              className="w-full p-8 md:p-10 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-8">
                <span className={`text-2xl font-bold ${activeId === service.id ? 'text-black' : 'text-gray-500'}`}>{service.id}</span>
                <h3 className="text-xl md:text-3xl font-bold">{service.title}</h3>
              </div>
              <div className={`transition-transform duration-300 ${activeId === service.id ? 'rotate-180' : ''}`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </button>
            
            <div className={`transition-all duration-500 ${activeId === service.id ? 'max-h-60 pb-10 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-10 md:px-24">
                <p className="text-lg font-medium leading-relaxed max-w-3xl">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
