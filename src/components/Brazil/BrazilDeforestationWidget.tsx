import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, Variants, Easing } from 'framer-motion';
import Slider from './Slider';
import MAP from './MAP';
import ContentPanel from './ContentPanel';

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
    natural: '#9DD019',        // Green for recovered areas
    white: '#FFFFFF',          // White for untouched/no-data areas
    noData: '#888888',         // Gray for actual no-data
    accent: '#74C69D'
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
      ease: "easeOut" as Easing
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as Easing }
  }
};

const loadingVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as Easing
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.3, ease: "easeOut" as Easing }
  }
};

const BrazilDeforestationWidget = () => {
  const [timelinePosition, setTimelinePosition] = useState(0); // Start at 0
  const [gridPoints, setGridPoints] = useState<GridPoint[]>([]);
  const [minBase, setMinBase] = useState(0);
  const [maxBase, setMaxBase] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://static.igem.wiki/teams/5642/files/brazil-deforestation-huemap4.json');
        if (!response.ok) {
          throw new Error(`Failed to load data: ${response.status} ${response.statusText}`);
        }

        const data: GridPoint[] = await response.json();
        
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error('Invalid or empty data file');
        }

        console.log(`Loaded ${data.length} points`);
        setGridPoints(data);

        // Compute min and max baseDeforestation excluding no-data (1.0)
        const filtered = data.filter(p => Math.abs(p.baseDeforestation - 1.0) >= 0.001);
        if (filtered.length > 0) {
          const bases = filtered.map(p => p.baseDeforestation);
          setMinBase(Math.min(...bases));
          setMaxBase(Math.max(...bases));
        } else {
          setMinBase(0);
          setMaxBase(1);
        }

      } catch (err) {
        console.error('Error loading data:', err);
        setError('Unable to load deforestation data. Make sure brazil_deforestation_huemap.json is in the public folder.');
      } finally {
        setTimeout(() => setLoading(false), 800);
      }
    };

    loadData();
  }, []);

  const processedPoints = useMemo(() => {
    return gridPoints.map(point => {
      // Special case: if baseDeforestation is exactly 1.0, it means "no data" - always gray
      if (Math.abs(point.baseDeforestation - 1.0) < 0.001) {
        return {
          ...point,
          currentState: 'noData' as const,
          opacity: 1.0
        };
      }

      let currentState: 'visible' | 'hidden' | 'green';
      let opacity: number;

      if (timelinePosition <= 25) {
        // PAST: All dots are white (visible)
        currentState = 'visible';
        opacity = 1.0;
      } else if (timelinePosition <= 65) {
        // PRESENT: Dots start disappearing based on deforestation level
        const presentProgress = (timelinePosition - 25) / 40; // Adjusted to 25-65 range
        
        // Normalize baseDeforestation to [0,1] based on actual min/max
        const range = maxBase - minBase;
        const normalizedDef = range > 0 ? (point.baseDeforestation - minBase) / range : 0;
        
        // Higher normalized def means earlier disappearance
        const disappearThreshold = 1 - normalizedDef;
        
        if (presentProgress > disappearThreshold) {
          currentState = 'hidden';
          opacity = 0;
        } else {
          // Gradual fade out as we approach the threshold
          const fadeProgress = disappearThreshold > 0 ? presentProgress / disappearThreshold : 0;
          currentState = 'visible';
          opacity = Math.max(0, 1 - fadeProgress * 1.5); // Fade faster
        }
      } else {
        // FUTURE: Previously hidden dots become green
        const futureProgress = (timelinePosition - 65) / 35; // Adjusted to start at 65
        // Check if this dot would have disappeared in the present phase
        const range = maxBase - minBase;
        const normalizedDef = range > 0 ? (point.baseDeforestation - minBase) / range : 0;
        const disappearThreshold = 1 - normalizedDef;
        const wouldHaveDisappeared = 1 > disappearThreshold; // Since full progress=1
        
        if (wouldHaveDisappeared) {
          // This dot was hidden, now it becomes green
          currentState = 'green';
          opacity = Math.min(1, futureProgress * 2); // Gradually appear as green
        } else {
          // This dot never disappeared, stays white
          currentState = 'visible';
          opacity = 1.0;
        }
      }

      return {
        ...point,
        currentState,
        opacity
      };
    });
  }, [gridPoints, timelinePosition, minBase, maxBase]);

  const handleSliderChange = (newPosition: number) => {
    setTimelinePosition(Math.max(0, Math.min(100, newPosition)));
  };

  return (
    <div className="w-full py-8" style={{ backgroundColor: CONFIG.colors.background }}>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div 
            key="loading"
            className="w-full min-h-screen flex items-center justify-center"
            style={{ backgroundColor: CONFIG.colors.background }}
            variants={loadingVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="text-center">
              <motion.div 
                className="rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-white/30 border-t-white mx-auto mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.p 
                className="text-white text-base sm:text-lg font-medium px-4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Loading Deforestation Data
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
            style={{ backgroundColor: CONFIG.colors.background }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {error && (
                <motion.div 
                  className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg border border-yellow-500/30" 
                  style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)' }}
                  initial={{ opacity: 0, scale: 0.9, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-start sm:items-center">
                    <motion.div 
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-yellow-500 mr-3 flex-shrink-0 mt-0.5 sm:mt-0"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <p className="text-yellow-200 text-xs sm:text-sm leading-relaxed">{error}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start xl:items-center">
              <motion.div 
                className="space-y-4 sm:space-y-6 order-2 xl:order-1"
                variants={itemVariants}
              >
                <MAP processedPoints={processedPoints} />
                
                <div className="px-2 sm:px-0">
                  <Slider 
                    timelinePosition={timelinePosition}
                    onSliderChange={handleSliderChange}
                  />
                </div>
              </motion.div>

              <motion.div 
                className="order-1 xl:order-2"
                variants={itemVariants}
              >
                <ContentPanel timelinePosition={timelinePosition} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BrazilDeforestationWidget;