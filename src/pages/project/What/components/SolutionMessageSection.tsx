import React from 'react';

const SolutionMessageSection: React.FC = () => {
  const synBioSolutions = [
    "Engineering bacteria to fix nitrogen faster",
    "Engineering soybean for enhanced protein content", 
    "Drought resistance"
  ];

  return (
    <section className="flex flex-row justify-center items-start px-32 py-20 gap-16 w-full h-[744px] bg-white relative isolate">
      
      {/* Background line */}
      <div className="absolute w-full h-0 border-2 border-gray-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

      {/* Main content container */}
      <div className="flex flex-col items-center px-[200px] py-20 gap-12 w-full max-w-[1184px] h-[584px] bg-gray-100 rounded-2xl flex-grow z-10">
        
        {/* Main heading */}
        <h2 
          className="w-[784px] h-[134px] text-5xl font-semibold leading-[140%] text-center text-black"
          style={{ fontFamily: 'Urbanist, sans-serif' }}
        >
          Some SynBio solutions came to mind immediately:
        </h2>

        {/* Solutions grid */}
        <div className="flex flex-row items-start gap-12 w-[756px] h-[121px]">
          {synBioSolutions.map((solution, index) => (
            <div 
              key={index}
              className="flex flex-row justify-center items-center px-5 py-2 gap-2 w-[220px] h-[121px] bg-white rounded-lg"
            >
              <p 
                className="w-[180px] text-base leading-[168%] text-center text-black/75 flex-grow"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {solution}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <p 
          className="w-[784px] h-[73px] text-lg leading-[168%] text-center text-black/75"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          But that would only reinforce the unsustainable status quo. We wanted to uproot it!
        </p>
        
      </div>
    </section>
  );
};

export default SolutionMessageSection;