import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, className = "" }) => {
  return (
    <div className={`flex flex-col items-center px-4 py-3 gap-1 bg-gray-100 rounded-lg ${className}`}>
      <h4 
        className="font-bold text-base sm:text-lg leading-[168%] text-center text-green-900"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        {title}
      </h4>
      <p 
        className="text-sm sm:text-base leading-[168%] text-center text-black/75"
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
      description: "as much protein as soybean"
    },
    {
      title: "Nitrogen Absorption", 
      description: "absorbs excess nitrogen in manure quickly"
    },
    {
      title: "Rapid Growth",
      description: "48 hour doubling time"
    },
    {
      title: "Versatile Growth",
      description: "thrives in a wide range of conditions"
    }
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-32">
      
      {/* Section title */}
      <h2 
        className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[120%] text-black mb-8 sm:mb-12 text-center max-w-4xl mx-auto"
        style={{ fontFamily: 'Urbanist, sans-serif' }}
      >
        This is the (almost) superior plant - duckweed
      </h2>

      {/* Desktop layout - hidden on mobile */}
      <div className="hidden lg:block relative w-full max-w-6xl mx-auto h-[669px]">
        
        {/* Central duckweed image */}
        <div className="absolute w-96 h-96 bg-white rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden flex items-center justify-center shadow-lg">
          <img 
            src="https://static.igem.wiki/teams/5642/images/what/duckweed-copy.webp" 
            alt=""
            className="w-60 h-96 object-cover"
            loading="eager"
            onError={(e) => {
              console.log('Failed to load duckweed image');
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Feature cards positioned around the central image */}
        <FeatureCard
          title={features[0].title}
          description={features[0].description}
          className="absolute left-[92px] top-[92px] w-[200px]"
        />
        <FeatureCard
          title={features[1].title}
          description={features[1].description}
          className="absolute right-[92px] top-[64px] w-[200px]"
        />
        <FeatureCard
          title={features[2].title}
          description={features[2].description}
          className="absolute left-[92px] bottom-[92px] w-[200px]"
        />
        <FeatureCard
          title={features[3].title}
          description={features[3].description}
          className="absolute right-[92px] bottom-[92px] w-[200px]"
        />

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
          href="/toolbox/deep-dive-on-duckweed"
          className="absolute text-base leading-[168%] text-center text-black/75 left-1/2 bottom-[120px] transform -translate-x-1/2 hover:text-green-700 transition-colors cursor-pointer"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Dive deeper here!
        </a>
        
      </div>

      {/* Mobile/Tablet layout */}
      <div className="lg:hidden">
        
        {/* Central duckweed image */}
        <div className="w-48 sm:w-64 h-48 sm:h-64 bg-white rounded-full mx-auto mb-8 sm:mb-12 overflow-hidden flex items-center justify-center shadow-lg">
          <img 
            src="https://static.igem.wiki/teams/5642/images/what/duckweed-copy.webp" 
            alt=""
            className="w-32 sm:w-48 h-48 sm:h-64 object-cover"
            loading="eager"
            onError={(e) => {
              console.log('Failed to load duckweed image');
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Feature cards in a grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto mb-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Call to action link */}
        <div className="text-center">
          <a 
            href="/toolbox/deep-dive-on-duckweed"
            className="text-base leading-[168%] text-black/75 hover:text-green-700 transition-colors cursor-pointer"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Dive deeper here!
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default DuckweedShowcaseSection;