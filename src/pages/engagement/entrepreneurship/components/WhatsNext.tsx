// src/pages/engagement/entrepreneurship/components/WhatsNext.tsx
import React from 'react';

const WhatsNext: React.FC = () => {
  return (
    <section id="whats-next" className="max-w-6xl mx-auto px-8 py-16 bg-white">
      {/* Header */}
      <h2 
        className="text-5xl font-bold text-center mb-12"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        What's next?
      </h2>

      {/* Green Box with Text */}
      <div 
        className="bg-green-800 text-white p-12 rounded-2xl mb-16"
        style={{ fontFamily: 'Urbanist, sans-serif' }}
      >
        <p className="text-lg leading-relaxed mb-6 font-bold">
          Despite the great feedback from potential customers, judges and mentors, we decided not to continue with PowerGreens. We were always drawn to deep-tech projects and that's why we are going to focus all our efforts on getting from 0 to 1.
        </p>
        
        <p className="text-lg leading-relaxed mb-6 font-bold">
          You read about what NitroDuck was and how it evolved. To get to know what is NitroDuck going to become, come and listen to our special live stage talk at Grand Jamboree!
        </p>
        
        <p className="text-3xl font-bold text-center font-bold">
          From iGEM Start-Up to iGEM Team and Back: The Story & Future of NitroDuck
        </p>
      </div>

      {/* Logo and Tagline */}
      <div className="flex flex-col items-center">
        {/* NitroDuck Logo */}
        <div className="w-64 h-64 mb-8">
          <img 
            src="https://static.igem.wiki/teams/5642/images/engagement/entrepreneurship/nitroduck.webp" 
            alt="NitroDuck Logo"
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Tagline */}
        <h3 
          className="text-6xl font-bold text-center"
          style={{ 
            fontFamily: 'Space Grotesk, sans-serif',
            color: '#6ca033'
          }}
        >
          Making plants truly scalable.
        </h3>
      </div>
    </section>
  );
};

export default WhatsNext;