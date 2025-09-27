import React from 'react';

const StruggleSection: React.FC = () => {
  return (
    <section className="flex flex-col items-start px-32 py-10 gap-16 w-full h-[354px] bg-white">
      <div className="flex flex-row items-start pt-20 gap-[200px] w-full max-w-[1184px] h-[274px] border-t border-black/10">
        
        {/* Left side - heading */}
        <div className="flex flex-col items-start gap-6 w-[384px] h-12">
          <h2 
            className="w-full h-12 text-4xl font-semibold leading-[120%] text-black"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            The struggle is real
          </h2>
        </div>

        {/* Right side - content */}
        <div className="flex flex-col items-start gap-6 w-[600px] h-[194px] flex-grow">
          
          {/* First paragraph */}
          <p 
            className="w-full h-[90px] text-lg leading-[168%] text-black/75"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            We had ideas on what to do with duckweed, like engineering it to uptake ammonium faster for manure remediation- nitroduck link or to grow faster and bigger - hanson bbd hp link.
          </p>

          {/* Second paragraph - highlighted */}
          <p 
            className="w-full h-20 text-2xl font-bold leading-[168%] text-green-900"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            But we realized we just wouldn't be able to do it. Duckweeds are very hard to engineer.
          </p>
          
        </div>
        
      </div>
    </section>
  );
};

export default StruggleSection;