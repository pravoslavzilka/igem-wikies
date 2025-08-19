import React from 'react';

interface GridPoint {
  x: number;
  y: number;
  id: string;
  baseDeforestation: number;
  currentDeforestation: number;
}

interface MAPProps {
  processedPoints: GridPoint[];
}

const CONFIG = {
  map: {
    viewBox: { width: 600, height: 600 },
    dotRadius: 2.7,
    opacity: 1
  },
  colors: {
    healthy: '#9DD019',
    moderate: '#95D5B2',
    severe: '#F4A460',
    critical: '#e75151ff',
    white: '#FFFFFF'
  }
};

const MAP: React.FC<MAPProps> = ({ processedPoints }) => {
  // Get color based on deforestation level
  const getDeforestationColor = (level: number): string => {
    const NEAR_ZERO_THRESHOLD = 0.05; // Threshold for natural areas
    const NON_FOREST_THRESHOLD = 0.95; // Threshold for non-forest areas

    if (level >= NON_FOREST_THRESHOLD) return CONFIG.colors.white; // White for non-forest areas
    if (level <= NEAR_ZERO_THRESHOLD) return CONFIG.colors.healthy; // Green for natural areas
    if (level < 0.2) return CONFIG.colors.healthy;
    if (level < 0.4) return CONFIG.colors.moderate;
    if (level < 0.7) return CONFIG.colors.severe;
    return CONFIG.colors.critical;
  };

  return (
    <div className="relative">
      <svg 
        viewBox={`0 0 ${CONFIG.map.viewBox.width} ${CONFIG.map.viewBox.height}`}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-none mx-auto"
      >
        {processedPoints.map((point: GridPoint) => (
          <circle
            key={point.id}
            cx={point.x}
            cy={point.y}
            r={CONFIG.map.dotRadius}
            fill={getDeforestationColor(point.currentDeforestation)}
            opacity={CONFIG.map.opacity}
          />
        ))}
      </svg>
      
      {/* Legend */}
      <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-20 left-2 sm:left-4 md:left-6 space-y-1.5 sm:space-y-2 md:space-y-3">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: CONFIG.colors.white }}></div>
          <span className="text-white text-xs sm:text-sm">non-forest (no data)</span>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: CONFIG.colors.healthy }}></div>
          <span className="text-white text-xs sm:text-sm">natural ecosystem</span>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: CONFIG.colors.moderate }}></div>
          <span className="text-white text-xs sm:text-sm">moderate deforestation</span>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: CONFIG.colors.severe }}></div>
          <span className="text-white text-xs sm:text-sm">severe deforestation</span>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: CONFIG.colors.critical }}></div>
          <span className="text-white text-xs sm:text-sm">critical deforestation</span>
        </div>
      </div>
    </div>
  );
};

export default MAP;