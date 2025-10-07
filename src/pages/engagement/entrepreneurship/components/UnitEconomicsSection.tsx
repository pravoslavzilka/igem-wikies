// src/pages/engagement/entrepreneurship/components/UnitEconomicsSection.tsx
import React from 'react';

const UnitEconomicsSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 py-16 bg-white">
      {/* Header */}
      <h2 
        className="text-6xl font-bold mb-12"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        Unit Economics
      </h2>

      {/* Text Content */}
      <div 
        className="space-y-4 text-justify text-gray-800 leading-relaxed text-lg"
        style={{ fontFamily: 'Urbanist, sans-serif' }}
      >
        <p>
          From what we read and what was later confirmed by our{' '}
          <span className="font-bold">conversations with farmers</span>, we knew that what interests them the most when it comes to choosing protein feed supplement is its{' '}
          <span className="font-bold">cost</span>. Therefore, we had to compare the cost of our system and subsequently the feed itself that would be produced with the most widely used protein feed supplement —{' '}
          <span className="font-bold">soybean</span>. We had to do our unit economics calculations then and see, whether we can make our concept really profitable.
        </p>
        
        <p>
          We estimated the electricity usage of our system and based on the data available in literature, we calculated the{' '}
          <span className="font-bold">unit cost</span> for duckweed-based feed to be around{' '}
          <span className="font-bold">$4 per kilogram</span> of duckweed biomass, translating to approximately{' '}
          <span className="font-bold">$10 per kilogram</span> of duckweed protein. Compared to soybean [1], we would have to achieve around{' '}
          <span className="font-bold">5x increase</span> in production of duckweed biomass to make our solution comparable. This is why we set out to make{' '}
          <a href="/human-practices#boosted-duckweed" className="underline">biomass-boosted duckweed</a>.
        </p>
      </div>
    </section>
  );
};

export default UnitEconomicsSection;