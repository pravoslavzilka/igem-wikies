



const CultivatorShow = () => {
    return (
    <div className="bg-white p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Top image placeholder */}
        <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-300 rounded mx-auto mb-2 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-500 text-sm">Lab Image Placeholder</p>
          </div>
        </div>

        {/* Bottom section with content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left side - Main content (2 columns width) */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
              ...and equipping it with systems for effortless cultivation at any scale.
            </h1>
            
            <div className="text-lg text-gray-600 leading-relaxed">
              <p>
                Scientists and biotechnologists can grow and harvest duckweed with maximum efficiency and minimum effort – saving hours per day for any scientist looking to push forward their research.
              </p>
            </div>

            <div className="pt-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200">
                See how cultivator works
              </button>
            </div>
          </div>

          {/* Right side - Feature highlights */}
          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="font-semibold text-gray-800 text-sm mb-1">Saves 2 hours per</div>
              <div className="font-semibold text-gray-800 text-sm mb-1">m² of duckweed</div>
              <div className="font-semibold text-gray-800 text-sm">per week.</div>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="font-semibold text-gray-800 text-sm mb-1">Enables 5 parallel</div>
              <div className="font-semibold text-gray-800 text-sm">experiments</div>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  );
}





export default  CultivatorShow;

