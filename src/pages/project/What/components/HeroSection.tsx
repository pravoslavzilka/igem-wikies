import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Text Container */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          {/* What label */}
          <h2 
            className="text-base sm:text-lg font-semibold leading-[140%] text-black/50 mb-2 sm:mb-4"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            What
          </h2>
          
          {/* Main heading - responsive sizes */}
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[140%] text-black max-w-none"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            We wanted to solve a real, BIG problem with synthetic biology
          </h1>
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
            {/* Background image */}
            <img 
              src="https://static.igem.wiki/teams/5642/images/what/bull.webp" 
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              onError={(e) => {
                console.log('Failed to load bull image');
                e.currentTarget.style.display = 'none';
              }}
            />
            
            {/* Team photo overlay - adjusted for better display */}
            <img 
              src="https://static.igem.wiki/teams/5507/what/img-7065-1.jpg" 
              alt=""
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
              loading="eager"
              onError={(e) => {
                console.log('Failed to load team image');
                e.currentTarget.style.display = 'none';
              }}
            />
            
            {/* Gradient overlay for better readability if you want to add text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;