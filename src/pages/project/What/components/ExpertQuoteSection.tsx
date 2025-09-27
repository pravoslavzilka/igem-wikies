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
      quote: "Duckweeds are monocotyledonous plants. Most available plant parts are designed for dicotyledons and often don’t work in duckweeds. There’s a general shortage of working duckweed parts.",
      photo: "https://static.igem.wiki/teams/5642/images/what/arturo.webp",
      accentColor: "#9DD019"
    },
    {
      name: "Django Mangalam",
      institution: "Plantible",
      quote: "Duckweed cultivation is very hard to get right, they’re quite tricky to work with. There’s a million parameters to fine-tune. At PlantibleFoods, we have been perfecting it in ponds for almost ten years.",
      photo: "https://static.igem.wiki/teams/5642/images/what/django.webp",
      accentColor: "#9DD019"
    }
  ];

  const nextExpert = () => {
    setCurrentExpert((prev) => (prev + 1) % experts.length);
  };

  const prevExpert = () => {
    setCurrentExpert((prev) => (prev - 1 + experts.length) % experts.length);
  };

  const currentExpertData = experts[currentExpert];

  return (
    <section className="flex flex-col lg:flex-row items-center w-full min-h-[564px] bg-white px-8 lg:px-32 py-10 gap-8 lg:gap-16">
      
      {/* Left side - Expert photo */}
      <div className="w-full lg:w-[484px] h-[400px] lg:h-[484px] bg-white rounded-lg overflow-hidden flex-shrink-0">
        <img 
          src={currentExpertData.photo}
          alt={currentExpertData.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side - Quote and details */}
      <div className="flex flex-col justify-between items-start px-4 lg:px-20 py-8 lg:py-20 gap-4 w-full lg:w-[700px] h-full lg:h-[484px] flex-grow">
        
        {/* Top section with quote */}
        <div className="flex flex-col items-start gap-4 w-full max-w-[580px] mx-auto">
          
          {/* Quote mark */}
          <div 
            className="w-[41px] h-8 flex items-center justify-center text-white text-2xl font-bold rounded"
            style={{ backgroundColor: currentExpertData.accentColor }}
          >
            "
          </div>

          {/* Quote text */}
          <p 
            className="w-full text-base leading-[168%]"
            style={{ 
              fontFamily: 'Space Grotesk, sans-serif',
              color: 'rgba(23, 31, 22, 0.75)'
            }}
          >
            {currentExpertData.quote}
          </p>
        </div>

        {/* Bottom section with expert details and navigation */}
        <div className="flex flex-col items-center gap-6 w-full">
          
          {/* Expert details */}
          <div className="flex flex-col items-center gap-2 w-full max-w-[300px]">
            
            {/* Expert name */}
            <h3 
              className="text-2xl lg:text-3xl font-semibold leading-[140%] text-center text-black"
              style={{ fontFamily: 'Urbanist, sans-serif' }}
            >
              {currentExpertData.name}
            </h3>

            {/* Institution */}
            <p 
              className="text-base font-medium leading-[140%] text-center"
              style={{ 
                fontFamily: 'Urbanist, sans-serif',
                color: currentExpertData.accentColor
              }}
            >
              {currentExpertData.institution}
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex flex-row items-center gap-2 w-[120px] h-14">
            
            {/* Left arrow */}
            <button 
              onClick={prevExpert}
              className="flex flex-row justify-center items-center w-14 h-14 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              aria-label="Previous expert"
            >
              <ChevronLeft size={16} className="text-black" />
            </button>

            {/* Right arrow */}
            <button 
              onClick={nextExpert}
              className="flex flex-row justify-center items-center w-14 h-14 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              aria-label="Next expert"
            >
              <ChevronRight size={16} className="text-black" />
            </button>
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default ExpertQuoteSection;