import React, { useState, useMemo } from 'react';

const BrazilDeforestationWidget = () => {
  const [timelinePosition, setTimelinePosition] = useState(50); // 0-100, where 50 is "now"
  const [isDragging, setIsDragging] = useState(false);

  // Generate accurate Brazilian outline points based on the reference image
  // Modified generateBrazilPoints function
const generateBrazilPoints = useMemo(() => {
  // More precise Brazil outline based on your reference image
  const brazilOutline = [
    // Northern border - more accurate spacing
    [0.16, 0.08], [0.20, 0.06], [0.24, 0.05], [0.28, 0.04], [0.32, 0.03], 
    [0.36, 0.03], [0.40, 0.04], [0.44, 0.05], [0.48, 0.04], [0.52, 0.03], 
    [0.56, 0.04], [0.60, 0.06], [0.64, 0.08], [0.68, 0.10], [0.72, 0.12],
    
    // Northeast distinctive bulge - following your image pattern
    [0.74, 0.15], [0.76, 0.18], [0.78, 0.22], [0.80, 0.26], [0.82, 0.30], 
    [0.84, 0.34], [0.86, 0.38], [0.87, 0.42], [0.88, 0.46], [0.89, 0.50], 
    [0.90, 0.54], [0.89, 0.58], [0.88, 0.62],
    
    // Eastern coastline
    [0.86, 0.66], [0.84, 0.69], [0.81, 0.72], [0.78, 0.75], [0.75, 0.77], 
    [0.72, 0.79], [0.69, 0.81], [0.66, 0.83], [0.63, 0.84], [0.60, 0.85], 
    [0.57, 0.86], [0.54, 0.87],
    
    // Southern curve - matching the image
    [0.51, 0.88], [0.48, 0.89], [0.45, 0.90], [0.42, 0.91], [0.39, 0.90], 
    [0.36, 0.89], [0.33, 0.88], [0.30, 0.86], [0.27, 0.84], [0.24, 0.82],
    
    // Western border
    [0.21, 0.79], [0.18, 0.76], [0.16, 0.73], [0.14, 0.70], [0.13, 0.67], 
    [0.12, 0.64], [0.11, 0.61], [0.10, 0.58], [0.09, 0.55], [0.08, 0.52], 
    [0.07, 0.49], [0.06, 0.46], [0.07, 0.43], [0.08, 0.40], [0.09, 0.37], 
    [0.10, 0.34], [0.11, 0.31], [0.12, 0.28], [0.13, 0.25], [0.14, 0.22], 
    [0.15, 0.19], [0.16, 0.16], [0.17, 0.13], [0.18, 0.10]
  ];

  // Generate interior dots with more regular spacing like your image
  const interiorPoints = [];
  const dotSpacing = 0.025; // Adjust this to match your dot density
  
  for (let y = 0.08; y <= 0.92; y += dotSpacing) {
    for (let x = 0.06; x <= 0.92; x += dotSpacing) {
      if (isInsideBrazilBounds(x, y)) {
        // Add some randomness to avoid perfect grid
        const offsetX = (Math.random() - 0.5) * 0.008;
        const offsetY = (Math.random() - 0.5) * 0.008;
        interiorPoints.push([x + offsetX, y + offsetY]);
      }
    }
  }

  // Improved boundary detection function
  function isInsideBrazilBounds(x, y) {
    // More accurate Brazil shape detection
    if (y < 0.08 || y > 0.92 || x < 0.06 || x > 0.92) return false;
    
    // Northern Amazon region
    if (y < 0.15) {
      return x >= 0.16 && x <= 0.72;
    }
    
    // Upper middle region
    if (y < 0.35) {
      const leftBound = 0.08 + (y - 0.15) * 0.1;
      const rightBound = 0.89 - (y - 0.15) * 0.3;
      return x >= leftBound && x <= rightBound;
    }
    
    // Middle region (widest part)
    if (y < 0.65) {
      const leftBound = 0.07 + (y - 0.35) * 0.05;
      const rightBound = 0.90 - (y - 0.35) * 0.1;
      return x >= leftBound && x <= rightBound;
    }
    
    // Southern region (narrowing)
    const leftBound = 0.15 + (y - 0.65) * 0.4;
    const rightBound = 0.85 - (y - 0.65) * 0.3;
    return x >= leftBound && x <= rightBound;
  }

  const allPoints = [...brazilOutline, ...interiorPoints];

  return allPoints.map((coord, index) => {
    // Your existing deforestation calculation logic
    const baseDeforestation = Math.random() * 0.6 + 0.2;
    const timeEffect = (timelinePosition - 50) / 100;
    
    const isAmazon = coord[0] < 0.5 && coord[1] < 0.4;
    const isCerrado = coord[0] >= 0.3 && coord[0] <= 0.7 && coord[1] >= 0.3 && coord[1] <= 0.7;
    
    let regionalEffect = 0;
    if (isAmazon) regionalEffect = -0.2;
    if (isCerrado) regionalEffect = 0.3;
    
    let deforestationLevel = baseDeforestation + timeEffect + regionalEffect;
    deforestationLevel = Math.max(0, Math.min(1, deforestationLevel));

    return {
      x: coord[0] * 320 + 40,
      y: coord[1] * 240 + 20,
      deforestation: deforestationLevel,
      id: index
    };
  });
}, [timelinePosition]);

  const getPointColor = (deforestationLevel) => {
    if (deforestationLevel < 0.25) return '#10b981'; // Green - returning ecosystem
    if (deforestationLevel < 0.5) return '#ef4444'; // Red - no deforestation present
    if (deforestationLevel < 0.75) return '#f97316'; // Orange - mild deforestation
    return '#9ca3af'; // Gray - significant deforestation
  };

  const getTimelineLabel = () => {
    if (timelinePosition < 33) return 'before';
    if (timelinePosition > 67) return 'future';
    return 'now';
  };

  const getDeforestationPercentage = () => {
    const avgDeforestation = generateBrazilPoints.reduce((acc, point) => acc + point.deforestation, 0) / generateBrazilPoints.length;
    return Math.round(40 + avgDeforestation * 48); // Range from ~40% to ~88%
  };

  const handleSliderChange = (e) => {
    setTimelinePosition(Number(e.target.value));
  };

  const handleSliderClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    setTimelinePosition(Math.round(clickPosition * 100));
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const rect = e.currentTarget.getBoundingClientRect();
      const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
      setTimelinePosition(Math.max(0, Math.min(100, Math.round(newPosition))));
      e.preventDefault();
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add global mouse up listener
  React.useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e) => {
      if (isDragging) {
        const slider = document.querySelector('[data-slider="true"]');
        if (slider) {
          const rect = slider.getBoundingClientRect();
          const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
          setTimelinePosition(Math.max(0, Math.min(100, Math.round(newPosition))));
        }
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging]);

  return (
    <div className=" mx-4 mb-4 rounded-3xl p-16 relative" style={{ marginTop: "50px", backgroundColor: "#19471A"}}>
      <div className="flex items-center justify-between">
        {/* Map Section */}
        <div className="flex-1 pr-8">
          <div className="relative">
            {/* SVG Map */}
            <svg viewBox="0 0 400 280" className=" " style={{ height: "70%", width: "90%" }}>
              {generateBrazilPoints.map((point) => (
                <circle
                  key={point.id}
                  cx={point.x}
                  cy={point.y}
                  r="2.5"
                  fill={getPointColor(point.deforestation)}
                  opacity={0.9}
                  className="transition-all duration-500 ease-in-out"
                />
              ))}
            </svg>
            
            {/* Legend */}
            <div className="absolute top-90 left-20 space-y-2 text-s">
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
        
        {/* Statistics Section */}
        <div className="flex-1 text-right " style={{ marginRight: "5%", fontFamily: "Space Grotesk, sans-serif" }}>
          <h2 className="text-9xl font-bold text-white mb-4 transition-all duration-500">
            {getDeforestationPercentage()}%
          </h2>
          <p className="text-2xl text-white mb-6 font-medium">
            of natural ecosystem<br />
            is destroyed by soybean.
          </p>
          <p className="text-white/80 max-w-md ml-auto leading-relaxed text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-white/60 text-xs mt-4">[source: Brazil, trade.earth]</p>
        </div>
      </div>
      
      {/* Interactive Timeline */}
      <div className="mt-12 flex items-center justify-center" >
        <div className="flex items-center space-x-8 w-full max-w-2xl">
          <span className="text-white/60 text-sm w-16 text-center">before</span>
          
          <div className="flex-1 relative">
            <div 
              className="h-2 bg-white/30 rounded-full relative cursor-pointer"
              onClick={handleSliderClick}
            >
              <div 
                className="h-2 bg-white rounded-full transition-all duration-300 ease-out"
                style={{ width: `${timelinePosition}%` }}
              ></div>
              <div 
                className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full cursor-grab active:cursor-grabbing shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
                style={{ left: `${timelinePosition}%` }}
              ></div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={timelinePosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              style={{ zIndex: 10 }}
            />
          </div>
          
          <span className="text-white/60 text-sm w-16 text-center">future</span>
        </div>
      </div>
      
      {/* Current Time Label */}
      <div className="text-center mt-4">
        <span className="text-white font-medium text-lg capitalize transition-all duration-300">
          {getTimelineLabel()}
        </span>
      </div>

      <div style={{ paddingBottom: "100px"  }} ></div>
    </div>
  );
};

export default BrazilDeforestationWidget;