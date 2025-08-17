

const FeaturesWidget = () => {
  return (
    <div className="py-16 bg-white">
        
          
            <div className="flex flex-wrap justify-between items-start gap-8">
              
              {/* Feature 1 - Water Growth */}
              <div className="group flex-1 min-w-40 text-center cursor-pointer relative">
                <div className="mb-4">
                  <div className="w-12 h-12 mx-auto mb-3 text-green-500">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M12 2L8 12H16L12 2ZM12 4.5L14.5 10H9.5L12 4.5ZM8 14C6 14 4 16 4 18C4 20 6 22 8 22C10 22 12 20 12 18C12 16 10 14 8 14ZM16 14C14 14 12 16 12 18C12 20 14 22 16 22C18 22 20 20 20 18C20 16 18 14 16 14Z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Grows on water surface</h3>
                
                {/* Hover content */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                  <div className="bg-gray-800 text-white p-3 rounded-lg text-xs whitespace-nowrap">
                    Floats naturally on water
                  </div>
                  <div className="w-2 h-2 bg-gray-800 transform rotate-45 mx-auto -mt-1"></div>
                </div>
              </div>

              {/* Feature 2 - Smallest Plant */}
              <div className="group flex-1 min-w-40 text-center cursor-pointer relative">
                <div className="mb-4">
                  <div className="w-12 h-12 mx-auto mb-3 text-green-500">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">The smallest flowering plant</h3>
                
                {/* Hover content */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                  <div className="bg-gray-800 text-white p-3 rounded-lg text-xs whitespace-nowrap">
                    Some species just 0.5 mm
                  </div>
                  <div className="w-2 h-2 bg-gray-800 transform rotate-45 mx-auto -mt-1"></div>
                </div>
              </div>

              {/* Feature 3 - Fast Growing */}
              <div className="group flex-1 min-w-40 text-center cursor-pointer relative">
                <div className="mb-4">
                  <div className="w-12 h-12 mx-auto mb-3 text-green-500">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M2 2V4H4V6H6V8H8V10H10V12H8V14H6V16H4V18H2V20H4V22H6V20H8V18H10V16H12V14H14V12H16V10H18V8H20V6H22V4H20V2H18V4H16V6H14V8H12V10H10V12H12V10H14V8H16V6H18V4H20V2H22V4H20V6H18V8H16V10H14V12H12V14H10V16H8V18H6V20H4V22H2V20H4V18H6V16H8V14H10V12H8V10H6V8H4V6H2V4H4V2H2Z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">The fastest growing flowering plant</h3>
                
                {/* Hover content */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                  <div className="bg-gray-800 text-white p-3 rounded-lg text-xs whitespace-nowrap">
                    36-48 h biomass doubling time
                  </div>
                  <div className="w-2 h-2 bg-gray-800 transform rotate-45 mx-auto -mt-1"></div>
                </div>
              </div>

              {/* Feature 4 - High Protein */}
              <div className="group flex-1 min-w-40 text-center cursor-pointer relative">
                <div className="mb-4">
                  <div className="w-12 h-12 mx-auto mb-3 text-green-500">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4L13 5.27L11.24 7.03L8.15 5.14L7 6.27L10.09 8.16L12 6.45L18 9.05L19 10V12L12 15.5L5 12V10L6 9.05L12 12.5L21 9ZM12 17.5L5 14V16L12 19.5L19 16V14L12 17.5Z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">High protein content</h3>
                
                {/* Hover content */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                  <div className="bg-gray-800 text-white p-3 rounded-lg text-xs whitespace-nowrap">
                    20-45% of dry weight
                  </div>
                  <div className="w-2 h-2 bg-gray-800 transform rotate-45 mx-auto -mt-1"></div>
                </div>
              </div>

              {/* Feature 5 - High Nutrient */}
              <div className="group flex-1 min-w-40 text-center cursor-pointer relative">
                <div className="mb-4">
                  <div className="w-12 h-12 mx-auto mb-3 text-green-500">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M12 2L13.09 8.26L20 9L14 14L16.18 22L12 18.27L7.82 22L10 14L4 9L10.91 8.26L12 2ZM12 4.5L11.5 7.5L8.5 8L11 10.5L10.23 13.5L12 12.23L13.77 13.5L13 10.5L15.5 8L12.5 7.5L12 4.5Z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">High nutrient uptake</h3>
                
                {/* Hover content */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                  <div className="bg-gray-800 text-white p-3 rounded-lg text-xs whitespace-nowrap">
                    Best phytoremediation potential
                  </div>
                  <div className="w-2 h-2 bg-gray-800 transform rotate-45 mx-auto -mt-1"></div>
                </div>
              </div>

            </div>
          </div>
       
      
  );
}


export default FeaturesWidget;