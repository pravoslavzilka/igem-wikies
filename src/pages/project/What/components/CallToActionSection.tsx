import React from 'react';

const CallToActionSection: React.FC = () => {
  return (
    <section className="flex flex-row justify-center items-start px-32 py-20 gap-16 w-full h-[438px] bg-white relative isolate">
      
      {/* Background line */}
      <div className="absolute w-full h-0 border-2 border-gray-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

      {/* Main content container */}
      <div className="flex flex-col items-center px-[200px] py-20 gap-6 w-full max-w-[1184px] h-[278px] bg-gray-100 rounded-2xl flex-grow z-10">
        
        {/* Top message */}
        <p 
          className="w-[784px] h-[27px] text-base leading-[168%] text-center text-black/75"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Duckweed has the potential to became a novel crop, but a lot of pieces are missing
        </p>

        {/* Call to action heading with underline */}
        <h2 
          className="w-[784px] h-[67px] text-5xl font-semibold leading-[140%] text-center text-black underline cursor-pointer hover:text-green-600 transition-colors"
          style={{ fontFamily: 'Urbanist, sans-serif' }}
        >
          See how we filled the gaps!
        </h2>
        
      </div>
    </section>
  );
};

export default CallToActionSection;