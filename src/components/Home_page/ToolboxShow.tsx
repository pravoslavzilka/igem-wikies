import React, { useState, useEffect, useRef } from "react";

const stepDescriptions = [
  {
    text: (
      <>Using <span style={{ color: '#779E45' }}>TAIFR</span>, we will introduce optimized nitrogen-cycle related genes into duckweed, driven by our native duckweed promoters.</>
    ),
  },
  {
    text: (
      <>Using <span style={{ color: '#779E45' }}>pIB006</span>, we will knock out thiamine monophosphate synthase (THI4) to prevent its release into the environment.</>
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
  const [fadeInStep, setFadeInStep] = useState(0);
  const [timelineStarted, setTimelineStarted] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Start timeline only when user scrolls to the timeline section (desktop only)
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight * 0.7 && !timelineStarted) {
        setTimelineStarted(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check in case already in view
    setTimeout(handleScroll, 0);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [timelineStarted]);

  // Desktop: auto-advance steps with fade-in only after timelineStarted
  useEffect(() => {
    if (window.innerWidth >= 768 && timelineStarted) {
      setActiveStep(0);
      setFadeInStep(0);
      let step = 0;
      const interval = setInterval(() => {
        step++;
        if (step < stepDescriptions.length) {
          setActiveStep(step);
          setFadeInStep(step);
        } else {
          clearInterval(interval);
        }
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [timelineStarted]);

  return (
    <div className=" p-8 min-h-screen mt-[200px] ">
      <div className="max-w-8xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-12  mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: '140%', fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem" }}>
            We are developing the <span style={{ color: '#779E45' }}>Duckweed Toolbox </span> -<br />
            the first step in turning duckweed into a <span style={{ color: '#779E45' }}>crop</span>.
          </h1>
          <p className="text-lg text-gray-600 mt-10 mb-10" style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: '140%', fontSize: window.innerWidth < 768 ? "1.2rem" : "1.7rem" }}>Here’s how we plan to use it:</p>
        </div>

        {/* Steps timeline */}
        <div className="mb-16 max-w-7xl justify-center items-center mx-auto" ref={timelineRef}>
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
                {[0, 1, 2, 3].map(idx => (
                  <div className="flex flex-col items-center" key={idx}>
                    <div className="w-14 h-14 bg-white border-2 border-green-500 rounded-full flex items-center justify-center font-bold text-lg">
                      {idx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step descriptions with fade-in */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-16 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: '140%', fontWeight: '700' }}>
              {stepDescriptions.map((desc, idx) => (
                <div
                  key={idx}
                  className="space-y-2"
                  style={{
                    opacity: timelineStarted && activeStep >= idx ? 1 : 0,
                    transition: "opacity 1s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <p className="text-md leading-tight" style={{ lineHeight: '140%' }}>
                    {desc.text}
                  </p>
                </div>
              ))}
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
              <p className="text-md leading-tight" style={{ lineHeight: '140%' }}>
                {stepDescriptions[activeStep].text}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom image placeholder */}
        <div className="w-full h-[500px] bg-gray-200 rounded-lg flex items-center justify-center">
          <img src="https://static.igem.wiki/teams/5642/images/homepage/slide1.webp" alt="Farm/Cow" className="w-full h-full object-cover rounded-lg" />
      </div>
      </div>

      
    </div>
  );
}


export default ToolboxShow;