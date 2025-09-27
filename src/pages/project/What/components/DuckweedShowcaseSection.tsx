import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, position }) => {
  return (
    <div 
      className="flex flex-col items-center px-5 py-4 gap-1 bg-gray-100 rounded-lg absolute"
      style={position}
    >
      <h4 
        className="font-bold text-lg leading-[168%] text-center text-green-900"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        {title}
      </h4>
      <p 
        className="text-base leading-[168%] text-center text-black/75"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        {description}
      </p>
    </div>
  );
};

const DuckweedShowcaseSection: React.FC = () => {
  const features = [
    {
      title: "Protein Powerhouse",
      description: "as much protein as soybean",
      position: { left: "92px", top: "92px" }
    },
    {
      title: "Nitrogen Absorption", 
      description: "absorbs excess nitrogen in manure quickly",
      position: { right: "92px", top: "64px" }
    },
    {
      title: "Rapid Growth",
      description: "48 hour doubling time", 
      position: { left: "92px", bottom: "92px" }
    },
    {
      title: "Versatile Growth",
      description: "thrives in a wide range of conditions",
      position: { right: "92px", bottom: "92px" }
    }
  ];

  return (
    <section className="flex flex-col items-center px-8 lg:px-32 py-10 w-full h-[797px] bg-white">
      
      {/* Section title */}
      <h2 
        className="w-full max-w-[656px] h-12 text-3xl lg:text-4xl font-semibold leading-[120%] text-black mb-8 text-center"
        style={{ fontFamily: 'Urbanist, sans-serif' }}
      >
        This is the superior plant - duckweed
      </h2>

      {/* Main container with duckweed image and features */}
      <div className="relative w-full max-w-[1184px] h-[669px]">
        
        {/* Central duckweed image */}
        <div className="absolute w-96 h-96 bg-white rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden flex items-center justify-center">
          <img 
            src="https://static.igem.wiki/teams/5642/images/what/duckweed-copy.webp" 
            alt="Duckweed"
            className="w-60 h-96 object-cover"
          />
        </div>

        {/* Feature cards positioned around the central image */}
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            position={feature.position}
          />
        ))}

        {/* Connecting lines (dashed) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Top left line */}
          <line 
            x1="291" y1="195.5" 
            x2="472" y2="351" 
            stroke="#B1B0B0" 
            strokeWidth="1" 
            strokeDasharray="5,5"
          />
          {/* Top right line */}
          <line 
            x1="893" y1="195.5" 
            x2="712" y2="351" 
            stroke="#B1B0B0" 
            strokeWidth="1" 
            strokeDasharray="5,5"
          />
          {/* Bottom left line */}
          <line 
            x1="291" y1="506.5" 
            x2="472" y2="351" 
            stroke="#B1B0B0" 
            strokeWidth="1" 
            strokeDasharray="5,5"
          />
          {/* Bottom right line */}
          <line 
            x1="892" y1="506.5" 
            x2="712" y2="351" 
            stroke="#B1B0B0" 
            strokeWidth="1" 
            strokeDasharray="5,5"
          />
        </svg>

        {/* Call to action link */}
        <a 
          href="#"
          className="absolute w-56 h-7 text-base leading-[168%] text-center text-black/75 left-1/2 top-[549px] transform -translate-x-1/2 hover:text-green-700 transition-colors cursor-pointer"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Dive deeper here!
        </a>
        
      </div>
    </section>
  );
};

export default DuckweedShowcaseSection;