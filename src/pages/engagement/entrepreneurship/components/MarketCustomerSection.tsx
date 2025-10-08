// src/pages/engagement/entrepreneurship/components/MarketCustomerSection.tsx
import React from 'react';

const MarketCustomerSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 py-16 bg-white">
      {/* Header */}
      <h2 
        className="text-6xl font-bold mb-12"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        Market & Customer
      </h2>

      {/* Text Content */}
      <div 
        className="space-y-4 text-justify text-gray-800 leading-relaxed mb-8 text-lg"
        style={{ fontFamily: 'Urbanist, sans-serif' }}
      >
        <p>
          We thought of a bunch of names for the product and could not really find any good ones. However, using it as{' '}
          <span className="font-bold">a wastewater treatment solution for farms</span> as duckweed is great at sucking up the nitrogen from the manure [1], and the second, fostering mainly on protein feed supplement market as production as duckweed is exceptionally high in protein.
        </p>
        
        <p>
          We looked at{' '}
          <span className="font-bold">market sizes</span> for each of the products and the answer was clear. Manure and agricultural wastewater treatment market was valued around{' '}
          <span className="font-bold">$2.7 billion dollars [8]</span>, while feed protein supplement market is valued at{' '}
          <span className="font-bold">around $30 billion</span> annually around the globe [9]. Taking at least small fraction of this market would mean huge returns!
        </p>
        
        <p>
          So we looked at this market closely and analyzed, how we can get there. Our{' '}
          <span className="font-bold">target customer</span> would be{' '}
          <span className="font-bold">large cattle or swine farms</span> (CAFOs - concentrated animal farming operations). Their need for treating manure as well as for cheaper protein supplements is{' '}
          <span className="font-bold">the most urgent</span>.
        </p>
        
        <p>
          The{' '}
          <span className="font-bold">beachhead market</span> had to be ready in terms of its size and regulations, which meant targeting the countries with{' '}
          <span className="font-bold">GMO-friendly legislation</span>, as our solution comprised production of genetically modified duckweed as a protein feed. This is the result of the analysis we performed:
        </p>
      </div>
    </section>
  );
};

export default MarketCustomerSection;