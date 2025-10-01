// src/pages/engagement/entrepreneurship/components/MakeSomethingSection.tsx
import React from 'react';

const MakeSomethingSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 py-16 bg-white">
      {/* Header */}
      <h2 
        className="text-6xl font-bold mb-12"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        Make something people want
      </h2>

      {/* Text Content */}
      <div 
        className="text-justify text-gray-800 leading-relaxed mb-8 text-lg"
        style={{ fontFamily: 'Urbanist, sans-serif' }}
      >
        <p>
          One of the most important advices we were receiving is to{' '}
          <span className="font-bold">talk to users</span> of our product as soon and as frequently as possible. That&apos;s why we went out and{' '}
          <span className="font-bold">started to speak</span> with the ones that would be using NitroDuck if we would make it profitable – farmers. We talked to{' '}
          <span className="font-bold">more than 30 farmers</span> and asked them what they need from out solution to use it and make them satisfied. Read all about it in our{' '}
          <span className="underline">Real World Confrontation</span> page in human practices.
        </p>
      </div>

      {/* Green Box */}
      <div 
        className="bg-green-600 text-white p-8 rounded-2xl text-center"
        style={{ fontFamily: 'Urbanist, sans-serif' }}
      >
        <p className="text-xl font-semibold leading-relaxed">
          We went through a lot of pivots and throughout the way explored more duckweed use cases. Read further to see how we ventured into the FoodTech industry!
        </p>
      </div>
    </section>
  );
};

export default MakeSomethingSection;