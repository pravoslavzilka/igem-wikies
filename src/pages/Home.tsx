import React, { useState } from 'react';
import BrazilDeforestationWidget from '../components/BrazilDeforestationWidget';
import VideoComp from '../components/VideoComp';
import "@fontsource/urbanist";


const headlineWords = [
  { word: "Affordable", icon: "🟩", tooltip: "Low cost for everyone", color: "#9DD019" },

    { word: "local", icon: "", tooltip: "" },

  { word: "protein", icon: "❇️", tooltip: "High nutritional value", color: "#FFB2FF" },

  { word: "for", icon: "", tooltip: ""},

  { word: "every", icon: "", tooltip: "" },

  { word: "farm", icon: "🟦", tooltip: "For farmers", color:"#7363F4"  },

  { word: "by", icon: "", tooltip: "" },

  { word: "programmable", icon: "🟫", tooltip: "Customizable", color: "#D07519"},

  { word: "duckweed", icon: "", tooltip: "" },
  
];

const Home = () => {
  const [showHoverCard, setShowHoverCard] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [iconHover, setIconHover] = useState<{ idx: number, x: number, y: number } | null>(null);

  const handleMouseEnter = (e: React.MouseEvent) => {
    setShowHoverCard(true);
    setHoverPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (showHoverCard) {
      setHoverPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseLeave = () => {
    setShowHoverCard(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <div 
          className="h-screen bg-cover bg-center relative overflow-hidden rounded-3 xl mx-4 mt-4"
          style={{
            backgroundImage: "url('images/photo.png')",
          }}
        >
          {/* Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br "></div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center px-8">
            <div className="text-center max-w-6xl">
              <h1
                className="absolute text-7xl font-bold text-white mb-20 px-16 w-[80vw] max-w-7xl flex flex-wrap justify-center items-center gap-x-2 gap-y-4"
                style={{
                  top: "15%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 10,
                  fontFamily: "Urbanist, sans-serif",
                }}
              >
                {headlineWords.map((item, idx) => (
                  <span key={idx} className="relative inline-flex items-center mx-1">
                    <span 
                    style={{ fontSize: "0.85em", lineHeight: "1" }}>
                      {item.word}</span>
                    <span
                      className="ml-1 cursor-pointer inline-block align-middle"
                      onMouseEnter={e => setIconHover({ idx, x: e.clientX, y: e.clientY })}
                      onMouseMove={e => setIconHover({ idx, x: e.clientX, y: e.clientY })}
                      onMouseLeave={() => setIconHover(null)}
                      style={{ fontSize: "0.3em", lineHeight: "1" }}
                    >
                      {item.icon}
                    </span>
                  </span>
                ))}
              </h1>
              
              {/* Interactive Duckweed Element */}
              <div 
                className="absolute"
                style={{
                  top: "90%",    // Adjust as needed for your image
                  left: "48%",   // Adjust as needed for your image
                  transform: "translate(-50%, -50%)",
                  zIndex: 20
                }}
              >
                <div 
                  className="relative cursor-pointer transform hover:scale-110 transition-transform duration-300"
                  onMouseEnter={handleMouseEnter}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-32 h-32 bg-green-500/80 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30">
                    <div className="text-center">
                      <div className="w-6 h-6 mx-auto mb-2">
                        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                          <path d="M12 2L10 8L4 6L8 12L2 14L8 20L10 14L16 16L12 10L18 8L12 2Z"/>
                        </svg>
                      </div>
                      <div className="text-white text-sm font-medium">
                        Uncover<br />
                        the solution
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            {/* Mission Card */}
            <div className="absolute bottom-8 right-8 bg-black/30 backdrop-blur-md rounded-2xl p-6 max-w-sm">
              <h3 className="text-white text-xl font-semibold mb-3">Our mission</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                To empower farmers with innovative tools and technology that enhance productivity, sustainability, and efficiency, shaping the future of farming.
              </p>
            </div>
          </div>
        </div>
      </div>


       {/* Second Section with Map */}           
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



      


      

      
      
        
 
       

      {/* Tooltip for headline icons */}
      {iconHover && (
        <div
          className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full"
          style={{
            left: iconHover.x,
            top: iconHover.y + 350,
          }}
        >
          <div className="bg-green-800 rounded-2xl p-6 shadow-2xl max-w-sm animate-in fade-in duration-200" style={{ backgroundColor: headlineWords[iconHover.idx].color }}>
            <div className="mb-4">
              <img 
                src="https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Farm cow"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">{headlineWords[iconHover.idx].word}</h3>
              <p className="text-lg font-medium mb-3">{headlineWords[iconHover.idx].tooltip}</p>
              <p className="text-sm text-white/90 leading-relaxed">
                {/* Optional: add more info or keep it simple */}
                Duckweed enables new possibilities for {headlineWords[iconHover.idx].word.toLowerCase()}.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hover Tooltip */}
      {showHoverCard && (
        <div 
          className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full"
          style={{ 
            left: hoverPosition.x, 
            top: hoverPosition.y - 20,
          }}
        >
          <div className="bg-green-800 rounded-2xl p-6 shadow-2xl max-w-sm animate-in fade-in duration-200">
            <div className="mb-4">
              <img 
                src="https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Farm cow"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <div className="text-white">
              <h3 className="text-4xl font-bold mb-2">75%</h3>
              <p className="text-lg font-medium mb-3">of all farm operation costs is just feed.</p>
              <p className="text-sm text-white/90 leading-relaxed">
                The most expensive part? Protein-rich soybean. Its price has tripled in the last 30 years. Now, over 15% of beef price is just soybean - which is usually more than the farmer's profit margin.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;