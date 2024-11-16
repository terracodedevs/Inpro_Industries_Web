import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-slate-900/90" />
        <img
          src="./istockphoto-1334041236-612x612.jpg"
          alt="Printing press"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Welcome to Inpro Industries
          <span className="block text-2xl md:text-3xl mt-2 bg-gradient-to-r from-blue-200 to-blue-300 bg-clip-text text-transparent">
            Where Passion Meets Precision in Printing
          </span>
        </h1>
        <p className="text-xl text-slate-200 mb-8 animate-fade-in-delay">
          Delivering exceptional printing services since 2010
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <a href='#services'>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-700 to-blue-500  text-white rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
            Explore Services
          </button>
          </a>
          <a href='#contact'>
          <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
            Contact Us
          </button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </div>
  );
};

export default Hero;