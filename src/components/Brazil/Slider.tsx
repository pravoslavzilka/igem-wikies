import React from 'react';

interface SliderProps {
  sliderValue: number;
  currentYear: number;
  onSliderChange: (newValue: number) => void;
  isDisabled?: boolean;
}

const CONFIG = {
  colors: {
    accent: '#9DD019'
  }
};

const Slider: React.FC<SliderProps> = ({ 
  sliderValue, 
  currentYear, 
  onSliderChange, 
  isDisabled = false 
}) => {
  const numberOfTicks = 21;
  const ticks = Array.from({ length: numberOfTicks }, (_, i) => i * 5);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled) {
      onSliderChange(Number(e.target.value));
    }
  };

  return (
    <div className="w-full px-2 py-4">
      <div className="relative">
        {/* Invisible input for interaction (ak nie je disabled) */}
        {!isDisabled && (
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleInputChange}
            className="absolute inset-0 w-full h-8 opacity-0 z-10 cursor-pointer"
            style={{ top: '-4px' }}
          />
        )}
        
        {/* Visual slider */}
        <div className="relative pointer-events-none">
          <div className="flex justify-between items-end">
            {ticks.map((tickValue, index) => {
              const isActive = tickValue <= sliderValue;
              const isCenter = index === 10;
              const isFirstOrLast = index === 0 || index === numberOfTicks - 1;
              const tickOpacity = isDisabled ? 0.5 : 1;

              const sizeClass = isCenter
                ? 'h-6 w-1'
                : isFirstOrLast
                  ? 'h-4 w-0.5'
                  : 'h-3 w-px';
              
              return (
                <div
                  key={tickValue}
                  className={`transition-colors duration-300 ${sizeClass}`}
                  style={{ 
                    backgroundColor: isActive 
                      ? CONFIG.colors.accent 
                      : 'rgba(255, 255, 255, 0.3)',
                    opacity: tickOpacity
                  }}
                />
              );
            })}
          </div>
          
          {/* Slider handle */}
          <div
            className={`absolute bottom-0 transform -translate-x-1/2 w-3 h-6 rounded-sm shadow-lg ${
              isDisabled ? 'animate-pulse' : ''
            }`}
            style={{ 
              left: `${sliderValue}%`,
              backgroundColor: CONFIG.colors.accent,
              border: '1px solid rgba(255, 255, 255, 0.4)'
            }}
          />
        </div>
      </div>
      
      {/* Labels */}
      <div className={`flex justify-between text-white text-xs sm:text-sm mt-3 transition-opacity duration-300 ${
        isDisabled ? 'opacity-50' : 'opacity-75'
      }`}>
        <span>PAST</span>
        <span>NOW</span>
        <span>FUTURE</span>
      </div>
      
      {/* Current year display */}
      <div className="text-center mt-2">
        <span 
          className={`text-lg sm:text-xl font-bold transition-opacity duration-300 ${
            isDisabled ? 'opacity-70' : 'opacity-100'
          }`}
          style={{ color: CONFIG.colors.accent }}
        >
          {currentYear}
        </span>
      </div>
    </div>
  );
};

export default Slider;