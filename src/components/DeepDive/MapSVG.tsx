import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WorldMapProps } from './types';
import { MAP_CONFIG } from './config';
import DuckweedLeaf from './DuckweedLeaf';


interface MapSVGProps extends WorldMapProps {
  isInView: boolean;
}

const MapSVG: React.FC<MapSVGProps> = ({ locations, isInView }) => {
  const [svgContent, setSvgContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [hoveredLeafId, setHoveredLeafId] = useState<string | null>(null);
  const [debouncedHoveredLeafId, setDebouncedHoveredLeafId] = useState<string | null>(null);

  const {
    colors: { mapFill, company, research },
    animation: { staggerDelay, duration, springStiffness },
    layout: { svgViewBox },
    legend: { position, itemSize, spacing, fontSize, fontWeight }
  } = MAP_CONFIG;

  // Debounce hover state
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedHoveredLeafId(hoveredLeafId);
    }, 100); // 100ms debounce delay
    return () => clearTimeout(timer);
  }, [hoveredLeafId]);

  useEffect(() => {
    const loadSVG = async () => {
      try {
        const response = await fetch('https://static.igem.wiki/teams/5642/images/toolbox/deepdiveonduckweed/worldmap.svg');
        const text = await response.text();
        setSvgContent(text);
      } catch (error) {
        console.error('Error loading SVG:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSVG();
  }, [mapFill]);

  if (loading) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full" style={{ padding: '60px 20px 20px 20px' }}>
      <svg
        viewBox={svgViewBox}
        className="w-full h-auto max-w-none"
        style={{ 
          aspectRatio: MAP_CONFIG.layout.svgAspectRatio,
          overflow: 'visible'
        }}
      >
        <g dangerouslySetInnerHTML={{ __html: svgContent }} />
        
        {locations.map((location, index) => (
          <motion.g
            key={location.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{
              delay: isInView ? index * staggerDelay : 0,
              duration: duration,
              type: "spring",
              stiffness: springStiffness
            }}
          >
            <DuckweedLeaf
              x={location.x}
              y={location.y}
              type={location.type}
              name={location.name}
              id={location.id}
              isHovered={debouncedHoveredLeafId === location.id}
              debouncedHoveredLeafId={debouncedHoveredLeafId}
              setHoveredLeafId={setHoveredLeafId}
            />
          </motion.g>
        ))}
      </svg>
      
      {/* Legend positioned absolutely over the map */}
      <div 
        className={`absolute ${fontSize} ${fontWeight}`}
        style={{
          bottom: position.bottom,
          left: position.left,
          fontFamily: MAP_CONFIG.typography.fontFamily
        }}
      >
        <div className="space-y-3">
          {/* Company legend item */}
          <div className="flex items-center" style={{ gap: spacing }}>
            <img 
              src="https://static.igem.wiki/teams/5642/images/toolbox/deepdiveonduckweed/leaf1.webp"
              alt="Company"
              style={{ 
                width: `${itemSize}px`, 
                height: `${itemSize}px` 
              }}
            />
            <span style={{ color: company }}>Companies</span>
          </div>
          
          {/* Research legend item */}
          <div className="flex items-center" style={{ gap: spacing }}>
            <img 
              src="https://static.igem.wiki/teams/5642/images/toolbox/deepdiveonduckweed/leaf2.webp"
              alt="Research"
              style={{ 
                width: `${itemSize}px`, 
                height: `${itemSize}px` 
              }}
            />
            <span style={{ color: research }}>Research</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSVG;