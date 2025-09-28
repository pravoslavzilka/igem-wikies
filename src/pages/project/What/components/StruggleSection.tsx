// src/pages/project/What/components/StruggleSection.tsx
import React from 'react';

const StruggleSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-black/10 pt-12 sm:pt-16 lg:pt-20">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 xl:gap-[200px]">
            
            {/* Left side - heading */}
            <div className="w-full lg:w-[384px] lg:flex-shrink-0">
              <h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[120%] text-black"
                style={{ fontFamily: 'Urbanist, sans-serif' }}
              >
                The struggle is real
              </h2>
            </div>

            {/* Right side - content */}
            <div className="flex-1 min-w-0 space-y-4 sm:space-y-6">
              
              {/* First paragraph */}
              <p 
                className="text-base sm:text-lg leading-[168%] text-black/75 text-justify"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                We had ideas on what to do with duckweed, like engineering it to uptake ammonium faster for manure remediation- nitroduck link or to grow faster and bigger - hanson bbd hp link.
              </p>

              {/* Second paragraph - highlighted */}
              <p 
                className="text-lg sm:text-xl lg:text-2xl font-bold leading-[168%] text-green-900"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                But we realized we just wouldn't be able to do it. Duckweeds are very hard to engineer.
              </p>
              
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default StruggleSection;