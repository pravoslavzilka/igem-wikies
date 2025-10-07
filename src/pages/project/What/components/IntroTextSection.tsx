// src/pages/project/What/components/IntroTextSection.tsx
import React from 'react';

const IntroTextSection: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-8 lg:px-32 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 xl:gap-[200px] border-b border-black/10 pb-12 sm:pb-16 lg:pb-20">
          
          {/* Left side - heading */}
          <div className="w-full lg:w-[384px] flex-shrink-0">
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[120%] text-black"
              style={{ fontFamily: 'Urbanist, sans-serif' }}
            >
              We're a team of Czechs and Slovaks
            </h2>
          </div>

          {/* Right side - description */}
          <div className="flex-1 min-w-0" >
            <p 
              className="text-base sm:text-lg leading-[168%] text-black/75 text-justify"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              In both our countries, <b>agricultural land</b> takes up around <b>half of all territory</b>. 
              A lot of us grew up in villages, surrounded by farms, fields, livestock and farmers. 
              We saw the <b>challenges around us</b> and realized that they are a part of much bigger, <b>global issues</b>.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default IntroTextSection;