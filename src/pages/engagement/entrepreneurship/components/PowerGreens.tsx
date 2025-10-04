// src/pages/engagement/entrepreneurship/components/PowerGreens.tsx
import React from 'react';

const PowerGreens: React.FC = () => {
  return (
    <section id="powergreens" className="max-w-6xl mx-auto px-8 py-16 bg-white">
      {/* Main Title */}
      <h2 
        className="text-8xl font-bold mb-4 text-center"
        style={{ 
          fontFamily: 'Space Grotesk, sans-serif',
          color: '#25512b'
        }}
      >
        PowerGreens
      </h2>
      
      {/* Subtitle */}
      <p 
        className="text-4xl text-gray-900 font-bold max-w-4xl leading-tight mb-16"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        What Started as a SynBio AgriTech Startup Pivoted to FoodTech Venture!
      </p>

      {/* Roots in Lifbee Section */}
      <h3 
        className="text-3xl font-bold mb-8"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        Roots in Lifbee: Pivoting and Re-thinking
      </h3>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Left Column - Text */}
        <div 
          className="space-y-4 text-justify text-gray-800 leading-relaxed text-lg"
          style={{ fontFamily: 'Urbanist, sans-serif' }}
        >
          <p>
            In the beginning of our iGEM journey, we have been excited by the biotech entrepreneurship and startups, so we joined{' '}
            <span className="font-bold">Lifbee Academy</span>.
          </p>
          
          <p>
            Lifbee is an 8-month program focused on turning science into business. The first 4 months focus on training in entrepreneurship and design thinking, followed by a 4-month incubator where teams develop biotech startup ideas, validate them and present at{' '}
            <span className="font-bold">Lifbee finals</span>. We built on our iGEM Startups project{' '}
            <span className="font-bold">NitroDuck</span> - using genetically modified duckweed, vertical cultivation and synthetic biology – to create a sustainable protein feed that reduces costs and nitrogen pollution in agriculture.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="flex items-start justify-center">
          <div className="w-full bg-gray-200 rounded-3xl overflow-hidden">
            <img 
              src="https://static.igem.wiki/teams/5642/images/engagement/powergreens/powergreens5000.webp" 
              alt="Lifbee Academy Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div 
        className="space-y-4 text-justify text-gray-800 leading-relaxed text-lg bg-gray-50 p-8 rounded-2xl"
        style={{ fontFamily: 'Urbanist, sans-serif' }}
      >
        <p>
          <span className="font-bold">During the incubator, we went through the numbers and unit economics</span>, as we were advised previously. We found out that we need the{' '}
          <span className="font-bold">5x biomass improvement</span> to compete with soybean prices. We were determined to do this, and you can read how on our dedicated page. However, at the end of the incubator, we were pushed to{' '}
          <span className="font-bold">explore more options and problems we could solve</span>. We wanted to use duckweed for something and well, its high protein content offers an obvious use case -{' '}
          <span className="font-bold">novel protein supplement</span>.
        </p>
      </div>
    </section>
  );
};

export default PowerGreens;