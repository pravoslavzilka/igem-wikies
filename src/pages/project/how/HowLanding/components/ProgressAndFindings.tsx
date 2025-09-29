import React from 'react';

const ProgressAndFindings: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 lg:mb-16 text-center">
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[140%] text-gray-900"
            style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 600 }}
          >
            Current Progress and Findings
          </h1>
          <p 
            className="mt-4 text-sm sm:text-base lg:text-lg leading-[168%] text-gray-700 text-center max-w-3xl mx-auto"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(23, 31, 22, 0.75)' }}
          >
            Key milestones in our journey to make duckweed a programmable platform for scientists worldwide.
          </p>
        </div>

        {/* Progress Steps */}
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
                    className="text-sm sm:text-base lg:text-lg leading-[168%] text-gray-700"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(23, 31, 22, 0.75)' }}
                  >
                    <strong className="text-green-800 font-semibold">Successfully completed TOPO cloning reaction</strong> with cinnamoyl CoA reductase.
                  </p>
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
                    className="text-sm sm:text-base lg:text-lg leading-[168%] text-gray-700"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(23, 31, 22, 0.75)' }}
                  >
                    <strong className="text-green-800 font-semibold">Transferred genetic material to pK7WG2D binary vector</strong> via LR Clonase reaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4 lg:gap-6">
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
                  3
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20 animate-pulse"></div>
              </div>
              <div className="flex-1">
                <div className="bg-gray-100 rounded-xl p-6 lg:p-8">
                  <p 
                    className="text-sm sm:text-base lg:text-lg leading-[168%] text-gray-700"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(23, 31, 22, 0.75)' }}
                  >
                    <strong className="text-green-800 font-semibold">Prepared Agrobacterium EHA105 strain</strong> for plant transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IN PROGRESS Block */}
        <div className="mb-12 lg:mb-20">
          <div className="text-lrft max-w-4xl mx-auto">
            <p 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[140%] text-gray-900 mb-8"
              style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
            >
              "IN PROGRESS..."
            </p>
            <p 
              className="text-sm sm:text-base lg:text-lg leading-[168%] text-gray-700 mb-6 text-left "
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(23, 31, 22, 0.75)' }}
            >
              That is what was stated on the iGEM Nevada Team Wiki in 2009. Are they still making progress, or have they given up on duckweed and its biotechnological potential?
            </p>
            <p 
              className="text-sm sm:text-base lg:text-lg leading-[168%] text-gray-700 mb-8"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(23, 31, 22, 0.75)' }}
            >
              We faced the same issues, which is why - after some pivoting - we dedicated our iGEM project to unlocking duckweed's potential by enabling fast genetic engineering (TAIFR & PROMOTERS) and easy cultivation (CULTIVATOR & PREDICTOR).
            </p>
            <p 
              className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-[140%] text-gray-900"
              style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 600 }}
            >
              This way, future iGEM teams or any scientist will have the tools to do useful and exciting work with duckweed!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressAndFindings;