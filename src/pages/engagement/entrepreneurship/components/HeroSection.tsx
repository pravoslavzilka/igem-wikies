// src/pages/engagement/entrepreneurship/components/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div 
      className="relative w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url(BACKGROUND_IMAGE_URL)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-8">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="https://static.igem.wiki/teams/5642/images/engagement/entrepreneurship/nitroduck.webp" 
            alt="Entrepreneurship Logo" 
            className="w-32 h-32 object-contain"
          />
        </div>
        
        {/* Title */}
        <h1 
          className="text-6xl font-bold text-white mb-6"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          ENTREPRENEURSHIP
        </h1>
        
        {/* Button */}
        <button 
          className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 uppercase text-sm tracking-wider"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          READ ABOUT OUR START-UP & BUSSINES JOURNEY!
        </button>
      </div>
    </div>
  );
};

export default HeroSection;