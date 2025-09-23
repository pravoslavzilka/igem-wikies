import React, { useState } from 'react';
import "@fontsource/space-grotesk";

const ProjectWhy = () => {
  const [activeToggle, setActiveToggle] = useState('recombinant');
  const [activeStatusToggle, setActiveStatusToggle] = useState('food');

  const toggleData = {
    recombinant: {
      title: 'Recombinant Proteins Factory',
      content: 'Duckweed can be engineered to produce valuable recombinant proteins efficiently, making it an ideal biofactory for pharmaceutical and industrial applications.',
      imageType: 'factory'
    },
    monocot: {
      title: 'Plant Monocot Model Organism', 
      content: 'As a simple aquatic plant, duckweed serves as an excellent model organism for studying plant biology, genetics, and biotechnology applications.',
      imageType: 'microscope'
    }
  };

  const statusData = {
    food: {
      title: 'Food',
      content: 'Early efforts are already underway. Startups like GreenCrop.D, and SunCorp Corp B, having FDA and EuropeanFDA EU) are promising duckweed cultivation for human use. With superior vegan greens and proteins that have eggs like properties, duckweed-based foods are slowly making their way into gastronomic. Some duckweed are approved for human consumption - recognized as GRAS in the USA and authorized as a novel food in the EU for use in protein-rich food products.',
      imageType: 'books'
    },
    phytoremediation: {
      title: 'Phytoremediation',
      content: 'Duckweed shows exceptional ability to remove pollutants from water systems, making it valuable for environmental cleanup and water treatment applications.',
      imageType: 'books'
    },
    biomanufacturing: {
      title: 'Biomanufacturing',
      content: 'Advanced biomanufacturing processes using duckweed are being developed for producing high-value compounds and materials at industrial scale.',
      imageType: 'books'
    },
    basicresearch: {
      title: 'Basic Research',
      content: 'Fundamental research continues to unlock new potential applications and optimize duckweed cultivation techniques for various industrial uses.',
      imageType: 'books'
    }
  };

  const renderImage = (imageType) => {
    if (imageType === 'factory') {
      return (
        <div className="relative h-full bg-gradient-to-b from-blue-100 to-blue-200 rounded-lg overflow-hidden">
          <div className="absolute inset-0 p-6">
            {/* Factory/Industrial visualization */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-12 bg-gray-600 rounded-t-lg relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
      </div>

      {/* Bottom Section - Current Status */}
      <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
        {/* Left Content - Stacked Books Image */}
        <div className="md:col-span-1">
          <div className="bg-gray-100 rounded-lg p-6 h-80">
            <div className="relative h-full">
              {/* Stack of books representation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="space-y-1">
                  <div className="w-24 h-8 bg-gray-400 rounded-sm shadow-md transform rotate-1"></div>
                  <div className="w-24 h-8 bg-gray-500 rounded-sm shadow-md transform -rotate-1"></div>
                  <div className="w-24 h-8 bg-gray-600 rounded-sm shadow-md transform rotate-0.5"></div>
                  <div className="w-24 h-8 bg-gray-700 rounded-sm shadow-md"></div>
                </div>
              </div>
              {/* Wood grain texture background */}
              <div className="absolute bottom-0 w-full h-12 bg-gradient-to-r from-amber-100 to-amber-200 rounded-b-lg opacity-80"></div>
            </div>
          </div>
        </div>

        {/* Right Content - Status Questions */}
        <div className="md:col-span-2">
          <p className="text-gray-600 text-sm mb-6" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            But what is a current status quo of duckweed application?
          </p>

          <div className="space-y-3">
            {/* Food Section - Always Expanded */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setActiveStatusToggle(activeStatusToggle === 'food' ? null : 'food')}
                className={`w-full flex items-center justify-between p-4 text-left transition-colors duration-200 ${
                  activeStatusToggle === 'food' ? 'bg-green-50 border-l-4 border-l-green-500' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-3 h-3 mr-4 ${
                    activeStatusToggle === 'food' ? 'bg-green-500' : 'bg-gray-400'
                  }`}></div>
                  <h3 className="font-semibold text-gray-900 text-lg" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                    {statusData.food.title}
                  </h3>
                </div>
              </button>
              
              {activeStatusToggle === 'food' && (
                <div className="px-4 pb-4 bg-green-50 border-t border-green-100">
                  <p className="text-gray-700 leading-relaxed pt-3 text-sm" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                    {statusData.food.content}
                  </p>
                </div>
              )}
            </div>

            {/* Other Status Items */}
            {[
              { key: 'phytoremediation', label: 'Phytoremediation' },
              { key: 'biomanufacturing', label: 'Biomanufacturing' },
              { key: 'basicresearch', label: 'Basic Research' }
            ].map(({ key, label }) => (
              <div key={key} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setActiveStatusToggle(activeStatusToggle === key ? null : key)}
                  className={`w-full flex items-center justify-between p-4 text-left transition-colors duration-200 ${
                    activeStatusToggle === key ? 'bg-green-50 border-l-4 border-l-green-500' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-1 h-1 mr-4 rounded-full ${
                      activeStatusToggle === key ? 'bg-green-500' : 'bg-gray-400'
                    }`}></div>
                    <h3 className="font-medium text-gray-900" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                      {label}
                    </h3>
                  </div>
                  <div className={`transform transition-transform duration-200 ${
                    activeStatusToggle === key ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>
                
                {activeStatusToggle === key && (
                  <div className="px-4 pb-4 bg-green-50 border-t border-green-100">
                    <p className="text-gray-700 leading-relaxed pt-3 text-sm" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                      {statusData[key].content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-8 bg-blue-300 rounded"></div>
                <div className="h-8 bg-blue-400 rounded"></div>
                <div className="h-8 bg-blue-300 rounded"></div>
              </div>
              <div className="flex justify-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="relative h-full bg-gradient-to-b from-purple-100 to-purple-200 rounded-lg overflow-hidden">
          <div className="absolute inset-0 p-6">
            {/* Microscope/Research visualization */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-20 h-16 bg-gray-700 rounded-lg relative">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-500 rounded"></div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gray-600 rounded-full"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-6 bg-purple-300 rounded-full"></div>
                <div className="h-6 bg-purple-400 rounded-full"></div>
              </div>
              <div className="flex justify-center">
                <div className="w-16 h-2 bg-purple-500 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header Section */}
      <div className="mb-8">
        <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          Why
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>
          Forgetting Arabidopsis or soybean and bracing ourselves for duckweed!
        </h1>
        <p className="text-gray-600 text-lg" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          The smallest flowering plant on earth makes its debut as the next exciting new model crop!
        </p>
      </div>

      {/* Duckweed Image */}
      <div className="mb-12">
        <div className="w-full h-64 bg-gradient-to-br from-lime-400 via-green-400 to-emerald-500 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-green-400 opacity-90"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-repeat opacity-80" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='2' fill='%23065f46' opacity='0.3'/%3E%3Ccircle cx='5' cy='5' r='1.5' fill='%23047857' opacity='0.4'/%3E%3Ccircle cx='15' cy='15' r='1.5' fill='%23047857' opacity='0.4'/%3E%3Ccircle cx='15' cy='5' r='1' fill='%23059669' opacity='0.5'/%3E%3Ccircle cx='5' cy='15' r='1' fill='%23059669' opacity='0.5'/%3E%3C/svg%3E")`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="md:col-span-2">
          {/* Novel Protein Crop Section */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-500 mr-3"></div>
              <h2 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                Novel Protein Crop
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Duckweeds, especially Wolffia globosa, have been used traditionally as food in Southeast Asia and are now gaining interest globally for their nutritional potential. With its rapid protein as soybeans, full amino acid profile, and a biomass doubling time as fast as 16-48 hours, duckweed could be a novel source of protein for animal feed or even human consumption.
            </p>
            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Recent analyses show that certain strains and traits will likely be crucial for optimizing duckweed as a sustainable, low-cost protein source. Cultivating duckweed to also scale for commercial production will be crucial because biomass use is likely strongly connected to premium per-food and nutritional foods.
            </p>
          </div>

          {/* Phytoremediation Chassis Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Space Grotesk, monospace' }}>
              Phytoremediation Chassis
            </h2>
            
            <div className="space-y-3">
              {Object.entries(toggleData).map(([key, data]) => (
                <div key={key} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setActiveToggle(activeToggle === key ? null : key)}
                    className={`w-full flex items-center justify-between p-4 text-left transition-colors duration-200 ${
                      activeToggle === key ? 'bg-green-50 border-l-4 border-l-green-500' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-2 h-2 mr-4 rounded-full transition-colors duration-200 ${
                        activeToggle === key ? 'bg-green-500' : 'bg-gray-400'
                      }`}></div>
                      <h3 className="font-medium text-gray-900" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                        {data.title}
                      </h3>
                    </div>
                    <div className={`transform transition-transform duration-200 ${
                      activeToggle === key ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {activeToggle === key && (
                    <div className="px-4 pb-4 bg-green-50 border-t border-green-100">
                      <p className="text-gray-700 leading-relaxed pt-3" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                        {data.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Dynamic Image */}
        <div className="md:col-span-1">
          <div className="bg-gray-100 rounded-lg p-6 h-80">
            {activeToggle ? renderImage(toggleData[activeToggle].imageType) : (
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                    Select a topic to view related content
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectWhy;