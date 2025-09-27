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
  imageUrl?: string;
}

const CONFIG = {
  colors: {
    accent: '#9DD019'
  }
};

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

  const getYearContent = useMemo((): ContentData => {
    if (currentYear <= 2017) {
      return {
        tagline: "SOYBEAN",
        headline: "is the most important source of protein for livestock worldwide",
        quote: "66% of the protein feedstock our farmers are dependent on is imported",
        author: "Recent Trends for Enhancing the Diversity",
        title: "and Quality of Soybean Products",
        imageUrl: "/images/authors/Book.jpg"
      };
    } else if (currentYear <= 2020) {
      return {
        tagline: "70%",
        headline: "of soybean production is used as feedstock",
        quote: "40% of the global production is concentrated in Brazil",
        author: "Foreign Agricultural Service",
        title: "U.S. Department of Agriculture",
        imageUrl: "/images/authors/Book.jpg"
      };
    } else if (currentYear <= 2023) {
      return {
        tagline: "15 MILLIONS",
        headline: "hectares of Brazil's tropical savannas of Cerrado is lost",
        quote: "Since 2000, those savannas have been converted into soybean fields",
        author: "The expansion of soybean production",
        title: "in the Cerrado",
        imageUrl: "/images/authors/Book.jpg"
      };
    } else if (currentYear <= 2027) {
      return {
        tagline: "AGRIBUSINESSES",
        headline: "rely on ecosystem services like abundant water and healthy soils",
        quote: "but continuing past practices will severely damage these foundations of their success",
        author: "Prof. Carlos Klink",
        title: "Department of Ecology University of Brasília",
        imageUrl: "/images/authors/carlos_klink.jpeg"
      };
    } else if (currentYear <= 2030) {
      return {
        tagline: "NEW",
        headline: "business model is emerging as stakeholders of Cerrado work",
        quote: "to boost environmental sustainability through better practices and new technologies",
        author: "Prof. Carlos Klink",
        title: "Department of Ecology University of Brasília",
        imageUrl: "/images/authors/carlos_klink.jpeg"
      };
    } else {
      return {
        tagline: "IF SUCCESSFUL",
        headline: "Brazil could double farm output while safeguarding natural resources",
        quote: "technologies like those from iGEM Brno could play a vital role in future",
        author: "Prof. Carlos Klink",
        title: "Department of Ecology University of Brasília",
        imageUrl: "/images/authors/carlos_klink.jpeg"
      };
    }
  }, [currentYear]);

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
    return <div className="text-left space-y-4 h-48"></div>;
  }

  return (
    <div className="text-left space-y-3 sm:space-y-4 md:space-y-5 px-2 sm:px-0">
      <AnimatePresence mode="wait">
        <motion.div 
          key={contentKey}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="mb-2 sm:mb-3 md:mb-4">
            <motion.div 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider mb-2 sm:mb-3 md:mb-4" 
              style={{ 
                color: CONFIG.colors.accent, 
                fontFamily: "Space Grotesk, sans-serif", 
                fontWeight: 900, 
                letterSpacing: "2px",
                textAlign: 'center'
              }}
              variants={taglineVariants}
            >
              <div className="inline-block relative">
                <span className="text-6xl sm:text-8xl text-white/20 font-serif absolute right-full top-0 -mt-2 sm:-mt-4 mr-1 sm:mr-2">
                  “
                </span>
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
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-white mb-3 sm:mb-4"
              variants={headlineVariants} 
              style={{
                marginTop:'15px', 
                textAlign: 'center', 
                fontFamily: "Space Grotesk, sans-serif", 
                fontWeight: 500
              }}
            >
              {displayContent.headline}
            </motion.h1>
          </div>
          
          <motion.div variants={childVariants} className="text-center">
            <motion.div 
              className="text-sm sm:text-base md:text-lg text-white mb-3 sm:mb-4 leading-relaxed relative inline-block"
              variants={quoteVariants}
            >
              <div className="px-6 sm:px-8">
                {displayContent.quote}
              </div>
              <span className="text-3xl sm:text-4xl text-white/20 font-serif absolute left-full -translate-x-full top-1/2 -translate-y-1/2 ml-1 sm:ml-2">
                ”
              </span>
            </motion.div>

            <motion.div 
              className="border-t border-white/20 my-3 sm:my-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
                  
            <motion.div 
              className="flex items-center justify-start space-x-2 sm:space-x-3"
              variants={authorVariants}
            >
              <motion.div 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0 overflow-hidden"
                whileHover={{ scale: 1.1 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(156, 163, 175, 0)",
                    "0 0 0 4px rgba(156, 163, 175, 0.1)",
                    "0 0 0 0 rgba(156, 163, 175, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {displayContent.imageUrl ? (
                  <img 
                    src={displayContent.imageUrl} 
                    alt={displayContent.author} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const sibling = e.currentTarget.nextElementSibling;
                      if (sibling) {
                        (sibling as HTMLElement).style.display = 'block';
                      }
                    }}
                  />
                ) : null}
                <div className="w-full h-full rounded-full bg-gray-400" style={{display: displayContent.imageUrl ? 'none' : 'block'}} />
              </motion.div>
              
              <div className="min-w-0 text-left">
                <motion.div 
                  className="font-medium text-white text-xs sm:text-sm"
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
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ContentPanel;