import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-10 w-full h-[823px]">
      {/* Text Container */}
      <div className="flex flex-col justify-center items-start px-32 py-20 gap-1 w-full max-w-[1360px] h-[323px]">
        {/* What label */}
        <h2 
          className="w-[43px] h-[25px] text-lg font-semibold leading-[140%] text-black/50"
          style={{ fontFamily: 'Urbanist, sans-serif' }}
        >
          What
        </h2>
        
        {/* Main heading */}
        <h1 
          className="w-full max-w-[1104px] h-[134px] text-5xl font-semibold leading-[140%] text-black"
          style={{ fontFamily: 'Urbanist, sans-serif' }}
        >
          We wanted to solve a real, BIG problem with synthetic biology
        </h1>
      </div>

      {/* Photo Container */}
      <div className="relative w-full max-w-[1360px] h-[480px] rounded-3xl overflow-hidden">
        {/* Background image */}
        <img 
          src="https://static.igem.wiki/teams/5642/images/what/bull.webp" 
          alt="Bull"
          className="absolute w-full h-full object-cover"
        />
        
        {/* Team photo overlay */}
        <img 
          src="https://static.igem.wiki/teams/5507/what/img-7065-1.jpg" 
          alt="Team photo"
          className="absolute w-full h-[907px] object-cover"
          style={{ top: 'calc(50% - 907px/2 + 54.5px)' }}
        />
      </div>
    </section>
  );
};

export default HeroSection;