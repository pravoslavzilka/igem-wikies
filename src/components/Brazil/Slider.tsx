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
    <div className="mt-8">
      <div className="relative px-2">
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleInputChange}
          disabled={isDisabled}
          className={`absolute inset-0 w-full h-8 opacity-0 z-10 ${
            isDisabled 
              ? 'cursor-not-allowed' 
              : 'cursor-pointer'
          }`}
          style={{ top: '-4px' }}
        />
        
        <div className="relative pointer-events-none">
          <div className="flex justify-between items-end">
            {ticks.map((tickValue, index) => {
              const isActive = tickValue <= sliderValue;
              const isCenter = index === 10;
              const isFirstOrLast = index === 0 || index === numberOfTicks - 1;
              const tickOpacity = isDisabled ? 0.5 : 1;
              
              return (
                <div
                  key={tickValue}
                  className={`transition-colors duration-300 ${ // transition je len na farbu, nie na všetko
                    isCenter 
                      ? (isActive ? 'h-6 w-1' : 'h-5 w-0.5')
                      : isFirstOrLast 
                        ? (isActive ? 'h-4 w-0.5' : 'h-3 w-px')
                        : (isActive ? 'h-3 w-px' : 'h-2 w-px')
                  }`}
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
          
          {/* OPRAVA: Zväčšený handle, odstránený "transition-all" a zmena opacity */}
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
      
      <div className={`flex justify-between text-white text-sm mt-4 transition-opacity duration-300 ${
        isDisabled ? 'opacity-50' : 'opacity-75'
      }`}>
        <span>PAST</span>
        <span>NOW</span>
        <span>FUTURE</span>
      </div>
      
      <div className="text-center mt-2">
        <span 
          className={`text-lg font-bold transition-opacity duration-300 ${
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