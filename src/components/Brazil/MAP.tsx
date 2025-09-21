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
    dotRadius: 2.7,
    // Settings for scaling and position - FOR LARGE SCREENS ONLY
    largeScreenTransform: {
      scale: 1.06,        // Map scaling (1.0 = normal size, 1.5 = 150%)
      translateX: 0,      // Horizontal offset (+ = right, - = left)
      translateY: 0,      // Vertical offset (+ = down, - = up)
      translateXPercent: 20,  // Horizontal offset in width percentage
      translateYPercent: 0    // Vertical offset in height percentage
    },
    // For mobile devices - original settings
    mobileTransform: {
      scale: 1.0,
      translateX: 0,
      translateY: 0,
      translateXPercent: 6,
      translateYPercent: 0
    }
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
      moderateLoss: '#fbaba5',
      severeLoss: '#cc4125'
    }
  }
};

const MAP: React.FC<MAPProps> = ({ processedPoints }) => {
  // Transform calculation based on screen size
  const getLargeScreenTransform = () => {
    const { scale, translateX, translateY, translateXPercent, translateYPercent } = CONFIG.map.largeScreenTransform;
    
    // Combines absolute and percentage values
    const finalTranslateX = translateX + (CONFIG.map.viewBox.width * translateXPercent / 100);
    const finalTranslateY = translateY + (CONFIG.map.viewBox.height * translateYPercent / 100);
    
    return `scale(${scale}) translate(${finalTranslateX}px, ${finalTranslateY}px)`;
  };

  const getMobileTransform = () => {
    const { scale, translateX, translateY, translateXPercent, translateYPercent } = CONFIG.map.mobileTransform;
    
    const finalTranslateX = translateX + (CONFIG.map.viewBox.width * translateXPercent / 100);
    const finalTranslateY = translateY + (CONFIG.map.viewBox.height * translateYPercent / 100);
    
    return `scale(${scale}) translate(${finalTranslateX}px, ${finalTranslateY}px)`;
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden">
        <svg 
          viewBox={`0 0 ${CONFIG.map.viewBox.width} ${CONFIG.map.viewBox.height}`}
          className="w-full h-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-none mx-auto"
          style={{ 
            maxHeight: '70vh',
            aspectRatio: '1/1'
          }}
        >
          {/* Group for large screens (xl and larger) */}
          <g 
            className="hidden xl:block"
            style={{
              transform: getLargeScreenTransform(),
              transformOrigin: 'center center',
              transition: 'transform 0.3s ease-in-out'
            }}
          >
            {processedPoints.map((point) => (
              <circle
                key={`large-${point.id}`}
                cx={point.x}
                cy={point.y}
                r={CONFIG.map.dotRadius}
                fill={point.currentColor}
                style={{ 
                  transition: 'fill 0.3s ease-in-out'
                }}
              />
            ))}
          </g>

          {/* Group for mobile and medium screens (less than xl) */}
          <g 
            className="block xl:hidden"
            style={{
              transform: getMobileTransform(),
              transformOrigin: 'center center',
              transition: 'transform 0.3s ease-in-out'
            }}
          >
            {processedPoints.map((point) => (
              <circle
                key={`mobile-${point.id}`}
                cx={point.x}
                cy={point.y}
                r={CONFIG.map.dotRadius}
                fill={point.currentColor}
                style={{ 
                  transition: 'fill 0.3s ease-in-out'
                }}
              />
            ))}
          </g>
        </svg>
        
        {/* Legend for larger screens - positioned absolutely above map */}
        <div className="hidden md:block absolute bottom-4 lg:bottom-6 xl:bottom-8 left-4 lg:left-6 space-y-2 lg:space-y-3">
          <div className="text-white text-sm lg:text-base xl:text-lg font-bold mb-3 leading-tight">
            <div className="underline decoration-2 underline-offset-2">Ecosystem loss driven by</div>
            <div className="font-extrabold">soybean production:</div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: CONFIG.colors.legend.noLoss }}></div>
            <span className="text-white text-xs lg:text-sm">no ecosystem loss</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: CONFIG.colors.legend.moderateLoss }}></div>
            <span className="text-white text-xs lg:text-sm">moderate ecosystem loss</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: CONFIG.colors.legend.severeLoss }}></div>
            <span className="text-white text-xs lg:text-sm">severe ecosystem loss</span>
          </div>
        </div>
      </div>
      
      {/* Legend for mobile screens - positioned below map */}
      <div className="block md:hidden px-2 space-y-2">
        <div className="text-white text-base font-bold mb-3 leading-tight">
          <div className="underline decoration-2 underline-offset-2">Ecosystem loss driven by</div>
          <div className="font-extrabold">soybean production:</div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: CONFIG.colors.legend.noLoss }}></div>
          <span className="text-white text-xs">no ecosystem loss</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: CONFIG.colors.legend.moderateLoss }}></div>
          <span className="text-white text-xs">moderate ecosystem loss</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: CONFIG.colors.legend.severeLoss }}></div>
          <span className="text-white text-xs">severe ecosystem loss</span>
        </div>
      </div>
    </div>
  );
};

export default MAP;