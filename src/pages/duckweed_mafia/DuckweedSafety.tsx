import React from 'react';

const DuckweedSafety = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Main Title */}
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
        Safety
      </h1>
      
      {/* Safety Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
          Duckweed Safety and Containment
        </h2>
        
        <div className="space-y-4 text-gray-700 leading-relaxed" style={{fontFamily: 'Urbanist, sans-serif'}}>
          <p>
            Duckweed is known for its extremely fast growth rate and, some species, have 
            been even recognized as invasive, causing damage to freshwater ecosystems (1). 
            Aware of this risk, we treated duckweed in our project with a very high level of 
            caution.
          </p>
          
          <p>
            To minimize any chance of accidental release, all experiments were performed 
            only in contained environments – either in the phytotron or greenhouse facilities 
            of Masaryk University. We used dedicated tools (sieves, pipettes, containers) 
            exclusively for duckweed handling. After each experiment, all plant material was 
            collected and autoclaved before disposal.
          </p>
          
          <p>
            We engaged with Prof. Andrew D. Hanson about strategies for long-term biosafety 
            and identified autotrophy as the most feasible safeguard. Among possible targets 
            for a knock-out, the THI4 gene stood out as the best option due to the low cost of 
            its substrate, thiamine. As a result, duckweed that is not supplemented with 
            thiamine would be unable to survive outside of controlled cultivation systems.
          </p>
        </div>
      </div>
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Top Row - Single Large Image */}
        <div className="md:col-span-2">
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm">Laboratory Environment Image</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Left - Video Placeholder */}
        <div>
          <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center relative">
            <div className="text-center text-white">
              <div className="w-12 h-12 mx-auto mb-2 bg-gray-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-sm">Video Content</p>
            </div>
            {/* Video Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-lg">
              <div className="flex items-center justify-between text-white text-xs">
                <span>0:00</span>
                <div className="flex-1 mx-2 h-1 bg-gray-600 rounded">
                  <div className="h-1 bg-red-500 rounded w-1/4"></div>
                </div>
                <span>2:30</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Right - Team Photo */}
        <div>
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-sm">Team Photo</p>
              <p className="text-xs text-gray-400 mt-1">Research Team</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Reference */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500" style={{fontFamily: 'Urbanist, sans-serif'}}>
          (1) Reference citation placeholder
        </p>
      </div>
    </div>
  );
};

export default DuckweedSafety;