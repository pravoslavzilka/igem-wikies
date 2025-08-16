import React, { useState, useEffect, useMemo } from 'react';
import Slider from './Slider';

interface GridPoint {
  x: number;
  y: number;
  id: string;
  baseDeforestation: number;
}

export const CONFIG = {
  map: {
    viewBox: { width: 600, height: 600 },
    bounds: { x: 0, y: 0, width: 600, height: 600 },
    dotRadius: 2.7,
    opacity: 1,
    maxPoints: 10000
  },
  colors: {
    background: '#19471A',
    healthy: '#9DD019',
    moderate: '#95D5B2',
    severe: '#F4A460',
    critical: '#e75151ff',
    white: '#FFFFFF',
    accent: '#74C69D'
  }
};

const BrazilDeforestationTracker = () => {
  const [timelinePosition, setTimelinePosition] = useState(50);
  const [gridPoints, setGridPoints] = useState<GridPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load data
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try to load the JSON file
        const response = await fetch('/brazil_deforestation_huemap.json');
        if (!response.ok) {
          throw new Error(`Failed to load data: ${response.status} ${response.statusText}`);
        }

        const data: GridPoint[] = await response.json();
        
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error('Invalid or empty data file');
        }

        console.log(`Loaded ${data.length} points`);
        setGridPoints(data);

      } catch (err) {
        console.error('Error loading data:', err);
        setError('Unable to load deforestation data. Make sure brazil_deforestation_huemap.json is in the public folder.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Calculate current deforestation for each point based on time position
  const processedPoints = useMemo(() => {
    const timeOffset = (timelinePosition - 50) / 50; // -1 to 1
    
    return gridPoints.map(point => {
      let currentDeforestation = point.baseDeforestation;
      
      if (timelinePosition < 50) {
        // Past: reduce deforestation (was better before)
        const pastReduction = Math.abs(timeOffset) * 0.6; // Max 60% reduction
        currentDeforestation = Math.max(0, point.baseDeforestation - pastReduction);
      } else if (timelinePosition > 50) {
        // Future: increase deforestation (gets worse)
        const futureIncrease = timeOffset * 0.5; // Max 50% increase
        currentDeforestation = Math.min(1, point.baseDeforestation + futureIncrease);
      }
      
      return {
        ...point,
        currentDeforestation
      };
    });
  }, [gridPoints, timelinePosition]);

  // Get color based on deforestation level
  const getDeforestationColor = (level: number): string => {
    if (level < 0.2) return CONFIG.colors.healthy;
    if (level < 0.4) return CONFIG.colors.moderate;
    if (level < 0.7) return CONFIG.colors.severe;
    return CONFIG.colors.critical;
  };

  const handleSliderChange = (newPosition: number) => {
    setTimelinePosition(Math.max(0, Math.min(100, newPosition)));
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center" style={{ backgroundColor: CONFIG.colors.background }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-white/30 border-t-white mx-auto mb-4"></div>
          <p className="text-white text-lg font-medium">Loading Deforestation Data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 p-8 lg:p-4">
      <div className="w-full mx-auto rounded-2xl p-8 lg:p-16 shadow-xl"
           style={{ backgroundColor: CONFIG.colors.background }}>
        {error && (
          <div className="mb-6 p-4 rounded-lg border border-yellow-500/30" style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)' }}>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-yellow-500 mr-3 flex-shrink-0"></div>
              <p className="text-yellow-200 text-sm">{error}</p>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="relative">
              <svg 
                viewBox={`0 0 ${CONFIG.map.viewBox.width} ${CONFIG.map.viewBox.height}`}
                className="w-full"
              >
                {processedPoints.map((point: GridPoint & { currentDeforestation: number }) => (
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
              
              <div className="absolute bottom-40 left-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-white text-sm">no destruction present</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full border border-white"></div>
                  <span className="text-white text-sm">ecosystem destruction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: CONFIG.colors.healthy }}></div>
                  <span className="text-white text-sm">natural ecosystem</span>
                </div>
              </div>
            </div>

            <Slider 
              timelinePosition={timelinePosition}
              onSliderChange={handleSliderChange}
            />
          </div>

          <div className="text-left space-y-8">
            <div>
              <div className="mb-6">
                <div className="text-sm font-medium tracking-wider mb-4" style={{ color: CONFIG.colors.accent }}>
                  OUR DEFORESTATION SOLUTION
                </div>
                <h1 className="text-4xl lg:text-5xl font-light leading-tight text-white mb-8">
                  Headline about returning<br />
                  natural ecosystems.
                </h1>
              </div>
              
              <div className="border-t border-white/20 pt-8">
                <div className="flex items-start space-x-4">
                  <div className="text-6xl text-white/20 font-serif">"</div>
                  <div>
                    <p className="text-lg text-white mb-4 leading-relaxed">
                      Every hectare we save from soy can be<br />
                      a hectare of forest reborn.
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-400 flex-shrink-0"></div>
                      <div>
                        <div className="font-medium text-white">Dr. Helena Silva</div>
                        <div className="text-sm text-white/70">Amazon Conservation Biologist</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrazilDeforestationTracker;