const ToolboxShow = () => {
    return (
    <div className=" p-8 min-h-screen">
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
          <div className="relative mb-8">
            {/* Dotted lines between circles */}
            <div className="absolute top-1/2 left-0 w-full h-0 pointer-events-none z-0" style={{ transform: 'translateY(-50%)' }}>
              {/* 1st line */}
              <div className="absolute left-[14.5%] w-[19%] border-t-2 border-dotted border-gray-300"></div>
              {/* 2nd line */}
              <div className="absolute left-[39.5%] w-[19%] border-t-2 border-dotted border-gray-300"></div>
              {/* 3rd line */}
              <div className="absolute left-[64.5%] w-[19%] border-t-2 border-dotted border-gray-300"></div>
            </div>
            <div className="grid grid-cols-4 gap-x-16 items-center justify-center relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 border-2 border-green-500 rounded-full flex items-center justify-center text-green-700 font-bold text-lg">
                  1
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 border-2 border-green-500 rounded-full flex items-center justify-center text-green-700 font-bold text-lg">
                  2
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 border-2 border-green-500 rounded-full flex items-center justify-center text-green-700 font-bold text-lg">
                  3
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 border-2 border-green-500 rounded-full flex items-center justify-center text-green-700 font-bold text-lg">
                  4
                </div>
              </div>
            </div>
          </div>

          {/* Step descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-16 text-center">
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
          <img src="https://static.igem.wiki/teams/5642/images/homepage/nitroduck.webp" alt="Farm/Cow" className="w-full h-full object-cover rounded-lg" />
      </div>
      </div>
    </div>
  );
}


export default ToolboxShow;