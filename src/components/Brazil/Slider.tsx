import React from 'react';

interface SliderProps {
  sliderValue: number;
  currentYear: number;
  onSliderChange: (newValue: number) => void;
}

const CONFIG = {
  colors: {
    accent: '#9DD019'
  }
};

const Slider: React.FC<SliderProps> = ({ sliderValue, currentYear, onSliderChange }) => {
  // Generovanie tick marks - 21 celkovo (po 5 na každú polovicu + 1 v strede)
  const numberOfTicks = 21;
  const ticks = Array.from({ length: numberOfTicks }, (_, i) => i * 5); // 0, 5, 10, ..., 95, 100

  return (
    <div className="mt-12">
      <div className="relative px-2">
        {/* Invisible input for interaction */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={(e) => onSliderChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-8 opacity-0 cursor-pointer z-10"
          style={{ top: '-4px' }}
        />
        
        {/* Container for ticks and handle */}
        <div className="relative pointer-events-none">
          {/* Tick marks */}
          <div className="flex justify-between items-end">
            {ticks.map((tickValue, index) => {
              const isActive = tickValue <= sliderValue;
              const isCenter = index === 10; // Stredový tick (50)
              const isFirstOrLast = index === 0 || index === numberOfTicks - 1;
              
              return (
                <div
                  key={tickValue}
                  className={`transition-all duration-300 ${
                    isCenter 
                      ? (isActive ? 'h-6 w-1' : 'h-5 w-0.5')
                      : isFirstOrLast 
                        ? (isActive ? 'h-4 w-0.5' : 'h-3 w-px')
                        : (isActive ? 'h-3 w-px' : 'h-2 w-px')
                  }`}
                  style={{ 
                    backgroundColor: isActive ? CONFIG.colors.accent : 'rgba(255, 255, 255, 0.3)'
                  }}
                />
              );
            })}
          </div>
          
          {/* Slider handle */}
          <div
            className="absolute bottom-0 transform -translate-x-1/2 w-2 h-5 rounded-sm shadow-md transition-all duration-200"
            style={{ 
              left: `${sliderValue}%`,
              backgroundColor: CONFIG.colors.accent,
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          />
        </div>
      </div>
      
      {/* Timeline labels */}
      <div className="flex justify-between text-white text-sm mt-4 opacity-75">
        <span>PAST</span>
        <span>NOW</span>
        <span>FUTURE</span>
      </div>
      
      {/* Current year display */}
      <div className="text-center mt-2">
        <span 
          className="text-lg font-bold"
          style={{ color: CONFIG.colors.accent }}
        >
          {currentYear}
        </span>
      </div>
    </div>
  );
};

export default Slider;