// src/pages/engagement/entrepreneurship/components/SynBioHackathonSection.tsx
import React from 'react';

const SynBioHackathonSection: React.FC = () => {
  return (
    <section id="synbio-hackathon" className="max-w-6xl mx-auto px-8 py-16 bg-white">
      {/* Header */}
      <h2 
        className="text-6xl font-bold mb-12"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        European SynBio Hackathon
      </h2>

      {/* Text Content */}
      <div 
        className="text-justify text-gray-800 leading-relaxed mb-8 text-lg"
        style={{ fontFamily: 'Urbanist, sans-serif' }}
      >
        <p>
          This meant creating a completely{' '}
          <span className="font-bold">new scientific approach</span> to our project so we had to sit down and hack. That&apos;s where{' '}
          <a 
            href="https://synbee.eu/activity/european-synbio-hackaton"
            target="blank"
            className="text-blue-600 hover:underline"
          >
            SynBee Read-Write-Grow Hackathon
          </a>
          {' '}came in handy. We were going through the literature on chloroplast engineering and presented a modification of our initial concept there. We were{' '}
          <span className="font-bold">awarded with 3rd place</span> and again received a lot of insights that helped us on our way.
        </p>
      </div>

      {/* Winners Image */}
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <img 
            src="https://static.igem.wiki/teams/5642/images/engagement/entrepreneurship/nitroduck2-3.webp" 
            alt="2024 edition winners - ZOMBIO, ENDOSTIK, NitroDuck"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default SynBioHackathonSection;