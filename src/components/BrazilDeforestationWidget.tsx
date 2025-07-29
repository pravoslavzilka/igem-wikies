import React, { useState, useMemo } from 'react';

const BrazilDeforestationWidget = () => {
  const [timelinePosition, setTimelinePosition] = useState(50); // 0-100, where 50 is "now"
  const [isDragging, setIsDragging] = useState(false);

  // Generate accurate Brazilian outline points based on the reference image
  const generateBrazilPoints = useMemo(() => {
    // More accurate Brazil border coordinates tracing the actual outline (normalized 0-1)
    const brazilBorderPoints = [
      // Northern Amazon border - starting from northwest
      [0.15, 0.08], [0.18, 0.06], [0.22, 0.05], [0.26, 0.04], [0.3, 0.03], [0.34, 0.02], [0.38, 0.03], [0.42, 0.04], [0.46, 0.05], [0.5, 0.04], [0.54, 0.03], [0.58, 0.04], [0.62, 0.06], [0.66, 0.08], [0.7, 0.1],
      
      // Northeast bulge - the distinctive protrusion
      [0.73, 0.13], [0.76, 0.16], [0.78, 0.2], [0.8, 0.24], [0.82, 0.28], [0.84, 0.32], [0.86, 0.36], [0.87, 0.4], [0.88, 0.44], [0.89, 0.48], [0.9, 0.52], [0.89, 0.56], [0.88, 0.6], [0.87, 0.64],
      
      // Eastern coast descending
      [0.85, 0.68], [0.83, 0.71], [0.8, 0.74], [0.77, 0.77], [0.74, 0.79], [0.71, 0.81], [0.68, 0.83], [0.65, 0.84], [0.62, 0.85], [0.59, 0.86], [0.56, 0.87], [0.53, 0.88], [0.5, 0.89],
      
      // Southeast curve
      [0.47, 0.9], [0.44, 0.91], [0.41, 0.92], [0.38, 0.93], [0.35, 0.92], [0.32, 0.91], [0.29, 0.9], [0.26, 0.88], [0.23, 0.86], [0.2, 0.84],
      
      // Western border going up
      [0.17, 0.81], [0.15, 0.78], [0.13, 0.75], [0.12, 0.72], [0.11, 0.69], [0.1, 0.66], [0.09, 0.63], [0.08, 0.6], [0.07, 0.57], [0.06, 0.54], [0.05, 0.51], [0.04, 0.48], [0.05, 0.45], [0.06, 0.42], [0.07, 0.39], [0.08, 0.36], [0.09, 0.33], [0.1, 0.3], [0.11, 0.27], [0.12, 0.24], [0.13, 0.21], [0.14, 0.18], [0.15, 0.15], [0.16, 0.12], [0.17, 0.09]
    ];

    // Add interior points to fill the shape
    const interiorPoints = [];
    
    // Generate interior points using a more systematic approach
    for (let y = 0.1; y <= 0.9; y += 0.03) {
      for (let x = 0.1; x <= 0.9; x += 0.03) {
        // Check if point is inside Brazil's approximate bounds
        if (isInsideBrazil(x, y)) {
          interiorPoints.push([x, y]);
        }
      }
    }

    // Function to check if a point is roughly inside Brazil
    function isInsideBrazil(x, y) {
      // Simplified boundary check based on Brazil's shape
      if (y < 0.1 || y > 0.9 || x < 0.05 || x > 0.9) return false;
      
      // Northern region
      if (y < 0.2) {
        return x >= 0.15 && x <= 0.7;
      }
      // Northeast bulge
      if (y < 0.6) {
        return x >= 0.05 + (y - 0.2) * 0.1 && x <= 0.89 - (y - 0.2) * 0.2;
      }
      // Southern region
      return x >= 0.1 + (y - 0.6) * 0.3 && x <= 0.8 - (y - 0.6) * 0.2;
    }

    const allPoints = [...brazilBorderPoints, ...interiorPoints];

    return allPoints.map((coord, index) => {
      // Calculate deforestation level based on timeline position and location
      const baseDeforestation = Math.random() * 0.6 + 0.2; // Base between 0.2-0.8
      
      // Time effect: past = less deforestation, future = more deforestation
      const timeEffect = (timelinePosition - 50) / 100; // -0.5 to 0.5
      
      // Regional effect: Amazon (north/west) vs Cerrado (center) vs Atlantic Forest (east/south)
      const isAmazon = coord[0] < 0.5 && coord[1] < 0.4;
      const isCerrado = coord[0] >= 0.3 && coord[0] <= 0.7 && coord[1] >= 0.3 && coord[1] <= 0.7;
      
      let regionalEffect = 0;
      if (isAmazon) regionalEffect = -0.2; // Amazon less deforested initially
      if (isCerrado) regionalEffect = 0.3; // Cerrado more deforested for agriculture
      
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
    <div className="bg-green-800 mx-4 mb-4 rounded-3xl p-16 relative" style={{ marginTop: "50px" }}>
      <div className="flex items-center justify-between">
        {/* Map Section */}
        <div className="flex-1 pr-8">
          <div className="relative">
            {/* SVG Map */}
            <svg viewBox="0 0 400 280" className="w-96 h-72">
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
            <div className="absolute bottom-0 left-0 space-y-2 text-xs">
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
        <div className="flex-1 text-right">
          <h2 className="text-8xl font-bold text-white mb-4 transition-all duration-500">
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
      <div className="mt-12 flex items-center justify-center">
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
    </div>
  );
};

export default BrazilDeforestationWidget;