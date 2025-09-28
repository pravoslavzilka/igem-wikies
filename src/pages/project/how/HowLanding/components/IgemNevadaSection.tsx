import React from 'react';

const IgemNevadaSection: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-8 lg:px-32 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 xl:gap-[200px] border-b border-black/10 pb-12 sm:pb-16 lg:pb-20">
          
          {/* Left side - heading */}
          <div className="w-full lg:w-[384px] flex-shrink-0">
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[120%] text-black"
              style={{ fontFamily: 'Urbanist, sans-serif' }}
            >
              iGEM Nevada 2009 Team
            </h2>
          </div>

          {/* Right side - description */}
          <div className="flex-1 min-w-0">
            <p 
              className="text-base sm:text-lg leading-[168%] text-black/75 text-justify"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Struggled to transform and genetically engineer duckweed, as many other scientists worldwide have. As reported in their notebook, <strong>duckweed callus induction and formation simply took too long for their iGEM timeline</strong>. Many other iGEM teams might have liked to start projects based on duckweed <strong>but were discouraged by the time-consuming</strong> and hardship of duckweed genetic engineering or the lack of available parts.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default IgemNevadaSection;