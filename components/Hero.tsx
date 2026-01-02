
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center pt-32 pb-20 px-6">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full -z-10"></div>
      
      <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-center mb-12 text-white/90">
        DIAN ANGGRAENI
      </h1>

      <div className="relative w-full max-w-5xl flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side Info */}
        <div className="lg:w-1/3 text-center lg:text-left space-y-6">
          <h2 className="text-2xl font-bold text-white">Software & AI Enthusiast.</h2>
          <p className="text-gray-400 max-w-sm mx-auto lg:mx-0">
            Transforming data into insights and crafting secure, elegant digital solutions.
          </p>
          <p className="italic font-medium text-purple-300">
            "Learn continually, lead with integrity, and contribute meaningfully."
          </p>
        </div>

        {/* Center Portrait Area */}
        <div className="relative group">
          <div className="w-64 h-80 md:w-80 md:h-[450px] overflow-hidden rounded-[40px] border-4 border-purple-500/20">
            <img 
              src="https://picsum.photos/seed/dian/800/1000" 
              alt="Dian Anggraeni" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          {/* Floating Tags */}
          <div className="absolute -top-6 -right-12 md:-right-20 bg-black/40 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-xs md:text-sm font-semibold text-white/90">
            Software Engineer
          </div>
          <div className="absolute top-1/3 -left-12 md:-left-24 bg-black/40 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-xs md:text-sm font-semibold text-white/90">
            AI Developer
          </div>
          <div className="absolute bottom-10 -right-12 md:-right-24 bg-black/40 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-xs md:text-sm font-semibold text-white/90">
            Security Analyst
          </div>
        </div>

        {/* Right Side Stats */}
        <div className="lg:w-1/3 flex flex-col gap-10">
          <div className="flex items-center gap-4">
            <span className="text-6xl md:text-7xl font-bold text-white">3+</span>
            <div className="text-gray-400 font-medium leading-tight">
              Years<br />Journey
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-6xl md:text-7xl font-bold text-white">5+</span>
            <div className="text-gray-400 font-medium leading-tight">
              Projects<br />Completed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
