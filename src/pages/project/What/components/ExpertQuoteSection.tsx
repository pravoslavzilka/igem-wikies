// src/pages/project/What/components/ExpertQuoteSection.tsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ExpertQuote {
  name: string;
  institution: string;
  quote: string;
  photo: string;
  accentColor: string;
}

const ExpertQuoteSection: React.FC = () => {
  const [currentExpert, setCurrentExpert] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const experts: ExpertQuote[] = [
    {
      name: "Julia-Eva Fortmueller",
      institution: "Weizmann Institute of Science",
      quote: "Transient expression works very well in duckweeds. But getting stable lines is an extremely laborious, lengthy and often unpredictable process. Also, a number of duckweed species have never been transformed at all.",
      photo: "https://static.igem.wiki/teams/5642/images/what/julia-eva-fortmueller.webp",
      accentColor: "#9DD019"
    },
    {
      name: "Arturo Mari Ordoñez",
      institution: "GMI Institute",
      quote: "Duckweeds are monocotyledonous plants. Most available plant parts are designed for dicotyledons and often don't work in duckweeds. There's a general shortage of working duckweed parts.",
      photo: "https://static.igem.wiki/teams/5642/images/what/arturo.webp",
      accentColor: "#9DD019"
    },
    {
      name: "Django Mangalam",
      institution: "Plantible",
      quote: "Duckweed cultivation is very hard to get right, they're quite tricky to work with. There's a million parameters to fine-tune. At PlantibleFoods, we have been perfecting it in ponds for almost ten years.",
      photo: "https://static.igem.wiki/teams/5642/images/what/django.webp",
      accentColor: "#9DD019"
    }
  ];

  const changeExpert = (newIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentExpert(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 150);
  };

  const nextExpert = () => {
    const newIndex = (currentExpert + 1) % experts.length;
    changeExpert(newIndex);
  };

  const prevExpert = () => {
    const newIndex = (currentExpert - 1 + experts.length) % experts.length;
    changeExpert(newIndex);
  };

  const currentExpertData = experts[currentExpert];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left side - Expert photo */}
          <div className="w-full lg:w-[484px] lg:flex-shrink-0">
            <div className="aspect-square lg:h-[484px] bg-white rounded-lg overflow-hidden">
              <img 
                src={currentExpertData.photo}
                alt={currentExpertData.name}
                className={`w-full h-full object-cover transition-all duration-300 ease-in-out ${
                  isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                }`}
              />
            </div>
          </div>

          {/* Right side - Quote and details */}
          <div className="flex flex-col justify-start items-start w-full lg:flex-1 py-4 lg:py-8">
            
            {/* Quote mark */}
            <div 
              className={`text-4xl sm:text-5xl lg:text-6xl font-serif leading-none mb-6 transition-all duration-300 ease-in-out ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
              style={{ color: currentExpertData.accentColor }}
            >
              ❝
            </div>

            {/* Expert name */}
            <h3 
              className={`text-xl sm:text-2xl lg:text-3xl font-semibold leading-[140%] text-black mb-2 transition-all duration-300 ease-in-out ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
              style={{ 
                fontFamily: 'Urbanist, sans-serif',
                transitionDelay: '50ms'
              }}
            >
              {currentExpertData.name}
            </h3>

            {/* Institution */}
            <p 
              className={`text-sm sm:text-base font-medium leading-[140%] mb-6 transition-all duration-300 ease-in-out ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
              style={{ 
                fontFamily: 'Urbanist, sans-serif',
                color: currentExpertData.accentColor,
                transitionDelay: '100ms'
              }}
            >
              {currentExpertData.institution}
            </p>

            {/* Quote text */}
            <p 
              className={`w-full text-sm sm:text-base leading-[168%] max-w-none lg:max-w-[580px] mb-8 lg:mb-12 transition-all duration-300 ease-in-out ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
              style={{ 
                fontFamily: 'Space Grotesk, sans-serif',
                color: 'rgba(23, 31, 22, 0.75)',
                transitionDelay: '150ms'
              }}
            >
              {currentExpertData.quote}
            </p>

            {/* Navigation arrows */}
            <div className={`flex flex-row items-center gap-2 sm:gap-4 transition-all duration-300 ease-in-out ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
            style={{ transitionDelay: '200ms' }}>
              
              {/* Left arrow */}
              <button 
                onClick={prevExpert}
                disabled={isTransitioning}
                className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-md hover:bg-gray-200 active:bg-gray-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                aria-label="Previous expert"
              >
                <ChevronLeft size={16} className="text-black" />
              </button>

              {/* Indicator dots */}
              <div className="flex gap-2 mx-2">
                {experts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => changeExpert(index)}
                    disabled={isTransitioning}
                    className={`w-2 h-2 rounded-full transition-all duration-200 focus:outline-none ${
                      index === currentExpert 
                        ? 'bg-green-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to expert ${index + 1}`}
                  />
                ))}
              </div>

              {/* Right arrow */}
              <button 
                onClick={nextExpert}
                disabled={isTransitioning}
                className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-md hover:bg-gray-200 active:bg-gray-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                aria-label="Next expert"
              >
                <ChevronRight size={16} className="text-black" />
              </button>
              
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertQuoteSection;