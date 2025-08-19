import { CONFIG } from './BrazilDeforestationWidget';

interface SliderProps {
  timelinePosition: number;
  onSliderChange: (newPosition: number) => void;
}

const Slider = ({ timelinePosition, onSliderChange }: SliderProps) => {
  // Generate tick marks - more lines with longer end marks
  const numberOfTicks = 41; // Creates 40 intervals for more density
  const ticks = Array.from({ length: numberOfTicks }, (_, i) => i);

  return (
    <div className="mt-12">
      <div className="relative px-2">
        {/* Invisible input for interaction - positioned first for better z-index */}
        <input
          type="range"
          min="0"
          max="100"
          value={timelinePosition}
          onChange={(e) => onSliderChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-8 opacity-0 cursor-pointer z-10"
          style={{ top: '-4px' }} // Slightly expand the clickable area upward
        />
        
        {/* Container for both ticks and handle */}
        <div className="relative pointer-events-none">
          {/* Tick marks */}
          <div className="flex justify-between items-end">
            {ticks.map((tick, index) => {
              const isActive = (tick / (numberOfTicks - 1)) * 100 <= timelinePosition;
              const isFirstOrLast = index === 0 || index === numberOfTicks - 1;
              
              return (
                <div
                  key={tick}
                  className={`transition-all duration-300 ${
                    isFirstOrLast 
                      ? (isActive ? 'h-4 w-0.5' : 'h-3 w-px') // Longer but thinner lines for first and last
                      : (isActive ? 'h-3 w-px' : 'h-2 w-px') // Thinner lines for middle
                  }`}
                  style={{ 
                    backgroundColor: isActive ? CONFIG.colors.accent : 'rgba(255, 255, 255, 0.3)'
                  }}
                />
              );
            })}
          </div>
          
          {/* Slider handle positioned on top of the ticks */}
          <div
            className="absolute bottom-0 transform -translate-x-1/2 w-2 h-5 rounded-sm shadow-md transition-all duration-200"
            style={{ 
              left: `${timelinePosition}%`,
              backgroundColor: CONFIG.colors.accent,
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          />
        </div>
      </div>
      
      <div className="flex justify-between text-white text-sm mt-4 opacity-75">
        <span>before</span>
        <span>now</span>
        <span>future</span>
      </div>
    </div>
  );
};

export default Slider;