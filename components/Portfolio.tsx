
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web', 'Mobile', 'AI & Data'];

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">My Recent Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Showcasing a collection of my projects highlighting implementations in software engineering and data-driven solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                  filter === cat 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative">
              {/* Hexagon/Shield Shape Overlay Effect */}
              <div className="aspect-[4/5] rounded-[60px] overflow-hidden relative border border-white/10">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                
                <div className="absolute bottom-0 inset-x-0 p-10 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="inline-block px-4 py-1 rounded-full bg-purple-600/30 border border-purple-500/50 text-xs font-bold text-purple-200 mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
