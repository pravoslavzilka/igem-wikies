import "@fontsource/urbanist";
import "@fontsource/space-grotesk";
import React, { useState, useEffect } from 'react';



const headlineWords = [
    { word: "Affordable", icon: "https://static.igem.wiki/teams/5642/icons/fi-45165.webp", tooltip: "Low cost for everyone", color: "#9DD019" },
  
      { word: "local", icon: "", tooltip: "" },
  
    { word: "protein", icon: "https://static.igem.wiki/teams/5642/icons/fi-11618743.webp", tooltip: "High nutritional value", color: "#FFB2FF" },
  
    { word: "for", icon: "", tooltip: ""},
  
    { word: "every", icon: "", tooltip: "" },
  
    { word: "farm", icon: "https://static.igem.wiki/teams/5642/icons/fi-7830224.webp", tooltip: "For farmers", color:"#7363F4"  },
  
    { word: "by", icon: "", tooltip: "" },
  
    { word: "programmable", icon: "https://static.igem.wiki/teams/5642/icons/fi-5870724.webp", tooltip: "Customizable", color: "#D07519"},
  
    { word: "duckweed", icon: "", tooltip: "" },
    
  ];



const Hero = () => {
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
          className="h-screen bg-cover bg-center rounded-3xl relative overflow-hidden rounded-3 xl mx-4 mt-4"
          style={{
            backgroundImage: "url('https://static.igem.wiki/teams/5642/images/photo.webp')",
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
                      style={{ fontSize: "0.3em", lineHeight: "1", paddingBottom: "10%" }}
                    >
                      
                      <img src={item.icon} />
                    </span>
                  </span>
                ))}
              </h1>
              
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

export default Hero;