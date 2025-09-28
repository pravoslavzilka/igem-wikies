export const MAP_CONFIG = {
  colors: {
    background: '#FFFFFF',
    mapFill: '#2D3748',
    company: '#2D5A3D',
    research: '#9DD019',
    text: '#1A202C',
    textSecondary: '#718096',
    white: '#FFFFFF',
    tooltipBackground: '#1A202C',
    glowOpacity: 0.2
  },
  animation: {
    duration: 3, // Base animation duration
    staggerDelay: 0.15, //How much time to wait between each leaf
    hoverDuration: 0.2,
    tooltipDuration: 0.5, // Tooltip animation duration when hovered
    springStiffness: 200
  },
  leaf: {
    size: 25, // Leaf size in pixels
    hoverScale: 1.00, // Hover scale multiplier
    hoverRotation: 25, // Hover rotation in degrees
    glowRadius: 0.8, // Glow effect radius multiplier
    shadowFilter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
    images: {
      company: 'https://static.igem.wiki/teams/5642/images/toolbox/deepdiveonduckweed/leaf1.webp', // Company leaf image
      research: 'https://static.igem.wiki/teams/5642/images/toolbox/deepdiveonduckweed/leaf2.webp' // Research leaf image
    }
  },
  tooltip: {
    padding: {
      horizontal: 6, // Horizontal padding multiplier
      vertical: 8 // Vertical padding in pixels
    },
    offset: 10, // Distance from leaf
    fontSize: 10,
    fontWeight: '500',
    borderRadius: 4,
    opacity: 0.9
  },
  legend: {
    position: {
      bottom: '2rem',
      left: '2rem'
    },
    itemSize: 25, // Legend icon size
    minSize: 16, // Minimum legend icon size
    spacing: '1rem', // Space between legend items
    fontSize: 'text-base', // Tailwind text size class
    fontWeight: 'font-semibold'
  },
  layout: {
    maxWidth: '7xl', // max-w-7xl
    padding: {
      mobile: '1rem',
      tablet: '1.5rem',
      desktop: '2rem',
      large: '3rem'
    },
    svgViewBox: '0 0 1000 600', //BE CAREFULL HERE, IT WILL CHANGE POSITIONS OF THE DUCKWEED STUFF
    svgAspectRatio: '5/3'
  },
  typography: {
    fontFamily: 'Space Grotesk, sans-serif',
    heading: {
      mobile: 'text-3xl',
      tablet: 'text-4xl',
      desktop: 'text-5xl'
    }
  }
};