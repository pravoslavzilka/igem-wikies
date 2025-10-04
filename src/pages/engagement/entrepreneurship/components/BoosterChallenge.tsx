// src/pages/engagement/entrepreneurship/components/BoosterChallenge.tsx
import React from 'react';

const BoosterChallenge: React.FC = () => {
  return (
    <section id="booster-challenge" className="max-w-6xl mx-auto px-8 py-16 bg-white">
      {/* Header */}
      <h2 
        className="text-5xl font-bold mb-12"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        PowerGreens at BUT Booster Challenge
      </h2>

      {/* Text Content */}
      <div 
        className="text-justify text-gray-800 leading-relaxed mb-12 text-lg"
        style={{ fontFamily: 'Urbanist, sans-serif' }}
      >
        <p>
          With PowerGreens concept and especially our hardware, Pravo, Andrej and Martin took part in{' '}
          <span className="font-bold">Booster Challenge</span> organised by Brno University of Technology. We worked hard on our hardware throughout the summer and were{' '}
          <span className="font-bold">awarded another 54 000 crowns</span> to progress our project forward.
        </p>
      </div>

      {/* Two Images */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Image */}
        <div className="w-full rounded-3xl overflow-hidden">
          <img 
            src="https://static.igem.wiki/teams/5642/images/engagement/powergreens/boosterchallenge1.webp" 
            alt="Booster Challenge award ceremony"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="w-full rounded-3xl overflow-hidden">
          <img 
            src="https://static.igem.wiki/teams/5642/images/engagement/powergreens/boosterchallenge2.webp" 
            alt="Booster Challenge presentation"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BoosterChallenge;