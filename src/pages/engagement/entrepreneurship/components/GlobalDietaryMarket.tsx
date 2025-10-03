// src/pages/engagement/entrepreneurship/components/GlobalDietaryMarket.tsx
import React from 'react';

const GlobalDietaryMarket: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 bg-white">
      {/* Map Image - Wide */}
      <div className="w-full mb-8">
        <img 
          src="https://static.igem.wiki/teams/5642/images/engagement/powergreens/worldmap.webp" 
          alt="Global Dietary Supplements Market Map"
          className="w-full h-auto"
        />
      </div>

      {/* Bottom Text - Market Info */}
      <div 
        className="text-center text-gray-900 leading-relaxed text-2xl mb-12 font-bold"
        style={{ fontFamily: 'Urbanist, sans-serif' }}
      >
        <p>
          GLOBAL DIETARY SUPPLEMENTS MARKET WORTH <span className="font-bold">$189.2 B IN 2024,</span>{' '}
          <span className="font-bold">PROJECTED $402.2 B BY 2034 (10)</span>
        </p>
      </div>

      {/* Text Content */}
      <div 
        className="space-y-4 text-justify text-gray-800 leading-relaxed text-base"
        style={{ fontFamily: 'Urbanist, sans-serif' }}
      >
        <p>
          We again thought of different ways how to make money out of this concept and were mostly deciding between pursuing the B2C and B2B business models.
        </p>
        
        <p>
          B2C has its advantages when it comes to higher margins and brand building, but comes with high marketing expenses. On the other hand,{' '}
          <span className="font-bold">B2B offers lower margins but reaching more users is easier than with B2C</span>. We therefore looked for{' '}
          <span className="font-bold">B2B customers</span>. These would be{' '}
          <span className="font-bold">manufacturers of health and dietary supplements</span>. We would be able to offer them novel ingredient to use in their products.
        </p>
        
        <p>
          Besides that, we also explored, whether they would be interested in trying out{' '}
          <span className="font-bold">fresh duckweed</span>. Something like novel microgreens. As there are some companies offering duckweed in this form, we hypothesized there would be interest for this kind product. We reached out to several companies and managed to get a positive feedback from them.
        </p>
      </div>

      {/* Company Logos */}
      <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
        <div className="w-32 h-20 flex items-center justify-center">
          <img 
            src="https://static.igem.wiki/teams/5642/images/engagement/powergreens/eclogo.webp" 
            alt="EC Health"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-40 h-20 flex items-center justify-center">
          <img 
            src="https://static.igem.wiki/teams/5642/images/engagement/powergreens/vilgainlogo.webp" 
            alt="Vilgain"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-48 h-20 flex items-center justify-center">
          <img 
            src="https://static.igem.wiki/teams/5642/images/engagement/powergreens/sineca.webp" 
            alt="SinecaLabs"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Three Columns with Company Info */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* EC Health */}
        <div 
          className="text-justify text-gray-800 leading-relaxed text-sm"
          style={{ fontFamily: 'Urbanist, sans-serif' }}
        >
          <p>
            <span className="font-bold">EC Health</span> is newly established branch of global company EC that is specialized on innovative solutions and nutrition. Today, EC operates not only across Europe but also on the fast-growing Asian market, strengthening its position as a global lifestyle brand.
          </p>
          <p className="mt-4">
            We received letter of intent from this company and we were discussing the option of launching pilot scale operation and production of PowerGreens.
          </p>
        </div>

        {/* Vilgain */}
        <div 
          className="text-justify text-gray-800 leading-relaxed text-sm"
          style={{ fontFamily: 'Urbanist, sans-serif' }}
        >
          <p>
            <span className="font-bold">Vilgain</span> is currently the fastest-growing brand and company in the Czech market in the field of nutritional supplements and nutrition, also operating in other European markets and preparing for expansion into the USA with a focus on premium quality and food origin.
          </p>
          <p className="mt-4">
            We obtained a feedback that <span className="font-bold">PowerGreens is a product meeting their standards</span> and they might be interested in trying it out with their customers.
          </p>
        </div>

        {/* SinecaLabs */}
        <div 
          className="text-justify text-gray-800 leading-relaxed text-sm"
          style={{ fontFamily: 'Urbanist, sans-serif' }}
        >
          <p>
            <span className="font-bold">SinecaLabs</span> – Czech contract manufacturer specializing in high-quality food supplements and nutraceuticals, offering end-to-end services from formulation and testing to certified production, branding and distribution.
          </p>
          <p className="mt-4">
            <span className="font-bold">SinecaLabs expressed interest in trying out samples of our product</span> and distributing them among their customers. We received the next letter of intent from them.
          </p>
        </div>
      </div>

      {/* Green Box with Text */}
      <div 
        className="bg-[#25512b] text-white p-8 rounded-2xl text-center mb-12"
        style={{ fontFamily: 'Urbanist, sans-serif' }}
      >
        <p className="text-lg font-semibold leading-relaxed">
          We stepped onto a stage with our project once again and pitched it. We were awarded with 40 000 Czech crowns for its further development.
        </p>
      </div>


      {/* Two Images at Bottom */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Image */}
        <div className="w-full rounded-3xl overflow-hidden">
          <img 
            src="PLACEHOLDER_AWARD_IMAGE_1" 
            alt="Award ceremony"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="w-full rounded-3xl overflow-hidden">
          <img 
            src="https://static.igem.wiki/teams/5642/images/engagement/powergreens/powergreens2.webp" 
            alt="Project presentation"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalDietaryMarket;