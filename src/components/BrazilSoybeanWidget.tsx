import React, { useState, useMemo } from 'react';

const BrazilSoybeanWidget: React.FC = () => {
  const [timelinePosition, setTimelinePosition] = useState(50);

  const isInsideBrazil = (x: number, y: number): boolean => {
    // Simplified Brazil boundary detection
    if (y < 0.08 || y > 0.85 || x < 0.1 || x > 0.9) return false;
    
    // Northern region
    if (y < 0.2) {
      return x >= 0.2 && x <= 0.75;
    }
    
    // Upper middle (widening)
    if (y < 0.4) {
      const leftBound = 0.12 + (y - 0.2) * 0.1;
      const rightBound = 0.88 - (y - 0.2) * 0.05;
      return x >= leftBound && x <= rightBound;
    }
    
    // Middle section (widest)
    if (y < 0.65) {
      return x >= 0.11 && x <= 0.89;
    }
    
    // Southern section (narrowing)
    const leftBound = 0.2 + (y - 0.65) * 0.6;
    const rightBound = 0.85 - (y - 0.65) * 0.3;
    return x >= leftBound && x <= rightBound;
  };

  // Generate Brazil map dots in the exact pattern from the image
  const generateBrazilDots = useMemo(() => {
    const dots: { x: number; y: number; type: string }[] = [];
    
    // Brazil outline coordinates based on the image
    const brazilShape = [
      // Northern border
      [0.2, 0.12], [0.25, 0.1], [0.3, 0.08], [0.35, 0.07], [0.4, 0.06], [0.45, 0.07], 
      [0.5, 0.08], [0.55, 0.09], [0.6, 0.1], [0.65, 0.12], [0.7, 0.14], [0.75, 0.17],
      
      // Eastern coast (distinctive bulge)
      [0.78, 0.2], [0.8, 0.24], [0.82, 0.28], [0.84, 0.32], [0.85, 0.36], [0.86, 0.4],
      [0.87, 0.44], [0.88, 0.48], [0.89, 0.52], [0.88, 0.56], [0.87, 0.6], [0.85, 0.64],
      [0.83, 0.67], [0.8, 0.7], [0.77, 0.73], [0.74, 0.75], [0.7, 0.77], [0.66, 0.79],
      [0.62, 0.8], [0.58, 0.81], [0.54, 0.82],
      
      // Southern border
      [0.5, 0.83], [0.46, 0.84], [0.42, 0.83], [0.38, 0.82], [0.34, 0.8], [0.3, 0.78],
      [0.26, 0.76], [0.23, 0.73],
      
      // Western border
      [0.2, 0.7], [0.18, 0.66], [0.16, 0.62], [0.15, 0.58], [0.14, 0.54], [0.13, 0.5],
      [0.12, 0.46], [0.11, 0.42], [0.12, 0.38], [0.13, 0.34], [0.14, 0.3], [0.15, 0.26],
      [0.16, 0.22], [0.17, 0.18], [0.18, 0.15]
    ];

    // Create interior dots with grid pattern
    const dotSpacing = 0.018;
    for (let y = 0.08; y <= 0.85; y += dotSpacing) {
      for (let x = 0.1; x <= 0.9; x += dotSpacing) {
        if (isInsideBrazil(x, y)) {
          // Add slight randomness for natural look
          const offsetX = (Math.random() - 0.5) * 0.006;
          const offsetY = (Math.random() - 0.5) * 0.006;
          
          // Determine dot type based on region
          let type = 'no-deforestation';
          if (x < 0.5 && y < 0.4) type = 'no-deforestation'; // Amazon
          else if (x >= 0.3 && x <= 0.7 && y >= 0.3 && y <= 0.7) type = 'mild'; // Cerrado
          else if (Math.random() > 0.7) type = 'significant';
          else if (Math.random() > 0.8) type = 'returning';
          
          dots.push({
            x: (x + offsetX) * 300,
            y: (y + offsetY) * 200,
            type
          });
        }
      }
    }

    return dots;
  }, []);

  const getDotColor = (type: string): string => {
    switch (type) {
      case 'no-deforestation': return '#ef4444'; // Red
      case 'mild': return '#f97316'; // Orange  
      case 'significant': return '#9ca3af'; // Gray
      case 'returning': return '#10b981'; // Green
      default: return '#10b981';
    }
  };

  const handleTimelineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimelinePosition(Number(e.target.value));
  };

  const getTimeLabel = (): string => {
    if (timelinePosition < 33) return 'before';
    if (timelinePosition > 67) return 'future';
    return 'now';
  };

  return (
    <div 
      style={{
        width: '700px',
        height: '500px',
        background: 'linear-gradient(135deg, #2d5a3d 0%, #1e4d32 50%, #0f3d22 100%)',
        borderRadius: '20px',
        padding: '60px',
        color: 'white',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        position: 'relative',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
      }}
    >
      {/* Main Content */}
      <div style={{ display: 'flex', height: '300px' }}>
        {/* Left Section - Map */}
        <div style={{ flex: 1, paddingRight: '40px' }}>
          <div style={{ position: 'relative', width: '300px', height: '200px' }}>
            {/* Map Dots */}
            <svg width="300" height="200" style={{ overflow: 'visible' }}>
              {generateBrazilDots.map((dot, index) => (
                <circle
                  key={index}
                  cx={dot.x}
                  cy={dot.y}
                  r="1.5"
                  fill={getDotColor(dot.type)}
                  opacity={0.9}
                />
              ))}
            </svg>
            
            {/* Legend */}
            <div style={{ 
              position: 'absolute', 
              bottom: '-80px', 
              left: '0',
              fontSize: '11px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  background: '#ef4444',
                  marginRight: '8px'
                }}></div>
                <span>no deforestation present</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  background: '#f97316',
                  marginRight: '8px'
                }}></div>
                <span>mild deforestation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  background: '#9ca3af',
                  marginRight: '8px'
                }}></div>
                <span>significant deforestation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  background: '#10b981',
                  marginRight: '8px'
                }}></div>
                <span>returning ecosystem</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section - Statistics */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'flex-end',
          textAlign: 'right'
        }}>
          <div style={{ 
            fontSize: '120px', 
            fontWeight: '700', 
            lineHeight: '0.9',
            marginBottom: '20px',
            letterSpacing: '-2px'
          }}>
            64 %
          </div>
          <div style={{ 
            fontSize: '28px', 
            fontWeight: '500',
            marginBottom: '30px',
            lineHeight: '1.2'
          }}>
            of natural ecosystem<br />
            is destroyed by soybean.
          </div>
          <div style={{ 
            fontSize: '13px', 
            opacity: 0.8,
            lineHeight: '1.4',
            maxWidth: '300px',
            marginBottom: '20px'
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua.
          </div>
          <div style={{ 
            fontSize: '11px', 
            opacity: 0.6 
          }}>
            [source: Brazil, trade.earth]
          </div>
        </div>
      </div>
      
      {/* Timeline */}
      <div style={{ 
        position: 'absolute',
        bottom: '60px',
        left: '60px',
        right: '60px',
        display: 'flex',
        alignItems: 'center',
        gap: '30px'
      }}>
        <span style={{ 
          fontSize: '12px', 
          opacity: 0.7,
          width: '60px',
          textAlign: 'center'
        }}>
          before
        </span>
        
        <div style={{ flex: 1, position: 'relative' }}>
          <div style={{ 
            height: '2px', 
            background: 'rgba(255,255,255,0.3)',
            borderRadius: '1px',
            position: 'relative'
          }}>
            <div style={{ 
              height: '2px', 
              background: 'white',
              borderRadius: '1px',
              width: `${timelinePosition}%`,
              transition: 'width 0.3s ease'
            }}></div>
            <div style={{ 
              position: 'absolute',
              top: '50%',
              left: `${timelinePosition}%`,
              transform: 'translate(-50%, -50%)',
              width: '12px',
              height: '12px',
              background: 'white',
              borderRadius: '50%',
              cursor: 'pointer'
            }}></div>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={timelinePosition}
            onChange={handleTimelineChange}
            style={{
              position: 'absolute',
              top: '-5px',
              left: '0',
              width: '100%',
              height: '12px',
              opacity: 0,
              cursor: 'pointer'
            }}
          />
        </div>
        
        <span style={{ 
          fontSize: '12px', 
          opacity: 0.7,
          width: '60px',
          textAlign: 'center'
        }}>
          future
        </span>
      </div>
      
      {/* Current Time Label */}
      <div style={{ 
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '16px',
        fontWeight: '500',
        textTransform: 'capitalize'
      }}>
        {getTimeLabel()}
      </div>
    </div>
  );
};

export default BrazilSoybeanWidget;