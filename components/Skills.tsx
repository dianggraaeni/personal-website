
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-purple-500/10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">My Skills</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-20">
          Showcasing my proficiency in modern programming languages, data management tools, and intuitive design principles.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
          {SKILLS.map((skill, i) => (
            <div key={i} className="group relative flex flex-col items-center">
              {/* Star-like Background Shape */}
              <div className="relative w-32 h-32 flex items-center justify-center mb-6">
                {[...Array(3)].map((_, j) => (
                  <div 
                    key={j}
                    className="absolute inset-0 bg-purple-500/10 rounded-3xl border border-purple-500/20 group-hover:bg-purple-500/30 group-hover:scale-110 transition-all duration-500"
                    style={{ transform: `rotate(${j * 30}deg)` }}
                  ></div>
                ))}
                <div className="relative z-10 text-3xl font-bold text-purple-200">
                  {skill.icon}
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight group-hover:text-purple-300 transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
