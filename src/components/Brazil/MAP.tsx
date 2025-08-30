import React from 'react';

interface GridPoint {
  x: number;
  y: number;
  id: string;
  baseDeforestation: number;
  currentState: 'visible' | 'hidden' | 'green' | 'noData';
  opacity: number;
}

interface MAPProps {
  processedPoints: GridPoint[];
}

const CONFIG = {
  map: {
    viewBox: { width: 600, height: 600 },
    dotRadius: 2.7
  },
  
  colors: {
    white: '#FFFFFF',           // White for untouched areas
    natural: '#9DD019',         // Green for recovered areas
    noData: '#ffffffff'           // Gray for no-data points
  }
};

const MAP: React.FC<MAPProps> = ({ processedPoints }) => {
  // Get color based on current state
  const getPointStyle = (point: GridPoint): { fill: string; opacity: number } => {
    switch (point.currentState) {
      case 'noData':
        return {
          fill: CONFIG.colors.noData,
          opacity: 1.0
        };
      case 'visible':
        return {
          fill: CONFIG.colors.white,
          opacity: point.opacity
        };
      case 'hidden':
        return {
          fill: CONFIG.colors.white,
          opacity: 0
        };
      case 'green':
        return {
          fill: CONFIG.colors.natural,
          opacity: point.opacity
        };
      default:
        return {
          fill: CONFIG.colors.white,
          opacity: 1.0
        };
    }
  };

  return (
    <div className="relative">
      <svg 
        viewBox={`0 0 ${CONFIG.map.viewBox.width} ${CONFIG.map.viewBox.height}`}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-none mx-auto"
      >
        {processedPoints.map((point: GridPoint) => {
          const { fill, opacity } = getPointStyle(point);
          
          // Skip rendering completely hidden points for performance
          if (opacity === 0) return null;
          
          return (
            <circle
              key={point.id}
              cx={point.x}
              cy={point.y}
              r={CONFIG.map.dotRadius}
              fill={fill}
              opacity={opacity}
              style={{ 
                transition: 'opacity 0.3s ease-in-out, fill 0.3s ease-in-out'
              }}
            />
          );
        })}
      </svg>
      
      {/* Updated Legend - only showing the 3 states */}
      <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-20 left-2 sm:left-4 md:left-6 space-y-1.5 sm:space-y-2 md:space-y-3">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: CONFIG.colors.white }}></div>
          <span className="text-white text-xs sm:text-sm">no destruction present</span>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: CONFIG.colors.natural }}></div>
          <span className="text-white text-xs sm:text-sm">natural ecosystem</span>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: CONFIG.colors.noData }}></div>
          <span className="text-white text-xs sm:text-sm">ecosystem destruction</span>
        </div>
      </div>
    </div>
  );
};

export default MAP;