const ToolboxShow = () => {
    return (
    <div className=" p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: '140%' }}>
            We've developed the Duckweed Toolbox -<br />
            the first step in turning duckweed into a crop.
          </h1>
          <p className="text-lg text-gray-600" style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: '140%' }}>Here's our next move:</p>
        </div>

        {/* Steps timeline */}
        <div className="mb-16">
          {/* Timeline line with circles */}
          <div className="relative mb-8">
            {/* Dotted lines between circles */}
            <div className="absolute top-1/2 left-0 w-full h-0 pointer-events-none z-0" style={{ transform: 'translateY(-50%)' }}>
              {/* 1st line */}
              <div className="absolute left-[10%] w-[25%] border-t-2 border-dotted border-green-300"></div>
              <div className="absolute left-[35%] top-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
              </div>
              {/* 2nd line */}
              <div className="absolute left-[38%] w-[25%] border-t-2 border-dotted border-green-300"></div>
              <div className="absolute left-[63%] top-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              </div>
              {/* 3rd line */}
              <div className="absolute left-[64.5%] w-[25%] border-t-2 border-dotted border-green-300"></div>
              <div className="absolute left-[89%] top-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-x-16 items-center justify-center relative z-10" style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: '140%' }}>
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-white border-2 border-green-500 rounded-full flex items-center justify-center  font-bold text-lg">
                  1
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-white  border-2 border-green-500 rounded-full flex items-center justify-center  font-bold text-lg">
                  2
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-white border-2 border-green-500 rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14  bg-white border-2 border-green-500 rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
              </div>
            </div>
          </div>

          {/* Step descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-16 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: '140%' }}>
            {/* Step 1 description */}
            <div className="space-y-2">
              <p className="text-sm  leading-tight">
                Using TAIFR, we will introduce optimized nitrogen-cycle related genes into duckweed, driven by our native duckweed promoters.
              </p>
            </div>

            {/* Step 2 description */}
            <div className="space-y-2">
              <p className="text-sm  leading-tight">
                Using pIB005, we will knock out thiamine monophosphate synthase (TH1) to prevent its release into the environment.
              </p>
            </div>

            {/* Step 3 description */}
            <div className="space-y-2">
              <p className="text-sm  leading-tight">
                It will convert ammonium in manure into protein-rich biomass, fed back to cows directly on the farm - no unsustainable and pricey soybeans required.
              </p>
            </div>

            {/* Step 4 description */}
            <div className="space-y-2">
              <p className="text-sm leading-tight">
                Our “Nitroduckweed” will grow predictably and autonomously in our cultivator, fed with manure and thiamine.
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