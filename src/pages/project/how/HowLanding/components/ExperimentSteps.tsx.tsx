import React from 'react';

const ExperimentSteps: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 lg:mb-16 text-center">
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[140%] text-gray-900"
            style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 600 }}
          >
            Experiment Steps for Goal 6
          </h1>
          <p 
            className="mt-4 text-sm sm:text-base lg:text-lg leading-[168%] text-gray-700 text-center max-w-3xl mx-auto"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(23, 31, 22, 0.75)' }}
          >
            Key steps in our genetic engineering process to unlock duckweed's potential.
          </p>
        </div>

        {/* Experiment Steps */}
        <div className="mb-12 lg:mb-20">
          <div className="space-y-6 lg:space-y-8">
            {/* Step 1 */}
            <div className="flex items-start gap-4 lg:gap-6">
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
                  1
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20 animate-pulse"></div>
              </div>
              <div className="flex-1">
                <div className="bg-gray-100 rounded-xl p-6 lg:p-8">
                  <p 
                    className="text-sm sm:text-base lg:text-lg leading-[168%] text-gray-700 mb-3"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(23, 31, 22, 0.75)' }}
                  >
                    <strong className="text-green-800 font-semibold">Conduct TOPO Cloning Reaction</strong> to insert cinnamoyl CoA reductase into pENTR TOPO Vector, a shuttle vector enabling transfer to a binary plant vector.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-700 font-semibold">COMPLETED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4 lg:gap-6">
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
                  2
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20 animate-pulse"></div>
              </div>
              <div className="flex-1">
                <div className="bg-gray-100 rounded-xl p-6 lg:p-8">
                  <p 
                    className="text-sm sm:text-base lg:text-lg leading-[168%] text-gray-700 mb-3"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(23, 31, 22, 0.75)' }}
                  >
                    <strong className="text-green-800 font-semibold">Conduct LR Clonase Reaction</strong> to transfer cinnamoyl CoA reductase from pENTR Vector to pK7WG2D 1 Binary Vector.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-700 font-semibold">COMPLETED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4 lg:gap-6">
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
                  3
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
              </div>
              <div className="flex-1">
                <div className="bg-gray-100 rounded-xl p-6 lg:p-8">
                  <p 
                    className="text-sm sm:text-base lg:text-lg leading-[168%] text-gray-700 mb-3"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(23, 31, 22, 0.75)' }}
                  >
                    <strong className="text-orange-800 font-semibold">Use Binary Vector</strong> pK7WG2D 1 to grow Agrobacterium EHA105 strain, then use this strain to infect Wolffia.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-orange-700 font-semibold">IN PROGRESS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-20">
          {/* Left Image */}
          <div className="w-full">
            <div 
              className="rounded-xl lg:rounded-2xl xl:rounded-3xl relative overflow-hidden w-full"
              style={{ aspectRatio: '4/3', minHeight: '200px', maxHeight: '400px' }}
            >
              <img 
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/brno-logo2s.webp" 
                alt="Duckweed cultures in laboratory setting" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=Lab+Setup";
                }}
              />
            </div>
          </div>

          {/* Right Image with Text */}
          <div className="w-full flex flex-col">
            <div 
              className="rounded-xl lg:rounded-2xl xl:rounded-3xl relative overflow-hidden w-full mb-6"
              style={{ aspectRatio: '4/3', minHeight: '200px', maxHeight: '320px' }}
            >
              <img 
                src="https://static.igem.wiki/teams/5642/images/homepage/footer/brno-logo2s.webp" 
                alt="Lemna Minor - one of the duckweed species we work with" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=Duckweed+Species";
                }}
              />
            </div>
            <p 
              className="text-sm sm:text-base leading-[168%] text-gray-700 text-justify"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(23, 31, 22, 0.75)' }}
            >
              <strong>Lemna Minor:</strong> A key species for our genetic engineering experiments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperimentSteps;