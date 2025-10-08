// src/pages/engagement/entrepreneurship/components/SolutionSection.tsx
import React from 'react';
import A from "../../../../A.tsx";

const SolutionSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 py-16 bg-white">
      {/* Solution Header */}
      <h2 
        className="text-6xl font-bold mb-12"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        Solution
      </h2>

      {/* Text Content */}
      <div 
        className="space-y-4 text-justify text-gray-800 leading-relaxed mb-8 text-lg"
        style={{ fontFamily: 'Urbanist, sans-serif' }}
      >
        <p>
          That looked terrible! We had to do something there. We searched for bacteria that could utilize the nitrogen and capture it, even make electricity out of it... well, not the greatest ideas. But we found the superior plant -{' '}
          <span className="font-bold">duckweed</span>. You can read all about it on{' '}
          <A href="/toolbox/deep-dive-on-duckweed/" className="underline">Deep Dive on Duckweed</A>
          {' '}and{' '}
          <A href="/whyduckweed" className="underline">Why Duckweed</A>
          {' '}pages.
        </p>
        
        <p>
          We wanted to grow this plant in the vertical cultivation system that would be completely automated right on the farm on the liquid part of manure that would be pumped inside the system instead of storing it. This way, duckweed would be able to take up the nitrogen in the form of ammonium that would otherwise evaporate into the atmosphere and incorporate it into the protein.{' '}
          <span className="font-bold">Nitrogen runoffs offset.</span>
        </p>
        
        <p>
          What is even better, this system could be used to{' '}
          <span className="font-bold">upcycle that nitrogen</span>. As duckweed grows, it produces large amounts of protein-rich biomass that can be{' '}
          <span className="font-bold">fed back to livestock</span>
          {' '}that produced the manure! This way, we can{' '}
          <span className="font-bold">close the nitrogen loop right on the farm</span>. Regarding the scientific concept of our solution, you can read more in{' '}
          <A href="/human-practices#ideation" className="underline">Ideation</A>
          {' '}and you can take a look how we actually build the{' '}
          <A href="/hardware" className="underline">cultivation system</A>
          {' '}we envisioned a year and half ago.
        </p>
      </div>

      {/* Image with Text */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Image */}
        <div className="w-full md:w-2/3">
          <img 
            src="https://static.igem.wiki/teams/5642/images/engagement/entrepreneurship/nitroduck1-6.webp" 
            alt="Duckweed cultivation system visualization"
            className="w-full h-auto rounded-3xl"
          />
        </div>
        
        {/* Text */}
        <div 
          className="w-full md:w-1/3 text-gray-700 text-justify leading-relaxed text-lg"
          style={{ fontFamily: 'Urbanist, sans-serif' }}
        >
          <p>
            The jury liked our idea and AI-generated images and we got a judges choice award. Afterwards, we could move to Venture Creation Labs program where we tried to assess, whether we could actually turn this idea into a profitable business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;