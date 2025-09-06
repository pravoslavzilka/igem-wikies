import React from 'react';

interface ProcessedPoint {
  x: number;
  y: number;
  id: string;
  currentColor: string;
}

interface MAPProps {
  processedPoints: ProcessedPoint[];
}

const CONFIG = {
  map: {
    viewBox: { width: 600, height: 600 },
    dotRadius: 2.7
  },
  colors: {
    categories: {
      0: '#c7d1d4',  // No deforestation
      1: '#fee2df',  // 1-19k
      2: '#fbaba5',  // 19-56k
      3: '#fe887f',  // 56-96k
      4: '#e67e78',  // 96-130k
      5: '#a16661',  // 130-260k
      6: '#674a4f'   // 260k+
    },
    legend: {
      noLoss: '#779E45',
      moderateLoss: '#FAA9A3',
      severeLoss: '#cc4125'
    }
  }
};

const MAP: React.FC<MAPProps> = ({ processedPoints }) => {
  return (
    <div className="relative">
      <svg 
        viewBox={`0 0 ${CONFIG.map.viewBox.width} ${CONFIG.map.viewBox.height}`}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-none mx-auto"
      >
        {processedPoints.map((point) => (
          <circle
            key={point.id}
            cx={point.x}
            cy={point.y}
            r={CONFIG.map.dotRadius}
            fill={point.currentColor}
            style={{ 
              transition: 'fill 0.3s ease-in-out'
            }}
          />
        ))}
      </svg>
      
      {/* Simplified Legend */}
      <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-20 left-2 sm:left-4 md:left-6 space-y-2 sm:space-y-3">
        <div className="text-white text-xs sm:text-sm font-medium mb-3">
          Ecosystem loss driven by soybean production:
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ backgroundColor: CONFIG.colors.legend.noLoss }}></div>
          <span className="text-white text-xs sm:text-sm">no ecosystem loss</span>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ backgroundColor: CONFIG.colors.legend.moderateLoss }}></div>
          <span className="text-white text-xs sm:text-sm">moderate ecosystem loss</span>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ backgroundColor: CONFIG.colors.legend.severeLoss }}></div>
          <span className="text-white text-xs sm:text-sm">severe ecosystem loss</span>
        </div>
      </div>
    </div>
  );
};

export default MAP;