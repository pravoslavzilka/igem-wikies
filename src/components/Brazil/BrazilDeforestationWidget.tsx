import { useState, useEffect, useMemo } from 'react';
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
  const [sliderValue, setSliderValue] = useState(0);
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Definícia rokov - 2013-2034 (22 rokov celkom)
  const YEARS = [
    2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, // Past: 11 rokov (indexy 0-10)
    2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034  // Future: 11 rokov (indexy 11-21)
  ];

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://static.igem.wiki/teams/5642/files/brazil-deforestation-categories2.json');
        
        if (!response.ok) {
          throw new Error(`Failed to load data: ${response.status}`);
        }

        const data: DataPoint[] = await response.json();
        
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error('Invalid data format');
        }

        setDataPoints(data);
        console.log(`Loaded ${data.length} data points`);
        
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Unable to load deforestation data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const processedPoints = useMemo((): ProcessedPoint[] => {
    return dataPoints.map((point, index) => {
      let dataIndex;
      
      if (sliderValue <= 50) {
        // Ľavá polovica: 2013-2023 (indexy 0-10)
        // sliderValue 0 = rok 2013 (index 0)
        // sliderValue 50 = rok 2023 (index 10)
        dataIndex = Math.floor((sliderValue / 50) * 10);
      } else {
        // Pravá polovica: 2024-2034 (indexy 11-21)  
        // sliderValue 51 = rok 2024 (index 11)
        // sliderValue 100 = rok 2034 (index 21)
        const futureProgress = (sliderValue - 50) / 50; // 0-1 pre pravú polovicu
        dataIndex = 11 + Math.floor(futureProgress * 10); // 11-21
      }
      
      // Zabezpečíme, že neprekročíme maximálny dostupný index
      dataIndex = Math.min(dataIndex, point.values.length - 1, YEARS.length - 1);
      
      const categoryValue = point.values[dataIndex] || 0;
      const color = CONFIG.colors.categories[categoryValue as keyof typeof CONFIG.colors.categories] || CONFIG.colors.categories[0];
      
      return {
        ...point,
        id: `point-${index}`,
        currentColor: color
      };
    });
  }, [dataPoints, sliderValue]);

  const handleSliderChange = (newValue: number) => {
    setSliderValue(Math.max(0, Math.min(100, newValue)));
  };

  const getCurrentYear = () => {
    let yearIndex;
    
    if (sliderValue <= 50) {
      // Ľavá polovica: 2013-2023
      yearIndex = Math.floor((sliderValue / 50) * 10);
    } else {
      // Pravá polovica: 2024-2034
      const futureProgress = (sliderValue - 50) / 50;
      yearIndex = 11 + Math.floor(futureProgress * 10);
    }
    
    // Zabezpečíme, že neprekročíme dostupné roky
    yearIndex = Math.min(yearIndex, YEARS.length - 1);
    
    return YEARS[yearIndex];
  };

  const currentYear = getCurrentYear();

  return (
    <div className="w-full py-8" style={{ backgroundColor: CONFIG.colors.background }}>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div 
            key="loading"
            className="w-full min-h-screen flex items-center justify-center"
            style={{ backgroundColor: CONFIG.colors.background }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-center">
              <motion.div 
                className="rounded-full h-16 w-16 border-4 border-white/30 border-t-white mx-auto mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <p className="text-white text-lg font-medium">Loading Deforestation Data</p>
            </div>
          </motion.div>
        ) : error ? (
          <motion.div 
            key="error"
            className="w-full min-h-screen flex items-center justify-center px-4"
            style={{ backgroundColor: CONFIG.colors.background }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-center p-8 rounded-lg border border-red-500/30 bg-red-500/10">
              <p className="text-red-200 text-lg mb-4">Error Loading Data</p>
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start xl:items-center">
              <motion.div 
                className="space-y-4 sm:space-y-6 order-2 xl:order-1"
                variants={itemVariants}
              >
                <MAP processedPoints={processedPoints} />
                
                <div className="px-2 sm:px-0">
                  <Slider 
                    sliderValue={sliderValue}
                    currentYear={currentYear}
                    onSliderChange={handleSliderChange}
                  />
                </div>
              </motion.div>

              <motion.div 
                className="order-1 xl:order-2"
                variants={itemVariants}
              >
                <ContentPanel currentYear={currentYear} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BrazilDeforestationWidget;