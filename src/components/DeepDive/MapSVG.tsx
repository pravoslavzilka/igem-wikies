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
    colors: { mapFill },
    animation: { staggerDelay, duration, springStiffness },
    layout: { svgViewBox }
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
        const response = await fetch('/WorldMap.svg');
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
    </div>
  );
};

export default MapSVG;