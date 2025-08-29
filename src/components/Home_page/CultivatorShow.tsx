const CultivatorShow = () => {
    return (
    <div className="bg-white p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Top image placeholder */}
        <div className="w-full h-64 sm:h-96 md:h-[32rem] bg-gray-200 rounded-lg flex items-center justify-center mb-12">
          <img src="https://static.igem.wiki/teams/5642/images/homepage/cultivator-min.webp" alt="Lab Image" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Bottom section with content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Main content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              ...and equipping it with systems for effortless cultivation at any scale.
            </h1>
            
            <div className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              <p>
                Our in-house made autonomous cultivation unit can grow, monitor, and harvest duckweed with maximum efficiency and minimum user work - saving hours per day for any scientist looking to scale up their duckweed experiments.
              </p>
            </div>

            <div className="pt-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200" style={{ fontFamily: 'Urbanist, sans-serif', backgroundColor: '#22531C' }}>
                See how cultivator works
              </button>
            </div>
          </div>

          {/* Divider and Right side - Feature highlights */}
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
            {/* Vertical divider */}
            <div className="hidden lg:block border-l border-gray-300 mx-6"></div>
            {/* Feature highlights: stack vertically on mobile, horizontally on desktop */}
            <div className="flex flex-col lg:flex-row items-center justify-center w-full space-y-8 lg:space-y-0 lg:space-x-12" style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: '140%' }}>
              {/* Feature 1 */}
              <div className="text-center flex-1">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="font-semibold text-gray-800 text-sm mb-1">Saves 2 hours per</div>
                <div className="font-semibold text-gray-800 text-sm mb-1">m² of duckweed</div>
                <div className="font-semibold text-gray-800 text-sm">per week.</div>
              </div>
              {/* Feature 2 */}
              <div className="text-center flex-1">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="font-semibold text-gray-800 text-sm mb-1">Enables 5 parallel</div>
                <div className="font-semibold text-gray-800 text-sm">experiments</div>
              </div>
              {/* Feature 3 */}
              <div className="text-center flex-1">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="font-semibold text-gray-800 text-sm mb-1">Secures maximum</div>
                <div className="font-semibold text-gray-800 text-sm">yield</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default  CultivatorShow;

