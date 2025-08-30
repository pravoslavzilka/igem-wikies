import React, { useState } from "react";

const stepDescriptions = [
  {
    text: (
      <>Using <span style={{ color: '#779E45' }}>TAIFR</span>, we will introduce optimized nitrogen-cycle related genes into duckweed, driven by our native duckweed promoters.</>
    ),
  },
  {
    text: (
      <>Using <span style={{ color: '#779E45' }}>pIB005</span>, we will knock out thiamine monophosphate synthase (TH1) to prevent its release into the environment.</>
    ),
  },
  {
    text: (
      <>Our “<span style={{ color: '#779E45' }}>Nitroduckweed</span>” will grow predictably and autonomously in our <span style={{ color: '#779E45' }}>CULTIVATOR</span>, fed with manure and thiamine.</>
    ),
  },
  {
    text: (
      <>It will convert ammonium in manure into protein-rich biomass, fed back to cows directly on the farm - <span style={{ color: '#779E45' }}>no unsustainable and pricey soybeans required</span>.</>
    ),
  },
];

const ToolboxShow = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className=" p-8 min-h-screen">
      <div className="max-w-8xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-12  mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: '140%' }}>
            We've developed the <span style={{ color: '#779E45' }}>Duckweed Toolbox </span> -<br />
            the first step in turning duckweed into a <span style={{ color: '#779E45' }}>crop</span>.
          </h1>
          <p className="text-lg text-gray-600" style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: '140%' }}>Here's our next move:</p>
        </div>

        {/* Steps timeline */}
        <div className="mb-16 max-w-7xl justify-center items-center mx-auto">
          {/* Desktop/Tablet timeline */}
          <div className="hidden md:block">
            {/* Timeline line with circles */}
            <div className="relative mb-8">
              {/* Dotted lines between circles */}
              <div className="absolute top-1/2 left-0 w-full h-0 pointer-events-none z-0" style={{ transform: 'translateY(-50%)' }}>
                {/* 1st line */}
                <div className="absolute left-[10%] w-[25%] border-t-2 border-dotted border-green-300"></div>
                <div className="absolute left-[35%] top-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
                {/* 2nd line */}
                <div className="absolute left-[38%] w-[25%] border-t-2 border-dotted border-green-300"></div>
                <div className="absolute left-[63%] top-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
                {/* 3rd line */}
                <div className="absolute left-[64.5%] w-[25%] border-t-2 border-dotted border-green-300"></div>
                <div className="absolute left-[89%] top-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-x-16 items-center justify-center relative z-10" style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: '140%' }}>
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-white border-2 border-green-500 rounded-full flex items-center justify-center  font-bold text-lg">
                    1
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-white  border-2 border-green-500 rounded-full flex items-center justify-center  font-bold text-lg">
                    2
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-white border-2 border-green-500 rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14  bg-white border-2 border-green-500 rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                </div>
              </div>
            </div>

            {/* Step descriptions */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-16 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: '140%', fontWeight: '700' }}>
              {/* Step 1 description */}
              <div className="space-y-2">
                <p className="text-sm  leading-tight" style={{ lineHeight: '140%' }}>
                  Using <span style={{ color: '#779E45',  }}>TAIFR</span>, we will introduce optimized nitrogen-cycle related genes into duckweed, driven by our native duckweed promoters.
                </p>
              </div>

              {/* Step 2 description */}
              <div className="space-y-2">
                <p className="text-sm  leading-tight" style={{ lineHeight: '140%' }}>
                  Using <span style={{ color: '#779E45' }}>pIB005</span>, we will knock out thiamine monophosphate synthase (TH1) to prevent its release into the environment.
                </p>
              </div>

              {/* Step 3 description */}
              <div className="space-y-2">
                <p className="text-sm  leading-tight" style={{ lineHeight: '140%' }}>
                 Our “<span style={{ color: '#779E45' }}>Nitroduckweed</span>” will grow predictably and autonomously in our <span style={{ color: '#779E45' }}>CULTIVATOR</span>, fed with manure and thiamine.
                </p>
              </div>

              {/* Step 4 description */}
              <div className="space-y-2">
                <p className="text-sm leading-tight" style={{ lineHeight: '140%' }}>
                  It will convert ammonium in manure into protein-rich biomass, fed back to cows directly on the farm - <span style={{ color: '#779E45' }}>no unsustainable and pricey soybeans required</span>.
                </p>
              </div>
            </div>
          </div>
          {/* Mobile version: step selector */}
          <div className="md:hidden flex flex-col items-center">
            <div className="flex flex-row gap-6 mb-6">
              {[0, 1, 2, 3].map(idx => (
                <button
                  key={idx}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 transition-colors duration-200 ${
                    activeStep === idx
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-white text-green-700 border-green-500"
                  }`}
                  onClick={() => setActiveStep(idx)}
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
            <div className="text-center px-2" style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: '140%', fontWeight: '700' }}>
              <p className="text-sm leading-tight" style={{ lineHeight: '140%' }}>
                {stepDescriptions[activeStep].text}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom image placeholder */}
        <div className="w-full h-[500px] bg-gray-200 rounded-lg flex items-center justify-center">
          <img src="https://static.igem.wiki/teams/5642/images/homepage/nitroduck.webp" alt="Farm/Cow" className="w-full h-full object-cover rounded-lg" />
      </div>
      </div>
    </div>
  );
}


export default ToolboxShow;