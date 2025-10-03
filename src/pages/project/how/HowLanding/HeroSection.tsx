import React from "react";

interface HeroSectionProps {
  // heroImageUrl už není potřeba, můžeš ho nechat pro budoucí použití nebo odstranit
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Text Container */}
        <div className="mb-0">
          {/* How label */}
          <h2 
            className="text-base sm:text-lg font-semibold leading-[140%] text-black/50 mb-2 sm:mb-3"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            What
          </h2>
          
          {/* Main heading */}
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[140%] text-black max-w-none"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            We took a holistic approach to make duckweeds not merely almost, but truly superior
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-sm sm:text-base lg:text-lg leading-[140%] text-black/75 mt-3 max-w-3xl"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            To make protein feed more affordable & accessible to anyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;