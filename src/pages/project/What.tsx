import React, { useState } from 'react';

const ProjectWhat = () => {
  const [openAccordion, setOpenAccordion] = useState('running-farm');

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? '' : section);
  };

  const problems = [
    {
      id: 1,
      title: "High protein feed costs and reliance on import",
      image: "https://static.igem.wiki/teams/5642/images/what/problem-soybean-feed.webp",
      quote: "Soybean is an amazing source of protein. I wish I could afford more!",
      author: "Rudolf Repiský"
    },
    {
      id: 2,
      title: "Deforestation caused by protein crops",
      image: "https://static.igem.wiki/teams/5642/images/what/problem-deforestation.webp",
      quote: "Our land was taken from us and turned into a one giant soy field",
      author: "Prof. Carlos Klink"
    },
    {
      id: 3,
      title: "Nitrogen runoffs and manure utilization",
      image: "https://static.igem.wiki/teams/5642/images/what/problem-nitrogen.webp",
      quote: "We tend to think manure is free fertilizer, but in reality, much of the nitrogen just disappears into the air or water. It's money and nutrients lost.",
      author: "Ing. Jakub Neužil"
    }
  ];

  const synbioSolutions = [
    "Engineering bacteria to fix nitrogen faster",
    "Engineering soybean for enhanced protein content", 
    "Drought resistance"
  ];

  const duckweedBenefits = [
    {
      title: "Protein Powerhouse",
      description: "as much protein as soybean",
      position: "top-left"
    },
    {
      title: "Nitrogen Absorption", 
      description: "absorbs excess nitrogen in manure quickly",
      position: "top-right"
    },
    {
      title: "Rapid Growth",
      description: "48 hour doubling time", 
      position: "bottom-left"
    },
    {
      title: "Versatile Growth",
      description: "thrives in a wide range of conditions",
      position: "bottom-right"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      {/* Hero Section */}
      <section className="flex flex-col items-center px-10 py-10 w-full h-auto min-h-[823px]">
        <div className="flex flex-col justify-center items-start px-8 md:px-32 py-20 gap-1 w-full max-w-[1360px]">
          <p 
            className="text-lg font-semibold leading-[140%]"
            style={{ 
              fontFamily: 'Urbanist, sans-serif',
              color: 'rgba(27, 27, 27, 0.5)'
            }}
          >
            What
          </p>
          <h1 
            className="text-3xl md:text-5xl font-semibold leading-[140%] self-stretch"
            style={{ 
              fontFamily: 'Urbanist, sans-serif',
              color: '#1B1B1B'
            }}
          >
            We wanted to solve a real, BIG problem with synthetic biology
          </h1>
        </div>
        
        <div className="w-full max-w-[1360px] h-[300px] md:h-[480px] rounded-3xl relative overflow-hidden">
          <img 
            src="https://static.igem.wiki/teams/5642/images/what/bull.webp" 
            alt="Team working in laboratory"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Text Section */}
      <section className="flex flex-col items-start px-8 md:px-32 py-10 md:py-20 gap-16 w-full bg-white">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-52 w-full max-w-[1184px] pb-20 border-b border-opacity-10" style={{ borderColor: 'rgba(23, 31, 22, 0.1)' }}>
          <div className="flex flex-col items-start gap-6 w-full md:w-96">
            <h2 
              className="text-2xl md:text-4xl font-semibold leading-[120%]"
              style={{ 
                fontFamily: 'Urbanist, sans-serif',
                color: '#1B1B1B'
              }}
            >
              We're a team of Czechs and Slovaks
            </h2>
          </div>
          
          <div className="flex flex-col items-start gap-6 flex-1 max-w-[600px]">
            <p 
              className="text-base md:text-lg leading-[168%]"
              style={{ 
                fontFamily: 'Space Grotesk, sans-serif',
                color: 'rgba(23, 31, 22, 0.75)'
              }}
            >
              In both our countries, agricultural land takes up around half of all territory. A lot of us grew up in villages, surrounded by farms, fields, livestock and farmers. We saw the challenges around us and realized that they are a part of much bigger, global issues.
            </p>
          </div>
        </div>
      </section>

      {/* Points Section */}
      <section className="flex flex-col md:flex-row items-start px-8 md:px-32 py-10 gap-4 w-full bg-white">
        {problems.map((problem, index) => (
          <div key={problem.id} className="flex flex-col items-center px-4 gap-6 w-full md:w-96">
            <h3 
              className="text-xl md:text-2xl font-semibold leading-[120%] text-center self-stretch"
              style={{ 
                fontFamily: 'Urbanist, sans-serif',
                color: '#1B1B1B'
              }}
            >
              {problem.title}
            </h3>
            
            <div className="w-full h-56 rounded-lg overflow-hidden">
              <img 
                src={problem.image}
                alt={problem.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-row items-center gap-5 w-full">
              <div className="w-12 h-12 bg-gray-100 rounded flex-shrink-0"></div>
              <div className="flex flex-col justify-center items-start gap-3 flex-1">
                <p 
                  className="text-sm leading-[148%] self-stretch"
                  style={{ 
                    fontFamily: 'Space Grotesk, sans-serif',
                    color: '#1B1B1B'
                  }}
                >
                  "{problem.quote}"
                </p>
                <p 
                  className="text-sm font-bold leading-[120%]"
                  style={{ 
                    fontFamily: 'Space Grotesk, sans-serif',
                    color: '#1B1B1B'
                  }}
                >
                  {problem.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Accordion Section */}
      <section className="flex flex-col items-start px-8 md:px-32 py-10 md:py-20 gap-16 w-full bg-white">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-52 w-full max-w-[1184px]">
          <div className="flex flex-col items-start gap-10 w-full lg:w-[584px]">
            {/* First Accordion Item */}
            <div className="flex flex-col items-start gap-6 w-full">
              <div className="flex flex-row items-center gap-8 w-full">
                <div className="flex flex-col items-start p-2 gap-2 w-5 h-5 bg-green-800">
                  <div className="w-2.5 h-0.5 bg-white"></div>
                </div>
                <h3 
                  className="text-xl md:text-3xl font-semibold leading-[140%] flex-1"
                  style={{ 
                    fontFamily: 'Urbanist, sans-serif',
                    color: '#1B1B1B'
                  }}
                >
                  "Running a farm is less and less profitable"
                </h3>
              </div>
              
              {openAccordion === 'running-farm' && (
                <div className="flex flex-col items-start pl-13 gap-6 w-full">
                  <p 
                    className="text-sm md:text-base leading-[168%] self-stretch"
                    style={{ 
                      fontFamily: 'Space Grotesk, sans-serif',
                      color: 'rgba(23, 31, 22, 0.75)'
                    }}
                  >
                    Czech - and more broadly - European livestock production today heavily reliant on imported high-protein feeds: 80% of the EU's high-protein animal feed is imported, and the most widely used source - soybean - accounts for 68% of it. That is roughly 33 million tons of soy products costing around 14 billion euros.
                  </p>
                  <p 
                    className="text-sm md:text-base leading-[168%] self-stretch"
                    style={{ 
                      fontFamily: 'Space Grotesk, sans-serif',
                      color: 'rgba(23, 31, 22, 0.75)'
                    }}
                  >
                    Rising feed costs are hitting farmers hard—feed makes up 65% of the production cost in poultry, 35% in pigs, and over 14% in cattle. Even though meat and milk prices are high, livestock producers continue to see shrinking profit margins.
                  </p>
                  <p 
                    className="text-sm md:text-base leading-[168%] self-stretch"
                    style={{ 
                      fontFamily: 'Space Grotesk, sans-serif',
                      color: 'rgba(23, 31, 22, 0.75)'
                    }}
                  >
                    Quality protein feed is becoming less affordable. Read more on the farmers' burden - farmer HF link
                  </p>
                </div>
              )}
            </div>

            {/* Second Accordion Item */}
            <div className="flex flex-col items-start gap-6 w-full">
              <button 
                onClick={() => toggleAccordion('costs-beyond')}
                className="flex flex-row items-center gap-8 w-full text-left"
              >
                <div className="flex flex-row items-center p-1 gap-2 w-5 h-5 bg-gray-100">
                  <div className="w-3 h-3 bg-gray-400"></div>
                </div>
                <h3 
                  className="text-xl md:text-3xl font-semibold leading-[140%] flex-1"
                  style={{ 
                    fontFamily: 'Urbanist, sans-serif',
                    color: '#1B1B1B'
                  }}
                >
                  "And the costs go far beyond just money"
                </h3>
              </button>
            </div>

            {/* Third Accordion Item */}
            <div className="flex flex-col items-start gap-6 w-full">
              <button 
                onClick={() => toggleAccordion('value-chain')}
                className="flex flex-row items-center gap-8 w-full text-left relative"
              >
                <div className="flex flex-row items-center p-1 gap-2 w-5 h-5 bg-gray-100">
                  <div className="w-3 h-3 bg-black"></div>
                </div>
                <h3 
                  className="text-xl md:text-3xl font-semibold leading-[140%] flex-1"
                  style={{ 
                    fontFamily: 'Urbanist, sans-serif',
                    color: '#19471A'
                  }}
                >
                  "The whole value chain is linear – it should be a cycle"
                </h3>
                <div className="w-4 h-4 absolute right-0 top-7">
                  <svg className="w-full h-full" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Right side image */}
          <div className="w-full lg:w-[484px] h-[400px] lg:h-[680px] rounded-2xl overflow-hidden">
            <img 
              src="https://static.igem.wiki/teams/5642/images/what/duckweed-in-hands.webp"
              alt="Man Holding a Plant"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="flex flex-row justify-center items-start px-8 md:px-32 py-10 md:py-20 gap-16 w-full bg-white relative">
        <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gray-100"></div>
        
        <div className="flex flex-col items-center px-8 md:px-48 py-10 md:py-20 gap-12 w-full max-w-[1184px] bg-gray-100 rounded-2xl relative z-10">
          <h2 
            className="text-2xl md:text-5xl font-semibold leading-[140%] text-center self-stretch"
            style={{ 
              fontFamily: 'Urbanist, sans-serif',
              color: '#1B1B1B'
            }}
          >
            Some SynBio solutions came to mind immediately:
          </h2>
          
          <div className="flex flex-col md:flex-row items-start gap-12">
            {synbioSolutions.map((solution, index) => (
              <div key={index} className="flex flex-row justify-center items-center px-5 py-0 gap-2 w-full md:w-56 h-30 bg-white rounded-lg">
                <p 
                  className="text-sm md:text-base leading-[168%] text-center flex-1"
                  style={{ 
                    fontFamily: 'Space Grotesk, sans-serif',
                    color: 'rgba(23, 31, 22, 0.75)'
                  }}
                >
                  {solution}
                </p>
              </div>
            ))}
          </div>
          
          <p 
            className="text-base md:text-lg leading-[168%] text-center self-stretch"
            style={{ 
              fontFamily: 'Space Grotesk, sans-serif',
              color: 'rgba(23, 31, 22, 0.75)'
            }}
          >
            But that would only reinforce the unsustainable status quo. We wanted to uproot it!
          </p>
        </div>
      </section>

      {/* Duckweed Image Section */}
      <section className="flex flex-col items-center px-8 md:px-32 py-10 w-full bg-white">
        <h2 
          className="text-2xl md:text-4xl font-semibold leading-[120%] mb-8 text-center"
          style={{ 
            fontFamily: 'Urbanist, sans-serif',
            color: '#1B1B1B'
          }}
        >
          This is the superior plant - duckweed
        </h2>
        
        <div className="relative w-full max-w-[1184px] h-[500px] md:h-[669px]">
          {/* Central duckweed image */}
          <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-white rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <img 
              src="https://static.igem.wiki/teams/5642/images/what/duckweed.jpg"
              alt="Duckweed plant"
              className="w-48 h-64 md:w-60 md:h-96 object-cover mx-auto"
            />
          </div>

          {/* Benefit cards positioned around the circle */}
          {duckweedBenefits.map((benefit, index) => {
            let positionClass = '';
            switch(benefit.position) {
              case 'top-left':
                positionClass = 'absolute top-4 md:top-24 left-4 md:left-24';
                break;
              case 'top-right':
                positionClass = 'absolute top-4 md:top-16 right-4 md:right-20';
                break;
              case 'bottom-left':
                positionClass = 'absolute bottom-24 md:bottom-40 left-4 md:left-24';
                break;
              case 'bottom-right':
                positionClass = 'absolute bottom-16 md:bottom-32 right-4 md:right-20';
                break;
            }
            
            return (
              <div key={index} className={`${positionClass} flex flex-col items-center px-5 py-5 gap-1 bg-gray-100 rounded-lg max-w-xs`}>
                <h3 
                  className="text-base md:text-lg font-bold leading-[168%] text-center self-stretch"
                  style={{ 
                    fontFamily: 'Space Grotesk, sans-serif',
                    color: '#171F16'
                  }}
                >
                  {benefit.title}
                </h3>
                <p 
                  className="text-sm md:text-base leading-[168%] text-center self-stretch"
                  style={{ 
                    fontFamily: 'Space Grotesk, sans-serif',
                    color: 'rgba(23, 31, 22, 0.75)'
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            );
          })}

          {/* Dashed connection lines - hidden on mobile */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
            <defs>
              <pattern id="dashed" patternUnits="userSpaceOnUse" width="8" height="2">
                <rect width="4" height="2" fill="#B1B0B0"/>
              </pattern>
            </defs>
            {/* Top left line */}
            <line x1="25%" y1="30%" x2="45%" y2="45%" stroke="url(#dashed)" strokeWidth="1"/>
            {/* Top right line */}
            <line x1="75%" y1="25%" x2="55%" y2="45%" stroke="url(#dashed)" strokeWidth="1"/>
            {/* Bottom left line */}
            <line x1="25%" y1="70%" x2="45%" y2="55%" stroke="url(#dashed)" strokeWidth="1"/>
            {/* Bottom right line */}
            <line x1="75%" y1="75%" x2="55%" y2="55%" stroke="url(#dashed)" strokeWidth="1"/>
          </svg>
        </div>
        
        <p 
          className="text-sm md:text-base leading-[168%] text-center mt-8"
          style={{ 
            fontFamily: 'Space Grotesk, sans-serif',
            color: 'rgba(23, 31, 22, 0.75)'
          }}
        >
          Dive deeper here!
        </p>
      </section>

      {/* Final Text Section */}
      <section className="flex flex-col items-start px-8 md:px-32 py-10 gap-16 w-full bg-white">
        <div className="flex flex-col md:flex-row items-start pt-10 md:pt-20 gap-8 md:gap-52 w-full max-w-[1184px] border-t border-opacity-10" style={{ borderColor: 'rgba(23, 31, 22, 0.1)' }}>
          <div className="flex flex-col items-start gap-6 w-full md:w-96">
            <h2 
              className="text-2xl md:text-4xl font-semibold leading-[120%]"
              style={{ 
                fontFamily: 'Urbanist, sans-serif',
                color: '#1B1B1B'
              }}
            >
              The struggle is real
            </h2>
          </div>
          
          <div className="flex flex-col items-start gap-6 flex-1 max-w-[600px]">
            <p 
              className="text-base md:text-lg leading-[168%] self-stretch"
              style={{ 
                fontFamily: 'Space Grotesk, sans-serif',
                color: 'rgba(23, 31, 22, 0.75)'
              }}
            >
              We had ideas on what to do with duckweed, like engineering it to uptake ammonium faster for manure remediation- nitroduck link or to grow faster and bigger - hanson bbd hp link.
            </p>
            <p 
              className="text-xl md:text-2xl font-bold leading-[168%] self-stretch"
              style={{ 
                fontFamily: 'Space Grotesk, sans-serif',
                color: '#171F16'
              }}
            >
              But we realized we just wouldn't be able to do it. Duckweeds are very hard to engineer.
            </p>
          </div>
        </div>
      </section>

      {/* Expert Quote Section */}
      <section className="flex flex-col items-start px-8 md:px-32 py-10 gap-16 w-full bg-white">
        <div className="flex flex-col lg:flex-row items-center w-full max-w-[1184px] gap-8">
          <div className="w-full lg:w-[484px] h-[300px] lg:h-[484px] bg-white rounded-lg overflow-hidden flex-shrink-0">
            <img 
              src="https://static.igem.wiki/teams/5642/images/what/julia-eva-fortmueller.webp"
              alt="Julia-Eva Fortmueller"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-between items-start px-8 lg:px-20 py-10 lg:py-20 gap-4 flex-1 min-h-[300px] lg:h-[484px]">
            <div className="flex flex-col items-start gap-4 self-stretch">
              <div className="w-10 h-8 bg-green-400"></div>
              
              <div className="flex flex-col items-start gap-2 w-full lg:w-[300px]">
                <h3 
                  className="text-xl lg:text-3xl font-semibold leading-[140%] text-center"
                  style={{ 
                    fontFamily: 'Urbanist, sans-serif',
                    color: '#1B1B1B'
                  }}
                >
                  Julia-Eva Fortmueller
                </h3>
                <p 
                  className="text-sm lg:text-base font-medium leading-[140%] text-center"
                  style={{ 
                    fontFamily: 'Urbanist, sans-serif',
                    color: '#9DD019'
                  }}
                >
                  Weizmann Institute of Science
                </p>
              </div>
              
              <p 
                className="text-sm lg:text-base leading-[168%] self-stretch"
                style={{ 
                  fontFamily: 'Space Grotesk, sans-serif',
                  color: 'rgba(23, 31, 22, 0.75)'
                }}
              >
                Transient expression works very well in duckweeds. But getting stable lines is an extremely laborious, lengthy and often unpredictable process. Also, a number of duckweed species have never been transformed at all.
              </p>
            </div>
            
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-row justify-center items-center w-14 h-14 bg-gray-100 rounded">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L10 8L6 12" stroke="black" strokeWidth="1"/>
                </svg>
              </div>
              <div className="flex flex-row justify-center items-center w-14 h-14 bg-gray-100 rounded">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M10 4L6 8L10 12" stroke="black" strokeWidth="1"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message Section */}
      <section className="flex flex-row justify-center items-start px-8 md:px-32 py-10 md:py-20 gap-16 w-full bg-white relative">
        <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gray-100"></div>
        
        <div className="flex flex-col items-center px-8 md:px-48 py-10 md:py-20 gap-6 w-full max-w-[1184px] bg-gray-100 rounded-2xl relative z-10">
          <p 
            className="text-sm md:text-base leading-[168%] text-center self-stretch"
            style={{ 
              fontFamily: 'Space Grotesk, sans-serif',
              color: 'rgba(23, 31, 22, 0.75)'
            }}
          >
            Duckweed has the potential to became a novel crop, but a lot of pieces are missing
          </p>
          
          <a 
            href="/project/how"
            className="text-2xl md:text-5xl font-semibold leading-[140%] text-center self-stretch underline hover:opacity-80 transition-opacity"
            style={{ 
              fontFamily: 'Urbanist, sans-serif',
              color: '#1B1B1B'
            }}
          >
            See how we filled the gaps!
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectWhat;