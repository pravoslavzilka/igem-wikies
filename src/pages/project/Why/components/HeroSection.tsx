// src/pages/project/What/components/HeroSection.tsx
import React from 'react';

interface HeroSectionProps {
  heroImageUrl?: string | null;
}

const HeroSection = ({ heroImageUrl }: HeroSectionProps = {}) => {
  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-32">
      <div className="max-w-7xl mx-auto">

        {/* Hero Image - WITH text overlay */}
        <div className="w-full max-w-6xl mx-auto mb-6 sm:mb-8 lg:mb-12">
          <div
            className="rounded-xl sm:rounded-2xl lg:rounded-3xl relative overflow-hidden w-full"
            style={{
              aspectRatio: "3/1",
              minHeight: "200px",
              maxHeight: "480px",
            }}
          >
            {heroImageUrl ? (
              <div className="relative w-full h-full">
                <img
                  src={heroImageUrl}
                  alt="Duckweed hero image"
                  className="w-full h-full object-cover"
                />
                {/* Text overlay on image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4">
                    <h1
                      className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg"
                      style={{
                        fontFamily: "Urbanist, sans-serif",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                      }}
                    >
                      Forgetting Arabidopsis or soybean and bracing ourselves for duckweed!
                    </h1>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-600"></div>
                <div className="absolute inset-0 opacity-60">
                  <div
                    className="w-full h-full bg-repeat opacity-40"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23065f46' opacity='0.1'%3E%3Ccircle cx='15' cy='15' r='3'/%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='23' cy='23' r='2'/%3E%3Ccircle cx='23' cy='7' r='1.5'/%3E%3Ccircle cx='7' cy='23' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: "30px 30px",
                    }}
                  ></div>
                </div>
                {/* Text overlay on gradient */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4">
                    <h1
                      className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg"
                      style={{
                        fontFamily: "Urbanist, sans-serif",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                      }}
                    >
                      Forgetting Arabidopsis or soybean and bracing ourselves for duckweed!
                    </h1>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Subtitle text - moved out from image, centered */}
        <div className="flex justify-center">
          <p 
            className="text-sm sm:text-lg lg:text-lg leading-[140%] text-black/75 max-w-3xl text-center text-justify"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            The smallest flowering plant on Earth hides a lot of potential – all of it waiting to be unlocked.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;