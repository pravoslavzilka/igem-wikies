// src/pages/engagement/entrepreneurship/components/NitroDuckSection.tsx
import React from 'react';

const NitroDuckSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 py-16 bg-white">
      {/* NitroDuck Header */}
      <h2 
        className="text-6xl font-bold mb-12"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        NitroDuck
      </h2>

      {/* Intro Text with Image */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Left Column - Text */}
        <div 
          className="space-y-4 text-justify"
          style={{ fontFamily: 'Urbanist, sans-serif' }}
        >
          <p className="text-gray-800 leading-relaxed text-lg">
            We started our entrepreneurship efforts even prior to entering the iGEM Competition. 
            Actually, we wanted to try out, how we work together as a team before we would do iGEM. 
            Well, looking back at it, sounds weird, right?
          </p>
          
          <p className="text-gray-800 leading-relaxed text-lg">
            Either way, we took part in the{' '}
            <a 
              href="#" 
              className="text-blue-600 hover:underline"
            >
              iGEM Startups
            </a>
            {' '}BioHackathon back in March 2024. This Instagram screenshot summarizes well how it went.
          </p>
          
          <p className="text-gray-800 leading-relaxed text-lg">
            So what was NitroDuck?
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="flex items-start justify-center">
          <div className="w-full max-w-md aspect-square bg-gray-200 rounded-3xl overflow-hidden">
            <img 
              src="NITRODUCK_TEAM_PHOTO_URL" 
              alt="NitroDuck Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="mb-16">
        <h3 
          className="text-5xl font-bold mb-8"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Problem
        </h3>
        
        <div 
          className="space-y-4 text-justify text-gray-800 leading-relaxed text-lg"
          style={{ fontFamily: 'Urbanist, sans-serif' }}
        >
          <p>
            Searching through mostly environmental problems that should be solved we found one that sticked 
            with us and we were coming back to it all the time.{' '}
            <span className="font-bold">
              Inefficient nitrogen handling in agriculture.
            </span>
          </p>
          
          <p>
            More than a 100 years ago, process called Haber-Bosch synthesis (1) revolutionized agriculture as it 
            allowed for fixing aerial nitrogen into ammonium which could be used for making nitrogen based 
            fertilizers (2). These increased the crop yields around the whole world and saved millions of lives (3). 
            These crops are being used mostly to feed livestock. After consumption, animals produce large 
            amounts of manure that is still very rich in nitrogen in the form of ammonium (4). Manure is usually 
            stored in tanks and used instead of synthetic fertilizers as a source of nitrogen for crops. However, 
            while being stored, manure is losing large amounts of ammonium due to its evaporation (5). This is 
            needed to decrease its concentration and toxicity for plants. Still, after spreading manure on fields, 
            nitrogen leaks into soils and waters, causing eutrophication and groundwater contamination (4). As a 
            result,{' '}
            <span className="font-bold">
              around 60% off all nitrogen is not utilized and leaks into the environment in the whole 
              process (6), worth 20 billion dollars each year (7).
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default NitroDuckSection;