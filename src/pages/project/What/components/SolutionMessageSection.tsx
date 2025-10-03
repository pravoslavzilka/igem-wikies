import React from 'react';

const SolutionMessageSection: React.FC = () => {
  const synBioSolutions = [
    "Engineering bacteria to fix nitrogen faster",
    "Engineering soybean for enhanced protein content", 
    "Engineering soybean for drought resistance"
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-20 px-4 sm:px-8 lg:px-32 relative">
      
      {/* Background line - hidden on mobile for cleaner look */}
      <div className="hidden lg:block absolute w-full h-0 border-2 border-gray-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

      {/* Main content container */}
      <div className="flex flex-col items-center p-6 sm:p-8 lg:p-20 gap-6 sm:gap-8 lg:gap-12 w-full max-w-6xl mx-auto bg-gray-100 rounded-xl sm:rounded-2xl z-10 relative">
        
        {/* Main heading */}
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[140%] text-center text-black max-w-none"
          style={{ fontFamily: 'Urbanist, sans-serif' }}
        >
          Some SynBio solutions came to mind immediately:
        </h2>

        {/* Solutions grid - responsive layout */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-12 w-full">
          {synBioSolutions.map((solution, index) => (
            <div 
              key={index}
              className="flex justify-center items-center p-4 sm:p-5 w-full sm:w-auto sm:min-w-[200px] lg:w-[220px] min-h-[80px] sm:min-h-[100px] lg:h-[121px] bg-white rounded-lg shadow-sm"
            >
              <p 
                className="text-sm sm:text-base leading-[168%] text-center text-black/75 max-w-[180px]"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {solution}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <p 
          className="text-base sm:text-xl leading-[168%] text-center text-[#6ca033] max-w-none font-bold"

          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          But that would only reinforce the unsustainable status quo. We wanted to uproot it!
        </p>
        
      </div>
    </section>
  );
};

export default SolutionMessageSection;