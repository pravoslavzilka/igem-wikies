import React from 'react';

const BrazilInfoWidget: React.FC = () => {
  // Placeholder URL - nahraďte skutočným linkom
  const redirectUrl = "https://trase.earth/explore/spatial-data/map?country=brazil&node_type_slug=state&indicatorName=SOY_DEFORESTATION_5_YEAR_TOTAL&indicatorYear=2013";

  const handleImageClick = () => {
    window.open(redirectUrl, '_blank');
  };

  return (
    <div className="px-0 sm:px-5" style={{ marginTop: '-20px' }}>
      <div className="flex items-center space-x-1.5">
        {/* Mini circular container with book icon */}
        <div 
          className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleImageClick}
        >
          <img 
            src="https://static.igem.wiki/teams/5642/images/homepage/brazil/book-white-bg.webp" 
            alt="Book icon" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Mini text content with two lines */}
        <div 
          className="text-white min-w-0 cursor-pointer hover:opacity-90 transition-opacity"
          onClick={handleImageClick}
        >
          <p className="text-[10px] font-medium leading-tight opacity-75">
            Trase, Impact indicators map:<br />
            <span className="font-normal">Soy deforestation in Brazil</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrazilInfoWidget;