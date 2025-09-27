import React from 'react';

const IntroTextSection: React.FC = () => {
  return (
    <section className="flex flex-col items-start px-32 pt-20 pb-10 gap-16 w-full h-[320px] bg-white">
      <div className="flex flex-row items-start gap-[200px] w-full max-w-[1184px] h-[200px] border-b border-black/10 pb-20">
        
        {/* Left side - heading */}
        <div className="flex flex-col items-start gap-6 w-[384px] h-24">
          <h2 
            className="w-full h-24 text-4xl font-semibold leading-[120%] text-black"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            We're a team of Czechs and Slovaks
          </h2>
        </div>

        {/* Right side - description */}
        <div className="flex flex-col items-start gap-6 w-[600px] h-[120px] flex-grow">
          <p 
            className="w-full h-[120px] text-lg leading-[168%] text-black/75"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            In both our countries, agricultural land takes up around half of all territory. 
            A lot of us grew up in villages, surrounded by farms, fields, livestock and farmers. 
            We saw the challenges around us and realized that they are a part of much bigger, global issues.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default IntroTextSection;