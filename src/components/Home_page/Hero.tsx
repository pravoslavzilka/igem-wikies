import "@fontsource/urbanist";
import "@fontsource/space-grotesk";
import React, { useState, useEffect } from 'react';
import { image } from "framer-motion/client";



const headlineWords = [
    { word: "Affordable", icon: "https://static.igem.wiki/teams/5642/icons/fi-45165.webp", image:"https://static.igem.wiki/teams/5642/images/homepage/iconshover/soyprice-graph.webp",  tooltip: "Soybean is the dominant source of protein for livestock. Since 2000, its prices have more than doubled, squeezing farmers’ margins and driving up feed costs", color: "#9DD019" },
  
      { word: "local", icon: "", tooltip: "" },
  
    { word: "protein", icon: "https://static.igem.wiki/teams/5642/icons/fi-11618743.webp", image:"https://static.igem.wiki/teams/5642/images/homepage/iconshover/sqmepm5rxog31.webp", tooltip: "70% of global soy production is used for animal feed - 310 million tons grown on 115 million hectares. In the past 50 years, demand has increased tenfold, often at the expense of forests and savannas that were cleared to make way for soy fields.", color: "#FFB2FF" },
  
    { word: "for", icon: "", tooltip: ""},
  
    { word: "every", icon: "", tooltip: "" },
  
    { word: "farm", icon: "https://static.igem.wiki/teams/5642/icons/fi-7830224.webp", image:"https://static.igem.wiki/teams/5642/images/homepage/taifr-1.webp", tooltip: "We are developing a genetic engineering platform that cuts the time needed for stable insertion of new trait to duckweed - the world’s fastest-growing plant - from five months down to just one.", color:"#7363F4"  },
  
    { word: "by", icon: "", tooltip: "" },
  
    { word: "programmable", icon: "https://static.igem.wiki/teams/5642/icons/fi-5870724.webp", image:"https://static.igem.wiki/teams/5642/images/homepage/iconshover/container.webp", tooltip: "Soybean production is concentrated in just a handful of countries, leaving farmers everywhere else dependent on imports. Our modular, autonomous cultivation unit lets any farm produce its own protein-rich duckweed, ensuring a steady, local alternative to soy. ", color: "#D07519"},
  
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
            backgroundImage: "url('https://static.igem.wiki/teams/5642/images/homepage/photo.webp')",
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
            <div className="absolute bottom-8 right-8 bg-[#4B463F]/90 backdrop-blur-md rounded-2xl p-6 max-w-sm shadow-lg" style={{boxShadow: "0 4px 24px 0 rgba(0,0,0,0.12)"}}>
              <h3 className="text-white text-2xl font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Running a farm is less and less profitable
              </h3>
              <p className="text-white/90 text-base mb-4" style={{ fontFamily: 'Urbanist, sans-serif', lineHeight: '140%', fontWeight: '400' }}>
                "With crop prices soaring, my feed costs have jumped 35 % - making farming less profitable every day."
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src="https://static.igem.wiki/teams/5642/images/homepage/farmer.webp"
                    alt="Rudolf Repiský"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div style={{ fontFamily: 'Urbanist, sans-serif' }}>
                  <div className="text-white font-bold text-base leading-tight">Rudolf Repiský</div>
                  <div className="text-white/80 text-sm leading-tight">farmer from Eastern Slovakia</div>
                </div>
              </div>
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
            fontFamily: 'Urbanist, sans-serif',
          }}
        >
          <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-sm animate-in border fade-in duration-200" style={{ borderColor: headlineWords[iconHover.idx].color, borderWidth: "3px" }}>
            <div className="mb-4">
              <img 
                src={headlineWords[iconHover.idx].image} 
                alt=" "
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <div className="">
              <h3 className="text-2xl font-bold mb-2">{headlineWords[iconHover.idx].word}</h3>
              <p className="text-lg font-medium mb-3">{headlineWords[iconHover.idx].tooltip}</p>
              <p className="text-sm  leading-relaxed">
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