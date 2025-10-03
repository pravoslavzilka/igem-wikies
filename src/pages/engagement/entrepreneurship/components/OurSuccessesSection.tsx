// src/pages/engagement/entrepreneurship/components/OurSuccessesSection.tsx
import React from 'react';

const OurSuccessesSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 bg-white">
      <h2 
        className="text-5xl font-bold text-center mb-16"
        style={{ 
          fontFamily: 'Space Grotesk, sans-serif',
          color: '#2d5016'
        }}
      >
        OUR SUCCESSES
      </h2>

      {/* First Row - 5 small items */}
      <div className="flex justify-center items-center gap-6 mb-12 flex-wrap">
        {/* iGEM Logo */}
        <div className="w-32 h-32 flex items-center justify-center">
          <img 
            src="https://static.igem.wiki/teams/5642/images/engagement/entrepreneurship/startupsigem.webp" 
            alt="iGEM"
            className="w-full h-full object-contain"
          />
        </div>

        {/* European SynBio Hackathon */}
        <div className="w-42 h-32 bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center">
          <img 
            src="https://static.igem.wiki/teams/5642/images/engagement/entrepreneurship/heckathon.webp" 
            alt="European SynBio Hackathon"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Lifbee Academy */}
        <div className="w-40 h-32 flex items-center justify-center">
          <img 
            src="https://static.igem.wiki/teams/5642/images/engagement/entrepreneurship/lifbee.webp" 
            alt="Lifbee Academy"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Start Your Business */}
        <div className="w-40 h-32 flex items-center justify-center">
          <img 
            src="https://static.igem.wiki/teams/5642/images/engagement/entrepreneurship/syb.webp" 
            alt="Start Your Business"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Booster Challenge */}
        <div className="w-32 h-32 bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center">
          <img 
            src="https://static.igem.wiki/teams/5642/images/engagement/entrepreneurship/nitroduck1-4.webp" 
            alt="Booster Challenge"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Second Row - 2 large items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* iGEM Startups & European SynBio Hackathon */}
        <div className="flex flex-col items-center">
          <div className="w-full aspect-video bg-gray-200 rounded-3xl overflow-hidden mb-4">
            <img 
              src="https://static.igem.wiki/teams/5642/images/engagement/entrepreneurship/nitroduck1-2.webp" 
              alt="iGEM Startups & European SynBio Hackathon"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 
            className="text-lg font-semibold text-center text-gray-800"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            iGEM Startups & European SynBio Hackathon
          </h3>
        </div>

        {/* Lifbee & PowerGreens */}
        <div className="flex flex-col items-center">
          <div className="w-full aspect-video bg-gray-200 rounded-3xl overflow-hidden mb-4">
            <img 
              src="https://static.igem.wiki/teams/5642/images/engagement/entrepreneurship/nitroduck1-3.webp" 
              alt="Lifbee & PowerGreens"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 
            className="text-lg font-semibold text-center text-gray-800"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Lifbee & PowerGreens
          </h3>
        </div>
      </div>

      {/* Third Row - 2 items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* PowerGreens at SYB MUNI and Beyond */}
        <div className="flex flex-col items-center">
          <div className="w-full aspect-video bg-gray-200 rounded-3xl overflow-hidden mb-4">
            <img 
              src="https://static.igem.wiki/teams/5642/images/engagement/entrepreneurship/nitroduck2-4.webp" 
              alt="PowerGreens at SYB MUNI and Beyond"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 
            className="text-lg font-semibold text-center text-gray-800"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            PowerGreens at SYB MUNI and Beyond
          </h3>
        </div>

        {/* What's next? */}
        <div className="flex flex-col items-center">
          <div className="w-full aspect-video bg-white rounded-3xl overflow-hidden mb-4 flex items-center justify-center">
            <img 
              src="https://static.igem.wiki/teams/5642/images/engagement/entrepreneurship/nitroduck.webp" 
              alt="What's next?"
              className="w-2/3 h-2/3 object-contain"
            />
          </div>
          <h3 
            className="text-lg font-semibold text-center text-gray-800"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            What&apos;s next?
          </h3>
        </div>
      </div>
    </section>
  );
};

export default OurSuccessesSection;