import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence, Variants, Easing } from 'framer-motion';
import Slider from './Slider';
import MAP from './MAP';
import ContentPanel from './ContentPanel';

interface DataPoint {
  x: number;
  y: number;
  values: number[];
}

interface ProcessedPoint extends DataPoint {
  id: string;
  currentColor: string;
}

export const CONFIG = {
  scroll: {
    multiplier: 10,        // Height multiplier for scroll container (4 = 400vh)
    smoothness: 0.3      // Animation smoothness (0.01-1, lower = smoother)
  },
  map: {
    viewBox: { width: 600, height: 600 },
    dotRadius: 2.7
  },
  colors: {
    background: '#19471A',
    accent: '#9DD019',
    categories: {
      0: '#779E45',  // No deforestation
      1: '#ffa399',  // 1-19k
      2: '#f38a7c',  // 19-56k
      3: '#e57260',  // 56-96k
      4: '#d65943',  // 96-130k
      5: '#c63f26',  // 130-260k
      6: '#b42104'   // 260k+
    }
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

const BrazilDeforestationWidget = () => {
  const [displaySliderValue, setDisplaySliderValue] = useState(0);
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const targetSliderValue = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  const YEARS = [
    2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
    2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034
  ];

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://static.igem.wiki/teams/5642/files/brazil-deforestation-categories21.json');
        if (!response.ok) throw new Error(`Failed to load data: ${response.status}`);
        const data: DataPoint[] = await response.json();
        if (!Array.isArray(data) || data.length === 0) throw new Error('Invalid data format');
        setDataPoints(data);
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Unable to load deforestation data');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const { top, height } = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollableDistance = height - viewportHeight;
      if (scrollableDistance <= 0) return;

      let newTargetValue = 0;
      if (top <= 0 && top > -scrollableDistance) {
        const progress = Math.abs(top) / scrollableDistance;
        newTargetValue = progress * 100;
      } else if (top > 0) {
        newTargetValue = 0;
      } else {
        newTargetValue = 100;
      }
      targetSliderValue.current = newTargetValue;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const smoothAnimation = () => {
      setDisplaySliderValue(currentValue => {
        const target = targetSliderValue.current;
        const diff = target - currentValue;

        if (Math.abs(diff) < 0.01) {
          return target;
        }

        const smoothedValue = currentValue + diff * CONFIG.scroll.smoothness;
        return smoothedValue;
      });

      animationFrameId.current = requestAnimationFrame(smoothAnimation);
    };

    animationFrameId.current = requestAnimationFrame(smoothAnimation);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const processedPoints = useMemo((): ProcessedPoint[] => {
    return dataPoints.map((point, index) => {
      let dataIndex;
      if (displaySliderValue <= 50) {
        dataIndex = Math.floor((displaySliderValue / 50) * 10);
      } else {
        const futureProgress = (displaySliderValue - 50) / 50;
        dataIndex = 11 + Math.floor(futureProgress * 10);
      }
      dataIndex = Math.min(dataIndex, point.values.length - 1, YEARS.length - 1);
      const categoryValue = point.values[dataIndex] || 0;
      const color = CONFIG.colors.categories[categoryValue as keyof typeof CONFIG.colors.categories] || CONFIG.colors.categories[0];
      return { ...point, id: `point-${index}`, currentColor: color };
    });
  }, [dataPoints, displaySliderValue]);

  const getCurrentYear = () => {
    let yearIndex;
    if (displaySliderValue <= 50) {
      yearIndex = Math.floor((displaySliderValue / 50) * 10);
    } else {
      const futureProgress = (displaySliderValue - 50) / 50;
      yearIndex = 11 + Math.floor(futureProgress * 10);
    }
    yearIndex = Math.min(yearIndex, YEARS.length - 1);
    return YEARS[yearIndex];
  };

  const currentYear = getCurrentYear();

  return (
    <div ref={scrollContainerRef} style={{ height: `${CONFIG.scroll.multiplier * 100}vh` }}>
      <div style={{ position: 'sticky', top: '0px', height: '100vh', overflow: 'hidden' }}>
        {/* Odstránené mt-10 aby neboli biele pásy */}
        <div className="w-full h-full flex items-center" style={{ backgroundColor: CONFIG.colors.background }}>
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div key="loading" className="w-full flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="text-center">
                  <motion.div className="rounded-full h-16 w-16 border-4 border-white/30 border-t-white mx-auto mb-4" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                  <p className="text-white text-lg font-medium">Loading Deforestation Data</p>
                </div>
              </motion.div>
            ) : error ? (
              <motion.div key="error" className="w-full flex items-center justify-center px-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="text-center p-8 rounded-lg border border-red-500/30 bg-red-500/10">
                  <p className="text-red-200 text-lg mb-4">Error Loading Data</p>
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              </motion.div>
            ) : (
              <motion.div key="content" className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16" variants={containerVariants} initial="hidden" animate="visible">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center">
                  <motion.div className="space-y-4 sm:space-y-6 order-2 xl:order-1" variants={itemVariants}>
                    <MAP processedPoints={processedPoints} />
                    <div className="px-2 sm:px-0">
                      <Slider 
                        sliderValue={displaySliderValue}
                        currentYear={currentYear}
                        onSliderChange={() => {}}
                        isDisabled={true}
                      />
                    </div>
                  </motion.div>
                  <motion.div className="order-1 xl:order-2" variants={itemVariants}>
                    <ContentPanel currentYear={currentYear} />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default BrazilDeforestationWidget;