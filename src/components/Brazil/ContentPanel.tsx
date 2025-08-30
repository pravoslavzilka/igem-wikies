import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence, Easing, Variants } from 'framer-motion';
import "@fontsource/space-grotesk";
import "@fontsource/space-grotesk/700.css";

interface ContentPanelProps {
  timelinePosition: number;
}

interface DynamicContent {
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

const ContentPanel: React.FC<ContentPanelProps> = ({ timelinePosition }) => {
  const [displayContent, setDisplayContent] = useState<DynamicContent | null>(null);
  const [contentKey, setContentKey] = useState(0);

  // Dynamic content based on slider position - updated for new logic
  const getDynamicContent = useMemo((): DynamicContent => {
    if (timelinePosition <= 25) {
      // PAST: Pristine state
      return {
        tagline: "PRISTINE PERIOD",
        headline: "Brazil's forests in their natural state.",
        quote: "The Amazon rainforest existed in perfect balance, with pristine ecosystems covering vast areas of Brazil.",
        author: "Dr. Elena Rodriguez",
        title: "Forest Ecology Specialist"
      };
    } else if (timelinePosition <= 60) {
      // PRESENT: Deforestation phase - areas disappearing
      return {
        tagline: "DEFORESTATION CRISIS",
        headline: "Forest areas are vanishing rapidly.",
        quote: "We're witnessing unprecedented rates of forest loss as ecosystems disappear from the landscape entirely.",
        author: "Prof. Marcus Silva",
        title: "Deforestation Research Lead"
      };
    } else {
      // FUTURE: Recovery through duckweed solution - green areas appearing
      return {
        tagline: "DUCKWEED REVOLUTION",
        headline: "Lost forests are being reborn green.",
        quote: "Our innovative duckweed technology is bringing life back to areas that were completely lost, creating thriving green ecosystems.",
        author: "Dr. Helena Santos",
        title: "Ecological Recovery Pioneer"
      };
    }
  }, [timelinePosition]);

  // Handle content transitions
  useEffect(() => {
    const newContent = getDynamicContent;
    
    if (!displayContent) {
      setDisplayContent(newContent);
      return;
    }

    const contentChanged = JSON.stringify(displayContent) !== JSON.stringify(newContent);
    
    if (contentChanged) {
      // Trigger content change animation
      setContentKey(prev => prev + 1);
      setDisplayContent(newContent);
    }
  }, [getDynamicContent, displayContent]);

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
            {/* Tagline */}
            <motion.div 
              className="text-2xl sm:text-2xl font-medium tracking-wider mb-3 sm:mb-4 center" 
              style={{ color: CONFIG.colors.accent, fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, letterSpacing: "4px", textAlign: 'center', }}
              variants={taglineVariants}
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 0px rgba(116, 198, 157, 0)",
                    "0 0 8px rgba(116, 198, 157, 0.3)",
                    "0 0 0px rgba(116, 198, 157, 0)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {displayContent.tagline}
              </motion.span>
            </motion.div>
            
            <motion.h1 
              className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl font-light leading-tight text-white mb-6 sm:mb-8"
              variants={headlineVariants} style={{marginTop:'40px', textAlign: 'center', fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, letterSpacing: "0px"}}
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