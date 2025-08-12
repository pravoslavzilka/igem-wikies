import React, { useState } from 'react';
import BrazilDeforestationWidget from '../components/BrazilDeforestationWidget';
import VideoComp from '../components/VideoComp';
import BrazilSoybeanWidget from '../components/BrazilSoybeanWidget';


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
                  className="absolute text-7xl font-bold text-white mb-20 px-16 w-[80vw] max-w-7xl"
                  style={{
                    top: "15%",    // Y position as percent of container height
                    left: "50%",   // X position as percent of container width
                    transform: "translate(-50%, -50%)", // Center the headline at (left, top)
                    zIndex: 10,
                    fontFamily: "Urbanist, sans-serif",
                  }}
                >
                  <span className="relative inline-block">
                    <span className="">
                      Affordable, local protein
                    </span>
                    <svg
                      className="absolute left-0 w-full h-10"
                      style={{ bottom: "-16px" }}
                      viewBox="0 0 500 60"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="
                          M0 40
                          Q 5 10, 10 40
                          Q 15 70, 20 40
                          Q 25 10, 30 40
                          Q 35 70, 40 40
                          Q 45 10, 50 40
                          Q 55 70, 60 40
                          Q 65 10, 70 40
                          Q 75 70, 80 40
                          Q 85 10, 90 40
                          Q 95 70, 100 40
                          Q 105 10, 110 40
                          Q 115 70, 120 40
                          Q 125 10, 130 40
                          Q 135 70, 140 40
                          Q 145 10, 150 40
                          Q 155 70, 160 40
                          Q 165 10, 170 40
                          Q 175 70, 180 40
                          Q 185 10, 190 40
                          Q 195 70, 200 40
                          Q 205 10, 210 40
                          Q 215 70, 220 40
                          Q 225 10, 230 40
                          Q 235 70, 240 40
                          Q 245 10, 250 40
                          Q 255 70, 260 40
                          Q 265 10, 270 40
                          Q 275 70, 280 40
                          Q 285 10, 290 40
                          Q 295 70, 300 40
                          Q 305 10, 310 40
                          Q 315 70, 320 40
                          Q 325 10, 330 40
                          Q 335 70, 340 40
                          Q 345 10, 350 40
                          Q 355 70, 360 40
                          Q 365 10, 370 40
                          Q 375 70, 380 40
                          Q 385 10, 390 40
                          Q 395 70, 400 40
                          Q 405 10, 410 40
                          Q 415 70, 420 40
                          Q 425 10, 430 40
                          Q 435 70, 440 40
                          Q 445 10, 450 40
                          Q 455 70, 460 40
                          Q 465 10, 470 40
                          Q 475 70, 480 40
                          Q 485 10, 490 40
                          Q 495 70, 500 40
                        "
                        stroke="#10b981"
                        strokeWidth="6"
                        fill="none"
                      />
                    </svg>
                  </span>
                  <br />
                  by programmable duckweed
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