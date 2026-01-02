
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const links = [
    { name: 'Email', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', href: SOCIAL_LINKS.email },
    { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z', href: SOCIAL_LINKS.linkedin },
    { name: 'Instagram', icon: 'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zM16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01', href: SOCIAL_LINKS.instagram },
    { name: 'GitHub', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22', href: SOCIAL_LINKS.github },
    { name: 'Medium', icon: 'M2 3h20v18H2z', href: SOCIAL_LINKS.medium },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8">Get In Touch!</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-20 text-lg">
          I'm always open to interesting projects, collaboration, or just a friendly chat about tech. Catch me on these platforms:
        </p>

        <div className="relative h-[400px] flex items-end justify-center">
          {/* Circular Arrangement */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full -z-10"></div>
          
          <div className="relative flex items-center justify-center">
            {links.map((link, i) => {
              const angle = (i * (180 / (links.length - 1))) - 180;
              const radius = 250;
              const x = Math.cos(angle * (Math.PI / 180)) * radius;
              const y = Math.sin(angle * (Math.PI / 180)) * radius;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-purple-600 hover:border-transparent transition-all duration-300 group hover:-translate-y-2"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={link.icon}></path>
                  </svg>
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold uppercase tracking-widest text-purple-300">
                    {link.name}
                  </span>
                </a>
              );
            })}

            {/* Central CV Button */}
            <a 
              href={SOCIAL_LINKS.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 h-32 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center text-3xl font-bold transition-all border border-white/20 z-10"
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
