


const ToolboxShow = () => {
    return (
    <div className="bg-gray-50 p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
            We've developed the Duckweed Toolbox -<br />
            the first step in turning duckweed into a crop.
          </h1>
          <p className="text-lg text-gray-600">Here's our next move:</p>
        </div>

        {/* Steps timeline */}
        <div className="mb-16">
          {/* Timeline line with circles */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 border-2 border-green-500 rounded-full flex items-center justify-center text-green-700 font-bold text-lg">
                  1
                </div>
              </div>
              
              {/* Dotted line */}
              <div className="flex-1 border-t-2 border-dotted border-gray-300 w-32"></div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 border-2 border-green-500 rounded-full flex items-center justify-center text-green-700 font-bold text-lg">
                  2
                </div>
              </div>
              
              {/* Dotted line */}
              <div className="flex-1 border-t-2 border-dotted border-gray-300 w-32"></div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 border-2 border-green-500 rounded-full flex items-center justify-center text-green-700 font-bold text-lg">
                  3
                </div>
              </div>
              
              {/* Dotted line */}
              <div className="flex-1 border-t-2 border-dotted border-gray-300 w-32"></div>
              
              {/* Step 4 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 border-2 border-green-500 rounded-full flex items-center justify-center text-green-700 font-bold text-lg">
                  4
                </div>
              </div>
            </div>
          </div>

          {/* Step descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {/* Step 1 description */}
            <div className="space-y-2">
              <p className="text-sm text-gray-700 leading-tight">
                Using TALEN, we will introduce optimized nitrogen-cycle related genes into duckweed, driven by our native duckweed promoters.
              </p>
            </div>

            {/* Step 2 description */}
            <div className="space-y-2">
              <p className="text-sm text-gray-700 leading-tight">
                Using pBOOS, we will knock out thiamine monophosphate synthase (TMP) to prevent its release into the environment.
              </p>
            </div>

            {/* Step 3 description */}
            <div className="space-y-2">
              <p className="text-sm text-gray-700 leading-tight">
                It will convert ammonium in manure into protein-rich biomass, fed back to cows directly on the farm – no unsustainable and pricey soybeans required.
              </p>
            </div>

            {/* Step 4 description */}
            <div className="space-y-2">
              <p className="text-sm text-gray-700 leading-tight">
                Our "Nitroduckweed" will grow predictably and autonomously in our cultivator, fed with manure and thiamine.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom image placeholder */}
        <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-300 rounded mx-auto mb-2 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-500 text-sm">Farm/Cow Image Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ToolboxShow;