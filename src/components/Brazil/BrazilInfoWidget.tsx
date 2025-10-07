import React from 'react';

const BrazilInfoWidget: React.FC = () => {
  const redirectUrl = "https://trase.earth/explore/spatial-data/map?country=brazil&node_type_slug=state&indicatorName=SOY_DEFORESTATION_5_YEAR_TOTAL&indicatorYear=2013";

  const handleClick = () => {
    window.open(redirectUrl, '_blank');
  };

  return (
    <div className="px-2 sm:px-4 py-2">
      <div 
        className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
          }
        }}
      >
        {/* Icon container */}
        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0 overflow-hidden">
          <img 
            src="https://static.igem.wiki/teams/5642/images/homepage/brazil/book-white-bg.webp" 
            alt="Book icon" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text content */}
        <div className="text-white min-w-0">
          <p className="text-[11px] sm:text-xs font-medium leading-tight opacity-90">
            Trase, Impact indicators map:<br />
            <span className="font-normal">Soy deforestation in Brazil</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrazilInfoWidget;