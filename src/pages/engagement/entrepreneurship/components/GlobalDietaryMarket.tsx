// src/pages/engagement/entrepreneurship/components/GlobalDietaryMarket.tsx
import React from 'react';

const GlobalDietaryMarket: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 pt-2 pb-8 bg-white">
      {/* Map Image - Wide */}
      <div className="w-full mb-4">
        <img 
          src="https://static.igem.wiki/teams/5642/images/engagement/powergreens/worldmapresized.webp" 
          alt="Global Dietary Supplements Market Map"
          className="w-full h-auto"
        />
      </div>

      {/* Text Content */}
      <div 
        className="space-y-4 text-justify text-gray-800 leading-relaxed text-lg mb-16"
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

      {/* Three Columns with Logos and Company Info */}
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {/* EC Health Column */}
        <div className="flex flex-col">
          {/* Logo */}
          <div className="h-20 flex items-center justify-center mb-6">
            <img 
              src="https://static.igem.wiki/teams/5642/images/engagement/powergreens/eclogo.webp" 
              alt="EC Health"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          
          {/* Text */}
          <div 
            className="text-justify text-gray-800 leading-relaxed text-lg"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            <p>
              <span className="font-bold">EC Health</span> is newly established branch of global company EC that is specialized on innovative solutions and nutrition. Today, EC operates not only across Europe but also on the fast-growing Asian market, strengthening its position as a global lifestyle brand. We received letter of intent from this company and we were discussing the option of launching pilot scale operation and production of PowerGreens.
            </p>
          </div>
        </div>

        {/* Vilgain Column */}
        <div className="flex flex-col">
          {/* Logo */}
          <div className="h-20 flex items-center justify-center mb-6">
            <img 
              src="https://static.igem.wiki/teams/5642/images/engagement/powergreens/vilgainlogo.webp" 
              alt="Vilgain"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          
          {/* Text */}
          <div 
            className="text-justify text-gray-800 leading-relaxed text-lg"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            <p>
              <span className="font-bold">Vilgain</span> is currently the fastest-growing brand and company in the Czech market in the field of nutritional supplements and nutrition, also operating in other European markets and preparing for expansion into the USA with a focus on premium quality and food origin. We obtained a feedback that <span className="font-bold">PowerGreens is a product meeting their standards</span> and they might be interested in trying it out with their customers.
            </p>
          </div>
        </div>

        {/* SinecaLabs Column */}
        <div className="flex flex-col">
          {/* Logo */}
          <div className="h-20 flex items-center justify-center mb-6">
            <img 
              src="https://static.igem.wiki/teams/5642/images/engagement/powergreens/sineca.webp" 
              alt="SinecaLabs"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          
          {/* Text */}
          <div 
            className="text-justify text-gray-800 leading-relaxed text-lg"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            <p>
              <span className="font-bold">SinecaLabs</span> – Czech contract manufacturer specializing in high-quality food supplements and nutraceuticals, offering end-to-end services from formulation and testing to certified production, branding and distribution. <span className="font-bold">SinecaLabs expressed interest in trying out samples of our product</span> and distributing them among their customers. We received the next letter of intent from them.
            </p>
          </div>
        </div>
      </div>

      {/* Two Columns: Green Box and Image */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Left - Green Box with Text */}
        <div 
          className="bg-[#25512b] text-white p-8 flex items-center justify-center"
          style={{ fontFamily: 'Urbanist, sans-serif', borderRadius: '40px' }}
        >
          <p className="text-lg font-semibold leading-relaxed text-center">
            We stepped onto a stage with our project once again and pitched it. We were awarded with 40 000 Czech crowns for its further development.
          </p>
        </div>

        {/* Right - Image */}
        <div className="w-full overflow-hidden" style={{ borderRadius: '40px' }}>
          <img 
            src="https://static.igem.wiki/teams/5642/images/engagement/powergreens/muniaward.webp" 
            alt="Project presentation"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalDietaryMarket;