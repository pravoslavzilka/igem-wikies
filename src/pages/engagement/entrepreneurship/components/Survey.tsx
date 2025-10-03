// src/pages/engagement/entrepreneurship/components/Survey.tsx
import React from 'react';

const Survey: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 py-16 bg-white">
      {/* Survey Question */}
      <h3 
        className="text-2xl font-normal mb-2"
        style={{ fontFamily: 'Urbanist, sans-serif' }}
      >
        Do you want to be among the first ones to try POWERGREENS?
      </h3>
      
      <p 
        className="text-base text-gray-600 mb-12"
        style={{ fontFamily: 'Urbanist, sans-serif' }}
      >
        91 answers
      </p>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        {/* Left - Pie Chart Image */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md">
            <img 
              src="https://static.igem.wiki/teams/5642/images/engagement/powergreens/piechartedit2.webp" 
              alt="Survey results pie chart"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right - Description */}
        <div className="flex items-center">
          <p 
            className="text-base text-gray-800 leading-relaxed text-justify"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            <span className="font-bold">Figure 2.</span> Results from a questionnaire answered by 91 participants regarding{' '}
            <span className="italic">PowerGreens</span> protein powder. The survey assessed participants' needs and priorities, including their interest in trying the product.
          </p>
        </div>
      </div>

      {/* Bottom Text */}
      <div 
        className="text-justify text-gray-900 leading-relaxed text-lg space-y-2"
        style={{ fontFamily: 'Urbanist, sans-serif' }}
      >
        <p>
          This looked like a pretty promising{' '}
          <span className="font-bold">market validation</span>. And this should be true globally. Demand for protein and dietary supplements is huge and rising.
        </p>
      </div>
    </section>
  );
};

export default Survey;