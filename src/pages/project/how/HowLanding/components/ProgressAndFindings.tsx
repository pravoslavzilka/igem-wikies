import React from 'react';

const ProgressAndFindings: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Image */}
        <div className="mb-12 lg:mb-20">
          <div 
            className="rounded-xl lg:rounded-2xl xl:rounded-3xl relative overflow-hidden w-full"
            style={{ aspectRatio: '3/1', minHeight: '200px', maxHeight: '480px' }}
          >
            <img 
              src="https://static.igem.wiki/teams/5642/images/homepage/footer/brno-logos2.webp" 
              alt="Goal 6 Experiment Setup" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/800x400/f3f4f6/9ca3af?text=Experiment+Image";
              }}
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="relative bg-gray-100 rounded-xl lg:rounded-2xl p-8 lg:p-12">
          <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
          <div className="relative z-10">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-[140%] text-gray-900 text-center mb-6 lg:mb-8"
              style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 600 }}
            >
              Current Progress and Findings
            </h2>
            <div className="space-y-6">
              {/* Completed Steps */}
              <div>
                <h3 
                  className="text-lg sm:text-xl lg:text-2xl font-semibold leading-[120%] text-gray-900 mb-4"
                  style={{ fontFamily: 'Urbanist, sans-serif' }}
                >
                  Completed Steps
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p 
                      className="text-sm sm:text-base lg:text-lg leading-[168%] text-gray-700"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(23, 31, 22, 0.75)' }}
                    >
                      Successfully completed TOPO cloning reaction with cinnamoyl CoA reductase.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p 
                      className="text-sm sm:text-base lg:text-lg leading-[168%] text-gray-700"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(23, 31, 22, 0.75)' }}
                    >
                      Transferred genetic material to pK7WG2D binary vector via LR Clonase reaction.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p 
                      className="text-sm sm:text-base lg:text-lg leading-[168%] text-gray-700"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(23, 31, 22, 0.75)' }}
                    >
                      Prepared Agrobacterium EHA105 strain for plant transformation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ongoing Work */}
              <div>
                <h3 
                  className="text-lg sm:text-xl lg:text-2xl font-semibold leading-[120%] text-gray-900 mb-4"
                  style={{ fontFamily: 'Urbanist, sans-serif' }}
                >
                  Ongoing Work
                </h3>
                <p 
                  className="text-sm sm:text-base lg:text-lg leading-[168%] text-gray-700 text-justify"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(23, 31, 22, 0.75)' }}
                >
                  “IN PROGRESS...” (this text large)
                </p>
                <p 
                  className="text-sm sm:text-base lg:text-lg leading-[168%] text-gray-700 text-justify"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(23, 31, 22, 0.75)' }}
                >
                  (this is under) That is what was stated on the iGEM Nevada Team Wiki in 2009. Are they still making progress, or have they given up on duckweed and its biotechnological potential?
                </p>
                <p 
                  className="text-sm sm:text-base lg:text-lg leading-[168%] text-gray-700 text-justify"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(23, 31, 22, 0.75)' }}
                >
                  We faced the same issues, which is why - after some pivoting - we dedicated our iGEM project to unlocking duckweed's potential by enabling fast genetic engineering (TAIFR & PROMOTERS) and easy cultivation (CULTIVATOR & PREDICTOR).
                </p>
                <p 
                  className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-[140%] text-gray-900 text-center mb-6 lg:mb-8"
                  style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 600 }}
                >
                  This way, future iGEM teams or any scientist will have the tools to do useful and exciting work with duckweed!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressAndFindings;