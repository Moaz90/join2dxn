import React from 'react';
import { DXN_REGISTRATION_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="People working together" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-600/70"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          Start Your Success with DXN
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
          Build a steady income through simple, practical steps with DXN's proven multi-level marketing system. We'll guide you every step of the way.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href={DXN_REGISTRATION_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Register Now
          </a>
          <a 
            href="#steps" 
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold text-lg transition-all"
          >
            Learn How
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;