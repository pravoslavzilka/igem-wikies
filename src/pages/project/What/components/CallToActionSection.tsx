import React from 'react';

const CallToActionSection: React.FC = () => {
  const handleLinkClick = () => {
    // Redirect to project/how/ page
    window.location.href = '/project/how/';
  };

  return (
    <section className="flex flex-row justify-center items-start px-8 lg:px-32 py-20 gap-16 w-full h-[438px] bg-white relative isolate">
      
      {/* Background line */}
      <div className="absolute w-full h-0 border-2 border-gray-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

      {/* Main content container */}
      <div className="flex flex-col items-center px-8 lg:px-[200px] py-20 gap-6 w-full max-w-[1184px] h-[278px] bg-gray-100 rounded-2xl flex-grow z-10">
        
        {/* Top message */}
        <p 
          className="w-full max-w-[784px] text-base leading-[168%] text-center"
          style={{ 
            fontFamily: 'Space Grotesk, sans-serif',
            color: 'rgba(23, 31, 22, 0.75)'
          }}
        >
          Duckweed has the potential to became a novel crop, but a lot of pieces are missing
        </p>

        {/* Call to action heading with underline */}
        <a 
          onClick={handleLinkClick}
          className="w-full max-w-[784px] text-3xl lg:text-5xl font-semibold leading-[140%] text-center text-black underline cursor-pointer hover:text-green-600 transition-colors block"
          style={{ fontFamily: 'Urbanist, sans-serif' }}
        >
          See how we filled the gaps!
        </a>
        
      </div>
    </section>
  );
};

export default CallToActionSection;