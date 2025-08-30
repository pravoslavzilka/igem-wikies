import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DuckweedLeafProps } from './types';
import { MAP_CONFIG } from './config';

interface ExtendedDuckweedLeafProps extends DuckweedLeafProps {
  id: string;
  isHovered: boolean;
  debouncedHoveredLeafId: string | null;
  setHoveredLeafId: (id: string | null) => void;
}

const DuckweedLeaf: React.FC<ExtendedDuckweedLeafProps> = ({ x, y, type, name, id, isHovered, debouncedHoveredLeafId, setHoveredLeafId }) => {
  const {
    leaf: { images, size, hoverScale, hoverRotation, glowRadius, shadowFilter },
    colors: { company, research, white },
    animation: { hoverDuration },
    tooltip: { padding, offset, fontSize, fontWeight, borderRadius, opacity }
  } = MAP_CONFIG;
  
  const leafImage = images[type];
  const leafColor = type === 'company' ? company : research;

  // Only reduce opacity of non-hovered leaves when another leaf is hovered
  const isOtherLeafHovered = !isHovered && debouncedHoveredLeafId !== null;

  // Calculate tooltip position based on leaf size and scale
  const tooltipOffset = size * (isHovered ? hoverScale : 1) / 2 + offset;

  return (
    <g transform={`translate(${x}, ${y})`} style={{ zIndex: isHovered ? 10 : 1 }}>
      {isHovered && (
        <motion.circle
          r={size * glowRadius}
          fill={leafColor}
          opacity={MAP_CONFIG.colors.glowOpacity}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: hoverDuration }}
        />
      )}
      
      <motion.g
        animate={{
          scale: isHovered ? hoverScale : 1,
          rotate: isHovered ? hoverRotation : 0,
          opacity: isOtherLeafHovered ? 0.3 : 1 // Reduce opacity only when another leaf is hovered
        }}
        transition={{ duration: hoverDuration }}
        onMouseEnter={() => setHoveredLeafId(id)}
        onMouseLeave={() => setHoveredLeafId(null)}
        style={{ cursor: 'pointer' }}
      >
        <image
          href={leafImage}
          x={-size / 2}
          y={-size / 2}
          width={size}
          height={size}
          style={{
            filter: isHovered ? shadowFilter : 'none'
          }}
        />
      </motion.g>
      
      <AnimatePresence>
        {isHovered && (
          <motion.g
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: -tooltipOffset }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: MAP_CONFIG.animation.tooltipDuration }}
            style={{ zIndex: 10, pointerEvents: 'none' }}
          >
            <rect
              x={-name.length * padding.horizontal / 2}
              y={-padding.vertical * 2.5}
              width={name.length * padding.horizontal}
              height={padding.vertical * 2}
              fill={MAP_CONFIG.colors.tooltipBackground}
              rx={borderRadius}
              opacity={opacity}
            />
            <text
              textAnchor="middle"
              y={-padding.vertical / 2}
              fill={white}
              fontSize={fontSize}
              fontFamily={MAP_CONFIG.typography.fontFamily}
              fontWeight={fontWeight}
            >
              {name}
            </text>
          </motion.g>
        )}
      </AnimatePresence>
    </g>
  );
};

export default DuckweedLeaf;