
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        
        {/* Flower Shape Graphic */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
            {/* Overlapping Petal Layers */}
            {[...Array(6)].map((_, i) => (
              <div 
                key={i}
                className="absolute inset-0 border border-purple-500/30 bg-purple-500/5 rounded-[40%] mix-blend-screen"
                style={{ transform: `rotate(${i * 60}deg) scale(1.1)` }}
              ></div>
            ))}
            <div className="absolute inset-0 flex items-center justify-center text-center p-8 md:p-12">
              <div className="space-y-4 max-w-xs">
                <p className="text-[10px] md:text-xs leading-relaxed text-gray-200 uppercase tracking-widest">
                  Hello, I'm Dian. I am a software enthusiast dedicated to building digital experiences that are not only elegant but also intelligent and secure. For me, development is more than just writing code; it's about transforming data into insights and ensuring safety in every digital landscape I craft.
                </p>
                <p className="text-[10px] md:text-xs font-bold text-purple-300 uppercase tracking-tighter">
                  Let's build something meaningful together.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Experience Visuals */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Education</h3>
            <div className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5]">
              <img 
                src="https://picsum.photos/seed/tower/600/800" 
                alt="Education" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-bold">Information Systems</p>
                <p className="text-sm text-gray-400">Sepuluh Nopember Institute of Technology</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Experience</h3>
            <div className="flex flex-col gap-6">
              <div className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-video">
                <img 
                  src="https://picsum.photos/seed/work1/600/400" 
                  alt="Experience" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-video">
                <img 
                  src="https://picsum.photos/seed/work2/600/400" 
                  alt="Experience" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
