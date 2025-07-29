import React, { useState } from 'react';

const Home = () => {
  const [showHoverCard, setShowHoverCard] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

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
          className="h-screen bg-cover bg-center relative overflow-hidden rounded-3xl mx-4 mt-4"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        >
          {/* Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 via-blue-500/60 to-blue-700/80"></div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center px-8">
            <div className="text-center max-w-4xl">
              <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
                Affordable, local protein for every farm
                <br />
                <span className="relative">
                  by <span className="underline decoration-green-400 decoration-4 underline-offset-4">prog</span>
                  <svg className="absolute -bottom-2 left-0 w-32 h-3" viewBox="0 0 128 12" fill="none">
                    <path d="M2 6c20 0 40-4 60 0s40 4 60 0" stroke="#10b981" strokeWidth="3" fill="none"/>
                  </svg>
                  <span className="underline decoration-green-400 decoration-4 underline-offset-4">rammable</span> duckweed
                </span>
              </h1>
              
              {/* Interactive Duckweed Element */}
              <div className="relative inline-block mt-16">
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
      <div className="bg-green-800 mx-4 mb-4 rounded-3xl p-16 relative" style={{ marginTop: "50px" }}>
        <div className="flex items-center justify-between">
          {/* Dotted Map */}
          <div className="flex-1">
            <div className="relative w-96 h-80">
              <svg viewBox="0 0 400 320" className="w-full h-full">
                {/* Brazil-like shape made of dots */}
                {Array.from({ length: 80 }, (_, i) => {
                  const x = 50 + (i % 8) * 40 + Math.random() * 20;
                  const y = 50 + Math.floor(i / 8) * 25 + Math.random() * 15;
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="2"
                      fill="#10b981"
                      opacity={Math.random() * 0.8 + 0.2}
                    />
                  );
                })}
              </svg>
              
              {/* Legend */}
              <div className="absolute bottom-0 left-0 space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-white">no deforestation present</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-white">mild deforestation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  <span className="text-white">significant deforestation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-white">returning ecosystem</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Statistics */}
          <div className="flex-1 text-right">
            <h2 className="text-8xl font-bold text-white mb-4">64%</h2>
            <p className="text-2xl text-white mb-6 font-medium">
              of natural ecosystem<br />
              is destroyed by soybean.
            </p>
            <p className="text-white/80 max-w-md ml-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-white/60 text-sm mt-4">[source: Brazil, trade.earth]</p>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="mt-16 flex items-center justify-center">
          <div className="flex items-center space-x-16">
            <span className="text-white/60">before</span>
            <div className="flex items-center space-x-2">
              <div className="w-32 h-1 bg-white/30 rounded-full">
                <div className="w-16 h-1 bg-white rounded-full"></div>
              </div>
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-white font-medium">now</span>
            <div className="w-32 h-1 bg-white/30 rounded-full"></div>
            <span className="text-white/60">future</span>
          </div>
        </div>
      </div>

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