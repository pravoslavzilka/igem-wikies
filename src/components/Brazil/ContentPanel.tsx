import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants, Easing } from 'framer-motion';
import "@fontsource/space-grotesk";
import "@fontsource/space-grotesk/700.css";

interface ContentPanelProps {
  currentYear: number;
}

interface ContentData {
  tagline: string;
  headline: string;
  quote: string;
  author: string;
  title: string;
}

const CONFIG = {
  colors: {
    accent: '#9DD019'
  }
};

// Animation variants
const contentVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as Easing,
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.4,
      ease: "easeIn" as Easing
    }
  }
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as Easing
    }
  }
};

const taglineVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as Easing
    }
  }
};

const headlineVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as Easing
    }
  }
};

const quoteVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as Easing,
      delay: 0.2
    }
  }
};

const authorVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as Easing,
      delay: 0.3
    }
  }
};

const ContentPanel: React.FC<ContentPanelProps> = ({ currentYear }) => {
  const [displayContent, setDisplayContent] = useState<ContentData | null>(null);
  const [contentKey, setContentKey] = useState(0);

  // Get content based on current year
  const getYearContent = useMemo((): ContentData => {
    if (currentYear <= 2016) {
      return {
        tagline: "SOYBEAN",
        headline: "is the most important source of protein for livestock worldwide",
        quote: "66% of the protein feedstock our farmers are dependent on is imported",
        author: "Recent Trends for Enhancing the Diversity",
        title: "and Quality of Soybean Products"
      };
    } else if (currentYear <= 2019) {
      return {
        tagline: "70%",
        headline: "of soybean production is used as feedstock",
        quote: "40% of the global production is concentrated in Brazil",
        author: "Foreign Agricultural Service",
        title: "U.S. Department of Agriculture"
      };
    } else if (currentYear <= 2022) {
      return {
        tagline: "15 MILLIONS",
        headline: "hectares of Brazil's tropical savannas of Cerrado is lost",
        quote: "Since 2000, those savannas have been converted into soybean fields",
        author: "The expansion of soybean production",
        title: "in the Cerrado"
      };
    } else {
      return {
        tagline: "TWO-THIRDS",
        headline: "of the endemic flora of the Cerrado is threatened with extinction",
        quote: "We can do better!",
        author: "Prof. Carlos Klink",
        title: "Department of Ecology University of Brasília"
      };
    }
  }, [currentYear]);

  // Handle content transitions
  useEffect(() => {
    const newContent = getYearContent;
    
    if (!displayContent) {
      setDisplayContent(newContent);
      return;
    }

    const contentChanged = JSON.stringify(displayContent) !== JSON.stringify(newContent);
    
    if (contentChanged) {
      setContentKey(prev => prev + 1);
      setDisplayContent(newContent);
    }
  }, [getYearContent, displayContent]);

  if (!displayContent) {
    return <div className="text-left space-y-6 sm:space-y-8 h-64"></div>;
  }

  return (
    <div className="text-left space-y-6 sm:space-y-8">
      <AnimatePresence mode="wait">
        <motion.div 
          key={contentKey}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="mb-4 sm:mb-6">
            {/* Tagline - OBROVSKE */}
            <motion.div 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl font-bold tracking-wider mb-6 sm:mb-8" 
              style={{ 
                color: CONFIG.colors.accent, 
                fontFamily: "Space Grotesk, sans-serif", 
                fontWeight: 900, 
                letterSpacing: "2px",
                textAlign: 'center'
              }}
              variants={taglineVariants}
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 0px rgba(157, 208, 25, 0)",
                    "0 0 15px rgba(157, 208, 25, 0.4)",
                    "0 0 0px rgba(157, 208, 25, 0)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {displayContent.tagline}
              </motion.span>
            </motion.div>
            
            <motion.h1 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl font-medium leading-relaxed text-white mb-6 sm:mb-8"
              variants={headlineVariants} 
              style={{
                marginTop:'20px', 
                textAlign: 'center', 
                fontFamily: "Space Grotesk, sans-serif", 
                fontWeight: 500
              }}
            >
              {displayContent.headline}
            </motion.h1>
          </div>
          
          <motion.div 
            className="border-t border-white/20 pt-6 sm:pt-8"
            variants={childVariants}
          >
            <div className="flex items-start space-x-3 sm:space-x-4">
              <motion.div 
                className="text-4xl sm:text-5xl md:text-6xl text-white/20 font-serif flex-shrink-0"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                "
              </motion.div>
              
              <div className="min-w-0 flex-1">
                <motion.p 
                  className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-white mb-3 sm:mb-4 leading-relaxed"
                  variants={quoteVariants}
                >
                  {displayContent.quote}
                </motion.p>
                
                <motion.div 
                  className="flex items-center space-x-3"
                  variants={authorVariants}
                >
                  <motion.div 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-400 flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(156, 163, 175, 0)",
                        "0 0 0 4px rgba(156, 163, 175, 0.1)",
                        "0 0 0 0 rgba(156, 163, 175, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  <div className="min-w-0">
                    <motion.div 
                      className="font-medium text-white text-sm sm:text-base"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {displayContent.author}
                    </motion.div>
                    <motion.div 
                      className="text-xs sm:text-sm text-white/70"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      transition={{ delay: 0.5 }}
                    >
                      {displayContent.title}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ContentPanel;