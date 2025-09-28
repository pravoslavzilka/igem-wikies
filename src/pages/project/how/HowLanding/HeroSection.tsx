import React from "react";

interface HeroSectionProps {
  heroImageUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroImageUrl }) => {
  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Text Container */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          {/* How label */}
          <h2 
            className="text-base sm:text-lg font-semibold leading-[140%] text-black/50 mb-2 sm:mb-4"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            How
          </h2>
          
          {/* Main heading - responsive sizes */}
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[140%] text-black max-w-none"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            We took a holistic approach to make duckweeds not merely almost, but truly superior
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-sm sm:text-base lg:text-lg leading-[140%] text-black/75 mt-4 max-w-3xl"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            To make protein feed more affordable & accessible to anyone.
          </p>
        </div>

        {/* Photo Container */}
        <div className="relative w-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden bg-gray-200">
          <div 
            className="relative w-full"
            style={{
              aspectRatio: "16/9", // Better ratio for mobile
              minHeight: "200px",
              maxHeight: "480px"
            }}
          >
            {/* Hero image */}
            {heroImageUrl ? (
              <img 
                src={heroImageUrl} 
                alt="Duckweed hero image"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                onError={(e) => {
                  console.log('Failed to load hero image');
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-gray-600 text-lg">
                  [Duckweed Hero Image]
                </div>
              </div>
            )}
            
            {/* Gradient overlay for consistency */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;