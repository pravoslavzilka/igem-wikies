import React, { useState, useEffect } from 'react';
import Hero from '../components/Home_page/Hero';
import BrazilDeforestationWidget from '../components/BrazilDeforestationWidget';
import VideoComp from '../components/VideoComp';
import "@fontsource/urbanist";
import "@fontsource/space-grotesk";




const fadeHeadline = [
  { text: "Duckweed is just a weed", color: "black" },
  { text: " - to make it a crop,", color: "gray-400" },
  { text: "without evolution, we need ", color: "gray-400" },
  { text: "synbio.", color: "green-300" }
];

const Home = () => {

  const [headlineOpacity, setHeadlineOpacity] = useState(0.25);
  const [letterFade, setLetterFade] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      
      const start = window.innerHeight * 0.7;
      const end = window.innerHeight * 1.2;
      const scrollY = window.scrollY;
      let opacity = 0.25;
      if (scrollY > start) {
        opacity = Math.min(1, 0.25 + ((scrollY - start) / (end - start)) * 0.75);
      }
      setHeadlineOpacity(opacity);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const card = document.getElementById("headline-fade-card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Start fading when card is 60% into viewport, finish after 400px
      const start = rect.top - windowHeight * 0.6;
      let progress = 0;
      if (start < 0) {
        progress = Math.min(1, Math.abs(start) / 400);
      }
      setLetterFade(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call to set fade if already scrolled
    setTimeout(handleScroll, 0);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to render faded headline
  const renderFadedHeadline = () => {
    const allText = fadeHeadline.map(f => f.text).join('');
    const totalLetters = allText.length;
    const fadeCount = Math.floor(letterFade * totalLetters);

    let letterIdx = 0;
    return (
      <span>
        {fadeHeadline.map((frag, i) => (
          <span key={i}>
            {frag.text.split('').map((char, j) => {
              const isColored = letterIdx < fadeCount;
              let colorClass = frag.color === "black"
                ? (isColored ? "text-black" : "text-gray-400")
                : (isColored ? `text-${frag.color}` : "text-gray-400");
              // Special for "synbio." fragment
              if (frag.color === "green-300") {
                colorClass = isColored ? "text-green-300" : "text-gray-400";
              }
              letterIdx++;
              return (
                <span key={j} className={colorClass} style={{ transition: "color 0.2s" }}>
                  {char}
                </span>
              );
            })}
          </span>
        ))}
      </span>
    );
  };



  return (
    

    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      


      <Hero />     
      <BrazilDeforestationWidget />

      <VideoComp />


      {/* Features Widget */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex flex-wrap justify-between items-start gap-8">
              
              {/* Feature 1 - Water Growth */}
              <div className="group flex-1 min-w-40 text-center cursor-pointer relative">
                <div className="mb-4">
                  <div className="w-12 h-12 mx-auto mb-3 text-green-500">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M12 2L8 12H16L12 2ZM12 4.5L14.5 10H9.5L12 4.5ZM8 14C6 14 4 16 4 18C4 20 6 22 8 22C10 22 12 20 12 18C12 16 10 14 8 14ZM16 14C14 14 12 16 12 18C12 20 14 22 16 22C18 22 20 20 20 18C20 16 18 14 16 14Z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Grows on water surface</h3>
                
                {/* Hover content */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                  <div className="bg-gray-800 text-white p-3 rounded-lg text-xs whitespace-nowrap">
                    Floats naturally on water
                  </div>
                  <div className="w-2 h-2 bg-gray-800 transform rotate-45 mx-auto -mt-1"></div>
                </div>
              </div>

              {/* Feature 2 - Smallest Plant */}
              <div className="group flex-1 min-w-40 text-center cursor-pointer relative">
                <div className="mb-4">
                  <div className="w-12 h-12 mx-auto mb-3 text-green-500">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">The smallest flowering plant</h3>
                
                {/* Hover content */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                  <div className="bg-gray-800 text-white p-3 rounded-lg text-xs whitespace-nowrap">
                    Some species just 0.5 mm
                  </div>
                  <div className="w-2 h-2 bg-gray-800 transform rotate-45 mx-auto -mt-1"></div>
                </div>
              </div>

              {/* Feature 3 - Fast Growing */}
              <div className="group flex-1 min-w-40 text-center cursor-pointer relative">
                <div className="mb-4">
                  <div className="w-12 h-12 mx-auto mb-3 text-green-500">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M2 2V4H4V6H6V8H8V10H10V12H8V14H6V16H4V18H2V20H4V22H6V20H8V18H10V16H12V14H14V12H16V10H18V8H20V6H22V4H20V2H18V4H16V6H14V8H12V10H10V12H12V10H14V8H16V6H18V4H20V2H22V4H20V6H18V8H16V10H14V12H12V14H10V16H8V18H6V20H4V22H2V20H4V18H6V16H8V14H10V12H8V10H6V8H4V6H2V4H4V2H2Z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">The fastest growing flowering plant</h3>
                
                {/* Hover content */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                  <div className="bg-gray-800 text-white p-3 rounded-lg text-xs whitespace-nowrap">
                    36-48 h biomass doubling time
                  </div>
                  <div className="w-2 h-2 bg-gray-800 transform rotate-45 mx-auto -mt-1"></div>
                </div>
              </div>

              {/* Feature 4 - High Protein */}
              <div className="group flex-1 min-w-40 text-center cursor-pointer relative">
                <div className="mb-4">
                  <div className="w-12 h-12 mx-auto mb-3 text-green-500">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4L13 5.27L11.24 7.03L8.15 5.14L7 6.27L10.09 8.16L12 6.45L18 9.05L19 10V12L12 15.5L5 12V10L6 9.05L12 12.5L21 9ZM12 17.5L5 14V16L12 19.5L19 16V14L12 17.5Z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">High protein content</h3>
                
                {/* Hover content */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                  <div className="bg-gray-800 text-white p-3 rounded-lg text-xs whitespace-nowrap">
                    20-45% of dry weight
                  </div>
                  <div className="w-2 h-2 bg-gray-800 transform rotate-45 mx-auto -mt-1"></div>
                </div>
              </div>

              {/* Feature 5 - High Nutrient */}
              <div className="group flex-1 min-w-40 text-center cursor-pointer relative">
                <div className="mb-4">
                  <div className="w-12 h-12 mx-auto mb-3 text-green-500">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M12 2L13.09 8.26L20 9L14 14L16.18 22L12 18.27L7.82 22L10 14L4 9L10.91 8.26L12 2ZM12 4.5L11.5 7.5L8.5 8L11 10.5L10.23 13.5L12 12.23L13.77 13.5L13 10.5L15.5 8L12.5 7.5L12 4.5Z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">High nutrient uptake</h3>
                
                {/* Hover content */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                  <div className="bg-gray-800 text-white p-3 rounded-lg text-xs whitespace-nowrap">
                    Best phytoremediation potential
                  </div>
                  <div className="w-2 h-2 bg-gray-800 transform rotate-45 mx-auto -mt-1"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>



      


      

      
      
        
 
       

    

      <div className="max-w-3xl mx-auto mt-16 mb-24 px-4">
        <div id="headline-fade-card" className="bg-[#FAFAFA] rounded-3xl p-10 relative shadow-none">
          <div className="text-center" style={{ fontFamily: "Space Grotesk, sans-serif", }}>
            <div className="text-2xl md:text-3xl font-bold mb-8">
              Duckweed is set to <span className="text-green-500">end soybean dominance!</span> So, why are we still<br />
              feeding cows with soybean?
            </div>
            <div className="text-2xl md:text-3xl font-bold mb-2">
              {renderFadedHeadline()}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;