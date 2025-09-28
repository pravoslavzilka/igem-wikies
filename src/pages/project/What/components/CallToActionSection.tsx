// src/pages/project/What/components/CallToActionSection.tsx
import React from 'react';

const CallToActionSection: React.FC = () => {
  const handleLinkClick = () => {
    // Redirect to project/how/ page
    window.location.href = '/project/how/';
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-32 relative">
      
      {/* Background line */}
      <div className="absolute w-full h-0 border-2 border-gray-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

      {/* Main content container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center px-6 sm:px-12 lg:px-[200px] py-12 sm:py-16 lg:py-20 gap-4 sm:gap-6 bg-gray-100 rounded-2xl">
          
          {/* Top message */}
          <p 
            className="w-full max-w-[784px] text-sm sm:text-base leading-[168%] text-center"
            style={{ 
              fontFamily: 'Space Grotesk, sans-serif',
              color: 'rgba(23, 31, 22, 0.75)'
            }}
          >
            Duckweed has the potential to became a novel crop, but a lot of pieces are missing
          </p>

          {/* Call to action heading with underline */}
          <button
            onClick={handleLinkClick}
            className="w-full max-w-[784px] text-2xl sm:text-3xl lg:text-5xl font-semibold leading-[140%] text-center text-black underline cursor-pointer hover:text-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded p-2"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            See how we filled the gaps!
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;