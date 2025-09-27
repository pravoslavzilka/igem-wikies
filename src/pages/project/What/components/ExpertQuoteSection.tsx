import React from 'react';

const ExpertQuoteSection: React.FC = () => {
  return (
    <section className="flex flex-row items-center w-full h-[564px] bg-white px-32 py-10 gap-16">
      
      {/* Left side - Expert photo */}
      <div className="w-[484px] h-[484px] bg-white rounded-lg overflow-hidden">
        <img 
          src="https://static.igem.wiki/teams/5642/images/what/julia-eva-fortmueller.webp" 
          alt="Julia-Eva Fortmueller"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side - Quote and details */}
      <div className="flex flex-col justify-between items-start px-20 py-20 gap-4 w-[700px] h-[484px] flex-grow">
        
        {/* Top section with quote */}
        <div className="flex flex-col items-start gap-4 w-[580px] h-[220px] mx-auto">
          
          {/* Quote mark */}
          <div className="w-[41px] h-8 bg-lime-400"></div>

          {/* Quote text */}
          <p 
            className="w-[580px] h-[81px] text-base leading-[168%] text-black/75"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Transient expression works very well in duckweeds. But getting stable lines is an extremely laborious, lengthy and often unpredictable process. Also, a number of duckweed species have never been transformed at all.
          </p>
        </div>

        {/* Bottom section with expert details */}
        <div className="flex flex-col items-start gap-2 w-[300px] h-[75px] mx-auto">
          
          {/* Expert name */}
          <h3 
            className="w-[300px] h-[45px] text-3xl font-semibold leading-[140%] text-center text-black"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            Julia-Eva Fortmueller
          </h3>

          {/* Institution */}
          <p 
            className="w-[212px] h-[22px] text-base font-medium leading-[140%] text-center text-lime-400"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            Weizmann Institute of Science
          </p>
        </div>

        {/* Navigation arrows */}
        <div className="flex flex-row items-center gap-2 w-[120px] h-14 mx-auto">
          
          {/* Left arrow */}
          <button className="flex flex-row justify-center items-center w-14 h-14 bg-gray-100 rounded-md">
            <div className="w-[16.8px] h-[16.8px]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.05">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </div>
          </button>

          {/* Right arrow */}
          <button className="flex flex-row justify-center items-center w-14 h-14 bg-gray-100 rounded-md">
            <div className="w-[16.8px] h-[16.8px] scale-x-[-1]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.05">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </div>
          </button>
          
        </div>
        
      </div>
    </section>
  );
};

export default ExpertQuoteSection;