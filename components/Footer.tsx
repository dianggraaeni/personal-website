
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Dian Anggraeni. Built with passion & precision.
        </p>
        <div className="flex gap-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
          <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
          <a href="#portfolio" className="hover:text-purple-400 transition-colors">Works</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Connect</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
