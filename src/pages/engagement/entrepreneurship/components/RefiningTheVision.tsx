// src/pages/engagement/entrepreneurship/components/RefiningTheVision.tsx
import React from 'react';

const RefiningTheVision: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 py-16 bg-white">
      {/* Header */}
      <h3 
        className="text-3xl font-bold mb-8"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        Refining the Vision: Lessons from SYB MUNI
      </h3>

      {/* Content Grid */}
      <div className="grid md:grid-cols-[2fr,1fr] gap-8 mb-16">
        {/* Left Column - Text */}
        <div 
          className="space-y-4 text-justify text-gray-800 leading-relaxed text-base"
          style={{ fontFamily: 'Urbanist, sans-serif' }}
        >
          <p>
            We liked this concept and besides working hard on our iGEM project, we entered another entrepreneurship competition -{' '}
            <span className="font-bold">Start Your Business at Masaryk University</span>. We started with the core idea developed in Lifbee: using genetically modified duckweed to produce protein and food supplements.
          </p>
          
          <p>
            We passed the first round of the competition, but during our pitch, we received tough but honest feedback. The mentors and judges expressed concerns about using GMOs, especially since our main customer group – vegans and vegetarians – might be wary of genetic modification. This feedback triggered another major pivot.
          </p>
          
          <p>
            We created a new version of PowerGreens - a{' '}
            <span className="font-bold">premium food supplement product based on duckweed</span> that is not genetically modified and offers:
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="flex items-start justify-center">
          <div className="w-full rounded-3xl overflow-hidden">
            <img 
              src="PLACEHOLDER_IMAGE_URL" 
              alt="Presentation at SYB MUNI"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Product Features Grid */}
      <div className="grid md:grid-cols-[1fr,2fr] gap-12 items-start">
        {/* Left - Product Images */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-sm">
            <img 
              src="https://static.igem.wiki/teams/5642/images/engagement/powergreens/powegreens4.webp" 
              alt="PowerGreens Products"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right - Features Image */}
        <div className="w-full">
          <img 
            src="https://static.igem.wiki/teams/5642/images/engagement/powergreens/featuresimage.webp" 
            alt="PowerGreens Features"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Customer Section */}
      <div className="grid md:grid-cols-[1fr,2fr] gap-8 mt-16">
        {/* Left - Image */}
        <div className="flex items-start justify-center">
          <div className="w-full rounded-3xl overflow-hidden">
            <img 
              src="https://static.igem.wiki/teams/5642/images/engagement/powergreens/drinking.webp" 
              alt="Target customers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right - Text */}
        <div 
          className="space-y-4 text-justify text-gray-800 leading-relaxed text-base"
          style={{ fontFamily: 'Urbanist, sans-serif' }}
        >
          <p>
            We identified a{' '}
            <span className="font-bold">need of our target customers</span>–health conscious individuals seeking sustainable, plant-based protein shake with exceptional nutritional values. They don't want to take dozens of artificial supplements. They want{' '}
            <span className="font-bold">all-in-one solution</span> that has high quality.
          </p>
          
          <p>
            We learnt from our previous mistakes and went out to{' '}
            <span className="font-bold">talk to the people</span> we thought that might be interested in our product. We prepared a questionnaire where we asked for feedback on our PowerGreens protein powder. Among the validation of their needs and priorities, we asked them whether they would be interested in trying out our product.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RefiningTheVision;